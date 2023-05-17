import nock, { Interceptor } from "nock";
import Client from "../client";
import { BinLookup } from "../services";
import ApiException from "../services/exception/apiException";
import HttpClientException from "../httpClient/httpClientException";

beforeEach((): void => {
    nock.cleanAll();
});

const threeDSAvailabilitySuccess = {
    binDetails: {
        issuerCountry: "NL"
    },
    merchantAccount: "MY_MERCHANT_ACCOUNT",
    threeDS1Supported: true,
    threeDS2CardRangeDetails: [],
    threeDS2supported: false
};

type errorType = "HttpClientException" | "ApiException";
type testOptions = { errorType: errorType; errorMessageContains?: string; errorMessageEquals?: string };

const getResponse = async ({apiKey , environment }: { apiKey: string; environment: Environment}, cb: (scope: Interceptor) => testOptions): Promise<void> => {
    const client = new Client({ apiKey, environment });
    const binLookup = new BinLookup(client);

    const scope = nock(`${client.config.endpoint}${Client.BIN_LOOKUP_PAL_SUFFIX}${Client.BIN_LOOKUP_API_VERSION}`)
        .post("/get3dsAvailability");
    const { errorMessageContains, errorMessageEquals, errorType } = cb(scope);
    const ErrorException = errorType === "ApiException" ? ApiException : HttpClientException;

    try {
        await binLookup.get3dsAvailability(threeDSAvailabilitySuccess);
        fail("request should fail");
    } catch (e) {
        if(e instanceof ErrorException){
            if (errorMessageEquals) expect(e.message).toEqual(errorMessageEquals);
            if (errorMessageContains) expect(e.message.toLowerCase()).toContain(errorMessageContains);
        } else {
            fail();
        }
        
    }
};

describe("HTTP Client", function (): void {
    it.each`
        apiKey               | environment    | withError | args                                                                                                 | errorType                | contains       | equals
        ${""}                | ${"TEST"}      | ${true}   | ${["mocked_error_response"]}                                                                         | ${"ApiException"}        | ${"x-api-key"} | ${""}
        ${"MOCKED_API_KEY"}  | ${"TEST"}      | ${true}   | ${["some_error"]}                                                                                    | ${"ApiException"}        | ${""}          | ${"some_error"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, { status: 401, message: "Invalid Request", errorCode: "171", errorType: "validationError"}]} | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. null: Invalid Request"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, {}]}                                                                                         | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. null"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, "fail"]}                                                                                     | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. null"}
    `("Should return $errorType, $contains, $equals", async ({ apiKey, environment, withError, args, errorType, contains, equals }) => {
        await getResponse({ apiKey, environment }, (scope) => {
            if (withError) scope.replyWithError(args[0]);
            else scope.reply(args[0], args[1]);

            return { errorType, errorMessageContains: contains, errorMessageEquals: equals };
        });
    });
});

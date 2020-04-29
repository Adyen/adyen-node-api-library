import nock, {Interceptor} from "nock";
import Client from "../client";
import Checkout from "../services/checkout";
import ApiException from "../services/exception/apiException";
import {createPaymentsCheckoutRequest} from "./checkout.spec";
import HttpClientException from "../httpClient/httpClientException";

beforeEach((): void => {
    nock.cleanAll();
});

type errorType = "HttpClientException" | "ApiException";
type testOptions = { errorType: errorType; errorMessageContains?: string; errorMessageEquals?: string };

const getResponse = async ({apiKey , environment }: { apiKey: string; environment: Environment}, cb: (scope: Interceptor) => testOptions): Promise<void> => {
    const client = new Client({ apiKey, environment });
    const checkout = new Checkout(client);

    const scope = nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
        .post("/payments");
    const { errorMessageContains, errorMessageEquals, errorType } = cb(scope);
    const ErrorException = errorType === "ApiException" ? ApiException : HttpClientException;

    try {
        await checkout.payments(createPaymentsCheckoutRequest());
        fail("request should fail");
    } catch (e) {
        expect(e instanceof ErrorException).toBeTruthy();
        if(errorMessageEquals) expect(e.message).toEqual(errorMessageEquals);
        if(errorMessageContains) expect(e.message.toLowerCase()).toContain(errorMessageContains);
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

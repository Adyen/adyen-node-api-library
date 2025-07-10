import nock, { Interceptor } from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import { BinLookupAPI, CheckoutAPI } from "../services";
import ApiException from "../services/exception/apiException";
import HttpClientException from "../httpClient/httpClientException";
import { binlookup } from "../typings";
import { ApiConstants } from "../constants/apiConstants";
import {paymentMethodsSuccess} from "../__mocks__/checkout/paymentMethodsSuccess";
import Config from "../config";
import LibraryConstants from "../constants/libraryConstants";


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
    const binLookup = new BinLookupAPI(client);

    const scope = nock("https://pal-test.adyen.com/pal/servlet/BinLookup/v54")
        .post("/get3dsAvailability");
    const { errorMessageContains, errorMessageEquals, errorType } = cb(scope);
    const ErrorException = errorType === "ApiException" ? ApiException : HttpClientException;

    try {
        await binLookup.BinLookupApi.get3dsAvailability(threeDSAvailabilitySuccess);
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
        ${""}                | ${"TEST"}      | ${true}   | ${["mocked_error_response"]}                                                                         | ${"ApiException"}        | ${"mocked_error_response"} | ${""}
        ${"MOCKED_API_KEY"}  | ${"TEST"}      | ${true}   | ${["some_error"]}                                                                                    | ${"ApiException"}        | ${""}          | ${"some_error"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, { status: 401, message: "Invalid Request", errorCode: "171", errorType: "validationError"}]} | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. null: Invalid Request"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, {}]}                                                                                         | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. null"}
        ${"API_KEY"}         | ${"TEST"}      | ${false}  | ${[401, "fail"]}                                                                                     | ${"HttpClientException"} | ${""}          | ${"HTTP Exception: 401. Error parsing response: Unexpected token 'i', \"fail\" is not valid JSON"}
    `("Should return $errorType, $contains, $equals", async ({ apiKey, environment, withError, args, errorType, contains, equals }) => {
        await getResponse({ apiKey, environment }, (scope) => {
            if (withError) scope.replyWithError(args[0]);
            else scope.reply(args[0], args[1]);

            return { errorType, errorMessageContains: contains, errorMessageEquals: equals };
        });
    });

    test("should succeed on get 3ds availability", async function (): Promise<void> {

        const threeDSAvailabilitySuccessResponse = {
            binDetails: {
                issuerCountry: "NL"
            },
            threeDS1Supported: true,
            threeDS2CardRangeDetails: [],
            threeDS2supported: false
        };

        const client = createClient();
        const binLookupService = new BinLookupAPI(client);
        const scope = nock("https://pal-test.adyen.com/pal/servlet/BinLookup/v54", {
            reqheaders: {
                "Content-Type" : ApiConstants.APPLICATION_JSON_TYPE,
                "foo" : "bar"
             },
        })
            .get("/")
            .reply(200);

        const threeDSAvailabilityRequest: binlookup.ThreeDSAvailabilityRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            brands: ["randomBrand"],
            cardNumber: "4111111111111111"
        };

        scope.post("/get3dsAvailability")
            .reply(200, threeDSAvailabilitySuccessResponse);

        const requestOptions = { headers: { foo : "bar" }};
        const response = await binLookupService.BinLookupApi.get3dsAvailability(threeDSAvailabilityRequest, requestOptions);
        expect(response).toEqual< binlookup.ThreeDSAvailabilityResponse>(threeDSAvailabilitySuccessResponse);
    });

     test("should add default applicationInfo to the headers", async (): Promise<void> => {
        const client = createClient();
        const checkout = new CheckoutAPI(client);

        const expectedUserAgent = `${LibraryConstants.LIB_NAME}/${LibraryConstants.LIB_VERSION}`;
        const expectedLibraryName = LibraryConstants.LIB_NAME;
        const expectedLibraryVersion = LibraryConstants.LIB_VERSION;
        
        const scope = nock("https://checkout-test.adyen.com/v71", {
            reqheaders: {
                "adyen-library-name": (headerValue) => {
                    expect(headerValue).toBeTruthy(); 
                    expect(headerValue).toEqual(expectedLibraryName);
                    return true;
                },
                "adyen-library-version": (headerValue) => {
                    expect(headerValue).toBeTruthy(); 
                    expect(headerValue).toEqual(expectedLibraryVersion);
                    return true;
                },
                "user-agent": (headerValue) => {
                    expect(headerValue).toBeTruthy(); 
                    expect(headerValue).toEqual(expectedUserAgent);
                    return true;
                }
            }
        });

        scope.post("/paymentMethods").reply(200, paymentMethodsSuccess);
        const response = await checkout.PaymentsApi.paymentMethods({"merchantAccount": "testMerchantAccount"});

        expect(response.paymentMethods).toBeTruthy();
     });

     test("should add custom applicationInfo to the headers", async (): Promise<void> => {
        const client = createClient();
        client.config.applicationName = "testApp";
        const checkout = new CheckoutAPI(client);

        const expectedUserAgent = `testApp ${LibraryConstants.LIB_NAME}/${LibraryConstants.LIB_VERSION}`; // include applicationName too
        const expectedLibraryName = LibraryConstants.LIB_NAME;
        const expectedLibraryVersion = LibraryConstants.LIB_VERSION;
        
        const scope = nock("https://checkout-test.adyen.com/v71", {
            reqheaders: {
                "adyen-library-name": (headerValue) => {
                    expect(headerValue).toBeTruthy(); 
                    expect(headerValue).toEqual(expectedLibraryName);
                    return true;
                },
                "adyen-library-version": (headerValue) => {
                    expect(headerValue).toBeTruthy(); 
                    expect(headerValue).toEqual(expectedLibraryVersion);
                    return true;
                },
                "user-agent": (headerValue) => {
                    expect(headerValue).toBeTruthy(); 
                    expect(headerValue).toEqual(expectedUserAgent);
                    return true;
                }
            }
        });

        scope.post("/paymentMethods").reply(200, paymentMethodsSuccess);
        const response = await checkout.PaymentsApi.paymentMethods({"merchantAccount": "testMerchantAccount"});

        expect(response.paymentMethods).toBeTruthy();
     });

});

describe("Config class", () => {
    const DEFAULT_TIMEOUT = 30000; // Define the default timeout value

    test("should set default timeout when no timeout is provided", () => {
        // Instantiate the Config class without passing a timeout
        const config = new Config();

        // Expect that the timeout is set to the default value (30000)
        expect(config.connectionTimeoutMillis).toBe(DEFAULT_TIMEOUT);
    });

    test("should set custom timeout when provided", () => {
        // Instantiate the Config class with a custom timeout
        const customTimeout = 50000;
        const config = new Config({ connectionTimeoutMillis: customTimeout });

        // Expect that the timeout is set to the custom value (50000)
        expect(config.connectionTimeoutMillis).toBe(customTimeout);
    });
});


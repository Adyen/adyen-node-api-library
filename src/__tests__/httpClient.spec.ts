import nock, { Interceptor } from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import { BinLookupAPI, CheckoutAPI } from "../services";
import ApiException from "../services/exception/apiException";
import HttpClientException from "../httpClient/httpClientException";
import { binlookup } from "../typings";
import { ApiConstants } from "../constants/apiConstants";
import { paymentMethodsSuccess } from "../__mocks__/checkout/paymentMethodsSuccess";
import Config, { EnvironmentEnum } from "../config";
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

const getResponse = async ({ apiKey, environment }: { apiKey: string; environment: EnvironmentEnum }, cb: (scope: Interceptor) => testOptions): Promise<void> => {
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
        if (e instanceof ErrorException) {
            if (errorMessageEquals) expect(e.message).toEqual(errorMessageEquals);
            if (errorMessageContains) expect(e.message.toLowerCase()).toContain(errorMessageContains);
        } else {
            fail();
        }

    }
};

describe("HTTP Client", function (): void {

    test("Should return ApiException with message containing 'mocked_error_response'", async () => {
        await getResponse(
            { apiKey: "", environment: EnvironmentEnum.TEST },
            (scope) => {
                scope.replyWithError("mocked_error_response");
                return {
                    errorType: "ApiException",
                    errorMessageContains: "",
                    errorMessageEquals: "mocked_error_response"
                };
            }
        );
    });

    test("Should return ApiException with message equal to 'some_error'", async () => {
        await getResponse(
            { apiKey: "MOCKED_API_KEY", environment: EnvironmentEnum.TEST },
            (scope) => {
                scope.replyWithError("some_error");
                return {
                    errorType: "ApiException",
                    errorMessageContains: "",
                    errorMessageEquals: "some_error"
                };
            }
        );
    });

    test("Should return HttpClientException with message equal to 'HTTP Exception: 401. null: Invalid Request'", async () => {
        await getResponse(
            { apiKey: "API_KEY", environment: EnvironmentEnum.TEST },
            (scope) => {
                scope.reply(401, { status: 401, message: "Invalid Request", errorCode: "171", errorType: "validationError" });
                return {
                    errorType: "HttpClientException",
                    errorMessageContains: "",
                    errorMessageEquals: "HTTP Exception: 401. null: Invalid Request"
                };
            }
        );
    });

    test("Should return HttpClientException with message equal to 'HTTP Exception: 401. null'", async () => {
        await getResponse(
            { apiKey: "API_KEY", environment: EnvironmentEnum.TEST },
            (scope) => {
                scope.reply(401, {});
                return {
                    errorType: "HttpClientException",
                    errorMessageContains: "",
                    errorMessageEquals: "HTTP Exception: 401. null"
                };
            }
        );
    });

    test("Should return HttpClientException with message starting with 'HTTP Exception: 401'", async () => {
        await getResponse(
            { apiKey: "API_KEY", environment: EnvironmentEnum.TEST },
            (scope) => {
                scope.reply(401, "fail");
                return {
                    errorType: "HttpClientException",
                    errorMessageContains: "http exception: 401",  // must be case insensitive assertion
                    errorMessageEquals: ""
                };
            }
        );
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
                "Content-Type": ApiConstants.APPLICATION_JSON_TYPE,
                "foo": "bar"
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

        const requestOptions = { headers: { foo: "bar" } };
        const response = await binLookupService.BinLookupApi.get3dsAvailability(threeDSAvailabilityRequest, requestOptions);
        expect(response).toEqual<binlookup.ThreeDSAvailabilityResponse>(threeDSAvailabilitySuccessResponse);
    });

    test("should make a request with custom headers", async function (): Promise<void> {
        const client = createClient();
        const checkout = new CheckoutAPI(client);

        const customHeaderKey = "X-Custom-Header";
        const customHeaderValue = "my-custom-value";

        const scope = nock("https://checkout-test.adyen.com/v71", {
            reqheaders: {
                [customHeaderKey]: (headerValue) => {
                    expect(headerValue).toBeTruthy();
                    expect(headerValue).toEqual(customHeaderValue);
                    return true;
                },
            },
        });

        scope.post("/paymentMethods").reply(200, paymentMethodsSuccess);
        const requestOptions = { headers: { [customHeaderKey]: customHeaderValue } };

        const response = await checkout.PaymentsApi.paymentMethods({ "merchantAccount": "testMerchantAccount" }, requestOptions);

        expect(response.paymentMethods).toBeTruthy();
        expect(scope.isDone()).toBe(true);
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
        const response = await checkout.PaymentsApi.paymentMethods({ "merchantAccount": "testMerchantAccount" });

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
        const response = await checkout.PaymentsApi.paymentMethods({ "merchantAccount": "testMerchantAccount" });

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


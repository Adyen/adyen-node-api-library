import nock, {Interceptor} from "nock";
import Client from "../client";
import Checkout from "../services/checkout";
import ApiException from "../services/exception/apiException";
import {createPaymentsCheckoutRequest} from "./checkout.spec";
import HttpClientException from "../httpClient/httpClientException";
import {Environment} from "../typings/enums/environment";

beforeEach((): void => {
    nock.cleanAll();
});

type errorType = "HttpClientException" | "ApiException";
type testOptions = { errorType: errorType; errorMessageContains?: string; errorMessageEquals?: string };

const getResponse = async ({apiKey , environment }: { apiKey: string; environment: Environment}, cb: (scope: Interceptor) => testOptions) => {
    const client = new Client({ apiKey, environment });
    const checkout = new Checkout(client);

    const scope = nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
        .post("/payments")
    const { errorMessageContains, errorMessageEquals, errorType } = cb(scope);
    const ErrorException = errorType === "ApiException" ? ApiException : HttpClientException;

    try {
        await checkout.payments(createPaymentsCheckoutRequest());
        fail("request should fail");
    } catch (e) {
        expect(e instanceof ErrorException).toBeTruthy();
        if (errorMessageEquals) {
            expect(e.message).toEqual(errorMessageEquals);
        }
        if (errorMessageContains) {
            expect(e.message.toLowerCase()).toContain(errorMessageContains);
        }
    }

}

describe("HTTP Client", function (): void {
    it("should return ApiException when no API Key is provided", async (): Promise<void> => {
        await getResponse({ apiKey: "", environment: "TEST" }, (scope) => {
            scope.replyWithError("mocked_error_response");
            return { errorType: "ApiException", errorMessageContains: "x-api-key" };
        });
    });

    it("should return ApiException on request error", async (): Promise<void> => {
        await getResponse({ apiKey: "", environment: "TEST" }, (scope) => {
            scope.replyWithError("");
            return { errorType: "ApiException", errorMessageContains: "x-api-key" };
        });
    });

    it("should return HttpClientException on invalid request", async (): Promise<void> => {
        await getResponse({ apiKey: "API_KEY", environment: "TEST" }, (scope) => {
            scope.reply(401, { status: 401, message: "Invalid Request", errorCode: "171", errorType: "validationError"});
            return { errorType: "HttpClientException", errorMessageEquals: "HTTP Exception: 401. null: Invalid Request" };
        });
    });

    it("should return HttpClientException on invalid that is not an ApiError type", async (): Promise<void> => {
        await getResponse({ apiKey: "API_KEY", environment: "TEST" }, (scope) => {
            scope.reply(401, {});
            return { errorType: "HttpClientException", errorMessageEquals: "HTTP Exception: 401. null" };
        });
    });

    it("should return HttpClientException on invalid string error", async (): Promise<void> => {
        await getResponse({ apiKey: "API_KEY", environment: "TEST" }, (scope) => {
            scope.reply(401, "fail");
            return { errorType: "HttpClientException", errorMessageEquals: "HTTP Exception: 401. null" };
        });
    });
});
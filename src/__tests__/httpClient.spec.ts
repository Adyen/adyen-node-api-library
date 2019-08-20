import nock from "nock";
import Client from "../client";
import Checkout from "../services/checkout";
import ApiException from "../services/exception/apiException";
import {createPaymentsCheckoutRequest} from "./checkout.spec";
import HttpClientException from "../httpClient/httpClientException";

beforeEach((): void => {
    nock.cleanAll();
});

describe("HTTP Client", function (): void {
    it("should return ApiException when no API Key is provided", async (): Promise<void> => {
        const client = new Client({apiKey: "", environment: "TEST"});
        const checkout = new Checkout(client);

        nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
            .post("/payments")
            .replyWithError("mocked_error_response");

        try {
            await checkout.payments(createPaymentsCheckoutRequest());
            fail("request should fail");
        } catch (e) {
            expect(e instanceof ApiException).toBeTruthy();
            expect(e.message.toLowerCase()).toContain("x-api-key");
        }
    });

    it("should return ApiException on request error", async (): Promise<void> => {
        const client = new Client({apiKey: "MOCKED_API_KEY", environment: "TEST"});
        const checkout = new Checkout(client);

        nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
            .post("/payments")
            .replyWithError("some_error");

        try {
            await checkout.payments(createPaymentsCheckoutRequest());
            fail("request should fail");
        } catch (e) {
            expect(e instanceof ApiException).toBeTruthy();
            expect(e.message.toLowerCase()).toEqual("some_error");
        }
    });

    it("should return HttpClientException on invalid request", async (): Promise<void> => {
        const client = new Client({apiKey: "API_KEY", environment: "TEST"});
        const checkout = new Checkout(client);
        const error = { status: 401, message: "Invalid Request", errorCode: "171", errorType: "validationError"};

        nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
            .post("/payments")
            .reply(401, error);

        try {
            await checkout.payments(createPaymentsCheckoutRequest());
            fail("request should fail");
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
            expect(e.message).toEqual("HTTP Exception: 401. null: Invalid Request");
        }
    });

    it("should return HttpClientException on invalid that is not an ApiError type", async (): Promise<void> => {
        const client = new Client({apiKey: "API_KEY", environment: "TEST"});
        const checkout = new Checkout(client);

        nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
            .post("/payments")
            .reply(401, {});

        try {
            await checkout.payments(createPaymentsCheckoutRequest());
            fail("request should fail");
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
            expect(e.message).toEqual("HTTP Exception: 401. null");
        }
    });

    it("should return ApiException on invalid string error", async (): Promise<void> => {
        const client = new Client({apiKey: "API_KEY", environment: "TEST"});
        const checkout = new Checkout(client);

        nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
            .post("/payments")
            .reply(401, "fail");

        try {
            await checkout.payments(createPaymentsCheckoutRequest());
            fail("request should fail");
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
            expect(e.message).toEqual("HTTP Exception: 401. null");
        }
    });
});
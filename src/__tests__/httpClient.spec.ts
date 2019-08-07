import nock from "nock";
import Client from "../client";
import Checkout from "../services/checkout";
import ApiException from "../services/exception/apiException";

beforeEach((): void => {
    nock.cleanAll();
});

describe("HTTP Client", function (): void {
    it("should return ApiException when no API Key is provided", async (): Promise<void> => {
        const client = new Client({apiKey: "", environment: "TEST"});
        const checkout = new Checkout(client);

        nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
            .post("/payments")
            .replyWithError();

        try {
            await checkout.payments({});
        } catch (e) {
            expect(e instanceof ApiException);
            expect(e.message).toContain("x-api-key");
        }
    });

    it("should return ApiException on request error", async (): Promise<void> => {
        const client = new Client({apiKey: "API_KEY", environment: "TEST"});
        const checkout = new Checkout(client);

        nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`)
            .post("/payments")
            .replyWithError({message: "error_message", statusCode: 500});

        try {
            await checkout.payments({});
        } catch (e) {
            expect(e instanceof ApiException);
            expect(e.message).toEqual("error_message");
        }
    });
});
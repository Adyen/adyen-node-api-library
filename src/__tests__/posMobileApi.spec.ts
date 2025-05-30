import nock from "nock";
import { createClient } from "../__mocks__/base";
import PosMobileApi from "../services/posMobile";
import Client from "../client";
import { CreateSessionRequest, CreateSessionResponse } from "../typings/posMobile/models";

describe("PosMobileApi", (): void => {
    let client: Client;
    let posMobileApi: PosMobileApi;
    let scope: nock.Scope;

    beforeEach((): void => {
        if (!nock.isActive()) {
            nock.activate();
        }
        client = createClient();
        posMobileApi = new PosMobileApi(client);
        scope = nock("https://checkout-test.adyen.com/checkout/possdk/v68");
    });

    afterEach(() => {
        nock.cleanAll();
    });

    test("should create a communication session", async (): Promise<void> => {
        const mockResponse: CreateSessionResponse = {
            id: "mockedSessionId",
            merchantAccount: "merchantAccount",
        };

        scope.post("/sessions").reply(200, mockResponse);

        const request: CreateSessionRequest = {
            merchantAccount: "testMerchantAccount",
            setupToken: "token123",
        };

        const result = await posMobileApi.PosMobileApi.createCommunicationSession(request);

        expect(result).toBeTruthy();
        expect(result.id).toBe("mockedSessionId");
    });
});
import nock from "nock";
import { createClient } from "../__mocks__/base";
import PaymentsAppApi from "../services/paymentsApp";
import Client from "../client";
import { PaymentsAppResponse } from "../typings/paymentsApp/models";

let client: Client;
let paymentsAppApi: PaymentsAppApi;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    paymentsAppApi = new PaymentsAppApi(client);
    scope = nock("https://management-test.adyen.com/v1");
});

afterEach(() => {
    nock.cleanAll();
});

describe("PaymentsAppApi", (): void => {
    test("should generate boarding token for merchant", async (): Promise<void> => {
        const mockResponse = {
            boardingToken: "mockedBoardingToken",
            installationId: "mockedInstallationId"
        };

        scope.post("/merchants/testMerchant/generatePaymentsAppBoardingToken")
            .reply(200, mockResponse);

        const request = {
            boardingRequestToken: "mockedRequestToken"
        };

        const result = await paymentsAppApi.PaymentsAppApi.generatePaymentsAppBoardingTokenForMerchant("testMerchant", request);

        expect(result).toBeTruthy();
        expect(result.boardingToken).toBe("mockedBoardingToken");
        expect(result.installationId).toBe("mockedInstallationId");
    });

    test("should generate boarding token for store", async (): Promise<void> => {
        const mockResponse = {
            boardingToken: "mockedBoardingTokenStore",
            installationId: "mockedInstallationIdStore"
        };

        scope.post("/merchants/testMerchant/stores/testStore/generatePaymentsAppBoardingToken")
            .reply(200, mockResponse);

        const request = {
            boardingRequestToken: "mockedRequestTokenStore"
        };

        const result = await paymentsAppApi.PaymentsAppApi.generatePaymentsAppBoardingTokenForStore("testMerchant", "testStore", request);

        expect(result).toBeTruthy();
        expect(result.boardingToken).toBe("mockedBoardingTokenStore");
        expect(result.installationId).toBe("mockedInstallationIdStore");
    });

    test("should list payments apps for merchant", async (): Promise<void> => {
        const mockResponse: PaymentsAppResponse = {
            paymentsApps: [
                { installationId: "app1", merchantAccountCode: "merchantAccountCode", status: "BOARDED" },
                { installationId: "app2", merchantAccountCode: "merchantAccountCode", status: "BOARDING" }
            ]
        };

        scope.get("/merchants/testMerchant/paymentsApps")
            .reply(200, mockResponse);

        const result = await paymentsAppApi.PaymentsAppApi.listPaymentsAppForMerchant("testMerchant");

        expect(result).toBeTruthy();
        expect(result.paymentsApps.length).toBe(2);
        expect(result.paymentsApps[0].installationId).toBe("app1");
    });

    test("should list payments apps for store", async (): Promise<void> => {
        const mockResponse: PaymentsAppResponse = {
            paymentsApps: [
                { installationId: "app3", merchantAccountCode: "merchantAccountCode", status: "REVOKED" }
            ]
        };

        scope.get("/merchants/testMerchant/stores/testStore/paymentsApps")
            .reply(200, mockResponse);

        const result = await paymentsAppApi.PaymentsAppApi.listPaymentsAppForStore("testMerchant", "testStore");

        expect(result).toBeTruthy();
        expect(result.paymentsApps.length).toBe(1);
        expect(result.paymentsApps[0].installationId).toBe("app3");
    });

    test("should revoke payments app", async (): Promise<void> => {
        scope.post("/merchants/testMerchant/paymentsApps/installation123/revoke")
            .reply(200);

        await expect(
            paymentsAppApi.PaymentsAppApi.revokePaymentsApp("testMerchant", "installation123")
        ).resolves.toBeUndefined();
    });
});
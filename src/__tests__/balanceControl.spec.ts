import nock from "nock";
import  { createClient } from "../__mocks__/base";
import { BalanceControlAPI } from "../services";
import Client from "../client";
import { BalanceTransferRequest } from "../typings/balanceControl/balanceTransferRequest";
import { BalanceTransferResponse } from "../typings/balanceControl/balanceTransferResponse";
import HttpClientException from "../httpClient/httpClientException";

let client: Client,
    balanceService: BalanceControlAPI,
    scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    balanceService = new BalanceControlAPI(client);
    scope = nock("https://pal-test.adyen.com/pal/servlet/BalanceControl/v1");
});

afterEach(() => {
    nock.cleanAll();
});

describe("Balance Control", (): void => {
    test("Should Post Balance Transfer", async (): Promise<void> => {
        const expected = {
            "amount": {
                "value": 50000,
                "currency": "EUR"
            },
            "createdAt": "2022-01-24",
            "description": "Your description for the transfer",
            "fromMerchant": "MerchantAccount_NL",
            "toMerchant": "MerchantAccount_DE",
            "type": "debit",
            "reference": "Unique reference for the transfer",
            "pspReference": "8816080397613514",
            "status": "transferred"
        };
        const request: BalanceTransferRequest = new BalanceTransferRequest;

        scope.post("/balanceTransfer")
            .reply(200, expected);

        const response: BalanceTransferResponse = await balanceService.balanceTransfer(request);
        expect(response.status).toEqual(BalanceTransferResponse.StatusEnum.Transferred);
    });

    test("Should return correct Validation error", async (): Promise<void> => {
        const expected = {
            "status": 422,
            "errorCode": "30_004",
            "message": "Merchant account code is invalid or missing",
            "errorType": "validation"
        };
        const request: BalanceTransferRequest = new BalanceTransferRequest;

        try {
            scope.post("/balanceTransfer")
                .reply(422, expected);

            await balanceService.balanceTransfer(request);
            fail("No exception was thrown");
        } catch (error) {
            expect(error instanceof HttpClientException).toBeTruthy();
            if (error instanceof HttpClientException && error.responseBody && error.stack) {
                expect(JSON.parse(error.responseBody).errorType).toBe("validation");
            } else {
                fail("Error did not contain the expected data");
            }
        }
    });
})

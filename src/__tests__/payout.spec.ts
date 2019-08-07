import nock from "nock";
import { createMockClientFromResponse } from "../__mocks__/base";
import Payout from "../services/payout";
import {
    ModifyRequest,
    StoreDetailAndSubmitRequest,
    StoreDetailRequest, SubmitRequest, PayoutRequest
} from "../typings/payout";
import { FRAUD_MANUAL_REVIEW, FRAUD_RESULT_TYPE } from "../typings/constants/apiConstants";
import Client from "../client";

const storeDetailAndSubmitThirdParty = JSON.stringify({
    additionalData: {
        fraudResultType: "GREEN",
        fraudManualReview: "false",

    },
    pspReference: "8515131751004933",
    resultCode: "[payout-submit-received]"
});

const storeDetail = JSON.stringify({
    pspReference: "8515136787207087",
    recurringDetailReference: "8415088571022720",
    resultCode: "Success"
});


const amountAndReference = {
    amount: {
        value: 1000,
        currency: "USD"
    },
    reference: "randomReference",
};

const defaultData = {
    dateOfBirth: new Date(),
    nationality: "NL",
    shopperEmail: "johndoe@email.com",
    shopperReference: "shopperReference",
};

const mockStoreDetailRequest = (merchantAccount: string): StoreDetailRequest => ({
    ...defaultData,
    entityType: "NaturalPerson",
    recurring: {
        contract: "ONECLICK"
    },
    merchantAccount,
});

const mockSubmitRequest = (merchantAccount: string): SubmitRequest => ({
    selectedRecurringDetailReference: "LATEST",
    recurring: {
        contract: "ONECLICK"
    },
    ...defaultData,
    ...amountAndReference,
    merchantAccount,
});

const mockStoreDetailAndSubmitRequest = (merchantAccount: string): StoreDetailAndSubmitRequest => ({
    ...amountAndReference,
    ...(mockStoreDetailRequest(merchantAccount)),
});

const mockPayoutRequest = (merchantAccount: string): PayoutRequest => ({
    ...amountAndReference,
    ...defaultData,
    card: {
        expiryMonth: "10",
        expiryYear: "2020",
        holderName: "John Smith",
        number: "4111111111111111",
    },
    merchantAccount,
});

let client: Client;
let payout: Payout;
let scope: nock.Scope;

beforeEach((): void => {
    client = createMockClientFromResponse();
    scope = nock(`${client.config.endpoint}/pal/servlet/Payout/${Client.API_VERSION}`);
    payout = new Payout(client);
});

describe("PayoutTest", function (): void {
    it("should succeed on store detail and submit third party", async function (): Promise<void> {
        const request: StoreDetailAndSubmitRequest = mockStoreDetailAndSubmitRequest(`${client.config.merchantAccount}`);
        scope.post("/storeDetail").reply(200, storeDetailAndSubmitThirdParty);

        const result = await payout.storeDetail(request);
        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toEqual("8515131751004933");
        expect(result.additionalData[FRAUD_RESULT_TYPE]).toEqual("GREEN");
        expect(result.additionalData[FRAUD_MANUAL_REVIEW]).toEqual("false");
    });

    it("should succeed on store detail", async function (): Promise<void> {
        scope.post("/storeDetail").reply(200, storeDetail);
        const request: StoreDetailRequest = mockStoreDetailRequest("MOCKED_MERCHANT_ACC");
        const result = await payout.storeDetail(request);

        expect("Success").toEqual(result.resultCode);
        expect("8515136787207087").toEqual(result.pspReference);
        expect("8415088571022720").toEqual(result.recurringDetailReference);
    });

    it("should succeed on confirm third party", async function (): Promise<void> {
        scope.post("/confirmThirdParty")
            .reply(200, {
                pspReference: "8815131762537886",
                response: "[payout-confirm-received]"
            });

        const request: ModifyRequest = {
            merchantAccount: "MOCKED_MERCHANT_ACCOUNT",
            originalReference: "reference"
        };
        const result = await payout.confirmThirdParty(request);

        expect(result.response).toEqual("[payout-confirm-received]");
        expect(result.pspReference).toEqual("8815131762537886");
    });

    it("should succeed on submit third party", async function (): Promise<void> {
        scope.post("/submitThirdParty").reply(200, storeDetailAndSubmitThirdParty);

        const request: SubmitRequest = mockSubmitRequest("MOCKED_MERCHANT_ACC");
        const result = await payout.submitThirdparty(request);

        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toEqual("8515131751004933");
        expect(result.additionalData[FRAUD_RESULT_TYPE]).toEqual("GREEN");
        expect(result.additionalData[FRAUD_MANUAL_REVIEW]).toEqual("false");
    });

    it("should succeed on decline third party", async function (): Promise<void> {
        scope.post("/storeDetailAndSubmitThirdParty").reply(200, {
            pspReference: "8815131762537886",
            response: "[payout-confirm-received]"
        });

        const request: ModifyRequest = {
            merchantAccount: "MOCKED_MERCHANT_ACC",
            originalReference: "reference"
        };
        const result = await payout.declineThirdParty(request);

        expect(result.response).toEqual("[payout-confirm-received]");
        expect(result.pspReference).toEqual("8815131762537886");
    });

    it("should succeed on payout", async function (): Promise<void> {
        scope.post("/payout").reply(200, {
            pspReference: "8815131762537886",
            resultCode: "Received",
        });

        const request = mockPayoutRequest("MOCKED_MERCHANT_ACC");
        const result = await payout.payout(request);

        expect(result.resultCode).toEqual("Received");
        expect(result.pspReference).toEqual("8815131762537886");
    });
});
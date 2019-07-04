import { createMockClientFromResponse } from "../__mocks__/base";
import Payout from "../service/payout";
import {
    ModifyRequest,
    StoreDetailAndSubmitRequest,
    StoreDetailRequest, SubmitRequest
} from "../typings/payout";
import { FRAUD_MANUAL_REVIEW, FRAUD_RESULT_TYPE } from "../typings/constants/apiConstants";

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


describe("PayoutTest", function (): void {
    it("should succeed on store detail and submit third party", async function (): Promise<void> {
        const client = createMockClientFromResponse(storeDetailAndSubmitThirdParty);
        const payout = new Payout(client);

        const request: StoreDetailAndSubmitRequest = mockStoreDetailAndSubmitRequest(client.config.merchantAccount);

        const result = await payout.storeDetail(request);
        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toEqual("8515131751004933");
        expect(result.additionalData[FRAUD_RESULT_TYPE]).toEqual("GREEN");
        expect(result.additionalData[FRAUD_MANUAL_REVIEW]).toEqual("false");
    });

    it("should succeed on store detail", async function (): Promise<void> {
        const client = createMockClientFromResponse(storeDetail);
        const payout = new Payout(client);

        const request: StoreDetailRequest = mockStoreDetailRequest(client.config.merchantAccount);
        const result = await payout.storeDetail(request);

        expect("Success").toEqual(result.resultCode);
        expect("8515136787207087").toEqual(result.pspReference);
        expect("8415088571022720").toEqual(result.recurringDetailReference);
    });

    it("should succeed on confirm third party", async function (): Promise<void> {
        const client = createMockClientFromResponse(JSON.stringify({
            pspReference: "8815131762537886",
            response: "[payout-confirm-received]"
        }));
        const payout = new Payout(client);

        const request: ModifyRequest = {
            merchantAccount: client.config.merchantAccount,
            originalReference: "reference"
        };
        const result = await payout.confirmThirdParty(request);

        expect(result.response).toEqual("[payout-confirm-received]");
        expect(result.pspReference).toEqual("8815131762537886");
    });

    it("should succeed on submit third party", async function (): Promise<void> {
        const client = createMockClientFromResponse(storeDetailAndSubmitThirdParty);
        const payout = new Payout(client);

        const request: SubmitRequest = mockSubmitRequest(client.config.merchantAccount);
        const result = await payout.submitThirdparty(request);

        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toEqual("8515131751004933");
        expect(result.additionalData[FRAUD_RESULT_TYPE]).toEqual("GREEN");
        expect(result.additionalData[FRAUD_MANUAL_REVIEW]).toEqual("false");
    });

    it("should succeed on decline third party", async function (): Promise<void> {
        const client = createMockClientFromResponse(JSON.stringify({
            pspReference: "8815131762537886",
            response: "[payout-confirm-received]"
        }));
        const payout = new Payout(client);

        const request: ModifyRequest = {
            merchantAccount: client.config.merchantAccount,
            originalReference: "reference"
        };
        const result = await payout.declineThirdParty(request);

        expect(result.response).toEqual("[payout-confirm-received]");
        expect(result.pspReference).toEqual("8815131762537886");
    });
});
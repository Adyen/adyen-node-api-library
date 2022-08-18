import nock from "nock";
import { createClient } from "../__mocks__/base";
import Payout from "../services/payout";
import Client from "../client";
import {
    ModifyRequest, 
    PayoutRequest, 
    Recurring,
    StoreDetailAndSubmitRequest, 
    StoreDetailRequest, 
    SubmitRequest
} from "../typings/payouts/models";
import { ApiConstants } from "../constants/apiConstants";

const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
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
        value: 100,
        currency: "EUR"
    },
    reference: "randomReference",
};

const defaultData = {
    dateOfBirth: new Date(),
    nationality: "NL",
    shopperEmail: "johndoe@email.com",
    shopperReference: "shopperReference",
};

const mockStoreDetailRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): StoreDetailRequest => ({
    ...defaultData,
    card: {
        cvc: "737",
        expiryMonth: "03",
        expiryYear: "2020",
        number: "4111111111111111",
        holderName: "John Smith"
    },
    entityType: StoreDetailRequest.EntityTypeEnum.Company,
    recurring: {
        contract: Recurring.ContractEnum.Payout,
    },
    merchantAccount,
});

const mockSubmitRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): SubmitRequest => ({
    selectedRecurringDetailReference: "LATEST",
    recurring: {
        contract: Recurring.ContractEnum.Payout
    },
    ...defaultData,
    ...amountAndReference,
    merchantAccount,
});

const mockStoreDetailAndSubmitRequest = (merchantAccount?: string): StoreDetailAndSubmitRequest => ({
    ...amountAndReference,
    ...(mockStoreDetailRequest(merchantAccount)),
}); 

const mockPayoutRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): PayoutRequest => ({
    ...amountAndReference,
    ...defaultData,
    card: {
        expiryMonth: "03",
        expiryYear: "2030",
        holderName: "John Smith",
        number: "4111111111111111",
    },
    merchantAccount,
});

let client: Client;
let clientStore: Client;
let clientReview: Client;
let payout: Payout;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    clientStore = createClient(process.env.ADYEN_STOREPAYOUT_APIKEY);
    clientReview = createClient(process.env.ADYEN_REVIEWPAYOUT_APIKEY);
    scope = nock(`${client.config.endpoint}/pal/servlet/Payout/${Client.API_VERSION}`);
    payout = new Payout(client);
});

afterEach((): void => {
    nock.cleanAll();
});

describe("PayoutTest", function (): void {
    test.each([isCI, true])("should succeed on store detail and submit third party, isMock: %p", async function (isMock): Promise<void> {
        !isMock && nock.restore();
        payout = new Payout(clientStore);
        const request: StoreDetailAndSubmitRequest = mockStoreDetailAndSubmitRequest();
        scope.post("/storeDetailAndSubmitThirdParty").reply(200, storeDetailAndSubmitThirdParty);

        const result = await payout.storeDetailAndSubmitThirdParty(request);
        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toBeTruthy();
    });

    test.each([false, true])("should succeed on store detail, isMock: %p", async function (isMock): Promise<void> {
        !isMock && nock.restore();
        payout = new Payout(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const request: StoreDetailRequest = mockStoreDetailRequest();
        const result = await payout.storeDetail(request);

        expect("Success").toEqual(result.resultCode);
        expect(result.pspReference).toBeTruthy();
        expect(result.recurringDetailReference).toBeTruthy();
    });

    test.each([isCI, true])("should succeed on confirm third party, isMock: %p", async function (isMock): Promise<void> {
        !isMock && nock.restore();
        payout = new Payout(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const storeRequest: StoreDetailRequest = mockStoreDetailRequest();
        const storeResult = await payout.storeDetail(storeRequest);

        payout = new Payout(clientReview);
        scope.post("/confirmThirdParty")
            .reply(200, {
                pspReference: "8815131762537886",
                response: "[payout-confirm-received]"
            });

        const request: ModifyRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            originalReference: storeResult.pspReference
        };
        const result = await payout.confirmThirdParty(request);

        expect(result.response).toEqual("[payout-confirm-received]");
        expect(result.pspReference).toBeTruthy();
    });

    test.each([isCI, true])("should succeed on submit third party, isMock: %p", async function (isMock): Promise<void> {
        !isMock && nock.restore();
        payout = new Payout(clientStore);
        scope.post("/submitThirdParty").reply(200, storeDetailAndSubmitThirdParty);

        const request: SubmitRequest = mockSubmitRequest();
        const result = await payout.submitThirdparty(request);

        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toBeTruthy();

        if (result.additionalData) {
            expect(result.additionalData[ApiConstants.FRAUD_RESULT_TYPE]).toEqual("GREEN");
            expect(result.additionalData[ApiConstants.FRAUD_MANUAL_REVIEW]).toEqual("false");
        }
    });

    test.each([false, true])("should succeed on decline third party, isMock: %p", async function (isMock): Promise<void> {
        !isMock && nock.restore();
        payout = new Payout(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const storeRequest: StoreDetailRequest = mockStoreDetailRequest();
        const storeResult = await payout.storeDetail(storeRequest);

        payout = new Payout(clientReview);
        const request: ModifyRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            originalReference: storeResult.pspReference
        };
        scope.post("/declineThirdParty")
            .reply(200, {
                pspReference: "8815131762537886",
                response: "[payout-decline-received]"
            });
        const result = await payout.declineThirdParty(request);

        expect(result.response).toEqual("[payout-decline-received]");
        expect(result.pspReference).toBeTruthy();
    });

    test.each([isCI, true])("should succeed on payout, isMock: %p", async function (isMock): Promise<void> {
        !isMock && nock.restore();
        scope.post("/payout").reply(200, {
            pspReference: "8815131762537886",
            resultCode: "Received",
        });

        const request = mockPayoutRequest();
        const result = await payout.payout(request);

        expect(result.resultCode).toEqual("Received");
        expect(result.pspReference).toBeTruthy();
    });
});

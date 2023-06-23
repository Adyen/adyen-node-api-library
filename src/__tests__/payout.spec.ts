import nock from "nock";
import { createClient } from "../__mocks__/base";
import PayoutAPI from "../services/payout";
import { payout } from "../typings";
import Client from "../client";
import { ApiConstants } from "../constants/apiConstants";

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
    dateOfBirth: "1980-01-01",
    nationality: "NL",
    shopperEmail: "johndoe@email.com",
    shopperReference: "shopperReference",
};

const mockStoreDetailRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): payout.StoreDetailRequest => ({
    ...defaultData,
    card: {
        cvc: "737",
        expiryMonth: "03",
        expiryYear: "2020",
        number: "4111111111111111",
        holderName: "John Smith"
    },
    entityType: payout.StoreDetailRequest.EntityTypeEnum.Company,
    recurring: {
        contract: payout.Recurring.ContractEnum.Payout,
    },
    merchantAccount,
});

const mockSubmitRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): payout.SubmitRequest => ({
    selectedRecurringDetailReference: "LATEST",
    recurring: {
        contract: payout.Recurring.ContractEnum.Payout
    },
    ...defaultData,
    ...amountAndReference,
    merchantAccount,
});

const mockStoreDetailAndSubmitRequest = (merchantAccount?: string): payout.StoreDetailAndSubmitRequest => ({
    ...amountAndReference,
    ...(mockStoreDetailRequest(merchantAccount)),
}); 

const mockPayoutRequest = (merchantAccount: string = process.env.ADYEN_MERCHANT!): payout.PayoutRequest => ({
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
let payoutService: PayoutAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    clientStore = createClient(process.env.ADYEN_STOREPAYOUT_APIKEY);
    clientReview = createClient(process.env.ADYEN_REVIEWPAYOUT_APIKEY);
    scope = nock(`${client.config.endpoint}/pal/servlet/Payout/${Client.API_VERSION}`);
    payoutService = new PayoutAPI(client);
});

afterEach((): void => {
    nock.cleanAll();
});

describe("PayoutTest", function (): void {
   test("should succeed on store detail and submit third party", async function (): Promise<void> {
        payoutService = new PayoutAPI(clientStore);
        const request: payout.StoreDetailAndSubmitRequest = mockStoreDetailAndSubmitRequest();
        scope.post("/storeDetailAndSubmitThirdParty").reply(200, storeDetailAndSubmitThirdParty);

        const result = await payoutService.InitializationApi.storeDetailAndSubmitThirdParty(request);
        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toBeTruthy();
    });

   test("should succeed on store detail", async function (): Promise<void> {
        payoutService = new PayoutAPI(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const request: payout.StoreDetailRequest = mockStoreDetailRequest();
        const result = await payoutService.InitializationApi.storeDetail(request);

        expect("Success").toEqual(result.resultCode);
        expect(result.pspReference).toBeTruthy();
        expect(result.recurringDetailReference).toBeTruthy();
    });

   test("should succeed on confirm third party", async function (): Promise<void> {
        payoutService = new PayoutAPI(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const storeRequest: payout.StoreDetailRequest = mockStoreDetailRequest();
        const storeResult = await payoutService.InitializationApi.storeDetail(storeRequest);

        payoutService = new PayoutAPI(clientReview);
        scope.post("/confirmThirdParty")
            .reply(200, {
                pspReference: "8815131762537886",
                response: "[payout-confirm-received]"
            });

        const request: payout.ModifyRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            originalReference: storeResult.pspReference
        };
        const result = await payoutService.ReviewingApi.confirmThirdParty(request);

        expect(result.response).toEqual("[payout-confirm-received]");
        expect(result.pspReference).toBeTruthy();
    });

   test("should succeed on submit third party", async function (): Promise<void> {
        payoutService = new PayoutAPI(clientStore);
        scope.post("/submitThirdParty").reply(200, storeDetailAndSubmitThirdParty);

        const request: payout.SubmitRequest = mockSubmitRequest();
        const result = await payoutService.InitializationApi.submitThirdParty(request);

        expect(result.resultCode).toEqual("[payout-submit-received]");
        expect(result.pspReference).toBeTruthy();

        if (result.additionalData) {
            expect(result.additionalData[ApiConstants.FRAUD_RESULT_TYPE]).toEqual("GREEN");
            expect(result.additionalData[ApiConstants.FRAUD_MANUAL_REVIEW]).toEqual("false");
        }
    });

   test("should succeed on decline third party", async function (): Promise<void> {
        payoutService = new PayoutAPI(clientStore);
        scope.post("/storeDetail").reply(200, storeDetail);
        const storeRequest: payout.StoreDetailRequest = mockStoreDetailRequest();
        const storeResult = await payoutService.InitializationApi.storeDetail(storeRequest);

        payoutService = new PayoutAPI(clientReview);
        const request: payout.ModifyRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            originalReference: storeResult.pspReference
        };
        scope.post("/declineThirdParty")
            .reply(200, {
                pspReference: "8815131762537886",
                response: "[payout-decline-received]"
            });
        const result = await payoutService.ReviewingApi.declineThirdParty(request);

        expect(result.response).toEqual("[payout-decline-received]");
        expect(result.pspReference).toBeTruthy();
    });

   test("should succeed on payout", async function (): Promise<void> {
        scope.post("/payout").reply(200, {
            pspReference: "8815131762537886",
            resultCode: "Received",
        });

        const request = mockPayoutRequest();
        const result = await payoutService.InstantPayoutsApi.payout(request);

        expect(result.resultCode).toEqual("Received");
        expect(result.pspReference).toBeTruthy();
    });
});

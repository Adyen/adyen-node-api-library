import nock from "nock";
import { createClient } from "../__mocks__/base";
import { BinLookupAPI } from "../services";
import Client from "../client";
import HttpClientException from "../httpClient/httpClientException";
import { binlookup } from "../typings";

const threeDSAvailabilitySuccess = {
    binDetails: {
        issuerCountry: "NL"
    },
    threeDS1Supported: true,
    threeDS2CardRangeDetails: [],
    threeDS2supported: false
};

let client: Client;
let binLookupService: BinLookupAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    binLookupService = new BinLookupAPI(client);
    scope = nock("https://pal-test.adyen.com/pal/servlet/BinLookup/v54");
});

afterEach((): void => {
    nock.cleanAll();
});

describe("Bin Lookup", function (): void {
    test("should succeed on get 3ds availability", async function (): Promise<void> {
        const threeDSAvailabilityRequest: binlookup.ThreeDSAvailabilityRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            brands: ["randomBrand"],
            cardNumber: "4111111111111111"
        };

        scope.post("/get3dsAvailability")
            .reply(200, threeDSAvailabilitySuccess);

        const response = await binLookupService.BinLookupApi.get3dsAvailability(threeDSAvailabilityRequest);

        expect(response).toEqual< binlookup.ThreeDSAvailabilityResponse>(threeDSAvailabilitySuccess);
    });

    test("should fail with invalid merchant", async function (): Promise<void> {
        const threeDSAvailabilityRequest: { [key: string]: undefined|string|[] } = {
            merchantAccount: undefined,
            cardNumber: "4111111111111",
            brands: []
        };

        scope.post("/get3dsAvailability")
            .reply(403, JSON.stringify({status: 403, message: "Invalid Merchant Account", errorCode: "901", errorType: "security"}));

        try {
            await binLookupService.BinLookupApi.get3dsAvailability(threeDSAvailabilityRequest as unknown as  binlookup.ThreeDSAvailabilityRequest);
            fail("Expected request to fail");
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
        }
    });

    test("should succeed on get cost estimate", async function (): Promise<void> {
        const expected = {
            cardBin:  {
             bin: "",
             fundsAvailability: "I",
             issuingBank: "ADYEN TEST BANK",
             issuingCountry: "NL",
             paymentMethod: "visa",
             payoutEligible: "Y",
             summary: "",
           },
            costEstimateAmount: {
                currency: "EUR",
                value: 10
            },
            resultCode: "Unsupported",
        };
        const costEstimateRequest:  binlookup.CostEstimateRequest = {
            amount: { currency: "EUR", value: 1000 },
            assumptions: {
                assumeLevel3Data: true,
                assume3DSecureAuthenticated: true
            },
            cardNumber: "411111111111",
            merchantAccount: process.env.ADYEN_MERCHANT!,
            merchantDetails: {
                countryCode: "NL",
                mcc: "7411",
                enrolledIn3DSecure: true
            },
            shopperInteraction: binlookup.CostEstimateRequest.ShopperInteractionEnum.Ecommerce,
        };

        scope.post("/getCostEstimate")
            .reply(200, expected);

        const response = await binLookupService.BinLookupApi.getCostEstimate(costEstimateRequest);

        expect(response).toEqual(expected);
    });
});

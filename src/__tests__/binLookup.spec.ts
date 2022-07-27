import nock from "nock";
import { createClient } from "../__mocks__/base";
import BinLookup from "../services/binLookup";
import Client from "../client";
import HttpClientException from "../httpClient/httpClientException";

const threeDSAvailabilitySuccess = {
    binDetails: {
        issuerCountry: "NL"
    },
    threeDS1Supported: true,
    threeDS2CardRangeDetails: [],
    threeDS2supported: false
};

let client: Client;
let binLookup: BinLookup;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    binLookup = new BinLookup(client);
    scope = nock(`${client.config.endpoint}${Client.BIN_LOOKUP_PAL_SUFFIX}${Client.BIN_LOOKUP_API_VERSION}`);
});

afterEach((): void => {
    nock.cleanAll();
});

describe("Bin Lookup", function (): void {
    test("should succeed on get 3ds availability", async function (): Promise<void> {
        const threeDSAvailabilityRequest: IBinLookup.ThreeDSAvailabilityRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            brands: ["randomBrand"],
            cardNumber: "4111111111111111"
        };

        scope.post("/get3dsAvailability")
            .reply(200, threeDSAvailabilitySuccess);

        const response = await binLookup.get3dsAvailability(threeDSAvailabilityRequest);

        expect(response).toEqual<IBinLookup.ThreeDSAvailabilityResponse>(threeDSAvailabilitySuccess);
    });

    test.each([false, true])("should fail with invalid merchant. isMock: %p", async function (isMock): Promise<void> {
        !isMock && nock.restore();
        const threeDSAvailabilityRequest: { [key: string]: undefined|string|[] } = {
            merchantAccount: undefined,
            cardNumber: "4111111111111",
            brands: []
        };

        scope.post("/get3dsAvailability")
            .reply(403, JSON.stringify({status: 403, message: "fail", errorCode: "171"}));

        try {
            await binLookup.get3dsAvailability(threeDSAvailabilityRequest as unknown as IBinLookup.ThreeDSAvailabilityRequest);
            fail("Expected request to fail");
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
        }
    });

    test.each([false, true])("should succeed on get cost estimate. isMock: %p", async function (isMock): Promise<void> {
        !isMock && nock.restore();
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
            surchargeType: "ZERO"
        };
        const costEstimateRequest: IBinLookup.CostEstimateRequest = {
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
            shopperInteraction: "Ecommerce"
        };

        scope.post("/getCostEstimate")
            .reply(200, expected);

        const response = await binLookup.getCostEstimate(costEstimateRequest);

        expect(response).toEqual(expected);
    });
});

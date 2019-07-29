/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import nock from "nock";
import { createMockClientFromResponse } from "../__mocks__/base";
import BinLookup from "../service/binLookup";
import {CostEstimateRequest, ThreeDSAvailabilityRequest} from "../typings/binLookup";
import Client from "../client";
import HttpClientException from "../httpClient/httpClientException";

const threeDSAvailabilitySuccess = {
    dsPublicKeys: [{
        brand: "visa",
        directoryServerId: "F013371337",
        publicKey: "eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsIm4iOiI4VFBxZkFOWk4xSUEzcHFuMkdhUVZjZ1g4LUpWZ1Y0M2diWURtYmdTY0N5SkVSN3lPWEJqQmQyaTBEcVFBQWpVUVBXVUxZU1FsRFRKYm91bVB1aXVoeVMxUHN2NTM4UHBRRnEySkNaSERkaV85WThVZG9hbmlrU095c2NHQWtBVmJJWHA5cnVOSm1wTTBwZ0s5VGxJSWVHYlE3ZEJaR01OQVJLQXRKeTY3dVlvbVpXV0ZBbWpwM2d4SDVzNzdCR2xkaE9RUVlQTFdybDdyS0pLQlUwNm1tZlktUDNpazk5MmtPUTNEak02bHR2WmNvLThET2RCR0RKYmdWRGFmb29LUnVNd2NUTXhDdTRWYWpyNmQyZkppVXlqNUYzcVBrYng4WDl6a1c3UmlxVno2SU1qdE54NzZicmg3aU9Vd2JiWmoxYWF6VG1GQ2xEb0dyY2JxOV80Nnc9PSJ9"
    }],
    threeDS1Supported: true,
    threeDS2CardRangeDetails: [{
        brandCode: "visa",
        endRange: "411111111111",
        startRange: "411111111111",
        threeDS2Version: "2.1.0",
        threeDSMethodURL: "https://pal-test.adyen.com/threeds2simulator/acs/startMethod.shtml"
    }],
    threeDS2supported: true
};

let client: Client;
let binLookup: BinLookup;
let scope: any;

beforeEach(() => {
    client = createMockClientFromResponse();
    binLookup = new BinLookup(client);
    scope = nock(`${client.config.endpoint}${Client.BIN_LOOKUP_PAL_SUFFIX}${Client.BIN_LOOKUP_API_VERSION}`);
});

describe("Bin Lookup", function (): void {
    it("should succeed on get 3ds availability", async function (): Promise<void> {
        const threeDSAvailabilityRequest: ThreeDSAvailabilityRequest = {
            merchantAccount: "MOCK_MERCHANT_ACCOUNT",
            brands: ["randomBrand"],
            cardNumber: "4111111111111111"
        };

        scope.post("/get3dsAvailability")
            .reply(200, threeDSAvailabilitySuccess);

        const response = await binLookup.get3dsAvailability(threeDSAvailabilityRequest);

        expect(response.dsPublicKeys[0].brand).toEqual("visa");
        expect(response.threeDS2CardRangeDetails[0].brandCode).toEqual("visa");
        expect(response.threeDS1Supported).toEqual(true);
    });

    it("should fail with invalid merchant", async function (): Promise<void> {
        const threeDSAvailabilityRequest: ThreeDSAvailabilityRequest = {
            merchantAccount: undefined,
            cardNumber: "4111111111111",
            brands: []
        };

        scope.post("/get3dsAvailability")
            .reply(403);

        try {
            await binLookup.get3dsAvailability(threeDSAvailabilityRequest);
            fail("Expected request to fail");
        } catch (e) {
            expect(e instanceof HttpClientException).toBeTruthy();
        }
    });

    it("should succeed on get cost estimate", async function (): Promise<void> {
        const response = {
            cardBin: {summary: "1111"},
            resultCode: "Unsupported",
            surchargeType: "ZERO"
        };
        const costEstimateRequest: CostEstimateRequest = {
            amount: { currency: "EUR", value: 1000 },
            assumptions: {
                assumeLevel3Data: true,
                assume3DSecureAuthenticated: true
            },
            cardNumber: "411111111111",
            merchantAccount: "MOCKED_MERCHANT_ACC",
            merchantDetails: {
                countryCode: "NL",
                mcc: "7411",
                enrolledIn3DSecure: true
            },
            shopperInteraction: "Ecommerce"
        };

        scope.post("/getCostEstimate")
            .reply(200, response);

        const {cardBin, resultCode, surchargeType} = await binLookup.getCostEstimate(costEstimateRequest);

        expect(cardBin.summary).toEqual("1111");
        expect(resultCode).toEqual("Unsupported");
        expect(surchargeType).toEqual("ZERO");
    });
});
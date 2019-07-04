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
import { createMockClientFromResponse } from "../__mocks__/base";
import BinLookup from "../service/binLookup";
import {CostEstimateRequest, ThreeDSAvailabilityRequest, ThreeDSAvailabilityResponse} from "../typings/binLookup";

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

describe("Bin Lookup", function (): void {
    it("should succeed on get 3ds availability", async function (): Promise<void> {
        const client = createMockClientFromResponse(JSON.stringify(threeDSAvailabilitySuccess));
        const binLookup = new BinLookup(client);

        const threeDSAvailabilityRequest: ThreeDSAvailabilityRequest = {
            merchantAccount: client.config.merchantAccount,
            brands: ["randomBrand"],
            cardNumber: "4111111111111111"
        };

        const {
            dsPublicKeys,
            threeDS2CardRangeDetails,
            threeDS1Supported
        }: ThreeDSAvailabilityResponse = await binLookup.get3dsAvailability(threeDSAvailabilityRequest);
        expect(dsPublicKeys[0].brand).toEqual("visa");
        expect(threeDS2CardRangeDetails[0].brandCode).toEqual("visa");
        expect(threeDS1Supported).toEqual(true);
    });

    it("should have invalid merchant", async function (): Promise<void> {
        const client = createMockClientFromResponse(JSON.stringify({
            status: 403,
            errorCode: "901",
            message: "Invalid Merchant Account",
            errorType: "security"
        }), {code: 403});
        const binLookup = new BinLookup(client);

        const threeDSAvailabilityRequest: ThreeDSAvailabilityRequest = {
            merchantAccount: undefined,
            cardNumber: "4111111111111",
            brands: []
        };

        try {
            await binLookup.get3dsAvailability(threeDSAvailabilityRequest);
            fail("Expected request to fail");
        } catch (e) {
            expect(e.statusCode).toEqual(403);
            expect(JSON.parse(e.message).errorCode).toEqual("901");
        }
    });

    it("should succeed on get cost estimate", async function (): Promise<void> {
        const client = createMockClientFromResponse(JSON.stringify({
            cardBin: {summary: "1111"},
            resultCode: "Unsupported",
            surchargeType: "ZERO"
        }));
        const binLookup = new BinLookup(client);
        const costEstimateRequest: CostEstimateRequest = {
            amount: { currency: "EUR", value: 1000 },
            assumptions: {
                assumeLevel3Data: true,
                assume3DSecureAuthenticated: true
            },
            cardNumber: "411111111111",
            merchantAccount: client.config.merchantAccount,
            merchantDetails: {
                countryCode: "NL",
                mcc: "7411",
                enrolledIn3DSecure: true
            },
            shopperInteraction: "Ecommerce"
        };

        const {cardBin, resultCode, surchargeType} = await binLookup.getCostEstimate(costEstimateRequest);

        expect(cardBin.summary).toEqual("1111");
        expect(resultCode).toEqual("Unsupported");
        expect(surchargeType).toEqual("ZERO");
    });
});
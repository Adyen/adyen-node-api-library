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
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import nock from "nock";
import {createClient} from "../__mocks__/base";
import Modification from "../services/modification";
import Client from "../client";
import {
    CreatePaymentAmountUpdateRequest,
    CreatePaymentCancelRequest,
    CreatePaymentCaptureRequest,
    CreatePaymentRefundRequest, CreatePaymentReversalRequest,
    CreateStandalonePaymentCancelRequest,
    PaymentAmountUpdateResource,
    PaymentCancelResource,
    PaymentCaptureResource, PaymentRefundResource, PaymentReversalResource,
    StandalonePaymentCancelResource
} from "../typings/checkout/models";

const invalidModificationResult = {
    "status": 422,
    "errorCode": "167",
    "message": "Original pspReference required for this operation",
    "errorType": "validation"
};

const createAmountUpdateRequest = (): CreatePaymentAmountUpdateRequest => {
    return {
        reference: "863620292981235A",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420
        },
        reason: CreatePaymentAmountUpdateRequest.ReasonEnum.DelayedCharge
    };
};

const createAmountUpdateResponse = (): PaymentAmountUpdateResource => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        },
        reason: CreatePaymentAmountUpdateRequest.ReasonEnum.DelayedCharge,
        status: PaymentAmountUpdateResource.StatusEnum.Received,
    };
};

const createCancelsRequest = (): CreatePaymentCancelRequest => {
     return {
         reference: "863620292981235B",
         merchantAccount: process.env.ADYEN_MERCHANT!,
     };
};

const createCancelsResponse = (): PaymentCancelResource =>  {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        pspReference: "863620292981235B",
        paymentPspReference: "863620292981235A",
        status: PaymentCancelResource.StatusEnum.Received,
    };
};

const createStandaloneCancelsRequest = (): CreateStandalonePaymentCancelRequest => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        paymentReference: "863620292981235B",
    };
};

const createStandaloneCancelsResponse = (): StandalonePaymentCancelResource => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        paymentReference: "863620292981235B",
        pspReference: "863620292981235A",
        status: StandalonePaymentCancelResource.StatusEnum.Received,
    };
};

const createCapturesRequest = (): CreatePaymentCaptureRequest => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        }
    };
};

function createCapturesResponse(): PaymentCaptureResource {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        },
        status: PaymentCaptureResource.StatusEnum.Received,
    };
}

const createRefundsRequest = (): CreatePaymentRefundRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        }
    };
};

const createRefundsResponse = (): PaymentRefundResource => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        },
        status: PaymentRefundResource.StatusEnum.Received,
    };
};

const createReversalsRequest = (): CreatePaymentReversalRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!
    };
};

const createReversalsResponse = (): PaymentReversalResource => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        status: PaymentRefundResource.StatusEnum.Received,
    };
};


let client: Client;
let modification: Modification;
let scope: nock.Scope;
const paymentPspReference = "863620292981235A";
const invalidPaymentPspReference = "invalid_psp_reference";
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    modification = new Modification(client);
    scope = nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Modification", (): void => {
    test.each([isCI, true])("should perform an amount update request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const request = createAmountUpdateRequest();
        scope.post(`/payments/${paymentPspReference}/amountUpdates`)
            .reply(200, createAmountUpdateResponse());
        try {
            const result = await modification.amountUpdates(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e: any) {
            if(e.message) fail(e.message);
        }
    });

    test.each([false, true])("should fail to perform an amount update request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        expect.assertions(2);
        const request = createAmountUpdateRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/amountUpdates`)
            .reply(422, invalidModificationResult);

        try {
            await modification.amountUpdates(invalidPaymentPspReference, request);
        } catch (e: any) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });

    test.each([isCI, true])("should perform a cancels request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const request = createCancelsRequest();
        scope.post(`/payments/${paymentPspReference}/cancels`)
            .reply(200, createCancelsResponse());
        try {
            const result = await modification.cancels(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e: any) {
            fail(e.message);
        }
    });

    test.each([false, true])("should fail to perform a cancels request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        expect.assertions(2);
        const request = createCancelsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/cancels`)
            .reply(422, invalidModificationResult);
        try {
            await modification.cancels(invalidPaymentPspReference, request);
        } catch (e: any) {
            expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });

    test.each([isCI, true])("should perform a standalone cancels request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const request = createStandaloneCancelsRequest();
        scope.post("/cancels")
            .reply(200, createStandaloneCancelsResponse());
        try {
            const result = await modification.cancelsStandalone(request);
            expect(result).toBeTruthy();
        } catch (e: any) {
            fail(e.message);
        }
    });

    test.each([isCI, true])("should perform a captures request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const request = createCapturesRequest();
        scope.post(`/payments/${paymentPspReference}/captures`)
            .reply(200, createCapturesResponse());
        try {
            const result = await modification.captures(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e: any) {
            fail(e.message);
        }
    });

    test.each([false, true])("should fail to perform a captures request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        expect.assertions(2);
        const request = createCapturesRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/captures`)
            .reply(422, invalidModificationResult);
        try {
            await modification.captures(invalidPaymentPspReference, request);
        } catch (e: any) {
            if(e.statusCode) expect(e.statusCode).toBe(422);
            if(e.message) expect(e.message).toContain("Original pspReference required for this operation");
        }
    });

    test.each([isCI, true])("should perform a refunds request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const request = createRefundsRequest();
        scope.post(`/payments/${paymentPspReference}/refunds`)
            .reply(200, createRefundsResponse());
        try {
            const result = await modification.refunds(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e: any) {
            if(e.message) fail(e.message);
        }
    });

    test.each([false, true])("should fail to perform a refunds request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        expect.assertions(2);
        const request = createRefundsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/refunds`)
            .reply(422, invalidModificationResult);
        try {
            await modification.refunds(invalidPaymentPspReference, request);
        } catch (e: any) {
            if(e.statusCode) expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });

    test.each([isCI, true])("should perform a reversals request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const request = createReversalsRequest();
        scope.post(`/payments/${paymentPspReference}/reversals`)
            .reply(200, createReversalsResponse());
        try {
            const result = await modification.reversals(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e: any) {
            fail(e.message);
        }
    });

    test.each([false, true])("should fail to perform a reversals request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        expect.assertions(2);
        const request = createReversalsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/reversals`)
            .reply(422, invalidModificationResult);
        try {
            await modification.reversals(invalidPaymentPspReference, request);
        } catch (e: any) {
            if(e.statusCode) expect(e.statusCode).toBe(422);
            expect(e.message).toContain("Original pspReference required for this operation");
        }
    });
});

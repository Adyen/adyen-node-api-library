import nock from "nock";
import {createClient} from "../__mocks__/base";
import {CheckoutAPI} from "../services/";
import Client from "../client";
import { checkout } from "../typings";
import HttpClientException from "../httpClient/httpClientException";

const invalidModificationResult = {
    "status": 422,
    "errorCode": "167",
    "message": "Original pspReference required for this operation",
    "errorType": "validation"
};

const createAmountUpdateRequest = (): checkout.PaymentAmountUpdateRequest => {
    return {
        reference: "863620292981235A",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420
        },
        industryUsage: checkout.PaymentAmountUpdateRequest.IndustryUsageEnum.DelayedCharge
    };
};

const createAmountUpdateResponse = (): checkout.PaymentAmountUpdateResponse => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        },
        status: checkout.PaymentAmountUpdateResponse.StatusEnum.Received,
    };
};

const createCancelsRequest = (): checkout.PaymentCancelRequest => {
     return {
         reference: "863620292981235B",
         merchantAccount: process.env.ADYEN_MERCHANT!,
     };
};

const createCancelsResponse = (): checkout.PaymentCancelResponse =>  {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        pspReference: "863620292981235B",
        paymentPspReference: "863620292981235A",
        status: checkout.PaymentCancelResponse.StatusEnum.Received,
    };
};

const createStandaloneCancelsRequest = (): checkout.StandalonePaymentCancelRequest => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        paymentReference: "863620292981235B",
    };
};

const createStandaloneCancelsResponse = (): checkout.StandalonePaymentCancelResponse => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        paymentReference: "863620292981235B",
        pspReference: "863620292981235A",
        status: checkout.StandalonePaymentCancelResponse.StatusEnum.Received,
    };
};

const createCapturesRequest = (): checkout.PaymentCaptureRequest => {
    return {
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        }
    };
};

function createCapturesResponse(): checkout.PaymentCaptureResponse {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        },
        status: checkout.PaymentCaptureResponse.StatusEnum.Received,
    };
}

const createRefundsRequest = (): checkout.PaymentRefundRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        }
    };
};

const createRefundsResponse = (): checkout.PaymentRefundResponse => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        amount: {
            currency: "EUR",
            value: 420,
        },
        status: checkout.PaymentRefundResponse.StatusEnum.Received,
    };
};

const createReversalsRequest = (): checkout.PaymentReversalRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!
    };
};

const createReversalsResponse = (): checkout.PaymentReversalResponse => {
    return {
        paymentPspReference: "863620292981235A",
        pspReference: "863620292981235B",
        reference: "reference",
        merchantAccount: process.env.ADYEN_MERCHANT!,
        status: checkout.PaymentReversalResponse.StatusEnum.Received,
    };
};


let client: Client;
let checkoutAPI: CheckoutAPI;
let scope: nock.Scope;
const paymentPspReference = "863620292981235A";
const invalidPaymentPspReference = "invalid_psp_reference";

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    checkoutAPI = new CheckoutAPI(client);
    scope = nock("https://checkout-test.adyen.com/v71");
});

afterEach(() => {
    nock.cleanAll();
});

describe("Modification", (): void => {
    test("should perform an amount update request", async (): Promise<void> => {
        const request = createAmountUpdateRequest();
        scope.post(`/payments/${paymentPspReference}/amountUpdates`)
            .reply(200, createAmountUpdateResponse());
        try {
            const result = await checkoutAPI.ModificationsApi.updateAuthorisedAmount(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            if(e instanceof Error) {
                if(e.message) fail(e.message);
            } else {
                fail();
            }
        }
    });

    test("should fail to perform an amount update request", async (): Promise<void> => {
        expect.assertions(2);
        const request = createAmountUpdateRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/amountUpdates`)
            .reply(422, invalidModificationResult);

        try {
            await checkoutAPI.ModificationsApi.updateAuthorisedAmount(invalidPaymentPspReference, request);
        } catch (e) {
            if(e instanceof HttpClientException) {
                if(e.statusCode) expect(e.statusCode).toBe(422);
                expect(e.message).toContain("Original pspReference required for this operation");
            } else {
                fail();
            }
        }
    });

    test("should perform a cancels request", async (): Promise<void> => {
        const request = createCancelsRequest();
        scope.post(`/payments/${paymentPspReference}/cancels`)
            .reply(200, createCancelsResponse());
        try {
            const result = await checkoutAPI.ModificationsApi.cancelAuthorisedPaymentByPspReference(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            if(e instanceof Error) {
                if(e.message) fail(e.message);
            } else {
                fail();
            }
        }
    });

    test("should fail to perform a cancels request", async (): Promise<void> => {
        expect.assertions(2);
        const request = createCancelsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/cancels`)
            .reply(422, invalidModificationResult);
        try {
            await checkoutAPI.ModificationsApi.cancelAuthorisedPaymentByPspReference(invalidPaymentPspReference, request);
        } catch (e) {
            if(e instanceof HttpClientException) {
                if(e.statusCode) expect(e.statusCode).toBe(422);
                expect(e.message).toContain("Original pspReference required for this operation");
            } else {
                fail();
            }
        }
    });

    test("should perform a standalone cancels request", async (): Promise<void> => {
        const request = createStandaloneCancelsRequest();
        scope.post("/cancels")
            .reply(200, createStandaloneCancelsResponse());
        try {
            const result = await checkoutAPI.ModificationsApi.cancelAuthorisedPayment(request);
            expect(result).toBeTruthy();
        } catch (e) {
            if(e instanceof Error) {
                if(e.message) fail(e.message);
            } else {
                fail();
            }
        }
    });

    test("should perform a captures request", async (): Promise<void> => {
        const request = createCapturesRequest();
        scope.post(`/payments/${paymentPspReference}/captures`)
            .reply(200, createCapturesResponse());
        try {
            const result = await checkoutAPI.ModificationsApi.captureAuthorisedPayment(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            if(e instanceof Error) {
                if(e.message) fail(e.message);
            } else {
                fail();
            }
        }
    });

    test("should fail to perform a captures request", async (): Promise<void> => {
        expect.assertions(2);
        const request = createCapturesRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/captures`)
            .reply(422, invalidModificationResult);
        try {
            await checkoutAPI.ModificationsApi.captureAuthorisedPayment(invalidPaymentPspReference, request);
        } catch (e) {
            if(e instanceof HttpClientException) {
                if(e.statusCode) expect(e.statusCode).toBe(422);
                expect(e.message).toContain("Original pspReference required for this operation");
            } else {
                fail();
            }
        }
    });

    test("should perform a refunds request", async (): Promise<void> => {
        const request = createRefundsRequest();
        scope.post(`/payments/${paymentPspReference}/refunds`)
            .reply(200, createRefundsResponse());
        try {
            const result = await checkoutAPI.ModificationsApi.refundCapturedPayment(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            if(e instanceof Error) {
                if(e.message) fail(e.message);
            } else {
                fail();
            }
        }
    });

    test("should fail to perform a refunds request", async (): Promise<void> => {
        expect.assertions(2);
        const request = createRefundsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/refunds`)
            .reply(422, invalidModificationResult);
        try {
            await checkoutAPI.ModificationsApi.refundCapturedPayment(invalidPaymentPspReference, request);
        } catch (e) {
            if(e instanceof HttpClientException) {
                if(e.statusCode) expect(e.statusCode).toBe(422);
                expect(e.message).toContain("Original pspReference required for this operation");
            } else {
                fail();
            }
        }
    });

    test("should perform a reversals request", async (): Promise<void> => {
        const request = createReversalsRequest();
        scope.post(`/payments/${paymentPspReference}/reversals`)
            .reply(200, createReversalsResponse());
        try {
            const result = await checkoutAPI.ModificationsApi.refundOrCancelPayment(paymentPspReference, request);
            expect(result).toBeTruthy();
        } catch (e) {
            if(e instanceof Error) {
                if(e.message) fail(e.message);
            } else {
                fail();
            }
        }
    });

    test("should fail to perform a reversals request", async (): Promise<void> => {
        expect.assertions(2);
        const request = createReversalsRequest();
        scope.post(`/payments/${invalidPaymentPspReference}/reversals`)
            .reply(422, invalidModificationResult);
        try {
            await checkoutAPI.ModificationsApi.refundOrCancelPayment(invalidPaymentPspReference, request);
        } catch (e) {
            if(e instanceof HttpClientException) {
                if(e.statusCode) expect(e.statusCode).toBe(422);
                expect(e.message).toContain("Original pspReference required for this operation");
            } else {
                fail();
            }
        }
    });
});

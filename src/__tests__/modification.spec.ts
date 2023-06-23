import nock from "nock";
import {createClient} from "../__mocks__/base";
import {CheckoutAPI} from "../services/";
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
import HttpClientException from "../httpClient/httpClientException";

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
        industryUsage: CreatePaymentAmountUpdateRequest.IndustryUsageEnum.DelayedCharge
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
let checkout: CheckoutAPI;
let scope: nock.Scope;
const paymentPspReference = "863620292981235A";
const invalidPaymentPspReference = "invalid_psp_reference";

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    checkout = new CheckoutAPI(client);
    scope = nock(`${client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}`);
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
            const result = await checkout.ModificationsApi.updateAuthorisedAmount(paymentPspReference, request);
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
            await checkout.ModificationsApi.updateAuthorisedAmount(invalidPaymentPspReference, request);
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
            const result = await checkout.ModificationsApi.cancelAuthorisedPaymentByPspReference(paymentPspReference, request);
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
            await checkout.ModificationsApi.cancelAuthorisedPaymentByPspReference(invalidPaymentPspReference, request);
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
            const result = await checkout.ModificationsApi.cancelAuthorisedPayment(request);
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
            const result = await checkout.ModificationsApi.captureAuthorisedPayment(paymentPspReference, request);
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
            await checkout.ModificationsApi.captureAuthorisedPayment(invalidPaymentPspReference, request);
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
            const result = await checkout.ModificationsApi.refundCapturedPayment(paymentPspReference, request);
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
            await checkout.ModificationsApi.refundCapturedPayment(invalidPaymentPspReference, request);
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
            const result = await checkout.ModificationsApi.refundOrCancelPayment(paymentPspReference, request);
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
            await checkout.ModificationsApi.refundOrCancelPayment(invalidPaymentPspReference, request);
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

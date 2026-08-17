import { randomUUID } from "crypto";
import { Types } from "../../../src";
import { createCheckoutTestContext } from "./setup";

describe("Checkout PaymentsApi", (): void => {
    const { checkout, merchantAccount } = createCheckoutTestContext();

    // Scenario: Make a successful card payment
    test("payments authorises a test card", async (): Promise<void> => {
        const request: Types.checkout.PaymentRequest = {
            amount: {
                currency: "USD",
                value: 1000
            },
            reference: `node-library-integration-${randomUUID()}`,
            paymentMethod: {
                type: Types.checkout.CardDetails.TypeEnum.Scheme,
                encryptedCardNumber: "test_4111111111111111",
                encryptedExpiryMonth: "test_03",
                encryptedExpiryYear: "test_2030",
                encryptedSecurityCode: "test_737"
            },
            returnUrl: "https://example.com/checkout/return",
            merchantAccount
        };

        const response = await checkout.PaymentsApi.payments(request);

        expect(response).toMatchObject({
            pspReference: expect.any(String),
            resultCode: Types.checkout.PaymentResponse.ResultCodeEnum.Authorised
        });
    });

    test("payments rejects an invalid currency with 422", async (): Promise<void> => {
        const request: Types.checkout.PaymentRequest = {
            amount: {
                currency: "INVALID",
                value: 1000
            },
            reference: `node-library-integration-${randomUUID()}`,
            paymentMethod: {
                type: Types.checkout.CardDetails.TypeEnum.Scheme,
                encryptedCardNumber: "test_4111111111111111",
                encryptedExpiryMonth: "test_03",
                encryptedExpiryYear: "test_2030",
                encryptedSecurityCode: "test_737"
            },
            returnUrl: "https://your-company.example.com/...",
            merchantAccount
        };

        await expect(checkout.PaymentsApi.payments(request)).rejects.toMatchObject({
            name: "HttpClientException",
            statusCode: 422,
            responseBody: expect.stringMatching(/currency/i),
            apiError: {
                status: 422,
                errorCode: "138",
                errorType: "validation",
                message: expect.stringMatching(/currency/i)
            }
        });
    });

    // Scenario: Create a payment session
    test("sessions creates a payment session", async (): Promise<void> => {
        const request: Types.checkout.CreateCheckoutSessionRequest = {
            merchantAccount,
            amount: {
                value: 100,
                currency: "EUR"
            },
            returnUrl: "https://example.com/checkout/return",
            reference: `node-library-integration-${randomUUID()}`,
            countryCode: "NL"
        };

        const response = await checkout.PaymentsApi.sessions(request, {
            idempotencyKey: randomUUID()
        });

        expect(response.id).toEqual(expect.any(String));
    });

    // Scenario: Validate the documented payment session result
    test("getResultOfPaymentSession response example matches the public type", (): void => {
        const response: Types.checkout.SessionResultResponse = {
            id: "CS12345678",
            status: Types.checkout.SessionResultResponse.StatusEnum.Completed
        };

        expect(response).toMatchObject({
            id: "CS12345678",
            status: Types.checkout.SessionResultResponse.StatusEnum.Completed
        });
    });

    // Scenario: List supported brands for a card
    test("cardDetails returns supported card brands", async (): Promise<void> => {
        const request: Types.checkout.CardDetailsRequest = {
            merchantAccount,
            cardNumber: "411111",
            supportedBrands: [
                "visa",
                "mc",
                "amex"
            ]
        };

        const response = await checkout.PaymentsApi.cardDetails(request, {
            idempotencyKey: randomUUID()
        });

        expect(response.brands?.[0]).toMatchObject({
            supported: true,
            type: "visa"
        });
    });

    // Scenario: List available payment methods
    test("paymentMethods returns available payment methods", async (): Promise<void> => {
        const request: Types.checkout.PaymentMethodsRequest = {
            merchantAccount
        };

        const response = await checkout.PaymentsApi.paymentMethods(request, {
            idempotencyKey: randomUUID()
        });

        expect(response.paymentMethods?.length).toBeGreaterThan(0);
    });
});

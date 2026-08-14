import { randomUUID } from "crypto";
import { Types } from "../../../src";
import { createCheckoutTestContext } from "./setup";

describe("Checkout PaymentsApi", (): void => {
    const { checkout, merchantAccount } = createCheckoutTestContext();

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
            returnUrl: "https://your-company.example.com/...",
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

    test("cardDetails returns the card brand", async (): Promise<void> => {
        const request: Types.checkout.CardDetailsRequest = {
            merchantAccount,
            cardNumber: "411111"
        };

        const response = await checkout.PaymentsApi.cardDetails(request);

        expect(response.brands).toEqual(expect.arrayContaining([
            expect.objectContaining({
                supported: true,
                type: "visa"
            })
        ]));
    });

    test("sessions creates a payment session", async (): Promise<void> => {
        const request: Types.checkout.CreateCheckoutSessionRequest = {
            merchantAccount,
            amount: {
                value: 100,
                currency: "EUR"
            },
            returnUrl: "https://your-company.example.com/checkout?shopperOrder=12xy..",
            reference: `node-library-integration-${randomUUID()}`,
            countryCode: "NL"
        };

        const response = await checkout.PaymentsApi.sessions(request);

        expect(response).toMatchObject({
            id: expect.any(String),
            sessionData: expect.any(String)
        });
    });

    test("paymentMethods returns available payment methods", async (): Promise<void> => {
        const request: Types.checkout.PaymentMethodsRequest = {
            merchantAccount
        };

        const response = await checkout.PaymentsApi.paymentMethods(request);

        expect(response.paymentMethods).toEqual(expect.arrayContaining([
            expect.objectContaining({
                type: "scheme"
            })
        ]));
    });
});

import { randomUUID } from "crypto";
import { Types } from "../../../src";
import { createCheckoutTestContext } from "./setup";

describe("Checkout ModificationsApi", (): void => {
    const { checkout, merchantAccount } = createCheckoutTestContext();

    // Scenario: Capture an authorised payment
    test("captureAuthorisedPayment captures an authorised payment", async (): Promise<void> => {
        const paymentRequest: Types.checkout.PaymentRequest = {
            amount: {
                currency: "EUR",
                value: 2000
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
            merchantAccount,
            captureDelayHours: 1
        };
        const paymentResponse = await checkout.PaymentsApi.payments(paymentRequest);
        expect(paymentResponse).toMatchObject({
            pspReference: expect.any(String),
            resultCode: Types.checkout.PaymentResponse.ResultCodeEnum.Authorised
        });
        const paymentPspReference = paymentResponse.pspReference!;
        const captureRequest: Types.checkout.PaymentCaptureRequest = {
            reference: `node-library-integration-${randomUUID()}`,
            merchantAccount,
            amount: {
                value: 2000,
                currency: "EUR"
            }
        };

        const response = await checkout.ModificationsApi.captureAuthorisedPayment(
            paymentPspReference,
            captureRequest
        );

        expect(response).toMatchObject({
            pspReference: expect.any(String),
            paymentPspReference,
            status: Types.checkout.PaymentCaptureResponse.StatusEnum.Received
        });
    });
});

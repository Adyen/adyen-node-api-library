import { randomUUID } from "crypto";
import { Types } from "../../../src";
import { createCheckoutTestContext } from "./setup";

describe("Checkout PaymentLinksApi", (): void => {
    const { checkout, merchantAccount } = createCheckoutTestContext();
    let paymentLinkId: string | undefined;

    afterAll(async (): Promise<void> => {
        if (!paymentLinkId) {
            return;
        }

        await checkout.PaymentLinksApi.updatePaymentLink(paymentLinkId, {
            status: Types.checkout.UpdatePaymentLinkRequest.StatusEnum.Expired
        });
    });

    // Scenario: Create a payment link
    test("paymentLinks creates a payment link", async (): Promise<void> => {
        const request: Types.checkout.PaymentLinkRequest = {
            reference: `node-library-integration-${randomUUID()}`,
            amount: {
                value: 1250,
                currency: "BRL"
            },
            countryCode: "BR",
            merchantAccount,
            shopperReference: `node-library-integration-${randomUUID()}`,
            shopperEmail: "test@email.com",
            shopperLocale: "pt-BR",
            billingAddress: {
                street: "Roque Petroni Jr",
                postalCode: "59000060",
                city: "São Paulo",
                houseNumberOrName: "999",
                country: "BR",
                stateOrProvince: "SP"
            },
            deliveryAddress: {
                street: "Roque Petroni Jr",
                postalCode: "59000060",
                city: "São Paulo",
                houseNumberOrName: "999",
                country: "BR",
                stateOrProvince: "SP"
            }
        };

        const response = await checkout.PaymentLinksApi.paymentLinks(request, {
            idempotencyKey: randomUUID()
        });
        paymentLinkId = response.id;

        expect(response.id).not.toHaveLength(0);
    });
});

import { randomUUID } from "crypto";
import { Types } from "../../../src";
import { createCheckoutTestContext } from "./setup";

describe("Checkout OrdersApi", (): void => {
    const { checkout, merchantAccount } = createCheckoutTestContext();
    let createdOrder: Types.checkout.CreateOrderResponse | undefined;

    afterAll(async (): Promise<void> => {
        if (!createdOrder?.pspReference) {
            return;
        }

        const request: Types.checkout.CancelOrderRequest = {
            merchantAccount,
            order: {
                orderData: createdOrder.orderData,
                pspReference: createdOrder.pspReference
            }
        };

        await checkout.OrdersApi.cancelOrder(request, {
            idempotencyKey: randomUUID()
        });
    });

    // Scenario: Create an order
    test("orders creates an order", async (): Promise<void> => {
        const request: Types.checkout.CreateOrderRequest = {
            reference: `node-library-integration-${randomUUID()}`,
            amount: {
                value: 2500,
                currency: "EUR"
            },
            merchantAccount
        };

        createdOrder = await checkout.OrdersApi.orders(request, {
            idempotencyKey: randomUUID()
        });

        expect(createdOrder.resultCode).toBe(
            Types.checkout.CreateOrderResponse.ResultCodeEnum.Success
        );
    });
});

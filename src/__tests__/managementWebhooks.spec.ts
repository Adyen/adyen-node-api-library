import { PaymentMethodCreatedNotificationRequest } from "../typings/managementWebhooks/paymentMethodCreatedNotificationRequest";
import { MerchantUpdatedNotificationRequest } from "../typings/managementWebhooks/merchantUpdatedNotificationRequest";
import { PaymentMethodRequestRemovedNotificationRequest } from "../typings/managementWebhooks/paymentMethodRequestRemovedNotificationRequest";
import { PaymentMethodScheduledForRemovalNotificationRequest } from "../typings/managementWebhooks/paymentMethodScheduledForRemovalNotificationRequest";
import { ManagementWebhooksHandler } from "../typings/managementWebhooks/managementWebhooksHandler";

describe("ManagementWebhooksHandler", function (): void {

    it("should deserialize PaymentMethodCreatedNotificationRequest Webhook", function (): void {
        const json = {
            "createdAt": "2022-01-24T14:59:11+01:00",
            "data": {
                "id": "PM3224R223224K5FH4M2K9B86",
                "merchantId": "MERCHANT_ACCOUNT",
                "result": "SUCCESS",
                "storeId": "ST322LJ223223K5F4SQNR9XL5",
                "type": "visa"
            },
            "environment": "test",
            "type": "paymentMethod.created"
        };
        const jsonString = JSON.stringify(json);
        const managementWebhooksHandler = new ManagementWebhooksHandler(jsonString);
        const paymentMethodCreatedNotificationRequest: PaymentMethodCreatedNotificationRequest = managementWebhooksHandler.getPaymentMethodCreatedNotificationRequest();
        const genericWebhook = managementWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof PaymentMethodCreatedNotificationRequest).toBe(true);
        expect(genericWebhook instanceof MerchantUpdatedNotificationRequest).toBe(false);
        expect(paymentMethodCreatedNotificationRequest.type).toEqual(PaymentMethodCreatedNotificationRequest.TypeEnum.PaymentMethodCreated);
    });

    it("should deserialize PaymentMethodRequestRemovedNotificationRequest Webhook", function (): void {
        const json = {
            "type": "paymentMethodRequest.removed",
            "environment": "devl",
            "createdAt": "2023-06-12T18:59:17+02:00",
            "data": {
              "id": "PM322WP223224M5HJ6PX77BW8",
              "storeId": "TestStore",
              "type": "amex",
              "status": "dataRequired",
              "merchantId": "TestMerchant",
              "enabled": false
            }
          };
        const jsonString = JSON.stringify(json);
        const managementWebhooksHandler = new ManagementWebhooksHandler(jsonString);
        const paymentMethodRequestRemoved: PaymentMethodRequestRemovedNotificationRequest = managementWebhooksHandler.getPaymentMethodRequestRemovedNotificationRequest();
        const genericWebhook = managementWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof PaymentMethodRequestRemovedNotificationRequest).toBe(true);
        expect(genericWebhook instanceof PaymentMethodScheduledForRemovalNotificationRequest).toBe(false);
        expect(paymentMethodRequestRemoved.type).toEqual(PaymentMethodRequestRemovedNotificationRequest.TypeEnum.PaymentMethodRequestRemoved);
    });

});
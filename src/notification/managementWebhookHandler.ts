/*
 * Adyen NodeJS API Library
 * Copyright (c) 2023 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import {managementWebhooks} from "../typings";

class ManagementWebhookHandler {
    private readonly payload: string;

    public constructor(jsonPayload: string) {
        this.payload = JSON.parse(jsonPayload);
    }

    // Return generic webhook type
    public getGenericWebhook(): managementWebhooks.MerchantUpdatedNotificationRequest
        | managementWebhooks.MerchantCreatedNotificationRequest
        | managementWebhooks.PaymentMethodCreatedNotificationRequest
        | managementWebhooks.PaymentMethodRequestRemovedNotificationRequest
        | managementWebhooks.PaymentMethodScheduledForRemovalNotificationRequest {
        const type = this.payload["type"];
        if(Object.values(managementWebhooks.MerchantCreatedNotificationRequest.TypeEnum).includes(type)){
            return this.getMerchantCreatedNotificationRequest();
        }

        if(Object.values(managementWebhooks.MerchantUpdatedNotificationRequest.TypeEnum).includes(type)){
            return this.getMerchantUpdatedNotificationRequest();
        }

        if(Object.values(managementWebhooks.PaymentMethodCreatedNotificationRequest.TypeEnum).includes(type)){
            return this.getPaymentMethodCreatedNotificationRequest();
        }

        if(Object.values(managementWebhooks.PaymentMethodRequestRemovedNotificationRequest.TypeEnum).includes(type)){
            return this.getPaymentMethodRequestRemovedNotificationRequest();
        }

        if(Object.values(managementWebhooks.PaymentMethodScheduledForRemovalNotificationRequest.TypeEnum).includes(type)){
            return this.getPaymentMethodScheduledForRemovalNotificationRequest();
        }

        throw new Error("Could not parse the json payload: " + this.payload);
    }

    public getMerchantCreatedNotificationRequest(): managementWebhooks.MerchantCreatedNotificationRequest {
        return managementWebhooks.ObjectSerializer.deserialize(this.payload, "MerchantCreatedNotificationRequest");
    }

    public getMerchantUpdatedNotificationRequest(): managementWebhooks.MerchantUpdatedNotificationRequest {
        return managementWebhooks.ObjectSerializer.deserialize(this.payload, "MerchantUpdatedNotificationRequest");
    }

    public getPaymentMethodCreatedNotificationRequest(): managementWebhooks.PaymentMethodCreatedNotificationRequest {
        return managementWebhooks.ObjectSerializer.deserialize(this.payload, "PaymentMethodCreatedNotificationRequest");
    }

    public getPaymentMethodRequestRemovedNotificationRequest(): managementWebhooks.PaymentMethodRequestRemovedNotificationRequest {
        return managementWebhooks.ObjectSerializer.deserialize(this.payload, "PaymentMethodRequestRemovedNotificationRequest");
    }

    public getPaymentMethodScheduledForRemovalNotificationRequest(): managementWebhooks.PaymentMethodScheduledForRemovalNotificationRequest {
        return managementWebhooks.ObjectSerializer.deserialize(this.payload, "PaymentMethodScheduledForRemovalNotificationRequest");
    }

}

export default ManagementWebhookHandler;
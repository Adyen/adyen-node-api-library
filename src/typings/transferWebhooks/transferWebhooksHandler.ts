/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { transferWebhooks } from "..";

/**
 * Union type for all supported webhook requests.
 * Allows generic handling of configuration-related webhook events.
 */
export type GenericWebhook = 
    | transferWebhooks.TransferNotificationRequest;

/**
 * Handler for processing TransferWebhooks.
 * 
 * This class provides functionality to deserialize the payload of TransferWebhooks events.
 */
export class TransferWebhooksHandler {

    private readonly payload: Record<string, any>;

    public constructor(jsonPayload: string) {
        this.payload = JSON.parse(jsonPayload);
    }

    /**
     * This method checks the type of the webhook payload and returns the appropriate deserialized object.
     * 
     * @returns A deserialized object of type GenericWebhook.
     * @throws Error if the type is not recognized.
     */
    public getGenericWebhook(): GenericWebhook {
    
        const type = this.payload["type"];
        
        if(Object.values(transferWebhooks.TransferNotificationRequest.TypeEnum).includes(type)) {
            return this.getTransferNotificationRequest();
        }
        
        throw new Error("Could not parse the json payload: " + this.payload);

    }

    /**
     * Deserialize the webhook payload into a TransferNotificationRequest
     *
     * @returns Deserialized TransferNotificationRequest object.
     */
    public getTransferNotificationRequest(): transferWebhooks.TransferNotificationRequest {
        return transferWebhooks.ObjectSerializer.deserialize(this.payload, "TransferNotificationRequest");
    }

}
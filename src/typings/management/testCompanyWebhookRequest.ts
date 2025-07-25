/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CustomNotification } from "./customNotification";


export class TestCompanyWebhookRequest {
    /**
    * List of `merchantId` values for which test webhooks will be sent. The list can have a maximum of 20 `merchantId` values.  If not specified, we send sample notifications to all the merchant accounts that the webhook is configured for. If this is more than 20 merchant accounts, use this list to specify a subset of the merchant accounts for which to send test notifications.
    */
    "merchantIds"?: Array<string>;
    "notification"?: CustomNotification | null;
    /**
    * List of event codes for which to send test notifications. Only the webhook types below are supported.   Possible values if webhook `type`: **standard**:  * **AUTHORISATION** * **CHARGEBACK_REVERSED** * **ORDER_CLOSED** * **ORDER_OPENED** * **PAIDOUT_REVERSED** * **PAYOUT_THIRDPARTY** * **REFUNDED_REVERSED** * **REFUND_WITH_DATA** * **REPORT_AVAILABLE** * **CUSTOM** - set your custom notification fields in the [`notification`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookId}/test__reqParam_notification) object.  Possible values if webhook `type`: **banktransfer-notification**:  * **PENDING**  Possible values if webhook `type`: **report-notification**:  * **REPORT_AVAILABLE**  Possible values if webhook `type`: **ideal-notification**:  * **AUTHORISATION**  Possible values if webhook `type`: **pending-notification**:  * **PENDING** 
    */
    "types"?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "merchantIds",
            "baseName": "merchantIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "notification",
            "baseName": "notification",
            "type": "CustomNotification | null",
            "format": ""
        },
        {
            "name": "types",
            "baseName": "types",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TestCompanyWebhookRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


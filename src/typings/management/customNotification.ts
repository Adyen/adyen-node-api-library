/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class CustomNotification {
    'amount'?: Amount;
    /**
    * The event that caused the notification to be sent.Currently supported values: * **AUTHORISATION** * **CANCELLATION** * **REFUND** * **CAPTURE** * **REPORT_AVAILABLE** * **CHARGEBACK** * **REQUEST_FOR_INFORMATION** * **NOTIFICATION_OF_CHARGEBACK** * **NOTIFICATIONTEST** * **ORDER_OPENED** * **ORDER_CLOSED** * **CHARGEBACK_REVERSED** * **REFUNDED_REVERSED** * **REFUND_WITH_DATA**
    */
    'eventCode'?: string;
    /**
    * The time of the event. Format: [ISO 8601](http://www.w3.org/TR/NOTE-datetime), YYYY-MM-DDThh:mm:ssTZD.
    */
    'eventDate'?: Date;
    /**
    * Your reference for the custom test notification.
    */
    'merchantReference'?: string;
    /**
    * The payment method for the payment that the notification is about. Possible values: * **amex** * **visa** * **mc** * **maestro** * **bcmc** * **paypal**  * **sms**  * **bankTransfer_NL** * **bankTransfer_DE** * **bankTransfer_BE** * **ideal** * **elv** * **sepadirectdebit** 
    */
    'paymentMethod'?: string;
    /**
    * A descripton of what caused the notification.
    */
    'reason'?: string;
    /**
    * The outcome of the event which the notification is about. Set to either **true** or **false**. 
    */
    'success'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "eventCode",
            "baseName": "eventCode",
            "type": "string"
        },
        {
            "name": "eventDate",
            "baseName": "eventDate",
            "type": "Date"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CustomNotification.attributeTypeMap;
    }
}


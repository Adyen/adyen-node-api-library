/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SessionResultResponse {
    /**
    * A unique identifier of the session.
    */
    'id'?: string;
    /**
    * The status of the session. The status included in the response doesn\'t get updated. Don\'t make the request again to check for payment status updates.  Possible values: * **completed**: the shopper completed the payment, and the payment was authorized. * **paymentPending**: the shopper is in the process of making the payment. This applies to payment methods with an asynchronous flow, like voucher payments where the shopper completes the payment in a physical shop. * **refused**: the session has been refused, because of too many refused payment attempts. The shopper can no longer complete the payment with this session. * **canceled**: the shopper canceled the payment. * **expired**: the session expired. The shopper can no longer complete the payment with this session. By default, the session expires one hour after it is created.
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SessionResultResponse.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return SessionResultResponse.attributeTypeMap;
    }
}

export namespace SessionResultResponse {
    export enum StatusEnum {
        Active = <any> 'active',
        Canceled = <any> 'canceled',
        Completed = <any> 'completed',
        Expired = <any> 'expired',
        PaymentPending = <any> 'paymentPending',
        Refused = <any> 'refused'
    }
}

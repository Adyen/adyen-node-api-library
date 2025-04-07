/*
 * The version of the OpenAPI document: v46
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class StoredValueBalanceMergeResponse {
    /**
    * Authorisation code: * When the payment is authorised, this field holds the authorisation code for the payment. * When the payment is not authorised, this field is empty.
    */
    'authCode'?: string;
    'currentBalance'?: Amount;
    /**
    * Adyen\'s 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference'?: string;
    /**
    * If the transaction is refused or an error occurs, this field holds Adyen\'s mapped reason for the refusal or a description of the error.  When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
    */
    'refusalReason'?: string;
    /**
    * The result of the payment. Possible values:  * **Success** – The operation has been completed successfully.  * **Refused** – The operation was refused. The reason is given in the `refusalReason` field.  * **Error** – There was an error when the operation was processed. The reason is given in the `refusalReason` field.  * **NotEnoughBalance** – The amount on the payment method is lower than the amount given in the request. Only applicable to balance checks.  
    */
    'resultCode'?: StoredValueBalanceMergeResponse.ResultCodeEnum;
    /**
    * Raw refusal reason received from the third party, where available
    */
    'thirdPartyRefusalReason'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authCode",
            "baseName": "authCode",
            "type": "string"
        },
        {
            "name": "currentBalance",
            "baseName": "currentBalance",
            "type": "Amount"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "refusalReason",
            "baseName": "refusalReason",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "StoredValueBalanceMergeResponse.ResultCodeEnum"
        },
        {
            "name": "thirdPartyRefusalReason",
            "baseName": "thirdPartyRefusalReason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoredValueBalanceMergeResponse.attributeTypeMap;
    }
}

export namespace StoredValueBalanceMergeResponse {
    export enum ResultCodeEnum {
        Success = <any> 'Success',
        Refused = <any> 'Refused',
        Error = <any> 'Error',
        NotEnoughBalance = <any> 'NotEnoughBalance'
    }
}

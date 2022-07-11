/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class UpiIntentDetails {
    /**
    * **upi_intent**
    */
    'type': UpiIntentDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "UpiIntentDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpiIntentDetails.attributeTypeMap;
    }
}

export namespace UpiIntentDetails {
    export enum TypeEnum {
        UpiIntent = <any> 'upi_intent'
    }
}

/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ConfirmationTrackingData {
    /**
    * The status of the transfer.  Possible values:   - **credited**: the funds are credited to your user\'s transfer instrument or bank account.
    */
    "status": ConfirmationTrackingData.StatusEnum;
    /**
    * The type of the tracking event.  Possible values:   - **confirmation**: the transfer passed Adyen\'s internal review.
    */
    "type": ConfirmationTrackingData.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "ConfirmationTrackingData.StatusEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ConfirmationTrackingData.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConfirmationTrackingData.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace ConfirmationTrackingData {
    export enum StatusEnum {
        Credited = 'credited'
    }
    export enum TypeEnum {
        Confirmation = 'confirmation'
    }
}

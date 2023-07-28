/*
 * The version of the OpenAPI document: v46
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class StoredValueVoidRequest {
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * The original pspReference of the payment to modify.
    */
    'originalReference': string;
    /**
    * Your reference for the payment modification. This reference is visible in Customer Area and in reports. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * The physical store, for which this payment is processed.
    */
    'store'?: string;
    /**
    * The reference of the tender.
    */
    'tenderReference'?: string;
    /**
    * The unique ID of a POS terminal.
    */
    'uniqueTerminalId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "originalReference",
            "baseName": "originalReference",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "tenderReference",
            "baseName": "tenderReference",
            "type": "string"
        },
        {
            "name": "uniqueTerminalId",
            "baseName": "uniqueTerminalId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoredValueVoidRequest.attributeTypeMap;
    }
}


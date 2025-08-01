/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SupportedCardTypes {
    /**
    * Set to **true** to accept credit cards.
    */
    "credit"?: boolean;
    /**
    * Set to **true** to accept debit cards.
    */
    "debit"?: boolean;
    /**
    * Set to **true** to accept cards that allow deferred debit.
    */
    "deferredDebit"?: boolean;
    /**
    * Set to **true** to accept prepaid cards.
    */
    "prepaid"?: boolean;
    /**
    * Set to **true** to accept card types for which the terminal can\'t determine the funding source while offline.
    */
    "unknown"?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "credit",
            "baseName": "credit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "debit",
            "baseName": "debit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deferredDebit",
            "baseName": "deferredDebit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "prepaid",
            "baseName": "prepaid",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "unknown",
            "baseName": "unknown",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupportedCardTypes.attributeTypeMap;
    }

    public constructor() {
    }
}


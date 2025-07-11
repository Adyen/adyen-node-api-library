/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BankCategoryData {
    /**
    * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.  Possible values:  * **regular**: for normal, low-value transactions.  * **fast**: a faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.  * **wire**: the fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: for instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).  * **crossBorder**: for high-value transfers to a recipient in a different country.  * **internal**: for transfers to an Adyen-issued business bank account (by bank account number/IBAN).
    */
    "priority"?: BankCategoryData.PriorityEnum;
    /**
    * **bank**
    */
    "type"?: BankCategoryData.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "priority",
            "baseName": "priority",
            "type": "BankCategoryData.PriorityEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BankCategoryData.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BankCategoryData.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace BankCategoryData {
    export enum PriorityEnum {
        CrossBorder = 'crossBorder',
        Fast = 'fast',
        Instant = 'instant',
        Internal = 'internal',
        Regular = 'regular',
        Wire = 'wire'
    }
    export enum TypeEnum {
        Bank = 'bank'
    }
}

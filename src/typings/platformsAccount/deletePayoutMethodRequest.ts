/*
 * The version of the OpenAPI document: v6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DeletePayoutMethodRequest {
    /**
    * The code of the account holder, from which to delete the payout methods.
    */
    'accountHolderCode': string;
    /**
    * The codes of the payout methods to be deleted.
    */
    'payoutMethodCodes': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "payoutMethodCodes",
            "baseName": "payoutMethodCodes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return DeletePayoutMethodRequest.attributeTypeMap;
    }
}


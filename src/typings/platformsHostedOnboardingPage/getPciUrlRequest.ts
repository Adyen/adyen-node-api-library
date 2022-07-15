/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GetPciUrlRequest {
    /**
    * The account holder code you provided when you created the account holder.
    */
    'accountHolderCode': string;
    /**
    * The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters.
    */
    'returnUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "returnUrl",
            "baseName": "returnUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetPciUrlRequest.attributeTypeMap;
    }
}


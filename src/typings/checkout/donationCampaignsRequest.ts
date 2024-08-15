/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DonationCampaignsRequest {
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/).
    */
    'currency': string;
    /**
    * Locale on the shopper interaction device.
    */
    'locale'?: string;
    /**
    * Your merchant account identifier.
    */
    'merchantAccount': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DonationCampaignsRequest.attributeTypeMap;
    }
}


/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CheckoutUtilityResponse {
    /**
    * The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key.
    */
    'originKeys'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "originKeys",
            "baseName": "originKeys",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutUtilityResponse.attributeTypeMap;
    }
}


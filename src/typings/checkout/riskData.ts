/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RiskData {
    /**
    * Contains client-side data, like the device fingerprint, cookies, and specific browser settings.
    */
    'clientData'?: string;
    /**
    * Any custom fields used as part of the input to configured risk rules.
    */
    'customFields'?: { [key: string]: string; };
    /**
    * An integer value that is added to the normal fraud score. The value can be either positive or negative.
    */
    'fraudOffset'?: number;
    /**
    * The risk profile to assign to this payment. When left empty, the merchant-level account\'s default risk profile will be applied.
    */
    'profileReference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientData",
            "baseName": "clientData",
            "type": "string"
        },
        {
            "name": "customFields",
            "baseName": "customFields",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "fraudOffset",
            "baseName": "fraudOffset",
            "type": "number"
        },
        {
            "name": "profileReference",
            "baseName": "profileReference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RiskData.attributeTypeMap;
    }
}


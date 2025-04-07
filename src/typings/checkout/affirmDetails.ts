/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AffirmDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * **affirm**
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AffirmDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AffirmDetails.attributeTypeMap;
    }
}


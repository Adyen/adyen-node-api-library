/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentInstrumentRevealResponse {
    /**
    * The data encrypted using the `encryptedKey`.
    */
    'encryptedData': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "encryptedData",
            "baseName": "encryptedData",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentRevealResponse.attributeTypeMap;
    }
}


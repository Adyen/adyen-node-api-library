/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RevealPinRequest {
    /**
    * The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.
    */
    'encryptedKey': string;
    /**
    * The unique identifier of the payment instrument, which is the card for which you are managing the PIN.
    */
    'paymentInstrumentId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "encryptedKey",
            "baseName": "encryptedKey",
            "type": "string"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RevealPinRequest.attributeTypeMap;
    }
}


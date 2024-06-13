/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CreateSessionResponse {
    /**
    * The unique identifier of the session.
    */
    'id'?: string;
    /**
    * The unique identifier of the SDK installation. If you create the [Terminal API](https://docs.adyen.com/point-of-sale/design-your-integration/terminal-api/) transaction request on your backend, use this as the `POIID` in the `MessageHeader` of the request.
    */
    'installationId'?: string;
    /**
    * The unique identifier of your merchant account.
    */
    'merchantAccount'?: string;
    /**
    * The data that the SDK uses to authenticate responses from the Adyen payments platform. Pass this value to your POS app.
    */
    'sdkData'?: string;
    /**
    * The unique identifier of the store that you want to process transactions for.
    */
    'store'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "installationId",
            "baseName": "installationId",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "sdkData",
            "baseName": "sdkData",
            "type": "string"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateSessionResponse.attributeTypeMap;
    }
}

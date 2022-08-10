/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ReceiptOptions {
    /**
    * The receipt logo converted to a Base64-encoded string. The image must be a .bmp file of < 256 KB, dimensions 240 (H) x 384 (W) px.
    */
    'logo'?: string;
    /**
    * Data to print on the receipt as a QR code. This can include static text and the following variables:  - `${merchantreference}`: the merchant reference of the transaction. - `${pspreference}`: the PSP reference of the transaction.   For example, **http://www.example.com/order/${pspreference}/${merchantreference}**.
    */
    'qrCodeData'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "qrCodeData",
            "baseName": "qrCodeData",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReceiptOptions.attributeTypeMap;
    }
}


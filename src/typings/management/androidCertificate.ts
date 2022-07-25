/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AndroidCertificate {
    /**
    * The description that was provided when uploading the certificate.
    */
    'description'?: string;
    /**
    * The file format of the certificate, as indicated by the file extension. For example, **.cert** or **.pem**.
    */
    'extension'?: string;
    /**
    * The unique identifier of the certificate.
    */
    'id': string;
    /**
    * The file name of the certificate. For example, **mycert**.
    */
    'name'?: string;
    /**
    * The date when the certificate stops to be valid.
    */
    'notAfter'?: Date;
    /**
    * The date when the certificate starts to be valid.
    */
    'notBefore'?: Date;
    /**
    * The status of the certificate.
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "extension",
            "baseName": "extension",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "notAfter",
            "baseName": "notAfter",
            "type": "Date"
        },
        {
            "name": "notBefore",
            "baseName": "notBefore",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AndroidCertificate.attributeTypeMap;
    }
}


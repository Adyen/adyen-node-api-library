/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Attachment {
    /**
    * The document in Base64-encoded string format.
    */
    "content": string;
    /**
    * The file format.   Possible values: **application/pdf**, **image/jpg**, **image/jpeg**, **image/png**. 
    *
	* @deprecated since Legal Entity Management API v1
    */
    "contentType"?: string;
    /**
    * The name of the file including the file extension.
    *
	* @deprecated since Legal Entity Management API v1
    */
    "filename"?: string;
    /**
    * The name of the file including the file extension.
    */
    "pageName"?: string;
    /**
    * Specifies which side of the ID card is uploaded.  * If the `type` is **driversLicense** or **identityCard**, you must set this to **front** or **back**.  * For any other types, when this is omitted, we infer the page number based on the order of attachments.
    */
    "pageType"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string",
            "format": ""
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageName",
            "baseName": "pageName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageType",
            "baseName": "pageType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }

    public constructor() {
    }
}


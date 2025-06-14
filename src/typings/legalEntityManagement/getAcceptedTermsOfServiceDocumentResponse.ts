/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GetAcceptedTermsOfServiceDocumentResponse {
    /**
    * The accepted Terms of Service document in the requested format represented as a Base64-encoded bytes array.
    */
    "document"?: string;
    /**
    * The unique identifier of the legal entity.
    */
    "id"?: string;
    /**
    * An Adyen-generated reference for the accepted Terms of Service.
    */
    "termsOfServiceAcceptanceReference"?: string;
    /**
    * The format of the Terms of Service document.
    */
    "termsOfServiceDocumentFormat"?: GetAcceptedTermsOfServiceDocumentResponse.TermsOfServiceDocumentFormatEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "document",
            "baseName": "document",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "termsOfServiceAcceptanceReference",
            "baseName": "termsOfServiceAcceptanceReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "termsOfServiceDocumentFormat",
            "baseName": "termsOfServiceDocumentFormat",
            "type": "GetAcceptedTermsOfServiceDocumentResponse.TermsOfServiceDocumentFormatEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetAcceptedTermsOfServiceDocumentResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace GetAcceptedTermsOfServiceDocumentResponse {
    export enum TermsOfServiceDocumentFormatEnum {
        Json = 'JSON',
        Pdf = 'PDF',
        Txt = 'TXT'
    }
}

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
    'document'?: string;
    /**
    * The unique identifier of the legal entity.
    */
    'id'?: string;
    /**
    * An Adyen-generated reference for the accepted Terms of Service.
    */
    'termsOfServiceAcceptanceReference'?: string;
    /**
    * The format of the Terms of Service document.
    */
    'termsOfServiceDocumentFormat'?: GetAcceptedTermsOfServiceDocumentResponse.TermsOfServiceDocumentFormatEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "document",
            "baseName": "document",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "termsOfServiceAcceptanceReference",
            "baseName": "termsOfServiceAcceptanceReference",
            "type": "string"
        },
        {
            "name": "termsOfServiceDocumentFormat",
            "baseName": "termsOfServiceDocumentFormat",
            "type": "GetAcceptedTermsOfServiceDocumentResponse.TermsOfServiceDocumentFormatEnum"
        }    ];

    static getAttributeTypeMap() {
        return GetAcceptedTermsOfServiceDocumentResponse.attributeTypeMap;
    }
}

export namespace GetAcceptedTermsOfServiceDocumentResponse {
    export enum TermsOfServiceDocumentFormatEnum {
        Json = 'JSON',
        Pdf = 'PDF',
        Txt = 'TXT'
    }
}

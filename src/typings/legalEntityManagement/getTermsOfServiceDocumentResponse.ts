/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GetTermsOfServiceDocumentResponse {
    /**
    * The Terms of Service document in Base64-encoded format.
    */
    'document'?: string;
    /**
    * The unique identifier of the legal entity.
    */
    'id'?: string;
    /**
    * The language used for the Terms of Service document, specified by the two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. For example, **nl** for Dutch.
    */
    'language'?: string;
    /**
    * The unique identifier of the Terms of Service document.
    */
    'termsOfServiceDocumentId'?: string;
    /**
    * The type of Terms of Service.
    */
    'type'?: GetTermsOfServiceDocumentResponse.TypeEnum;

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
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "termsOfServiceDocumentId",
            "baseName": "termsOfServiceDocumentId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GetTermsOfServiceDocumentResponse.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return GetTermsOfServiceDocumentResponse.attributeTypeMap;
    }
}

export namespace GetTermsOfServiceDocumentResponse {
    export enum TypeEnum {
        AdyenAccount = 'adyenAccount',
        AdyenCapital = 'adyenCapital',
        AdyenForPlatformsAdvanced = 'adyenForPlatformsAdvanced',
        AdyenForPlatformsManage = 'adyenForPlatformsManage',
        AdyenIssuing = 'adyenIssuing'
    }
}

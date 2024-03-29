/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DocumentPage {
    'pageName'?: string;
    'pageNumber'?: number;
    'type'?: DocumentPage.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pageName",
            "baseName": "pageName",
            "type": "string"
        },
        {
            "name": "pageNumber",
            "baseName": "pageNumber",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DocumentPage.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DocumentPage.attributeTypeMap;
    }
}

export namespace DocumentPage {
    export enum TypeEnum {
        Back = 'BACK',
        Front = 'FRONT',
        Undefined = 'UNDEFINED'
    }
}

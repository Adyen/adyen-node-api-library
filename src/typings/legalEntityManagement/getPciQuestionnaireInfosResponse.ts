/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PciDocumentInfo } from "./pciDocumentInfo";


export class GetPciQuestionnaireInfosResponse {
    /**
    * Information about the signed PCI questionnaires.
    */
    "data"?: Array<PciDocumentInfo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<PciDocumentInfo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetPciQuestionnaireInfosResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


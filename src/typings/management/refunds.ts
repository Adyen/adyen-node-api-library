/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Referenced } from "./referenced";


export class Refunds {
    "referenced"?: Referenced | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "referenced",
            "baseName": "referenced",
            "type": "Referenced | null",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Refunds.attributeTypeMap;
    }

    public constructor() {
    }
}


/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Referenced } from './referenced';

export class Refunds {
    'referenced'?: Referenced;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "referenced",
            "baseName": "referenced",
            "type": "Referenced"
        }    ];

    static getAttributeTypeMap() {
        return Refunds.attributeTypeMap;
    }
}


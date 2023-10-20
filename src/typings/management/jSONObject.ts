/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { JSONPath } from './jSONPath';

export class JSONObject {
    'paths'?: Array<JSONPath>;
    'rootPath'?: JSONPath;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paths",
            "baseName": "paths",
            "type": "Array<JSONPath>"
        },
        {
            "name": "rootPath",
            "baseName": "rootPath",
            "type": "JSONPath"
        }    ];

    static getAttributeTypeMap() {
        return JSONObject.attributeTypeMap;
    }
}


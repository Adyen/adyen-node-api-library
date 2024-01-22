/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AreaSize } from './areaSize';
import { Point } from './point';

export class CapturedSignature {
    'AreaSize'?: AreaSize;
    'SignaturePoint'?: Array<Point>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AreaSize",
            "baseName": "AreaSize",
            "type": "AreaSize"
        },
        {
            "name": "SignaturePoint",
            "baseName": "SignaturePoint",
            "type": "Array<Point>"
        }    ];

    static getAttributeTypeMap() {
        return CapturedSignature.attributeTypeMap;
    }
}

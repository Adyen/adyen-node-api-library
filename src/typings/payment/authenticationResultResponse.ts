/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ThreeDS1Result } from './threeDS1Result';
import { ThreeDS2Result } from './threeDS2Result';

export class AuthenticationResultResponse {
    'threeDS1Result'?: ThreeDS1Result;
    'threeDS2Result'?: ThreeDS2Result;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "threeDS1Result",
            "baseName": "threeDS1Result",
            "type": "ThreeDS1Result"
        },
        {
            "name": "threeDS2Result",
            "baseName": "threeDS2Result",
            "type": "ThreeDS2Result"
        }    ];

    static getAttributeTypeMap() {
        return AuthenticationResultResponse.attributeTypeMap;
    }
}


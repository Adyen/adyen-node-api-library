/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RiskScores } from './riskScores';

export class RiskScoresRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    'value'?: RiskScores | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "RiskScores | null"
        }    ];

    static getAttributeTypeMap() {
        return RiskScoresRestriction.attributeTypeMap;
    }
}


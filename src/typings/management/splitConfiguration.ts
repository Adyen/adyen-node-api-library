/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SplitConfigurationRule } from './splitConfigurationRule';

export class SplitConfiguration {
    /**
    * Your description for the split configuration.
    */
    'description': string;
    /**
    * Array of rules that define the split configuration behavior.
    */
    'rules': Array<SplitConfigurationRule>;
    /**
    * Unique identifier of the split configuration.
    */
    'splitConfigurationId'?: string;
    /**
    * List of stores to which the split configuration applies.
    */
    'stores'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<SplitConfigurationRule>"
        },
        {
            "name": "splitConfigurationId",
            "baseName": "splitConfigurationId",
            "type": "string"
        },
        {
            "name": "stores",
            "baseName": "stores",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return SplitConfiguration.attributeTypeMap;
    }
}


/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapabilityProblem } from './capabilityProblem';

export class VerificationErrors {
    /**
    * List of the verification errors.
    */
    'problems'?: Array<CapabilityProblem>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "problems",
            "baseName": "problems",
            "type": "Array<CapabilityProblem>"
        }    ];

    static getAttributeTypeMap() {
        return VerificationErrors.attributeTypeMap;
    }
}


/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankAccountIdentificationValidationRequestAccountIdentification } from './bankAccountIdentificationValidationRequestAccountIdentification';

export class BankAccountIdentificationValidationRequest {
    'accountIdentification': BankAccountIdentificationValidationRequestAccountIdentification;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountIdentification",
            "baseName": "accountIdentification",
            "type": "BankAccountIdentificationValidationRequestAccountIdentification"
        }    ];

    static getAttributeTypeMap() {
        return BankAccountIdentificationValidationRequest.attributeTypeMap;
    }
}


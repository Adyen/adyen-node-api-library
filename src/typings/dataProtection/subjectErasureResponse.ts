/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SubjectErasureResponse {
    /**
    * The result of this operation.
    */
    "result"?: SubjectErasureResponse.ResultEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "SubjectErasureResponse.ResultEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubjectErasureResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace SubjectErasureResponse {
    export enum ResultEnum {
        ActiveRecurringTokenExists = 'ACTIVE_RECURRING_TOKEN_EXISTS',
        AlreadyProcessed = 'ALREADY_PROCESSED',
        PaymentNotFound = 'PAYMENT_NOT_FOUND',
        Success = 'SUCCESS'
    }
}

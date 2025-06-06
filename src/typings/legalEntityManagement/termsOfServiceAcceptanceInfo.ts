/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TermsOfServiceAcceptanceInfo {
    /**
    * The unique identifier of the user that accepted the Terms of Service.
    */
    'acceptedBy'?: string;
    /**
    * The unique identifier of the legal entity for which the Terms of Service are accepted.
    */
    'acceptedFor'?: string;
    /**
    * The date when the Terms of Service were accepted, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00.
    */
    'createdAt'?: Date;
    /**
    * An Adyen-generated reference for the accepted Terms of Service.
    */
    'id'?: string;
    /**
    * The type of Terms of Service.  Possible values: *  **adyenForPlatformsManage** *  **adyenIssuing** *  **adyenForPlatformsAdvanced** *  **adyenCapital** *  **adyenAccount** *  **adyenCard** *  **adyenFranchisee** *  **adyenPccr** *  **adyenChargeCard**  
    */
    'type'?: TermsOfServiceAcceptanceInfo.TypeEnum;
    /**
    * The expiration date for the Terms of Service acceptance, in ISO 8601 extended format. For example, 2022-12-18T00:00:00+01:00.
    */
    'validTo'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acceptedBy",
            "baseName": "acceptedBy",
            "type": "string"
        },
        {
            "name": "acceptedFor",
            "baseName": "acceptedFor",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TermsOfServiceAcceptanceInfo.TypeEnum"
        },
        {
            "name": "validTo",
            "baseName": "validTo",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return TermsOfServiceAcceptanceInfo.attributeTypeMap;
    }
}

export namespace TermsOfServiceAcceptanceInfo {
    export enum TypeEnum {
        AdyenAccount = 'adyenAccount',
        AdyenCapital = 'adyenCapital',
        AdyenCard = 'adyenCard',
        AdyenChargeCard = 'adyenChargeCard',
        AdyenForPlatformsAdvanced = 'adyenForPlatformsAdvanced',
        AdyenForPlatformsManage = 'adyenForPlatformsManage',
        AdyenFranchisee = 'adyenFranchisee',
        AdyenIssuing = 'adyenIssuing',
        AdyenPccr = 'adyenPccr'
    }
}

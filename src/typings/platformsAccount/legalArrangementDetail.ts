/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { LegalArrangementEntityDetail } from './legalArrangementEntityDetail';
import { ViasAddress } from './viasAddress';

export class LegalArrangementDetail {
    'address': ViasAddress;
    /**
    * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement. Use only when updating an account holder. If you include this field when creating an account holder, the request will fail.
    */
    'legalArrangementCode'?: string;
    /**
    * An array containing information about other entities that are part of the legal arrangement.
    */
    'legalArrangementEntities'?: Array<LegalArrangementEntityDetail>;
    /**
    * Your reference for the legal arrangement. Must be between 3 to 128 characters.
    */
    'legalArrangementReference'?: string;
    /**
    * The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.  The possible values depend on the `type`.  - For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.  - For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership**
    */
    'legalForm'?: LegalArrangementDetail.LegalFormEnum;
    /**
    * The legal name of the legal arrangement. Minimum length: 3 characters.
    */
    'name': string;
    /**
    * The registration number of the legal arrangement.
    */
    'registrationNumber'?: string;
    /**
    * The tax identification number of the legal arrangement.
    */
    'taxNumber'?: string;
    /**
    * The [type of legal arrangement](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/legal-arrangements#types-of-legal-arrangements).  Possible values:  - **Association**   - **Partnership**   - **SoleProprietorship**   - **Trust**   
    */
    'type': LegalArrangementDetail.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "ViasAddress"
        },
        {
            "name": "legalArrangementCode",
            "baseName": "legalArrangementCode",
            "type": "string"
        },
        {
            "name": "legalArrangementEntities",
            "baseName": "legalArrangementEntities",
            "type": "Array<LegalArrangementEntityDetail>"
        },
        {
            "name": "legalArrangementReference",
            "baseName": "legalArrangementReference",
            "type": "string"
        },
        {
            "name": "legalForm",
            "baseName": "legalForm",
            "type": "LegalArrangementDetail.LegalFormEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "registrationNumber",
            "baseName": "registrationNumber",
            "type": "string"
        },
        {
            "name": "taxNumber",
            "baseName": "taxNumber",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalArrangementDetail.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return LegalArrangementDetail.attributeTypeMap;
    }
}

export namespace LegalArrangementDetail {
    export enum LegalFormEnum {
        CashManagementTrust = 'CashManagementTrust',
        CorporateUnitTrust = 'CorporateUnitTrust',
        DeceasedEstate = 'DeceasedEstate',
        DiscretionaryInvestmentTrust = 'DiscretionaryInvestmentTrust',
        DiscretionaryServicesManagementTrust = 'DiscretionaryServicesManagementTrust',
        DiscretionaryTradingTrust = 'DiscretionaryTradingTrust',
        FirstHomeSaverAccountsTrust = 'FirstHomeSaverAccountsTrust',
        FixedTrust = 'FixedTrust',
        FixedUnitTrust = 'FixedUnitTrust',
        HybridTrust = 'HybridTrust',
        ListedPublicUnitTrust = 'ListedPublicUnitTrust',
        OtherTrust = 'OtherTrust',
        PooledSuperannuationTrust = 'PooledSuperannuationTrust',
        PublicTradingTrust = 'PublicTradingTrust',
        UnlistedPublicUnitTrust = 'UnlistedPublicUnitTrust',
        LimitedPartnership = 'LimitedPartnership',
        FamilyPartnership = 'FamilyPartnership',
        OtherPartnership = 'OtherPartnership'
    }
    export enum TypeEnum {
        Association = 'Association',
        Partnership = 'Partnership',
        SoleProprietorship = 'SoleProprietorship',
        Trust = 'Trust'
    }
}

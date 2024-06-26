/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { TaxInformation } from './taxInformation';
import { UndefinedBeneficiary } from './undefinedBeneficiary';

export class Trust {
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.
    */
    'countryOfGoverningLaw': string;
    /**
    * The date when the legal arrangement was incorporated in YYYY-MM-DD format.
    */
    'dateOfIncorporation'?: string;
    /**
    * The registered name, if different from the `name`.
    */
    'doingBusinessAs'?: string;
    /**
    * The legal name.
    */
    'name': string;
    'principalPlaceOfBusiness'?: Address;
    'registeredAddress': Address;
    /**
    * The registration number.
    */
    'registrationNumber'?: string;
    /**
    * The tax information is absent.
    */
    'taxAbsent'?: boolean | null;
    /**
    * The tax information of the entity.
    */
    'taxInformation'?: Array<TaxInformation>;
    /**
    * Type of trust.  Possible values for Australian trusts: **cashManagementTrust**, **corporateUnitTrust**, **deceasedEstate**, **discretionaryInvestmentTrust**, **discretionaryServicesManagementTrust**, **discretionaryTradingTrust**, **firstHomeSaverAccountsTrust**, **fixedTrust**, **fixedUnitTrust**, **hybridTrust**, **listedPublicUnitTrust**, **otherTrust**, **pooledSuperannuationTrust**, **publicTradingTrust**, **unlistedPublicUnitTrust**.
    */
    'type': Trust.TypeEnum;
    /**
    * The undefined beneficiary information of the entity.
    */
    'undefinedBeneficiaryInfo'?: Array<UndefinedBeneficiary>;
    /**
    * The reason for not providing a VAT number.  Possible values: **industryExemption**, **belowTaxThreshold**.
    */
    'vatAbsenceReason'?: Trust.VatAbsenceReasonEnum;
    /**
    * The VAT number.
    */
    'vatNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "countryOfGoverningLaw",
            "baseName": "countryOfGoverningLaw",
            "type": "string"
        },
        {
            "name": "dateOfIncorporation",
            "baseName": "dateOfIncorporation",
            "type": "string"
        },
        {
            "name": "doingBusinessAs",
            "baseName": "doingBusinessAs",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "principalPlaceOfBusiness",
            "baseName": "principalPlaceOfBusiness",
            "type": "Address"
        },
        {
            "name": "registeredAddress",
            "baseName": "registeredAddress",
            "type": "Address"
        },
        {
            "name": "registrationNumber",
            "baseName": "registrationNumber",
            "type": "string"
        },
        {
            "name": "taxAbsent",
            "baseName": "taxAbsent",
            "type": "boolean | null"
        },
        {
            "name": "taxInformation",
            "baseName": "taxInformation",
            "type": "Array<TaxInformation>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Trust.TypeEnum"
        },
        {
            "name": "undefinedBeneficiaryInfo",
            "baseName": "undefinedBeneficiaryInfo",
            "type": "Array<UndefinedBeneficiary>"
        },
        {
            "name": "vatAbsenceReason",
            "baseName": "vatAbsenceReason",
            "type": "Trust.VatAbsenceReasonEnum"
        },
        {
            "name": "vatNumber",
            "baseName": "vatNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Trust.attributeTypeMap;
    }
}

export namespace Trust {
    export enum TypeEnum {
        CashManagementTrust = 'cashManagementTrust',
        CorporateUnitTrust = 'corporateUnitTrust',
        DeceasedEstate = 'deceasedEstate',
        DiscretionaryInvestmentTrust = 'discretionaryInvestmentTrust',
        DiscretionaryServicesManagementTrust = 'discretionaryServicesManagementTrust',
        DiscretionaryTradingTrust = 'discretionaryTradingTrust',
        FirstHomeSaverAccountsTrust = 'firstHomeSaverAccountsTrust',
        FixedTrust = 'fixedTrust',
        FixedUnitTrust = 'fixedUnitTrust',
        HybridTrust = 'hybridTrust',
        ListedPublicUnitTrust = 'listedPublicUnitTrust',
        OtherTrust = 'otherTrust',
        PooledSuperannuationTrust = 'pooledSuperannuationTrust',
        PublicTradingTrust = 'publicTradingTrust',
        UnlistedPublicUnitTrust = 'unlistedPublicUnitTrust'
    }
    export enum VatAbsenceReasonEnum {
        IndustryExemption = 'industryExemption',
        BelowTaxThreshold = 'belowTaxThreshold'
    }
}

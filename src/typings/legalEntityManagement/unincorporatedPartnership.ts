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

export class UnincorporatedPartnership {
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.
    */
    'countryOfGoverningLaw': string;
    /**
    * The date when the legal arrangement was incorporated in YYYY-MM-DD format.
    */
    'dateOfIncorporation'?: string;
    /**
    * Short description about the Legal Arrangement.
    */
    'description'?: string;
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
    * The tax information of the entity.
    */
    'taxInformation'?: Array<TaxInformation>;
    /**
    * Type of Partnership.  Possible values: *  **limitedPartnership** *  **generalPartnership** *  **familyPartnership** *  **commercialPartnership** *  **publicPartnership** *  **otherPartnership** *  **gbr** *  **gmbh** *  **kgaa** *  **cv** *  **vof** *  **maatschap** *  **privateFundLimitedPartnership** *  **businessTrustEntity** *  **businessPartnership** *  **limitedLiabilityPartnership** *  **eg** *  **cooperative** *  **vos** *  **comunidadDeBienes** *  **herenciaYacente** *  **comunidadDePropietarios** *  **sep** *  **sca** *  **bt** *  **kkt** *  **scs** *  **snc**  
    */
    'type'?: UnincorporatedPartnership.TypeEnum;
    /**
    * The reason for not providing a VAT number.  Possible values: **industryExemption**, **belowTaxThreshold**.
    */
    'vatAbsenceReason'?: UnincorporatedPartnership.VatAbsenceReasonEnum;
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
            "name": "description",
            "baseName": "description",
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
            "name": "taxInformation",
            "baseName": "taxInformation",
            "type": "Array<TaxInformation>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UnincorporatedPartnership.TypeEnum"
        },
        {
            "name": "vatAbsenceReason",
            "baseName": "vatAbsenceReason",
            "type": "UnincorporatedPartnership.VatAbsenceReasonEnum"
        },
        {
            "name": "vatNumber",
            "baseName": "vatNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UnincorporatedPartnership.attributeTypeMap;
    }
}

export namespace UnincorporatedPartnership {
    export enum TypeEnum {
        LimitedPartnership = <any> 'limitedPartnership',
        GeneralPartnership = <any> 'generalPartnership',
        FamilyPartnership = <any> 'familyPartnership',
        CommercialPartnership = <any> 'commercialPartnership',
        PublicPartnership = <any> 'publicPartnership',
        OtherPartnership = <any> 'otherPartnership',
        Gbr = <any> 'gbr',
        Gmbh = <any> 'gmbh',
        Kgaa = <any> 'kgaa',
        Cv = <any> 'cv',
        Vof = <any> 'vof',
        Maatschap = <any> 'maatschap',
        PrivateFundLimitedPartnership = <any> 'privateFundLimitedPartnership',
        BusinessTrustEntity = <any> 'businessTrustEntity',
        BusinessPartnership = <any> 'businessPartnership',
        LimitedLiabilityPartnership = <any> 'limitedLiabilityPartnership',
        Eg = <any> 'eg',
        Cooperative = <any> 'cooperative',
        Vos = <any> 'vos',
        ComunidadDeBienes = <any> 'comunidadDeBienes',
        HerenciaYacente = <any> 'herenciaYacente',
        ComunidadDePropietarios = <any> 'comunidadDePropietarios',
        Sep = <any> 'sep',
        Sca = <any> 'sca',
        Bt = <any> 'bt',
        Kkt = <any> 'kkt',
        Scs = <any> 'scs',
        Snc = <any> 'snc'
    }
    export enum VatAbsenceReasonEnum {
        IndustryExemption = <any> 'industryExemption',
        BelowTaxThreshold = <any> 'belowTaxThreshold'
    }
}

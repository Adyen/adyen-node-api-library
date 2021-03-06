/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/platforms). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder ```
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {LegalArrangementEntityDetail} from './legalArrangementEntityDetail';
import {ViasAddress} from './viasAddress';

export class LegalArrangementDetail {
    'address'?: ViasAddress;
    /**
    * Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement. Required when updating an existing legal arrangement entry in an `/updateAccountHolder` request.
    */
    'legalArrangementCode'?: string;
    /**
    * Array that contains information about the entities or members that are part of the legal arrangement.
    */
    'legalArrangementEntities'?: Array<LegalArrangementEntityDetail>;
    /**
    * Your reference for the legal arrangement. Must be between 3 to 128 characters.
    */
    'legalArrangementReference'?: string;
    /**
    * The structure of the legal arrangement as defined according to legislations in the country.   Possible values: **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, **UnlistedPublicUnitTrust**, **LimitedPartnership**, **FamilyPartnership**, **OtherPartnership**.
    */
    'legalForm'?: LegalArrangementDetail.LegalFormEnum;
    /**
    * The legal name of the legal arrangement.
    */
    'name'?: string;
    /**
    * The registration number of the legal arrangement.
    */
    'registrationNumber'?: string;
    /**
    * The tax identification number of the legal arrangement.
    */
    'taxNumber'?: string;
    /**
    * The type of legal arrangement.  Possible values:  - **Trust** - A legal agreement where the account holder is a trustee that manages assets for beneficiaries. - **Partnership** - A legal arrangement where the account holder is a partner that has an agreement with one or more partners to manage, operate and share profits of their jointly-owned business.
    */
    'type'?: LegalArrangementDetail.TypeEnum;

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
        CashManagementTrust = <any> 'CashManagementTrust',
        CorporateUnitTrust = <any> 'CorporateUnitTrust',
        DeceasedEstate = <any> 'DeceasedEstate',
        DiscretionaryInvestmentTrust = <any> 'DiscretionaryInvestmentTrust',
        DiscretionaryServicesManagementTrust = <any> 'DiscretionaryServicesManagementTrust',
        DiscretionaryTradingTrust = <any> 'DiscretionaryTradingTrust',
        FirstHomeSaverAccountsTrust = <any> 'FirstHomeSaverAccountsTrust',
        FixedTrust = <any> 'FixedTrust',
        FixedUnitTrust = <any> 'FixedUnitTrust',
        HybridTrust = <any> 'HybridTrust',
        ListedPublicUnitTrust = <any> 'ListedPublicUnitTrust',
        OtherTrust = <any> 'OtherTrust',
        PooledSuperannuationTrust = <any> 'PooledSuperannuationTrust',
        PublicTradingTrust = <any> 'PublicTradingTrust',
        UnlistedPublicUnitTrust = <any> 'UnlistedPublicUnitTrust',
        LimitedPartnership = <any> 'LimitedPartnership',
        FamilyPartnership = <any> 'FamilyPartnership',
        OtherPartnership = <any> 'OtherPartnership'
    }
    export enum TypeEnum {
        Partnership = <any> 'Partnership',
        Trust = <any> 'Trust'
    }
}

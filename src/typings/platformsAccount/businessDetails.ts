/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ShareholderContact } from './shareholderContact';
import { SignatoryContact } from './signatoryContact';
import { UltimateParentCompany } from './ultimateParentCompany';

export class BusinessDetails {
    /**
    * The registered name of the company (if it differs from the legal name of the company).
    */
    'doingBusinessAs'?: string;
    /**
    * The legal name of the company.
    */
    'legalBusinessName'?: string;
    /**
    * Information about the parent public company. Required if the account holder is 100% owned by a publicly listed company.
    */
    'listedUltimateParentCompany'?: Array<UltimateParentCompany>;
    /**
    * The registration number of the company.
    */
    'registrationNumber'?: string;
    /**
    * Array containing information about individuals associated with the account holder either through ownership or control. For details about how you can identify them, refer to [Identity check](https://docs.adyen.com/platforms/verification-checks/identity-check).
    */
    'shareholders'?: Array<ShareholderContact>;
    /**
    * Signatories associated with the company. Each array entry should represent one signatory.
    */
    'signatories'?: Array<SignatoryContact>;
    /**
    * Market Identifier Code (MIC).
    */
    'stockExchange'?: string;
    /**
    * International Securities Identification Number (ISIN).
    */
    'stockNumber'?: string;
    /**
    * Stock Ticker symbol.
    */
    'stockTicker'?: string;
    /**
    * The tax ID of the company.
    */
    'taxId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "doingBusinessAs",
            "baseName": "doingBusinessAs",
            "type": "string"
        },
        {
            "name": "legalBusinessName",
            "baseName": "legalBusinessName",
            "type": "string"
        },
        {
            "name": "listedUltimateParentCompany",
            "baseName": "listedUltimateParentCompany",
            "type": "Array<UltimateParentCompany>"
        },
        {
            "name": "registrationNumber",
            "baseName": "registrationNumber",
            "type": "string"
        },
        {
            "name": "shareholders",
            "baseName": "shareholders",
            "type": "Array<ShareholderContact>"
        },
        {
            "name": "signatories",
            "baseName": "signatories",
            "type": "Array<SignatoryContact>"
        },
        {
            "name": "stockExchange",
            "baseName": "stockExchange",
            "type": "string"
        },
        {
            "name": "stockNumber",
            "baseName": "stockNumber",
            "type": "string"
        },
        {
            "name": "stockTicker",
            "baseName": "stockTicker",
            "type": "string"
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BusinessDetails.attributeTypeMap;
    }
}


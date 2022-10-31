/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { Split } from './split';
import { ThreeDSecureData } from './threeDSecureData';

export class TechnicalCancelRequest {
    /**
    * This field contains additional data, which may be required for a particular modification request.  The additionalData object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    'modificationAmount'?: Amount;
    'mpiData'?: ThreeDSecureData;
    /**
    * The original merchant reference to cancel.
    */
    'originalMerchantReference': string;
    /**
    * Your reference for the payment modification. This reference is visible in Customer Area and in reports. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For details, refer to [Providing split information](https://docs.adyen.com/marketplaces-and-platforms/processing-payments#providing-split-information).
    */
    'splits'?: Array<Split>;
    /**
    * The transaction reference provided by the PED. For point-of-sale integrations only.
    */
    'tenderReference'?: string;
    /**
    * Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.
    */
    'uniqueTerminalId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "modificationAmount",
            "baseName": "modificationAmount",
            "type": "Amount"
        },
        {
            "name": "mpiData",
            "baseName": "mpiData",
            "type": "ThreeDSecureData"
        },
        {
            "name": "originalMerchantReference",
            "baseName": "originalMerchantReference",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        },
        {
            "name": "tenderReference",
            "baseName": "tenderReference",
            "type": "string"
        },
        {
            "name": "uniqueTerminalId",
            "baseName": "uniqueTerminalId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TechnicalCancelRequest.attributeTypeMap;
    }
}


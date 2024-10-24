/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SourceOfFunds } from './sourceOfFunds';
import { WebData } from './webData';
import { WebDataExemption } from './webDataExemption';

export class BusinessLineInfo {
    /**
    * The capability for which you are creating the business line.  Possible values: **receivePayments**, **receiveFromPlatformPayments**, **issueBankAccount**
    *
	* @deprecated since Legal Entity Management API v3
	* Use `service` instead.
    */
    'capability'?: BusinessLineInfo.CapabilityEnum;
    /**
    * A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores.
    */
    'industryCode': string;
    /**
    * Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.
    */
    'legalEntityId': string;
    /**
    * A list of channels where goods or services are sold.  Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.  Required only in combination with the `service` **paymentProcessing**.
    */
    'salesChannels'?: Array<string>;
    /**
    * The service for which you are creating the business line.    Possible values: *  **paymentProcessing** *  **banking**  
    */
    'service': BusinessLineInfo.ServiceEnum;
    'sourceOfFunds'?: SourceOfFunds;
    /**
    * List of website URLs where your user\'s goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.
    */
    'webData'?: Array<WebData>;
    'webDataExemption'?: WebDataExemption;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capability",
            "baseName": "capability",
            "type": "BusinessLineInfo.CapabilityEnum"
        },
        {
            "name": "industryCode",
            "baseName": "industryCode",
            "type": "string"
        },
        {
            "name": "legalEntityId",
            "baseName": "legalEntityId",
            "type": "string"
        },
        {
            "name": "salesChannels",
            "baseName": "salesChannels",
            "type": "Array<string>"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "BusinessLineInfo.ServiceEnum"
        },
        {
            "name": "sourceOfFunds",
            "baseName": "sourceOfFunds",
            "type": "SourceOfFunds"
        },
        {
            "name": "webData",
            "baseName": "webData",
            "type": "Array<WebData>"
        },
        {
            "name": "webDataExemption",
            "baseName": "webDataExemption",
            "type": "WebDataExemption"
        }    ];

    static getAttributeTypeMap() {
        return BusinessLineInfo.attributeTypeMap;
    }
}

export namespace BusinessLineInfo {
    export enum CapabilityEnum {
        ReceivePayments = 'receivePayments',
        ReceiveFromPlatformPayments = 'receiveFromPlatformPayments',
        IssueBankAccount = 'issueBankAccount'
    }
    export enum ServiceEnum {
        PaymentProcessing = 'paymentProcessing',
        Banking = 'banking'
    }
}

/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ResourceType } from "./resourceType";


export class Resource {
    "type"?: ResourceType;

    static readonly discriminator: string | undefined = "type";

    static readonly mapping: {[index: string]: string} | undefined = {
        "accountHolder": "AccountHolderResource",
        "balanceAccount": "BalanceAccountResource",
        "legalEntity": "LegalEntityResource",
        "merchantAccount": "MerchantAccountResource",
        "paymentInstrument": "PaymentInstrumentResource",
    };

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ResourceType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Resource.attributeTypeMap;
    }

    public constructor() {
        //this.type = "Resource";
    }
}

export namespace Resource {
}

/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CommonField } from "./commonField";
import { ExternalPlatform } from "./externalPlatform";
import { MerchantDevice } from "./merchantDevice";
import { ShopperInteractionDevice } from "./shopperInteractionDevice";


export class ApplicationInfo {
    "adyenLibrary"?: CommonField;
    "adyenPaymentSource"?: CommonField;
    "externalPlatform"?: ExternalPlatform;
    "merchantApplication"?: CommonField;
    "merchantDevice"?: MerchantDevice;
    "shopperInteractionDevice"?: ShopperInteractionDevice;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "adyenLibrary",
            "baseName": "adyenLibrary",
            "type": "CommonField",
            "format": ""
        },
        {
            "name": "adyenPaymentSource",
            "baseName": "adyenPaymentSource",
            "type": "CommonField",
            "format": ""
        },
        {
            "name": "externalPlatform",
            "baseName": "externalPlatform",
            "type": "ExternalPlatform",
            "format": ""
        },
        {
            "name": "merchantApplication",
            "baseName": "merchantApplication",
            "type": "CommonField",
            "format": ""
        },
        {
            "name": "merchantDevice",
            "baseName": "merchantDevice",
            "type": "MerchantDevice",
            "format": ""
        },
        {
            "name": "shopperInteractionDevice",
            "baseName": "shopperInteractionDevice",
            "type": "ShopperInteractionDevice",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


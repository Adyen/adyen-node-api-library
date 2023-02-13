/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { Name } from './name';

export class FundOrigin {
    'billingAddress'?: Address;
    'shopperName'?: Name;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name"
        }    ];

    static getAttributeTypeMap() {
        return FundOrigin.attributeTypeMap;
    }
}


/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { GrantOffer } from './grantOffer';

export class GrantOffers {
    /**
    * A list of available grant offers.
    */
    'grantOffers': Array<GrantOffer>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "grantOffers",
            "baseName": "grantOffers",
            "type": "Array<GrantOffer>"
        }    ];

    static getAttributeTypeMap() {
        return GrantOffers.attributeTypeMap;
    }
}


/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { GrantOffer } from "./grantOffer";


export class GrantOffers {
    /**
    * A list of available grant offers.
    */
    "grantOffers": Array<GrantOffer>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "grantOffers",
            "baseName": "grantOffers",
            "type": "Array<GrantOffer>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GrantOffers.attributeTypeMap;
    }

    public constructor() {
    }
}


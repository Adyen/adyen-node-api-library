/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { DonationCampaign } from './donationCampaign';

export class DonationCampaignsResponse {
    /**
    * List of active donation campaigns for your merchant account.
    */
    'donationCampaigns'?: Array<DonationCampaign>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "donationCampaigns",
            "baseName": "donationCampaigns",
            "type": "Array<DonationCampaign>"
        }    ];

    static getAttributeTypeMap() {
        return DonationCampaignsResponse.attributeTypeMap;
    }
}


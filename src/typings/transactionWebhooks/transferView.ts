/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransferViewCategoryData } from './transferViewCategoryData';

export class TransferView {
    'categoryData'?: TransferViewCategoryData;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    /**
    * The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven\'t provided any, Adyen generates a unique reference.
    */
    'reference': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "categoryData",
            "baseName": "categoryData",
            "type": "TransferViewCategoryData"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferView.attributeTypeMap;
    }
}


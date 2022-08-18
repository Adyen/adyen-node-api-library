/*
 * The version of the OpenAPI document: v52
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BinDetail } from './binDetail';
import { DSPublicKeyDetail } from './dSPublicKeyDetail';
import { ThreeDS2CardRangeDetail } from './threeDS2CardRangeDetail';

export class ThreeDSAvailabilityResponse {
    'binDetails'?: BinDetail;
    /**
    * List of Directory Server (DS) public keys.
    */
    'dsPublicKeys'?: Array<DSPublicKeyDetail>;
    /**
    * Indicator if 3D Secure 1 is supported.
    */
    'threeDS1Supported'?: boolean;
    /**
    * List of brand and card range pairs.
    */
    'threeDS2CardRangeDetails'?: Array<ThreeDS2CardRangeDetail>;
    /**
    * Indicator if 3D Secure 2 is supported.
    */
    'threeDS2supported'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "binDetails",
            "baseName": "binDetails",
            "type": "BinDetail"
        },
        {
            "name": "dsPublicKeys",
            "baseName": "dsPublicKeys",
            "type": "Array<DSPublicKeyDetail>"
        },
        {
            "name": "threeDS1Supported",
            "baseName": "threeDS1Supported",
            "type": "boolean"
        },
        {
            "name": "threeDS2CardRangeDetails",
            "baseName": "threeDS2CardRangeDetails",
            "type": "Array<ThreeDS2CardRangeDetail>"
        },
        {
            "name": "threeDS2supported",
            "baseName": "threeDS2supported",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDSAvailabilityResponse.attributeTypeMap;
    }
}


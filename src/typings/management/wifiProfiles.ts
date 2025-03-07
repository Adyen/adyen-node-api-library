/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Profile } from './profile';
import { Settings } from './settings';

export class WifiProfiles {
    /**
    * List of remote Wi-Fi profiles.
    */
    'profiles'?: Array<Profile>;
    'settings'?: Settings | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profiles",
            "baseName": "profiles",
            "type": "Array<Profile>"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "Settings | null"
        }    ];

    static getAttributeTypeMap() {
        return WifiProfiles.attributeTypeMap;
    }
}


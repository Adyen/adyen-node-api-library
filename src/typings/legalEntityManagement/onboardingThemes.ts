/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { OnboardingTheme } from "./onboardingTheme";


export class OnboardingThemes {
    /**
    * The next page. Only present if there is a next page.
    */
    "next"?: string;
    /**
    * The previous page. Only present if there is a previous page.
    */
    "previous"?: string;
    /**
    * List of onboarding themes.
    */
    "themes": Array<OnboardingTheme>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "themes",
            "baseName": "themes",
            "type": "Array<OnboardingTheme>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OnboardingThemes.attributeTypeMap;
    }

    public constructor() {
    }
}


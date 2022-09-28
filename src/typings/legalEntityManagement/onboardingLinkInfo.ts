/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class OnboardingLinkInfo {
    /**
    * The language that will be used for the page, specified by a combination of two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. Possible values: **cs-CZ**, **de-DE**, **en-US**, **es-ES**, **it-IT**, **nl-NL**, **no-NO**, **pl-PL**, **pt-PT**, **sv-SE**.   If not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.
    */
    'locale'?: string;
    /**
    * The URL where the user is redirected after they complete hosted onboarding.
    */
    'redirectUrl'?: string;
    /**
    * The unique identifier of the hosted onboarding theme.
    */
    'themeId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirectUrl",
            "type": "string"
        },
        {
            "name": "themeId",
            "baseName": "themeId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OnboardingLinkInfo.attributeTypeMap;
    }
}

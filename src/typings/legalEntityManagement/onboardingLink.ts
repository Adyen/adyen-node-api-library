/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class OnboardingLink {
    /**
    * The URL of the hosted onboarding page where you need to redirect your user. This URL expires after 4 minutes and can only be used once.  If the link expires, you need to create a new link.
    */
    "url"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OnboardingLink.attributeTypeMap;
    }

    public constructor() {
    }
}


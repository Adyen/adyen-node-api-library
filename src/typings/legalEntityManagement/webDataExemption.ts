/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class WebDataExemption {
    /**
    * The reason why the web data was not provided. Possible value: **noOnlinePresence**.
    */
    'reason'?: WebDataExemption.ReasonEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reason",
            "baseName": "reason",
            "type": "WebDataExemption.ReasonEnum"
        }    ];

    static getAttributeTypeMap() {
        return WebDataExemption.attributeTypeMap;
    }
}

export namespace WebDataExemption {
    export enum ReasonEnum {
        NoOnlinePresence = <any> 'noOnlinePresence',
        NotCollectedDuringOnboarding = <any> 'notCollectedDuringOnboarding'
    }
}

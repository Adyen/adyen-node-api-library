/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DeviceRenderOptions {
    /**
    * Supported SDK interface types. Allowed values: * native * html * both
    */
    'sdkInterface'?: DeviceRenderOptions.SdkInterfaceEnum;
    /**
    * UI types supported for displaying specific challenges. Allowed values: * text * singleSelect * outOfBand * otherHtml * multiSelect
    */
    'sdkUiType'?: Array<DeviceRenderOptions.SdkUiTypeEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sdkInterface",
            "baseName": "sdkInterface",
            "type": "DeviceRenderOptions.SdkInterfaceEnum"
        },
        {
            "name": "sdkUiType",
            "baseName": "sdkUiType",
            "type": "Array<DeviceRenderOptions.SdkUiTypeEnum>"
        }    ];

    static getAttributeTypeMap() {
        return DeviceRenderOptions.attributeTypeMap;
    }
}

export namespace DeviceRenderOptions {
    export enum SdkInterfaceEnum {
        Native = <any> 'native',
        Html = <any> 'html',
        Both = <any> 'both'
    }
    export enum SdkUiTypeEnum {
        MultiSelect = <any> 'multiSelect',
        OtherHtml = <any> 'otherHtml',
        OutOfBand = <any> 'outOfBand',
        SingleSelect = <any> 'singleSelect',
        Text = <any> 'text'
    }
}

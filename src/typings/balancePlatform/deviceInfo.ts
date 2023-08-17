/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DeviceInfo {
    /**
    * The technology used to capture the card details.
    */
    'cardCaptureTechnology'?: string;
    /**
    * The name of the device.
    */
    'deviceName'?: string;
    /**
    * The form factor of the device to be provisioned.
    */
    'formFactor'?: string;
    /**
    * The IMEI number of the device being provisioned.
    */
    'imei'?: string;
    /**
    * The 2-digit device type provided on the ISO messages that the token is being provisioned to.
    */
    'isoDeviceType'?: string;
    /**
    * The MSISDN of the device being provisioned.
    */
    'msisdn'?: string;
    /**
    * The name of the device operating system.
    */
    'osName'?: string;
    /**
    * The version of the device operating system.
    */
    'osVersion'?: string;
    /**
    * Different types of payments supported for the network token.
    */
    'paymentTypes'?: Array<string>;
    /**
    * The serial number of the device.
    */
    'serialNumber'?: string;
    /**
    * The architecture or technology used for network token storage.
    */
    'storageTechnology'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardCaptureTechnology",
            "baseName": "cardCaptureTechnology",
            "type": "string"
        },
        {
            "name": "deviceName",
            "baseName": "deviceName",
            "type": "string"
        },
        {
            "name": "formFactor",
            "baseName": "formFactor",
            "type": "string"
        },
        {
            "name": "imei",
            "baseName": "imei",
            "type": "string"
        },
        {
            "name": "isoDeviceType",
            "baseName": "isoDeviceType",
            "type": "string"
        },
        {
            "name": "msisdn",
            "baseName": "msisdn",
            "type": "string"
        },
        {
            "name": "osName",
            "baseName": "osName",
            "type": "string"
        },
        {
            "name": "osVersion",
            "baseName": "osVersion",
            "type": "string"
        },
        {
            "name": "paymentTypes",
            "baseName": "paymentTypes",
            "type": "Array<string>"
        },
        {
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "string"
        },
        {
            "name": "storageTechnology",
            "baseName": "storageTechnology",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DeviceInfo.attributeTypeMap;
    }
}

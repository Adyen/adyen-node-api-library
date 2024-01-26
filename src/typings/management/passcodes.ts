/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Passcodes {
    /**
    * The passcode for the Admin menu and the Settings menu.
    */
    'adminMenuPin'?: string;
    /**
    * The passcode for referenced and unreferenced refunds on standalone terminals.
    */
    'refundPin'?: string;
    /**
    * The passcode to unlock the terminal screen after a timeout.
    */
    'screenLockPin'?: string;
    /**
    * The passcode for the Transactions menu.
    */
    'txMenuPin'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adminMenuPin",
            "baseName": "adminMenuPin",
            "type": "string"
        },
        {
            "name": "refundPin",
            "baseName": "refundPin",
            "type": "string"
        },
        {
            "name": "screenLockPin",
            "baseName": "screenLockPin",
            "type": "string"
        },
        {
            "name": "txMenuPin",
            "baseName": "txMenuPin",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Passcodes.attributeTypeMap;
    }
}


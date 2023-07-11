/*
 * The version of the OpenAPI document: v6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ViasPhoneNumber {
    /**
    * The two-character country code of the phone number. >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. \'NL\').
    */
    'phoneCountryCode'?: string;
    /**
    * The phone number. >The inclusion of the phone number country code is not necessary.
    */
    'phoneNumber'?: string;
    /**
    * The type of the phone number. >The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.
    */
    'phoneType'?: ViasPhoneNumber.PhoneTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneCountryCode",
            "baseName": "phoneCountryCode",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "phoneType",
            "baseName": "phoneType",
            "type": "ViasPhoneNumber.PhoneTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ViasPhoneNumber.attributeTypeMap;
    }
}

export namespace ViasPhoneNumber {
    export enum PhoneTypeEnum {
        Fax = 'Fax',
        Landline = 'Landline',
        Mobile = 'Mobile',
        Sip = 'SIP'
    }
}

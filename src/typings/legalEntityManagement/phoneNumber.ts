/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PhoneNumber {
    /**
    * The full phone number, including the country code. For example, **+3112345678**.
    */
    'number': string;
    /**
    * The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code prefix of the phone number. For example, **US** or **NL**.  The value of the `phoneCountryCode` is determined by the country code digit(s) of `phone.number`
    */
    'phoneCountryCode'?: string;
    /**
    * The type of phone number.  Possible values: **mobile**, **landline**, **sip**, **fax.** 
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "phoneCountryCode",
            "baseName": "phoneCountryCode",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumber.attributeTypeMap;
    }
}


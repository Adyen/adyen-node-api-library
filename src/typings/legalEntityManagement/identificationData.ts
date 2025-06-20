/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class IdentificationData {
    /**
    * The card number of the document that was issued (AU only).
    */
    "cardNumber"?: string;
    /**
    * The expiry date of the document, in YYYY-MM-DD format.
    */
    "expiryDate"?: string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.
    *
	* @deprecated since Legal Entity Management API v1
    */
    "issuerCountry"?: string;
    /**
    * The state or province where the document was issued (AU only).
    */
    "issuerState"?: string;
    /**
    * Applies only to individuals in the US. Set to **true** if the individual does not have an SSN. To verify their identity, Adyen will require them to upload an ID document.
    */
    "nationalIdExempt"?: boolean;
    /**
    * The number in the document.
    */
    "number"?: string;
    /**
    * Type of identity data. For individuals, the following types are supported. See our [onboarding guide](https://docs.adyen.com/platforms/onboard-users/onboarding-steps/?onboarding_type=custom) for other supported countries.  - Australia: **driversLicense**, **passport**  - Hong Kong: **driversLicense**, **nationalIdNumber**, **passport**  - New Zealand: **driversLicense**, **passport**  - Singapore: **driversLicense**, **nationalIdNumber**, **passport**   - All other supported countries: **nationalIdNumber**
    */
    "type": IdentificationData.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cardNumber",
            "baseName": "cardNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "issuerCountry",
            "baseName": "issuerCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "issuerState",
            "baseName": "issuerState",
            "type": "string",
            "format": ""
        },
        {
            "name": "nationalIdExempt",
            "baseName": "nationalIdExempt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IdentificationData.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IdentificationData.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace IdentificationData {
    export enum TypeEnum {
        NationalIdNumber = 'nationalIdNumber',
        Passport = 'passport',
        DriversLicense = 'driversLicense',
        IdentityCard = 'identityCard'
    }
}

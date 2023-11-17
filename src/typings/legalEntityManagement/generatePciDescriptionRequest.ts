/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GeneratePciDescriptionRequest {
    /**
    * An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/marketplaces-and-platforms/additional-for-platform-setup/create-stores/) and [add payment methods](https://docs.adyen.com/marketplaces-and-platforms/payment-methods/) before you generate the questionnaires.  Possible values: *  **eCommerce** *  **pos** *  **ecomMoto** *  **posMoto**  
    */
    'additionalSalesChannels'?: Array<GeneratePciDescriptionRequest.AdditionalSalesChannelsEnum>;
    /**
    * Sets the language of the PCI questionnaire. Its value is a two-character [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code, for example, **en**.
    */
    'language'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalSalesChannels",
            "baseName": "additionalSalesChannels",
            "type": "Array<GeneratePciDescriptionRequest.AdditionalSalesChannelsEnum>"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GeneratePciDescriptionRequest.attributeTypeMap;
    }
}

export namespace GeneratePciDescriptionRequest {
    export enum AdditionalSalesChannelsEnum {
        ECommerce = 'eCommerce',
        EcomMoto = 'ecomMoto',
        Pos = 'pos',
        PosMoto = 'posMoto'
    }
}

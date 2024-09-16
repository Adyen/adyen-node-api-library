/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class OnboardingLinkSettings {
    /**
    * The list of countries the user can choose from in hosted onboarding when `editPrefilledCountry` is allowed.  The value must be in the two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code format.  The array is empty by default, allowing all [countries and regions supported by hosted onboarding](https://docs.adyen.com/platforms/onboard-users/#hosted-onboarding).
    */
    'acceptedCountries'?: Array<string>;
    /**
    * Default value: **false**  Indicates if the user can select the format for their payout account (if applicable).
    */
    'allowBankAccountFormatSelection'?: boolean;
    /**
    * Default value: **false**  Indicates if the user can select a payout account in a different EU/EEA location (including Switzerland and the UK) than the location of their legal entity.
    */
    'allowIntraRegionCrossBorderPayout'?: boolean;
    /**
    * Default value: **true**  Indicates if the user can change their legal entity type.
    */
    'changeLegalEntityType'?: boolean;
    /**
    * Default value: **true**  Indicates if the user can change the country of their legal entity\'s address, for example the registered address of an organization.
    */
    'editPrefilledCountry'?: boolean;
    /**
    * Default value: **true**  Indicates whether the introduction screen is hidden for the user of the individual legal entity type. The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.
    */
    'hideOnboardingIntroductionIndividual'?: boolean;
    /**
    * Default value: **true**  Indicates whether the introduction screen is hidden for the user of the organization legal entity type. The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.
    */
    'hideOnboardingIntroductionOrganization'?: boolean;
    /**
    * Default value: **true**  Indicates whether the introduction screen is hidden for the user of the sole proprietorship legal entity type. The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.
    */
    'hideOnboardingIntroductionSoleProprietor'?: boolean;
    /**
    * Default value: **true**  Indicates whether the introduction screen is hidden for the user of the trust legal entity type. The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.
    */
    'hideOnboardingIntroductionTrust'?: boolean;
    /**
    * Default value: **true**  Indicates if the user can initiate the verification process through open banking providers, like Plaid or Tink.
    */
    'instantBankVerification'?: boolean;
    /**
    * Default value: **false**  Indicates if the user is required to sign a PCI questionnaires for the **ecomMoto** sales channel type.
    */
    'requirePciSignEcomMoto'?: boolean;
    /**
    * Default value: **false**  Indicates if the user is required to sign a PCI questionnaires for the **eCommerce** sales channel type.
    */
    'requirePciSignEcommerce'?: boolean;
    /**
    * Default value: **false**  Indicates if the user is required to sign a PCI questionnaires for the **pos** sales channel type.
    */
    'requirePciSignPos'?: boolean;
    /**
    * Default value: **false**  Indicates if the user is required to sign a PCI questionnaires for the **posMoto** sales channel type.
    */
    'requirePciSignPosMoto'?: boolean;
    /**
    * The maximum number of transfer instruments the user can create.
    */
    'transferInstrumentLimit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acceptedCountries",
            "baseName": "acceptedCountries",
            "type": "Array<string>"
        },
        {
            "name": "allowBankAccountFormatSelection",
            "baseName": "allowBankAccountFormatSelection",
            "type": "boolean"
        },
        {
            "name": "allowIntraRegionCrossBorderPayout",
            "baseName": "allowIntraRegionCrossBorderPayout",
            "type": "boolean"
        },
        {
            "name": "changeLegalEntityType",
            "baseName": "changeLegalEntityType",
            "type": "boolean"
        },
        {
            "name": "editPrefilledCountry",
            "baseName": "editPrefilledCountry",
            "type": "boolean"
        },
        {
            "name": "hideOnboardingIntroductionIndividual",
            "baseName": "hideOnboardingIntroductionIndividual",
            "type": "boolean"
        },
        {
            "name": "hideOnboardingIntroductionOrganization",
            "baseName": "hideOnboardingIntroductionOrganization",
            "type": "boolean"
        },
        {
            "name": "hideOnboardingIntroductionSoleProprietor",
            "baseName": "hideOnboardingIntroductionSoleProprietor",
            "type": "boolean"
        },
        {
            "name": "hideOnboardingIntroductionTrust",
            "baseName": "hideOnboardingIntroductionTrust",
            "type": "boolean"
        },
        {
            "name": "instantBankVerification",
            "baseName": "instantBankVerification",
            "type": "boolean"
        },
        {
            "name": "requirePciSignEcomMoto",
            "baseName": "requirePciSignEcomMoto",
            "type": "boolean"
        },
        {
            "name": "requirePciSignEcommerce",
            "baseName": "requirePciSignEcommerce",
            "type": "boolean"
        },
        {
            "name": "requirePciSignPos",
            "baseName": "requirePciSignPos",
            "type": "boolean"
        },
        {
            "name": "requirePciSignPosMoto",
            "baseName": "requirePciSignPosMoto",
            "type": "boolean"
        },
        {
            "name": "transferInstrumentLimit",
            "baseName": "transferInstrumentLimit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return OnboardingLinkSettings.attributeTypeMap;
    }
}


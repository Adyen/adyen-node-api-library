/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AdditionalSettings } from './additionalSettings';

export class CreateCompanyWebhookRequest {
    /**
    * Indicates if expired SSL certificates are accepted. Default value: **false**.
    */
    'acceptsExpiredCertificate'?: boolean;
    /**
    * Indicates if self-signed SSL certificates are accepted. Default value: **false**.
    */
    'acceptsSelfSignedCertificate'?: boolean;
    /**
    * Indicates if untrusted SSL certificates are accepted. Default value: **false**.
    */
    'acceptsUntrustedRootCertificate'?: boolean;
    /**
    * Indicates if the webhook configuration is active. The field must be **true** for us to send webhooks about events related an account.
    */
    'active': boolean;
    'additionalSettings'?: AdditionalSettings;
    /**
    * Format or protocol for receiving webhooks. Possible values: * **soap** * **http** * **json** 
    */
    'communicationFormat': CreateCompanyWebhookRequest.CommunicationFormatEnum;
    /**
    * Your description for this webhook configuration.
    */
    'description'?: string;
    /**
    * Shows how merchant accounts are filtered when configuring the webhook.   Possible values: *  **allAccounts** : Includes all merchant accounts, and does not require specifying `filterMerchantAccounts`. *  **includeAccounts** : The webhook is configured for the merchant accounts listed in `filterMerchantAccounts`. *  **excludeAccounts** : The webhook is not configured for the merchant accounts listed in `filterMerchantAccounts`.  
    */
    'filterMerchantAccountType': CreateCompanyWebhookRequest.FilterMerchantAccountTypeEnum;
    /**
    * A list of merchant account names that are included or excluded from receiving the webhook. Inclusion or exclusion is based on the value defined for `filterMerchantAccountType`.  Required if `filterMerchantAccountType` is either: * **includeAccounts** * **excludeAccounts**  Not needed for `filterMerchantAccountType`: **allAccounts**.
    */
    'filterMerchantAccounts': Array<string>;
    /**
    * Network type for Terminal API notification webhooks. Possible values: * **public** * **local**  Default Value: **public**.
    */
    'networkType'?: CreateCompanyWebhookRequest.NetworkTypeEnum;
    /**
    * Password to access the webhook URL.
    */
    'password'?: string;
    /**
    * Indicates if the SOAP action header needs to be populated. Default value: **false**.  Only applies if `communicationFormat`: **soap**.
    */
    'populateSoapActionHeader'?: boolean;
    /**
    * SSL version to access the public webhook URL specified in the `url` field. Possible values: * **TLSv1.3** * **TLSv1.2** * **HTTP** - Only allowed on Test environment.  If not specified, the webhook will use `sslVersion`: **TLSv1.2**.
    */
    'sslVersion'?: CreateCompanyWebhookRequest.SslVersionEnum;
    /**
    * The type of webhook that is being created. Possible values are:  - **standard** - **account-settings-notification** - **banktransfer-notification** - **boletobancario-notification** - **directdebit-notification** - **ach-notification-of-change-notification** - **pending-notification** - **ideal-notification** - **ideal-pending-notification** - **report-notification** - **rreq-notification**  Find out more about [standard notification webhooks](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes) and [other types of notifications](https://docs.adyen.com/development-resources/webhooks/understand-notifications#other-notifications).
    */
    'type': string;
    /**
    * Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**.
    */
    'url': string;
    /**
    * Username to access the webhook URL.
    */
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acceptsExpiredCertificate",
            "baseName": "acceptsExpiredCertificate",
            "type": "boolean"
        },
        {
            "name": "acceptsSelfSignedCertificate",
            "baseName": "acceptsSelfSignedCertificate",
            "type": "boolean"
        },
        {
            "name": "acceptsUntrustedRootCertificate",
            "baseName": "acceptsUntrustedRootCertificate",
            "type": "boolean"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "additionalSettings",
            "baseName": "additionalSettings",
            "type": "AdditionalSettings"
        },
        {
            "name": "communicationFormat",
            "baseName": "communicationFormat",
            "type": "CreateCompanyWebhookRequest.CommunicationFormatEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "filterMerchantAccountType",
            "baseName": "filterMerchantAccountType",
            "type": "CreateCompanyWebhookRequest.FilterMerchantAccountTypeEnum"
        },
        {
            "name": "filterMerchantAccounts",
            "baseName": "filterMerchantAccounts",
            "type": "Array<string>"
        },
        {
            "name": "networkType",
            "baseName": "networkType",
            "type": "CreateCompanyWebhookRequest.NetworkTypeEnum"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "populateSoapActionHeader",
            "baseName": "populateSoapActionHeader",
            "type": "boolean"
        },
        {
            "name": "sslVersion",
            "baseName": "sslVersion",
            "type": "CreateCompanyWebhookRequest.SslVersionEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateCompanyWebhookRequest.attributeTypeMap;
    }
}

export namespace CreateCompanyWebhookRequest {
    export enum CommunicationFormatEnum {
        Http = 'http',
        Json = 'json',
        Soap = 'soap'
    }
    export enum FilterMerchantAccountTypeEnum {
        AllAccounts = 'allAccounts',
        ExcludeAccounts = 'excludeAccounts',
        IncludeAccounts = 'includeAccounts'
    }
    export enum NetworkTypeEnum {
        Local = 'local',
        Public = 'public'
    }
    export enum SslVersionEnum {
        Http = 'HTTP',
        Tlsv12 = 'TLSv1.2',
        Tlsv13 = 'TLSv1.3'
    }
}

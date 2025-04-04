/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AdditionalSettingsResponse } from './additionalSettingsResponse';
import { WebhookLinks } from './webhookLinks';

export class Webhook {
    '_links'?: WebhookLinks;
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
    * Reference to the account the webook is set on.
    */
    'accountReference'?: string;
    /**
    * Indicates if the webhook configuration is active. The field must be **true** for you to receive webhooks about events related an account.
    */
    'active': boolean;
    'additionalSettings'?: AdditionalSettingsResponse;
    /**
    * The alias of our SSL certificate. When you receive a notification from us, the alias from the HMAC signature will match this alias.
    */
    'certificateAlias'?: string;
    /**
    * Format or protocol for receiving webhooks. Possible values: * **soap** * **http** * **json** 
    */
    'communicationFormat': Webhook.CommunicationFormatEnum;
    /**
    * Your description for this webhook configuration.
    */
    'description'?: string;
    /**
    * SSL version to access the public webhook URL specified in the `url` field. Possible values: * **TLSv1.3** * **TLSv1.2** * **HTTP** - Only allowed on Test environment.  If not specified, the webhook will use `sslVersion`: **TLSv1.2**.
    */
    'encryptionProtocol'?: Webhook.EncryptionProtocolEnum;
    /**
    * Shows how merchant accounts are included in company-level webhooks. Possible values: * **includeAccounts** * **excludeAccounts** * **allAccounts**: Includes all merchant accounts, and does not require specifying `filterMerchantAccounts`.
    */
    'filterMerchantAccountType'?: Webhook.FilterMerchantAccountTypeEnum;
    /**
    * A list of merchant account names that are included or excluded from receiving the webhook. Inclusion or exclusion is based on the value defined for `filterMerchantAccountType`.  Required if `filterMerchantAccountType` is either: * **includeAccounts** * **excludeAccounts**  Not needed for `filterMerchantAccountType`: **allAccounts**.
    */
    'filterMerchantAccounts'?: Array<string>;
    /**
    * Indicates if the webhook configuration has errors that need troubleshooting. If the value is **true**, troubleshoot the configuration using the [testing endpoint](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookid}/test).
    */
    'hasError'?: boolean;
    /**
    * Indicates if the webhook is password protected.
    */
    'hasPassword'?: boolean;
    /**
    * The [checksum](https://en.wikipedia.org/wiki/Key_checksum_value) of the HMAC key generated for this webhook. You can use this value to uniquely identify the HMAC key configured for this webhook.
    */
    'hmacKeyCheckValue'?: string;
    /**
    * Unique identifier for this webhook.
    */
    'id'?: string;
    /**
    * Network type for Terminal API details webhooks.
    */
    'networkType'?: Webhook.NetworkTypeEnum;
    /**
    * Indicates if the SOAP action header needs to be populated. Default value: **false**.  Only applies if `communicationFormat`: **soap**.
    */
    'populateSoapActionHeader'?: boolean;
    /**
    * The type of webhook. Possible values are:  - **standard** - **account-settings-notification** - **banktransfer-notification** - **boletobancario-notification** - **directdebit-notification** - **ach-notification-of-change-notification** - **pending-notification** - **ideal-notification** - **ideal-pending-notification** - **report-notification** - **terminal-api-notification** - **terminal-settings** - **terminal-boarding**  Find out more about [standard notification webhooks](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes) and [other types of notifications](https://docs.adyen.com/development-resources/webhooks/understand-notifications#other-notifications).
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
            "name": "_links",
            "baseName": "_links",
            "type": "WebhookLinks"
        },
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
            "name": "accountReference",
            "baseName": "accountReference",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "additionalSettings",
            "baseName": "additionalSettings",
            "type": "AdditionalSettingsResponse"
        },
        {
            "name": "certificateAlias",
            "baseName": "certificateAlias",
            "type": "string"
        },
        {
            "name": "communicationFormat",
            "baseName": "communicationFormat",
            "type": "Webhook.CommunicationFormatEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "encryptionProtocol",
            "baseName": "encryptionProtocol",
            "type": "Webhook.EncryptionProtocolEnum"
        },
        {
            "name": "filterMerchantAccountType",
            "baseName": "filterMerchantAccountType",
            "type": "Webhook.FilterMerchantAccountTypeEnum"
        },
        {
            "name": "filterMerchantAccounts",
            "baseName": "filterMerchantAccounts",
            "type": "Array<string>"
        },
        {
            "name": "hasError",
            "baseName": "hasError",
            "type": "boolean"
        },
        {
            "name": "hasPassword",
            "baseName": "hasPassword",
            "type": "boolean"
        },
        {
            "name": "hmacKeyCheckValue",
            "baseName": "hmacKeyCheckValue",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "networkType",
            "baseName": "networkType",
            "type": "Webhook.NetworkTypeEnum"
        },
        {
            "name": "populateSoapActionHeader",
            "baseName": "populateSoapActionHeader",
            "type": "boolean"
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
        return Webhook.attributeTypeMap;
    }
}

export namespace Webhook {
    export enum CommunicationFormatEnum {
        Http = <any> 'http',
        Json = <any> 'json',
        Soap = <any> 'soap'
    }
    export enum EncryptionProtocolEnum {
        Http = <any> 'HTTP',
        Tlsv12 = <any> 'TLSv1.2',
        Tlsv13 = <any> 'TLSv1.3'
    }
    export enum FilterMerchantAccountTypeEnum {
        AllAccounts = <any> 'allAccounts',
        ExcludeAccounts = <any> 'excludeAccounts',
        IncludeAccounts = <any> 'includeAccounts'
    }
    export enum NetworkTypeEnum {
        Local = <any> 'local',
        Public = <any> 'public'
    }
}

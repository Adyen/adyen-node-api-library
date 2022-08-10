/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AdditionalSettings } from './additionalSettings';

export class CreateMerchantWebhookRequest {
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
    'communicationFormat': CreateMerchantWebhookRequest.CommunicationFormatEnum;
    /**
    * Your description for this webhook configuration.
    */
    'description'?: string;
    /**
    * Network type for Terminal API notification webhooks. Possible values: * **public** * **local**  Default Value: **public**.
    */
    'networkType'?: CreateMerchantWebhookRequest.NetworkTypeEnum;
    /**
    * Password to access the webhook URL.
    */
    'password'?: string;
    /**
    * Indicates if the SOAP action header needs to be populated. Default value: **false**.  Only applies if `communicationFormat`: **soap**.
    */
    'populateSoapActionHeader'?: boolean;
    /**
    * SSL version to access the public webhook URL specified in the `url` field. Possible values: * **TLSv1.2** * **HTTP** - Only allowed on Test environment.  If not specified, the webhook will use `sslVersion`: **TLSv1.2**.
    */
    'sslVersion'?: CreateMerchantWebhookRequest.SslVersionEnum;
    /**
    * The type of webhook that is being created. Possible values are:  - **standard** - **account-settings-notification** - **banktransfer-notification** - **boletobancario-notification** - **directdebit-notification** - **pending-notification** - **ideal-notification** - **ideal-pending-notification** - **report-notification** - **rreq-notification**  Find out more about [standard notification webhooks](https://docs.adyen.com/development-resources/webhooks/understand-notifications#event-codes) and [other types of notifications](https://docs.adyen.com/development-resources/webhooks/understand-notifications#other-notifications).
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
            "type": "CreateMerchantWebhookRequest.CommunicationFormatEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "networkType",
            "baseName": "networkType",
            "type": "CreateMerchantWebhookRequest.NetworkTypeEnum"
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
            "type": "CreateMerchantWebhookRequest.SslVersionEnum"
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
        return CreateMerchantWebhookRequest.attributeTypeMap;
    }
}

export namespace CreateMerchantWebhookRequest {
    export enum CommunicationFormatEnum {
        Http = <any> 'HTTP',
        Json = <any> 'JSON',
        Soap = <any> 'SOAP'
    }
    export enum NetworkTypeEnum {
        Local = <any> 'LOCAL',
        Public = <any> 'PUBLIC'
    }
    export enum SslVersionEnum {
        Http = <any> 'HTTP',
        Ssl = <any> 'SSL',
        Sslv3 = <any> 'SSLV3',
        SslInsecureCiphers = <any> 'SSL_INSECURE_CIPHERS',
        Tls = <any> 'TLS',
        Tlsv1 = <any> 'TLSV1',
        Tlsv11 = <any> 'TLSV1_1',
        Tlsv12 = <any> 'TLSV1_2',
        Tlsv1InsecureCiphers = <any> 'TLSV1_INSECURE_CIPHERS'
    }
}

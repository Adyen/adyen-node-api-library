/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AdditionalSettings } from './additionalSettings';

export class UpdateMerchantWebhookRequest {
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
    'active'?: boolean;
    'additionalSettings'?: AdditionalSettings;
    /**
    * Format or protocol for receiving webhooks. Possible values: * **soap** * **http** * **json** 
    */
    'communicationFormat'?: UpdateMerchantWebhookRequest.CommunicationFormatEnum;
    /**
    * Your description for this webhook configuration.
    */
    'description'?: string;
    /**
    * Network type for Terminal API notification webhooks. Possible values: * **public** * **local**  Default Value: **public**.
    */
    'networkType'?: UpdateMerchantWebhookRequest.NetworkTypeEnum;
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
    'sslVersion'?: UpdateMerchantWebhookRequest.SslVersionEnum;
    /**
    * Public URL where webhooks will be sent, for example **https://www.domain.com/webhook-endpoint**.
    */
    'url'?: string;
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
            "type": "UpdateMerchantWebhookRequest.CommunicationFormatEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "networkType",
            "baseName": "networkType",
            "type": "UpdateMerchantWebhookRequest.NetworkTypeEnum"
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
            "type": "UpdateMerchantWebhookRequest.SslVersionEnum"
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
        return UpdateMerchantWebhookRequest.attributeTypeMap;
    }
}

export namespace UpdateMerchantWebhookRequest {
    export enum CommunicationFormatEnum {
        Http = 'http',
        Json = 'json',
        Soap = 'soap'
    }
    export enum NetworkTypeEnum {
        Local = 'LOCAL',
        Public = 'PUBLIC'
    }
    export enum SslVersionEnum {
        Http = 'HTTP',
        Ssl = 'SSL',
        Sslv3 = 'SSLv3',
        Tls = 'TLS',
        Tlsv1 = 'TLSv1',
        Tlsv11 = 'TLSv1.1',
        Tlsv12 = 'TLSv1.2',
        Tlsv13 = 'TLSv1.3'
    }
}

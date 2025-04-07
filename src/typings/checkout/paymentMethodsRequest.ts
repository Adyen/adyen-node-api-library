/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { EncryptedOrderData } from './encryptedOrderData';

export class PaymentMethodsRequest {
    /**
    * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * List of payment methods to be presented to the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).  Example: `\"allowedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'allowedPaymentMethods'?: Array<string>;
    'amount'?: Amount;
    /**
    * List of payment methods to be hidden from the shopper. To refer to payment methods, use their [payment method type](https://docs.adyen.com/payment-methods/payment-method-types).  Example: `\"blockedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'blockedPaymentMethods'?: Array<string>;
    /**
    * The platform where a payment transaction takes place. This field can be used for filtering out payment methods that are only available on specific platforms. Possible values: * iOS * Android * Web
    */
    'channel'?: string;
    /**
    * The shopper\'s country code.
    */
    'countryCode'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    'order'?: EncryptedOrderData;
    /**
    * A unique ID that can be used to associate `/paymentMethods` and `/payments` requests with the same shopper transaction, offering insights into conversion rates.
    */
    'shopperConversionId'?: string;
    /**
    * The combination of a language code and a country code to specify the language to be used in the payment.
    */
    'shopperLocale'?: string;
    /**
    * Required for recurring payments.  Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters. > Your reference must not include personally identifiable information (PII) such as name or email address.
    */
    'shopperReference'?: string;
    /**
    * Boolean value indicating whether the card payment method should be split into separate debit and credit options.
    */
    'splitCardFundingSources'?: boolean;
    /**
    * Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.
    */
    'store'?: string;
    /**
    * Specifies how payment methods should be filtered based on the \'store\' parameter:   - \'exclusive\': Only payment methods belonging to the specified \'store\' are returned.   - \'inclusive\': Payment methods from the \'store\' and those not associated with any other store are returned.
    */
    'storeFiltrationMode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "allowedPaymentMethods",
            "baseName": "allowedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "blockedPaymentMethods",
            "baseName": "blockedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "PaymentMethodsRequest.ChannelEnum"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "EncryptedOrderData"
        },
        {
            "name": "shopperConversionId",
            "baseName": "shopperConversionId",
            "type": "string"
        },
        {
            "name": "shopperLocale",
            "baseName": "shopperLocale",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "splitCardFundingSources",
            "baseName": "splitCardFundingSources",
            "type": "boolean"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "storeFiltrationMode",
            "baseName": "storeFiltrationMode",
            "type": "PaymentMethodsRequest.StoreFiltrationModeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodsRequest.attributeTypeMap;
    }
}

export namespace PaymentMethodsRequest {
    export enum ChannelEnum {
        IOs = <any> 'iOS',
        Android = <any> 'Android',
        Web = <any> 'Web'
    }
    export enum StoreFiltrationModeEnum {
        Exclusive = <any> 'exclusive',
        Inclusive = <any> 'inclusive',
        SkipFilter = <any> 'skipFilter'
    }
}

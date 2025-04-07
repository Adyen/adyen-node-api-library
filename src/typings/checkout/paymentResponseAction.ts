/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CheckoutAwaitAction } from './checkoutAwaitAction';
import { CheckoutBankTransferAction } from './checkoutBankTransferAction';
import { CheckoutDelegatedAuthenticationAction } from './checkoutDelegatedAuthenticationAction';
import { CheckoutNativeRedirectAction } from './checkoutNativeRedirectAction';
import { CheckoutQrCodeAction } from './checkoutQrCodeAction';
import { CheckoutRedirectAction } from './checkoutRedirectAction';
import { CheckoutSDKAction } from './checkoutSDKAction';
import { CheckoutThreeDS2Action } from './checkoutThreeDS2Action';
import { CheckoutVoucherAction } from './checkoutVoucherAction';

/**
* Action to be taken for completing the payment.
*/
export class PaymentResponseAction {
    /**
    * Encoded payment data.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * **await**
    */
    'type': string;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
    /**
    * The account number of the bank transfer.
    */
    'accountNumber'?: string;
    /**
    * The name of the account holder.
    */
    'beneficiary'?: string;
    /**
    * The BIC of the IBAN.
    */
    'bic'?: string;
    /**
    * The URL to download the voucher.
    */
    'downloadUrl'?: string;
    /**
    * The IBAN of the bank transfer.
    */
    'iban'?: string;
    /**
    * The voucher reference code.
    */
    'reference'?: string;
    /**
    * The routing number of the bank transfer.
    */
    'routingNumber'?: string;
    /**
    * The shopper email.
    */
    'shopperEmail'?: string;
    /**
    * The sort code of the bank transfer.
    */
    'sortCode'?: string;
    'totalAmount'?: Amount;
    /**
    * A token needed to authorise a payment.
    */
    'authorisationToken'?: string;
    /**
    * A token to pass to the 3DS2 Component to get the fingerprint.
    */
    'token'?: string;
    /**
    * When the redirect URL must be accessed via POST, use this data to post to the redirect URL.
    */
    'data'?: { [key: string]: string; };
    /**
    * Specifies the HTTP method, for example GET or POST.
    */
    'method'?: string;
    /**
    * Native SDK\'s redirect data containing the direct issuer link and state data that must be submitted to the /v1/nativeRedirect/redirectResult.
    */
    'nativeRedirectData'?: string;
    /**
    * The date time of the voucher expiry.
    */
    'expiresAt'?: string;
    /**
    * The contents of the QR code as a UTF8 string.
    */
    'qrCodeData'?: string;
    /**
    * The data to pass to the SDK.
    */
    'sdkData'?: { [key: string]: string; };
    /**
    * A subtype of the token.
    */
    'subtype'?: string;
    /**
    * The voucher alternative reference code.
    */
    'alternativeReference'?: string;
    /**
    * A collection institution number (store number) for Econtext Pay-Easy ATM.
    */
    'collectionInstitutionNumber'?: string;
    /**
    * An entity number of Multibanco.
    */
    'entity'?: string;
    'initialAmount'?: Amount;
    /**
    * The URL to the detailed instructions to make payment using the voucher.
    */
    'instructionsUrl'?: string;
    /**
    * The issuer of the voucher.
    */
    'issuer'?: string;
    /**
    * The shopper telephone number (partially masked).
    */
    'maskedTelephoneNumber'?: string;
    /**
    * The merchant name.
    */
    'merchantName'?: string;
    /**
    * The merchant reference.
    */
    'merchantReference'?: string;
    /**
    * A Base64-encoded token containing all properties of the voucher. For iOS, you can use this to pass a voucher to Apple Wallet.
    */
    'passCreationToken'?: string;
    /**
    * The shopper name.
    */
    'shopperName'?: string;
    'surcharge'?: Amount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentData",
            "baseName": "paymentData",
            "type": "string"
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentResponseAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "beneficiary",
            "baseName": "beneficiary",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "downloadUrl",
            "baseName": "downloadUrl",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routingNumber",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "sortCode",
            "baseName": "sortCode",
            "type": "string"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "Amount"
        },
        {
            "name": "authorisationToken",
            "baseName": "authorisationToken",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "nativeRedirectData",
            "baseName": "nativeRedirectData",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "qrCodeData",
            "baseName": "qrCodeData",
            "type": "string"
        },
        {
            "name": "sdkData",
            "baseName": "sdkData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "string"
        },
        {
            "name": "alternativeReference",
            "baseName": "alternativeReference",
            "type": "string"
        },
        {
            "name": "collectionInstitutionNumber",
            "baseName": "collectionInstitutionNumber",
            "type": "string"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "string"
        },
        {
            "name": "initialAmount",
            "baseName": "initialAmount",
            "type": "Amount"
        },
        {
            "name": "instructionsUrl",
            "baseName": "instructionsUrl",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "maskedTelephoneNumber",
            "baseName": "maskedTelephoneNumber",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "merchantName",
            "type": "string"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "passCreationToken",
            "baseName": "passCreationToken",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "string"
        },
        {
            "name": "surcharge",
            "baseName": "surcharge",
            "type": "Amount"
        }    ];

    static getAttributeTypeMap() {
        return PaymentResponseAction.attributeTypeMap;
    }
}


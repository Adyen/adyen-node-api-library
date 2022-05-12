/**
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2022 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v68/payments ```  ## Release notes Have a look at the [release notes](https://docs.adyen.com/online-payments/release-notes?integration_type=api&version=68) to find out what changed in this version!
 *
 * The version of the OpenAPI document: 68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PaymentDetails {
    /**
    * The payment method type.
    */
    'type'?: PaymentDetails.TypeEnum;
}

export namespace PaymentDetails {
    export enum TypeEnum {
        Alipay = <any> 'alipay',
        Multibanco = <any> 'multibanco',
        BankTransferIban = <any> 'bankTransfer_IBAN',
        Paybright = <any> 'paybright',
        Affirm = <any> 'affirm',
        AffirmPos = <any> 'affirm_pos',
        Trustlyvector = <any> 'trustlyvector',
        Oney = <any> 'oney',
        Facilypay = <any> 'facilypay',
        Facilypay3x = <any> 'facilypay_3x',
        Facilypay4x = <any> 'facilypay_4x',
        Facilypay6x = <any> 'facilypay_6x',
        Facilypay10x = <any> 'facilypay_10x',
        Facilypay12x = <any> 'facilypay_12x',
        Unionpay = <any> 'unionpay',
        KcpBanktransfer = <any> 'kcp_banktransfer',
        KcpPayco = <any> 'kcp_payco',
        KcpCreditcard = <any> 'kcp_creditcard',
        WechatpaySdk = <any> 'wechatpaySDK',
        WechatpayQr = <any> 'wechatpayQR',
        WechatpayWeb = <any> 'wechatpayWeb',
        OnlinebankingIn = <any> 'onlinebanking_IN',
        WalletIn = <any> 'wallet_IN',
        PayuInCashcard = <any> 'payu_IN_cashcard',
        PayuInNb = <any> 'payu_IN_nb',
        UpiQr = <any> 'upi_qr',
        Paytm = <any> 'paytm',
        MolpayEbankingVn = <any> 'molpay_ebanking_VN',
        OpenbankingUk = <any> 'openbanking_UK',
        EbankingFi = <any> 'ebanking_FI',
        MolpayEbankingMy = <any> 'molpay_ebanking_MY',
        MolpayEbankingDirectMy = <any> 'molpay_ebanking_direct_MY',
        Swish = <any> 'swish',
        Twint = <any> 'twint',
        Pix = <any> 'pix',
        Walley = <any> 'walley',
        WalleyB2b = <any> 'walley_b2b',
        MolpayFpx = <any> 'molpay_fpx',
        Konbini = <any> 'konbini',
        DirectEbanking = <any> 'directEbanking',
        Boletobancario = <any> 'boletobancario',
        Neteller = <any> 'neteller',
        Dana = <any> 'dana',
        Paysafecard = <any> 'paysafecard',
        Cashticket = <any> 'cashticket',
        Isracard = <any> 'isracard',
        Ikano = <any> 'ikano',
        Karenmillen = <any> 'karenmillen',
        Oasis = <any> 'oasis',
        Warehouse = <any> 'warehouse',
        PrimeiropayBoleto = <any> 'primeiropay_boleto',
        Mada = <any> 'mada',
        Benefit = <any> 'benefit',
        Knet = <any> 'knet',
        Omannet = <any> 'omannet',
        GopayWallet = <any> 'gopay_wallet',
        Poli = <any> 'poli',
        KcpNaverpay = <any> 'kcp_naverpay',
        OnlinebankingIn = <any> 'onlinebanking_IN',
        Fawry = <any> 'fawry',
        Atome = <any> 'atome',
        Moneybookers = <any> 'moneybookers',
        Naps = <any> 'naps',
        Nordea = <any> 'nordea',
        BoletobancarioBradesco = <any> 'boletobancario_bradesco',
        BoletobancarioItau = <any> 'boletobancario_itau',
        BoletobancarioSantander = <any> 'boletobancario_santander',
        BoletobancarioBancodobrasil = <any> 'boletobancario_bancodobrasil',
        BoletobancarioHsbc = <any> 'boletobancario_hsbc',
        MolpayMaybank2u = <any> 'molpay_maybank2u',
        MolpayCimb = <any> 'molpay_cimb',
        MolpayRhb = <any> 'molpay_rhb',
        MolpayAmb = <any> 'molpay_amb',
        MolpayHlb = <any> 'molpay_hlb',
        MolpayAffinEpg = <any> 'molpay_affin_epg',
        MolpayBankislam = <any> 'molpay_bankislam',
        MolpayPublicbank = <any> 'molpay_publicbank',
        FpxAgrobank = <any> 'fpx_agrobank',
        Touchngo = <any> 'touchngo',
        Maybank2uMae = <any> 'maybank2u_mae',
        Duitnow = <any> 'duitnow',
        WalletIn = <any> 'wallet_IN',
        TwintPos = <any> 'twint_pos',
        AlipayHk = <any> 'alipay_hk',
        AlipayHkWeb = <any> 'alipay_hk_web',
        AlipayHkWap = <any> 'alipay_hk_wap',
        AlipayWap = <any> 'alipay_wap'
    }
}

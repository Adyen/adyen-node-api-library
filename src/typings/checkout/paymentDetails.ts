/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The payment method type.
    */
    'type'?: PaymentDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentDetails.attributeTypeMap;
    }
}

export namespace PaymentDetails {
    export enum TypeEnum {
        Alipay = 'alipay',
        Multibanco = 'multibanco',
        BankTransferIban = 'bankTransfer_IBAN',
        Paybright = 'paybright',
        Paynow = 'paynow',
        AffirmPos = 'affirm_pos',
        Trustly = 'trustly',
        Trustlyvector = 'trustlyvector',
        Oney = 'oney',
        Facilypay = 'facilypay',
        Facilypay3x = 'facilypay_3x',
        Facilypay4x = 'facilypay_4x',
        Facilypay6x = 'facilypay_6x',
        Facilypay10x = 'facilypay_10x',
        Facilypay12x = 'facilypay_12x',
        Unionpay = 'unionpay',
        KcpBanktransfer = 'kcp_banktransfer',
        KcpPayco = 'kcp_payco',
        KcpCreditcard = 'kcp_creditcard',
        WechatpaySdk = 'wechatpaySDK',
        WechatpayQr = 'wechatpayQR',
        WechatpayWeb = 'wechatpayWeb',
        MolpayBoost = 'molpay_boost',
        WalletIn = 'wallet_IN',
        PayuInCashcard = 'payu_IN_cashcard',
        PayuInNb = 'payu_IN_nb',
        UpiQr = 'upi_qr',
        Paytm = 'paytm',
        MolpayEbankingVn = 'molpay_ebanking_VN',
        MolpayEbankingMy = 'molpay_ebanking_MY',
        MolpayEbankingDirectMy = 'molpay_ebanking_direct_MY',
        Swish = 'swish',
        Pix = 'pix',
        Bizum = 'bizum',
        Walley = 'walley',
        WalleyB2b = 'walley_b2b',
        Alma = 'alma',
        Paypo = 'paypo',
        Scalapay = 'scalapay',
        Scalapay3x = 'scalapay_3x',
        Scalapay4x = 'scalapay_4x',
        MolpayFpx = 'molpay_fpx',
        Konbini = 'konbini',
        DirectEbanking = 'directEbanking',
        Boletobancario = 'boletobancario',
        Neteller = 'neteller',
        Paysafecard = 'paysafecard',
        Cashticket = 'cashticket',
        Ikano = 'ikano',
        Karenmillen = 'karenmillen',
        Oasis = 'oasis',
        Warehouse = 'warehouse',
        PrimeiropayBoleto = 'primeiropay_boleto',
        Mada = 'mada',
        Benefit = 'benefit',
        Knet = 'knet',
        Omannet = 'omannet',
        GopayWallet = 'gopay_wallet',
        KcpNaverpay = 'kcp_naverpay',
        OnlinebankingIn = 'onlinebanking_IN',
        Fawry = 'fawry',
        Atome = 'atome',
        Moneybookers = 'moneybookers',
        Naps = 'naps',
        Nordea = 'nordea',
        BoletobancarioBradesco = 'boletobancario_bradesco',
        BoletobancarioItau = 'boletobancario_itau',
        BoletobancarioSantander = 'boletobancario_santander',
        BoletobancarioBancodobrasil = 'boletobancario_bancodobrasil',
        BoletobancarioHsbc = 'boletobancario_hsbc',
        MolpayMaybank2u = 'molpay_maybank2u',
        MolpayCimb = 'molpay_cimb',
        MolpayRhb = 'molpay_rhb',
        MolpayAmb = 'molpay_amb',
        MolpayHlb = 'molpay_hlb',
        MolpayAffinEpg = 'molpay_affin_epg',
        MolpayBankislam = 'molpay_bankislam',
        MolpayPublicbank = 'molpay_publicbank',
        FpxAgrobank = 'fpx_agrobank',
        Touchngo = 'touchngo',
        Maybank2uMae = 'maybank2u_mae',
        Duitnow = 'duitnow',
        Promptpay = 'promptpay',
        TwintPos = 'twint_pos',
        AlipayHk = 'alipay_hk',
        AlipayHkWeb = 'alipay_hk_web',
        AlipayHkWap = 'alipay_hk_wap',
        AlipayWap = 'alipay_wap',
        Balanceplatform = 'balanceplatform'
    }
}

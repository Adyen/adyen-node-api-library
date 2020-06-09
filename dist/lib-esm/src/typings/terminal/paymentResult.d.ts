import { AmountsResp } from './amountsResp';
import { CapturedSignature } from './capturedSignature';
import { ContentInformation } from './contentInformation';
import { CurrencyConversion } from './currencyConversion';
import { Instalment } from './instalment';
import { PaymentAcquirerData } from './paymentAcquirerData';
import { PaymentInstrumentData } from './paymentInstrumentData';
export declare class PaymentResult {
    'amountsResp'?: AmountsResp;
    'authenticationMethod'?: Array<PaymentResult.AuthenticationMethodEnum>;
    'capturedSignature'?: CapturedSignature;
    'currencyConversion'?: Array<CurrencyConversion>;
    'customerLanguage'?: string;
    'instalmentType'?: Instalment;
    'merchantOverrideFlag'?: boolean;
    'onlineFlag'?: boolean;
    'paymentAcquirerData'?: PaymentAcquirerData;
    'paymentInstrumentData'?: PaymentInstrumentData;
    'paymentType'?: PaymentResult.PaymentTypeEnum;
    'protectedSignature'?: ContentInformation;
    'validityDate'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace PaymentResult {
    enum AuthenticationMethodEnum {
        Bypass,
        ManualVerification,
        MerchantAuthentication,
        OfflinePIN,
        OnlinePIN,
        PaperSignature,
        SecureCertificate,
        SecureNoCertificate,
        SecuredChannel,
        SignatureCapture,
        UnknownMethod
    }
    enum PaymentTypeEnum {
        CashAdvance,
        CashDeposit,
        Completion,
        FirstReservation,
        Instalment,
        IssuerInstalment,
        Normal,
        OneTimeReservation,
        PaidOut,
        Recurring,
        Refund,
        UpdateReservation
    }
}

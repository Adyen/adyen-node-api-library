import { LoyaltyTotals } from './loyaltyTotals';
import { PaymentInstrumentType } from './paymentInstrumentType';
import { PaymentTotals } from './paymentTotals';
export declare class TransactionTotals {
    'acquirerID'?: string;
    'cardBrand'?: string;
    'errorCondition'?: TransactionTotals.ErrorConditionEnum;
    'hostReconciliationID'?: string;
    'loyaltyCurrency'?: string;
    'loyaltyTotals'?: Array<LoyaltyTotals>;
    'loyaltyUnit'?: TransactionTotals.LoyaltyUnitEnum;
    'operatorID'?: string;
    'paymentCurrency'?: string;
    'paymentInstrumentType': PaymentInstrumentType;
    'paymentTotals'?: Array<PaymentTotals>;
    'pOIID'?: string;
    'saleID'?: string;
    'shiftNumber'?: string;
    'totalsGroupID'?: string;
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
export declare namespace TransactionTotals {
    enum ErrorConditionEnum {
        Aborted,
        Busy,
        Cancel,
        DeviceOut,
        InProgress,
        InsertedCard,
        InvalidCard,
        LoggedOut,
        MessageFormat,
        NotAllowed,
        NotFound,
        PaymentRestriction,
        Refusal,
        UnavailableDevice,
        UnavailableService,
        UnreachableHost,
        WrongPIN
    }
    enum LoyaltyUnitEnum {
        Monetary,
        Point
    }
}

import { CustomerOrder } from './customerOrder';
import { Instalment } from './instalment';
import { PaymentInstrumentData } from './paymentInstrumentData';
import { TransactionIdentification } from './transactionIdentification';
export declare class PaymentData {
    'cardAcquisitionReference'?: TransactionIdentification;
    'customerOrder'?: CustomerOrder;
    'instalment'?: Instalment;
    'paymentInstrumentData'?: PaymentInstrumentData;
    'paymentType'?: PaymentData.PaymentTypeEnum;
    'requestedValidityDate'?: string;
    'splitPaymentFlag'?: boolean;
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
export declare namespace PaymentData {
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

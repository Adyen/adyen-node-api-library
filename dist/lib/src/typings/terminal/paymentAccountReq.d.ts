import { PaymentInstrumentData } from './paymentInstrumentData';
import { TransactionIdentification } from './transactionIdentification';
export declare class PaymentAccountReq {
    'accountType'?: PaymentAccountReq.AccountTypeEnum;
    'cardAcquisitionReference'?: TransactionIdentification;
    'paymentInstrumentData'?: PaymentInstrumentData;
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
export declare namespace PaymentAccountReq {
    enum AccountTypeEnum {
        CardTotals,
        Checking,
        CreditCard,
        Default,
        EpurseCard,
        Investment,
        Savings,
        Universal
    }
}

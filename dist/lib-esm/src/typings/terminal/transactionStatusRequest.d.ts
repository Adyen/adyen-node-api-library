import { MessageReference } from './messageReference';
export declare class TransactionStatusRequest {
    'documentQualifier'?: Array<TransactionStatusRequest.DocumentQualifierEnum>;
    'messageReference'?: MessageReference;
    'receiptReprintFlag'?: boolean;
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
export declare namespace TransactionStatusRequest {
    enum DocumentQualifierEnum {
        CashierReceipt,
        CustomerReceipt,
        Document,
        Journal,
        SaleReceipt,
        Voucher
    }
}

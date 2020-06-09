export declare class MessageReference {
    'deviceID'?: string;
    'messageCategory'?: MessageReference.MessageCategoryEnum;
    'pOIID'?: string;
    'saleID'?: string;
    'serviceID'?: string;
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
export declare namespace MessageReference {
    enum MessageCategoryEnum {
        Abort,
        Admin,
        BalanceInquiry,
        Batch,
        CardAcquisition,
        CardReaderAPDU,
        CardReaderInit,
        CardReaderPowerOff,
        Diagnosis,
        Display,
        EnableService,
        Event,
        GetTotals,
        Input,
        InputUpdate,
        Login,
        Logout,
        Loyalty,
        PIN,
        Payment,
        Print,
        Reconciliation,
        Reversal,
        Sound,
        StoredValue,
        TransactionStatus,
        Transmit
    }
}

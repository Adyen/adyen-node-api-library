export declare class CardAcquisitionTransaction {
    'allowedLoyaltyBrand'?: Array<string>;
    'allowedPaymentBrand'?: Array<string>;
    'cashBackFlag'?: boolean;
    'customerLanguage'?: string;
    'forceCustomerSelectionFlag'?: boolean;
    'forceEntryMode'?: Array<Array<CardAcquisitionTransaction.ForceEntryModeEnum>>;
    'loyaltyHandling'?: CardAcquisitionTransaction.LoyaltyHandlingEnum;
    'paymentType'?: CardAcquisitionTransaction.PaymentTypeEnum;
    'totalAmount'?: number;
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
export declare namespace CardAcquisitionTransaction {
    enum ForceEntryModeEnum {
        CheckReader,
        Contactless,
        File,
        ICC,
        Keyed,
        MagStripe,
        Manual,
        RFID,
        Scanned,
        SynchronousICC,
        Tapped
    }
    enum LoyaltyHandlingEnum {
        Allowed,
        Forbidden,
        Processed,
        Proposed,
        Required
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

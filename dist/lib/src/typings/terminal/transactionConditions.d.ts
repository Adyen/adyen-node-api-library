export declare class TransactionConditions {
    'acquirerID'?: Array<string>;
    'allowedLoyaltyBrand'?: Array<string>;
    'allowedPaymentBrand'?: Array<string>;
    'customerLanguage'?: string;
    'debitPreferredFlag'?: boolean;
    'forceEntryMode'?: Array<Array<TransactionConditions.ForceEntryModeEnum>>;
    'forceOnlineFlag'?: boolean;
    'loyaltyHandling'?: TransactionConditions.LoyaltyHandlingEnum;
    'merchantCategoryCode'?: string;
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
export declare namespace TransactionConditions {
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
}

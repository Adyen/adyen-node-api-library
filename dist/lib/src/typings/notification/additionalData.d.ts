export declare class AdditionalData {
    'shopperReference'?: string;
    'shopperEmail'?: string;
    'authCode'?: string;
    'cardSummary'?: string;
    'expiryDate'?: string;
    'authorisedAmountValue'?: string;
    'authorisedAmountCurrency'?: string;
    'hmacSignature'?: string;
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

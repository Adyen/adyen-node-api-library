import { Amount } from './amount';
export declare class CurrencyConversion {
    'commission'?: number;
    'convertedAmount': Amount;
    'customerApprovedFlag'?: boolean;
    'declaration'?: string;
    'markup'?: number;
    'rate'?: number;
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

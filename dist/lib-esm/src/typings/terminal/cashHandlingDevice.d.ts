import { CoinsOrBills } from './coinsOrBills';
export declare class CashHandlingDevice {
    'cashHandlingOkFlag': boolean;
    'coinsOrBills': Array<CoinsOrBills>;
    'currency': string;
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

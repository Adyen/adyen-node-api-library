import { ApplicationInfo } from './applicationInfo';
export declare class SaleToAcquirerData {
    'applicationInfo'?: ApplicationInfo;
    'shopperEmail'?: string;
    'shopperReference'?: string;
    'recurringContract'?: string;
    'shopperStatement'?: string;
    'recurringDetailName'?: string;
    'store'?: string;
    'merchantAccount'?: string;
    'currency'?: string;
    'tenderOption'?: string;
    'additionalData'?: object;
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

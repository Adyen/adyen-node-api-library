import { CardAcquisitionTransaction } from './cardAcquisitionTransaction';
import { SaleData } from './saleData';
export declare class CardAcquisitionRequest {
    'cardAcquisitionTransaction': CardAcquisitionTransaction;
    'saleData': SaleData;
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

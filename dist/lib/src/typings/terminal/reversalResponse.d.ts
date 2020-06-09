import { OriginalPOITransaction } from './originalPOITransaction';
import { POIData } from './pOIData';
import { PaymentReceipt } from './paymentReceipt';
import { Response } from './response';
export declare class ReversalResponse {
    'customerOrderID'?: string;
    'originalPOITransaction'?: OriginalPOITransaction;
    'paymentReceipt'?: Array<PaymentReceipt>;
    'pOIData'?: POIData;
    'response': Response;
    'reversedAmount'?: number;
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

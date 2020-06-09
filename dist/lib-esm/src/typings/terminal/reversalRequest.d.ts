import { CustomerOrder } from './customerOrder';
import { OriginalPOITransaction } from './originalPOITransaction';
import { ReversalReasonType } from './reversalReasonType';
export declare class ReversalRequest {
    'customerOrderID'?: CustomerOrder;
    'originalPOITransaction': OriginalPOITransaction;
    'reversalReason': ReversalReasonType;
    'reversedAmount'?: number;
    'saleReferenceID'?: string;
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

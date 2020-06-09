import { PerformedTransaction } from './performedTransaction';
import { Response } from './response';
export declare class BatchResponse {
    'performedTransaction'?: Array<PerformedTransaction>;
    'response': Response;
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

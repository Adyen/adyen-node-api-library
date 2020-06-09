import { MessageReference } from './messageReference';
import { RepeatedMessageResponse } from './repeatedMessageResponse';
import { Response } from './response';
export declare class TransactionStatusResponse {
    'messageReference'?: MessageReference;
    'repeatedMessageResponse'?: RepeatedMessageResponse;
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

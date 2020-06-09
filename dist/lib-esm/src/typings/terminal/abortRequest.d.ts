import { DisplayOutput } from './displayOutput';
import { MessageReference } from './messageReference';
export declare class AbortRequest {
    'abortReason': string;
    'displayOutput'?: DisplayOutput;
    'messageReference': MessageReference;
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

import { AnyType } from './anyType';
import { Response } from './response';
export declare class TransmitResponse {
    'message'?: AnyType;
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

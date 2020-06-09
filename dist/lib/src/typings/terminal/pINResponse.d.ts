import { CardholderPIN } from './cardholderPIN';
import { Response } from './response';
export declare class PINResponse {
    'cardholderPIN'?: CardholderPIN;
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

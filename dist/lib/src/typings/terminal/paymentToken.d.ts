import { AnyType } from './anyType';
import { TokenRequestedType } from './tokenRequestedType';
export declare class PaymentToken {
    'expiryDateTime'?: {
        [key: string]: AnyType;
    };
    'tokenRequestedType': TokenRequestedType;
    'tokenValue': string;
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

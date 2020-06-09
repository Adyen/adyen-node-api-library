import { AnyType } from './anyType';
export declare class SecurityTrailer {
    'adyenCryptoVersion'?: number;
    'hmac'?: AnyType;
    'keyIdentifier'?: string;
    'keyVersion'?: number;
    'nonce'?: AnyType;
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

import { AnyType } from './anyType';
export declare class ICCResetData {
    'atrValue'?: AnyType;
    'cardStatusWords'?: AnyType;
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

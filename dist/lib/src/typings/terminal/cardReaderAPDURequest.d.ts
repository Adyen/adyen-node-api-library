import { AnyType } from './anyType';
export declare class CardReaderAPDURequest {
    'aPDUClass': AnyType;
    'aPDUData'?: AnyType;
    'aPDUExpectedLength'?: AnyType;
    'aPDUInstruction': AnyType;
    'aPDUPar1': AnyType;
    'aPDUPar2': AnyType;
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

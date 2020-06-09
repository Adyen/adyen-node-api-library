import { AnyType } from './anyType';
export declare class TransmitRequest {
    'destinationAddress': string;
    'maximumTransmitTime': number;
    'message': AnyType;
    'waitResponseFlag'?: boolean;
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

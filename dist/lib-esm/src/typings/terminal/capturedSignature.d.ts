import { AreaSize } from './areaSize';
import { SignaturePoint } from './signaturePoint';
export declare class CapturedSignature {
    'areaSize'?: AreaSize;
    'signaturePoint': Array<SignaturePoint>;
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

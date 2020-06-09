import { DeviceType } from './deviceType';
import { InfoQualifyType } from './infoQualifyType';
import { Response } from './response';
export declare class OutputResult {
    'device': DeviceType;
    'infoQualify': InfoQualifyType;
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

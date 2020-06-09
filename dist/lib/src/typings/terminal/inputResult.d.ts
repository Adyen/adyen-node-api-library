import { DeviceType } from './deviceType';
import { InfoQualifyType } from './infoQualifyType';
import { Input } from './input';
import { Response } from './response';
export declare class InputResult {
    'device': DeviceType;
    'infoQualify': InfoQualifyType;
    'input'?: Input;
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

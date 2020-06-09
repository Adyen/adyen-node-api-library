import { AnyType } from './anyType';
import { DeviceType } from './deviceType';
import { InfoQualifyType } from './infoQualifyType';
import { MenuEntry } from './menuEntry';
import { OutputContent } from './outputContent';
export declare class DisplayOutput {
    'device': DeviceType;
    'infoQualify': InfoQualifyType;
    'menuEntry'?: Array<MenuEntry>;
    'minimumDisplayTime'?: number;
    'outputContent': OutputContent;
    'outputSignature'?: AnyType;
    'responseRequiredFlag'?: boolean;
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

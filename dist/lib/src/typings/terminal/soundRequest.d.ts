import { SoundActionType } from './soundActionType';
import { SoundContent } from './soundContent';
export declare class SoundRequest {
    'responseMode'?: SoundRequest.ResponseModeEnum;
    'soundAction': SoundActionType;
    'soundContent': SoundContent;
    'soundVolume'?: number;
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
export declare namespace SoundRequest {
    enum ResponseModeEnum {
        Immediate,
        NotRequired,
        PrintEnd,
        SoundEnd
    }
}

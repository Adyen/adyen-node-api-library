export declare class SoundContent {
    'language'?: string;
    'referenceID'?: string;
    'soundFormat'?: SoundContent.SoundFormatEnum;
    'value'?: string;
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
export declare namespace SoundContent {
    enum SoundFormatEnum {
        MessageRef,
        SoundRef,
        Text
    }
}

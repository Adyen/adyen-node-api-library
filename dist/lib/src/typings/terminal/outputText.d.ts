export declare class OutputText {
    'alignment'?: OutputText.AlignmentEnum;
    'characterHeight'?: OutputText.CharacterHeightEnum;
    'characterSet'?: number;
    'characterStyle'?: OutputText.CharacterStyleEnum;
    'characterWidth'?: OutputText.CharacterWidthEnum;
    'color'?: OutputText.ColorEnum;
    'endOfLineFlag'?: boolean;
    'font'?: string;
    'startColumn'?: number;
    'startRow'?: number;
    'text'?: string;
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
export declare namespace OutputText {
    enum AlignmentEnum {
        Centred,
        Justified,
        Left,
        Right
    }
    enum CharacterHeightEnum {
        DoubleHeight,
        HalfHeight,
        SingleHeight
    }
    enum CharacterStyleEnum {
        Bold,
        Italic,
        Normal,
        Underlined
    }
    enum CharacterWidthEnum {
        DoubleWidth,
        SingleWidth
    }
    enum ColorEnum {
        Black,
        Blue,
        Cyan,
        Green,
        Magenta,
        Red,
        White,
        Yellow
    }
}

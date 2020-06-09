import { AnyType } from './anyType';
import { OutputFormatType } from './outputFormatType';
import { OutputText } from './outputText';
import { PredefinedContent } from './predefinedContent';
export declare class MenuEntry {
    'defaultSelectedFlag'?: boolean;
    'menuEntryTag'?: MenuEntry.MenuEntryTagEnum;
    'outputFormat': OutputFormatType;
    'outputText'?: Array<OutputText>;
    'outputXHTML'?: AnyType;
    'predefinedContent'?: PredefinedContent;
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
export declare namespace MenuEntry {
    enum MenuEntryTagEnum {
        NonSelectable,
        NonSelectableSubMenu,
        Selectable,
        SubMenu
    }
}

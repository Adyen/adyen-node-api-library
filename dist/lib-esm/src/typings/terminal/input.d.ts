import { ContentInformation } from './contentInformation';
import { InputCommandType } from './inputCommandType';
export declare class Input {
    'confirmedFlag'?: boolean;
    'digitInput'?: string;
    'functionKey'?: string;
    'inputCommand': InputCommandType;
    'menuEntryNumber'?: number;
    'password'?: ContentInformation;
    'textInput'?: string;
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

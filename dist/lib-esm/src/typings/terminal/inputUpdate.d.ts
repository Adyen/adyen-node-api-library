import { AnyType } from './anyType';
import { MenuEntry } from './menuEntry';
import { MessageReference } from './messageReference';
import { OutputContent } from './outputContent';
export declare class InputUpdate {
    'maxDecimalLength'?: number;
    'maxLength'?: number;
    'menuEntry'?: Array<MenuEntry>;
    'messageReference': MessageReference;
    'minLength'?: number;
    'outputContent': OutputContent;
    'outputSignature'?: AnyType;
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

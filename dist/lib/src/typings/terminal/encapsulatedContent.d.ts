import { AnyType } from './anyType';
import { ContentType } from './contentType';
export declare class EncapsulatedContent {
    'content'?: AnyType;
    'contentType': ContentType;
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

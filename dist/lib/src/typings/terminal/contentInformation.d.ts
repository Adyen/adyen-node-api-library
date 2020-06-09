import { AuthenticatedData } from './authenticatedData';
import { ContentType } from './contentType';
import { DigestedData } from './digestedData';
import { EnvelopedData } from './envelopedData';
import { NamedKeyEncryptedData } from './namedKeyEncryptedData';
import { SignedData } from './signedData';
export declare class ContentInformation {
    'authenticatedData'?: AuthenticatedData;
    'contentType': ContentType;
    'digestedData'?: DigestedData;
    'envelopedData'?: EnvelopedData;
    'namedKeyEncryptedData'?: NamedKeyEncryptedData;
    'signedData'?: SignedData;
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

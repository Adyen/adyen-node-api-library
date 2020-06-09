import { SaleToPOIRequest } from './saleToPOIRequest';
export declare class TerminalApiRequest {
    'saleToPOIRequest': SaleToPOIRequest;
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

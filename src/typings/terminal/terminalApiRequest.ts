import { SaleToPOIRequest } from './saleToPOIRequest';

export class TerminalApiRequest {
    'SaleToPOIRequest': SaleToPOIRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "SaleToPOIRequest",
            "baseName": "SaleToPOIRequest",
            "type": "SaleToPOIRequest"
        }    ];

    static getAttributeTypeMap() {
        return TerminalApiRequest.attributeTypeMap;
    }
}


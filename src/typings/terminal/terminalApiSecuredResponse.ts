import { SaleToPOISecuredMessage } from './saleToPOISecuredMessage';

export class TerminalApiSecuredResponse {
    'SaleToPOIResponse': SaleToPOISecuredMessage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "SaleToPOIResponse",
            "baseName": "SaleToPOIResponse",
            "type": "SaleToPOISecuredMessage"
        }    ];

    static getAttributeTypeMap() {
        return TerminalApiSecuredResponse.attributeTypeMap;
    }
}


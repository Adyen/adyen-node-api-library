import { SaleToPOISecuredMessage } from './saleToPOISecuredMessage';

export class TerminalApiSecuredRequest {
    'SaleToPOIRequest'?: SaleToPOISecuredMessage;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "SaleToPOIRequest",
            "baseName": "SaleToPOIRequest",
            "type": "SaleToPOISecuredMessage"
        }    ];

    static getAttributeTypeMap() {
        return TerminalApiSecuredRequest.attributeTypeMap;
    }
}


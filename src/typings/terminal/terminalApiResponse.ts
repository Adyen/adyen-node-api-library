import { SaleToPOIResponse } from './saleToPOIResponse';
import { SaleToPOIRequest } from "./saleToPOIRequest";

export class TerminalApiResponse {
    'SaleToPOIResponse'?: SaleToPOIResponse;
    'SaleToPOIRequest'?: SaleToPOIRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "SaleToPOIResponse",
            "baseName": "SaleToPOIResponse",
            "type": "SaleToPOIResponse"
        },
        {
            "name": "SaleToPOIRequest",
            "baseName": "SaleToPOIRequest",
            "type": "SaleToPOIRequest"
        }];

    static getAttributeTypeMap() {
        return TerminalApiResponse.attributeTypeMap;
    }
}


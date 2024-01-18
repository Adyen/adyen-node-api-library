import { MessageHeader, SecurityTrailer } from './models';

export class SaleToPOISecuredMessage {
    'MessageHeader': MessageHeader;
    'NexoBlob': string;
    'SecurityTrailer': SecurityTrailer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MessageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "NexoBlob",
            "baseName": "NexoBlob",
            "type": "string"
        },
        {
            "name": "SecurityTrailer",
            "baseName": "SecurityTrailer",
            "type": "SecurityTrailer"
        }    ];

    static getAttributeTypeMap() {
        return SaleToPOISecuredMessage.attributeTypeMap;
    }
}


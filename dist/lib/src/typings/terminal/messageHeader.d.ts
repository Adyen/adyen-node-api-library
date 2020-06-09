import { MessageCategoryType } from './messageCategoryType';
import { MessageClassType } from './messageClassType';
import { MessageType } from './messageType';
export declare class MessageHeader {
    'deviceID'?: string;
    'messageCategory': MessageCategoryType;
    'messageClass': MessageClassType;
    'messageType': MessageType;
    'pOIID': string;
    'protocolVersion'?: string;
    'saleID'?: string;
    'serviceID'?: string;
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

import { AnyType } from './anyType';
import { DisplayOutput } from './displayOutput';
import { EventToNotifyType } from './eventToNotifyType';
export declare class EventNotification {
    'customerLanguage'?: string;
    'displayOutput'?: DisplayOutput;
    'eventDetails'?: string;
    'eventToNotify': EventToNotifyType;
    'maintenanceRequiredFlag'?: boolean;
    'rejectedMessage'?: AnyType;
    'timeStamp': string;
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

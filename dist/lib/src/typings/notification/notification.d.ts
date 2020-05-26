import { NotificationItem } from './notificationItem';
export declare class Notification {
    'live': string;
    'notificationItems': Array<NotificationItem>;
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

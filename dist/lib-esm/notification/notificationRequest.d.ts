import { Notification, NotificationItem, NotificationRequestItem } from "../typings/notification";
declare class NotificationRequest {
    constructor(json: Notification);
    notificationItemContainers: NotificationItem[];
    live: string;
    readonly notificationItems: NotificationRequestItem[];
    private _live;
    private _notificationItemContainers;
}
export default NotificationRequest;

import { Notification, NotificationItem, NotificationRequestItem } from "../typings/notification/models";
declare class NotificationRequest {
    constructor(json: Notification);
    get notificationItems(): Array<NotificationRequestItem> | undefined;
    live: string;
    notificationItemContainers: Array<NotificationItem>;
}
export default NotificationRequest;

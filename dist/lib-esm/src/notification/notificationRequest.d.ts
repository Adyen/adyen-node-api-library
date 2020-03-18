import { Notification, NotificationItem, NotificationRequestItem } from "../typings/notification";
declare class NotificationRequest {
    constructor(json: Notification);
    get notificationItems(): NotificationRequestItem[] | undefined;
    live: string;
    notificationItemContainers: NotificationItem[];
}
export default NotificationRequest;

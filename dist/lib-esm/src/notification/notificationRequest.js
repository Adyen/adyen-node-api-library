import { ObjectSerializer } from "../typings/notification/models";
var NotificationRequest = (function () {
    function NotificationRequest(json) {
        var notification = ObjectSerializer.deserialize(json, "Notification");
        this.notificationItemContainers = notification.notificationItems;
        this.live = notification.live;
    }
    Object.defineProperty(NotificationRequest.prototype, "notificationItems", {
        get: function () {
            if (!this.notificationItemContainers) {
                return undefined;
            }
            return this.notificationItemContainers.map(function (container) { return container.notificationRequestItem; });
        },
        enumerable: false,
        configurable: true
    });
    return NotificationRequest;
}());
export default NotificationRequest;
//# sourceMappingURL=notificationRequest.js.map
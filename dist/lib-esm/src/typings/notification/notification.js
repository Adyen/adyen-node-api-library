var Notification = (function () {
    function Notification() {
    }
    Notification.getAttributeTypeMap = function () {
        return Notification.attributeTypeMap;
    };
    Notification.discriminator = undefined;
    Notification.attributeTypeMap = [
        {
            "name": "live",
            "baseName": "live",
            "type": "string"
        },
        {
            "name": "notificationItems",
            "baseName": "notificationItems",
            "type": "Array<NotificationItem>"
        }
    ];
    return Notification;
}());
export { Notification };
//# sourceMappingURL=notification.js.map
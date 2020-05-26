var NotificationItem = (function () {
    function NotificationItem() {
    }
    NotificationItem.getAttributeTypeMap = function () {
        return NotificationItem.attributeTypeMap;
    };
    NotificationItem.discriminator = undefined;
    NotificationItem.attributeTypeMap = [
        {
            "name": "notificationRequestItem",
            "baseName": "NotificationRequestItem",
            "type": "NotificationRequestItem"
        }
    ];
    return NotificationItem;
}());
export { NotificationItem };
//# sourceMappingURL=notificationItem.js.map
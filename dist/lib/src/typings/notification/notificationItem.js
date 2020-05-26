"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationItem = void 0;
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
exports.NotificationItem = NotificationItem;
//# sourceMappingURL=notificationItem.js.map
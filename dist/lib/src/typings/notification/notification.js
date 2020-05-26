"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
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
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map
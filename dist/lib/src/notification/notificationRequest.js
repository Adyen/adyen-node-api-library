"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../typings/notification/models");
var NotificationRequest = (function () {
    function NotificationRequest(json) {
        var notification = models_1.ObjectSerializer.deserialize(json, "Notification");
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
exports.default = NotificationRequest;
//# sourceMappingURL=notificationRequest.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
var notification_1 = require("../typings/notification");
var NotificationRequest = /** @class */ (function () {
    function NotificationRequest(json) {
        var notification = notification_1.Convert.toNotification(JSON.stringify(json));
        this.notificationItemContainers = notification.notificationItems;
        this.live = notification.live;
    }
    Object.defineProperty(NotificationRequest.prototype, "notificationItems", {
        get: function () {
            if (!this.notificationItemContainers) {
                return undefined;
            }
            return this.notificationItemContainers.map(function (container) { return container.NotificationRequestItem; });
        },
        enumerable: true,
        configurable: true
    });
    return NotificationRequest;
}());
exports.default = NotificationRequest;
//# sourceMappingURL=notificationRequest.js.map
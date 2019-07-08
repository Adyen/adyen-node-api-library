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
        this._notificationItemContainers = notification.notificationItems;
        this._live = notification.live;
    }
    Object.defineProperty(NotificationRequest.prototype, "notificationItemContainers", {
        get: function () {
            return this._notificationItemContainers;
        },
        set: function (value) {
            this._notificationItemContainers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationRequest.prototype, "live", {
        get: function () {
            return this._live;
        },
        set: function (value) {
            this._live = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationRequest.prototype, "notificationItems", {
        get: function () {
            if (!this._notificationItemContainers) {
                return null;
            }
            return this._notificationItemContainers.map(function (container) { return container.notificationRequestItem; });
        },
        enumerable: true,
        configurable: true
    });
    return NotificationRequest;
}());
exports.default = NotificationRequest;
//# sourceMappingURL=notificationRequest.js.map
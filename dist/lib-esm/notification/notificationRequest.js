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
import { Convert } from "../typings/notification";
var NotificationRequest = /** @class */ (function () {
    function NotificationRequest(json) {
        var notification = Convert.toNotification(JSON.stringify(json));
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
export default NotificationRequest;
//# sourceMappingURL=notificationRequest.js.map
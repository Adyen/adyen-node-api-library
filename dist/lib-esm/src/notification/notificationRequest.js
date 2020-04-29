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
export default NotificationRequest;
//# sourceMappingURL=notificationRequest.js.map
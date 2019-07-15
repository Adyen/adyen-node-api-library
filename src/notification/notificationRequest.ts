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
import {Convert, Notification, NotificationItem, NotificationRequestItem} from "../typings/notification";

class NotificationRequest {
    public constructor(json: Notification) {
        const notification = Convert.toNotification(JSON.stringify(json));
        this.notificationItemContainers = notification.notificationItems;
        this.live = notification.live;
    }

    public get notificationItems(): NotificationRequestItem[] | undefined {
        if (!this.notificationItemContainers) {
            return undefined;
        }

        return this.notificationItemContainers.map((container): NotificationRequestItem => container.notificationRequestItem);
    }

    public live: string;
    public notificationItemContainers: NotificationItem[];
}

export default NotificationRequest;
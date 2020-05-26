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
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import {
    Notification,
    NotificationItem,
    NotificationRequestItem,
    ObjectSerializer
} from "../typings/notification/models";

class NotificationRequest {
    public constructor(json: Notification) {
        const notification: Notification = ObjectSerializer.deserialize(json, "Notification");
        this.notificationItemContainers = notification.notificationItems;
        this.live = notification.live;
    }

    public get notificationItems(): Array<NotificationRequestItem> | undefined {
        if (!this.notificationItemContainers) {
            return undefined;
        }

        return this.notificationItemContainers.map((container): NotificationRequestItem => container.notificationRequestItem);
    }

    public live: string;
    public notificationItemContainers: Array<NotificationItem>;
}

export default NotificationRequest;
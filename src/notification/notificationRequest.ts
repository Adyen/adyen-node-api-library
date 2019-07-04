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
        this._notificationItemContainers = notification.notificationItems;
        this._live = notification.live;
    }

    public get notificationItemContainers(): NotificationItem[] {
        return this._notificationItemContainers;
    }

    public set notificationItemContainers(value: NotificationItem[]) {
        this._notificationItemContainers = value;
    }

    public get live(): string {
        return this._live;
    }

    public set live(value: string) {
        this._live = value;
    }

    public get notificationItems(): NotificationRequestItem[] {
        if (!this._notificationItemContainers) {
            return null;
        }

        return this._notificationItemContainers.map((container): NotificationRequestItem => container.notificationRequestItem);
    }

    private _live: string;
    private _notificationItemContainers: NotificationItem[];
}

export default NotificationRequest;
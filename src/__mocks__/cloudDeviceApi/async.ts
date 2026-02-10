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
 * Copyright (c) 2025 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

export const asyncResponseError = {
    SaleToPOIRequest: {
        EventNotification: {
            EventToNotify: "Reject",
            EventDetails: "message=Did+not+receive+a+response+from+the+POI.",
            RejectedMessage: "ewoi...0KfQo=",
            TimeStamp: "2020-03-31T10:28:39.515Z"
        },
        MessageHeader: {
            DeviceID: "666568147",
            MessageCategory: "Event",
            MessageClass: "Event",
            MessageType: "Notification",
            POIID: "P400Plus-123456789",
            ProtocolVersion: "3.0",
            SaleID: "saleid-4c32759faaa7",
            ServiceID: "31122609"
        }
    }
};


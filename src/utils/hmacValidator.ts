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

import { createHmac, timingSafeEqual } from "crypto";
import { NotificationRequestItem } from "../typings/notification/models";
import { ApiConstants } from "../constants/apiConstants";

type DataToSign = NotificationRequestItem | { [key: string]: string };

class HmacValidator {
    public static HMAC_SHA256_ALGORITHM = "sha256";
    public static DATA_SEPARATOR = ":";

    public calculateHmac(data: string | NotificationRequestItem, key: string): string {
        const dataString = typeof data !== "string" ? this.getDataToSign(data) : data;
        const rawKey = Buffer.from(key, "hex");
        return createHmac(HmacValidator.HMAC_SHA256_ALGORITHM, rawKey).update(dataString, "utf8").digest("base64");
    }

    public validateBankingHMAC(hmacKey: string, hmacSign: string, notification: string): boolean {
        const expectedSign = createHmac(HmacValidator.HMAC_SHA256_ALGORITHM, Buffer.from(hmacSign, "hex")).update(notification, "utf8").digest("base64");
        if(hmacKey?.length === expectedSign.length) {
            return timingSafeEqual(
                Buffer.from(expectedSign, "base64"),
                Buffer.from(hmacKey, "base64")
            );
        }
        return false;
    }

    public validateHMAC(notificationRequestItem: NotificationRequestItem, key: string): boolean {
        if (notificationRequestItem.additionalData?.[ApiConstants.HMAC_SIGNATURE]) {
            const expectedSign = this.calculateHmac(notificationRequestItem, key);
            const merchantSign = notificationRequestItem.additionalData?.[ApiConstants.HMAC_SIGNATURE];
            if(merchantSign?.length === expectedSign.length) {
                return timingSafeEqual(
                    Buffer.from(expectedSign, "base64"),
                    Buffer.from(merchantSign, "base64")
                );
            }
            return false;

        }
        throw Error(`Missing ${ApiConstants.HMAC_SIGNATURE}`);
    }

    private isNotificationRequestItem(item: DataToSign): item is NotificationRequestItem {
        return !Object.values(item).every((value): boolean => typeof value === "string");
    }

    public getDataToSign(notificationRequestItem: DataToSign): string {
        if (this.isNotificationRequestItem(notificationRequestItem)) {
            const signedDataList = [];
            signedDataList.push(notificationRequestItem.pspReference);
            signedDataList.push(notificationRequestItem.originalReference);
            signedDataList.push(notificationRequestItem.merchantAccountCode);
            signedDataList.push(notificationRequestItem.merchantReference);
            signedDataList.push(notificationRequestItem.amount.value);
            signedDataList.push(notificationRequestItem.amount.currency);
            signedDataList.push(notificationRequestItem.eventCode);
            signedDataList.push(notificationRequestItem.success);
            return signedDataList.join(HmacValidator.DATA_SEPARATOR);
        } else {
            const keys: string[] = [];
            const values: string[] = [];
            const replacer = (str: string): string =>
                str.replace(/\\/g, "\\\\").replace(/:/g, "\\:");
            Object.entries(notificationRequestItem).sort().forEach(([key, value]): void => {
                keys.push(replacer(key));
                values.push(replacer(value));
            });

            return [...keys, ...values].join(HmacValidator.DATA_SEPARATOR);
        }
    }
}

export default HmacValidator;

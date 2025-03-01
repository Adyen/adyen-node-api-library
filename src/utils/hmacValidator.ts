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

    /**
     * Calculate HMAC signature of the payload data
     * @param data payload as String or as NotificationRequestItem
     * @param key HMAC key
     * @returns HMAC signature
     */
    public calculateHmac(data: string | NotificationRequestItem, key: string): string {
        const dataString = typeof data !== "string" ? this.getDataToSign(data) : data;
        const rawKey = Buffer.from(key, "hex");
        return createHmac(HmacValidator.HMAC_SHA256_ALGORITHM, rawKey).update(dataString, "utf8").digest("base64");
    }

    /**
     * @deprecated use Use validateHMACSignature with correct parameter order instead
     * Validate HMAC signature for Banking webhooks
     * @param hmacKey 
     * @param hmacSign 
     * @param notification 
     * @returns 
     */
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

    /**
     * Validate HMAC signature for Banking/Management webhooks
     * @param hmacKey HMAC key
     * @param hmacSignature HMAC signature to validate 
     * @param data webhook payload (as string)
     * @returns true when HMAC signature is valid
     */
    public validateHMACSignature(hmacKey: string, hmacSignature: string, data: string): boolean {
        const expectedSign = createHmac(HmacValidator.HMAC_SHA256_ALGORITHM, Buffer.from(hmacKey, "hex")).update(data, "utf8").digest("base64");
        if(hmacSignature?.length === expectedSign.length) {
            return timingSafeEqual(
                Buffer.from(expectedSign, "base64"),
                Buffer.from(hmacSignature, "base64")
            );
        }
        return false;
    }

    /**
     * Validate HMAC signature for Payment webhooks
     * @param notificationRequestItem webhook payload (as NotificationRequestItem object)
     * @param key HMAC key
     * @returns true when HMAC signature is valid
     */
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

    /**
     * extract fields to be used to calculate the HMAC signature
     * @param notificationRequestItem webhook payload
     * @returns data to sign (as string)
     */
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

import * as crypto from "crypto";
import {NotificationRequestItem} from "../typings/notification";
import {HMAC_SIGNATURE} from "../typings/constants/apiConstants";


type DataToSign = NotificationRequestItem | { [key: string]: string }

class HmacValidator {
    public static HMAC_SHA256_ALGORITHM = "sha256";
    public static DATA_SEPARATOR = ":"

    public calculateHmac(data: string | NotificationRequestItem, key: string): string {
        const dataString = typeof data !== "string" ? this.getDataToSign(data) : data;
        const rawKey = Buffer.from(key, "hex");
        return crypto.createHmac(HmacValidator.HMAC_SHA256_ALGORITHM, rawKey).update(dataString, "utf8").digest("base64");
    }

    public validateHMAC(notificationRequestItem: NotificationRequestItem, key: string): boolean {
        const expectedSign = this.calculateHmac(notificationRequestItem, key);
        const merchantSign = notificationRequestItem.additionalData[HMAC_SIGNATURE];

        return expectedSign === merchantSign;
    }

    private isNotificationRequestItem(item: DataToSign): item is NotificationRequestItem {
        return !Object.values(item).every(value => typeof value === "string");
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
            const replacer = (str: string) =>
                str.replace("\\", "\\\\").replace(":", "\\:");
            Object.entries(notificationRequestItem).sort().forEach(([key, value]) => {
                keys.push(replacer(key));
                values.push(replacer(value));
            });

            return [...keys, ...values].join(HmacValidator.DATA_SEPARATOR);
        }
    }
}

export default HmacValidator;
import { NotificationRequestItem } from "../typings/notification";
declare type DataToSign = NotificationRequestItem | {
    [key: string]: string;
};
declare class HmacValidator {
    static HMAC_SHA256_ALGORITHM: string;
    static DATA_SEPARATOR: string;
    calculateHmac(data: string | NotificationRequestItem, key: string): string;
    validateHMAC(notificationRequestItem: NotificationRequestItem, key: string): boolean;
    private isNotificationRequestItem;
    getDataToSign(notificationRequestItem: DataToSign): string;
}
export default HmacValidator;

export interface Notification {
    live: string;
    notificationItems: NotificationItem[];
}
export interface NotificationItem {
    NotificationRequestItem: NotificationRequestItem;
}
export interface NotificationRequestItem {
    additionalData: AdditionalData;
    amount: Amount;
    eventCode: string;
    eventDate: Date;
    merchantAccountCode: string;
    merchantReference: string;
    operations?: string[];
    originalReference?: string;
    paymentMethod: string;
    pspReference: string;
    reason: string;
    success: string;
}
export interface AdditionalData {
    [key: string]: string;
}
export interface Amount {
    currency: string;
    value: number;
}
export declare enum NotificationEnum {
    EVENT_CODE_AUTHORISATION = "AUTHORISATION",
    EVENT_CODE_CANCELLATION = "CANCELLATION",
    EVENT_CODE_REFUND = "REFUND",
    EVENT_CODE_CANCEL_OR_REFUND = "CANCEL_OR_REFUND",
    EVENT_CODE_CAPTURE = "CAPTURE",
    EVENT_CODE_CAPTURE_FAILED = "CAPTURE_FAILED",
    EVENT_CODE_REFUND_FAILED = "REFUND_FAILED",
    EVENT_CODE_REFUNDED_REVERSED = "REFUNDED_REVERSED",
    EVENT_CODE_PAIDOUT_REVERSED = "PAIDOUT_REVERSED",
    ADDITIONAL_DATA_TOTAL_FRAUD_SCORE = "totalFraudScore",
    ADDITIONAL_DATA_FRAUD_CHECK_PATTERN = "fraudCheck-(\\d+)-([A-Za-z0-9]+)"
}
export declare class Convert {
    static toNotification(json: string): Notification;
    static notificationToJson(value: Notification): string;
}

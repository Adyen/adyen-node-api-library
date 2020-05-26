import { AdditionalData } from './additionalData';
import { Amount } from './amount';
export declare class NotificationRequestItem {
    'additionalData'?: AdditionalData;
    'amount': Amount;
    'pspReference': string;
    'eventCode': NotificationRequestItem.EventCodeEnum;
    'eventDate': string;
    'merchantAccountCode': string;
    'operations'?: Array<NotificationRequestItem.OperationsEnum>;
    'merchantReference': string;
    'originalReference'?: string;
    'paymentMethod'?: string;
    'reason'?: string;
    'success': NotificationRequestItem.SuccessEnum;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace NotificationRequestItem {
    enum EventCodeEnum {
        AUTHORISATION,
        AUTHORISATIONADJUSTMENT,
        CANCELLATION,
        CANCELORREFUND,
        CAPTURE,
        CAPTUREFAILED,
        HANDLEDEXTERNALLY,
        ORDEROPENED,
        ORDERCLOSED,
        PENDING,
        PROCESSRETRY,
        REFUND,
        REFUNDFAILED,
        REFUNDEDREVERSED,
        REFUNDWITHDATA,
        REPORTAVAILABLE,
        VOIDPENDINGREFUND,
        CHARGEBACK,
        CHARGEBACKREVERSED,
        NOTIFICATIONOFCHARGEBACK,
        NOTIFICATIONOFFRAUD,
        PREARBITRATIONLOST,
        PREARBITRATIONWON,
        REQUESTFORINFORMATION,
        SECONDCHARGEBACK,
        PAYOUTEXPIRE,
        PAYOUTDECLINE,
        PAYOUTTHIRDPARTY,
        PAIDOUTREVERSED,
        AUTORESCUE,
        CANCELAUTORESCUE,
        RECURRINGCONTRACT,
        POSTPONEDREFUND,
        OFFERCLOSED,
        MANUALREVIEWACCEPT,
        MANUALREVIEWREJECT
    }
    enum OperationsEnum {
        CANCEL,
        CAPTURE,
        REFUND
    }
    enum SuccessEnum {
        True,
        False
    }
}

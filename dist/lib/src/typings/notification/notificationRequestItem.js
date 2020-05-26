"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRequestItem = void 0;
var NotificationRequestItem = (function () {
    function NotificationRequestItem() {
    }
    NotificationRequestItem.getAttributeTypeMap = function () {
        return NotificationRequestItem.attributeTypeMap;
    };
    NotificationRequestItem.discriminator = undefined;
    NotificationRequestItem.attributeTypeMap = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "AdditionalData"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "eventCode",
            "baseName": "eventCode",
            "type": "NotificationRequestItem.EventCodeEnum"
        },
        {
            "name": "eventDate",
            "baseName": "eventDate",
            "type": "string"
        },
        {
            "name": "merchantAccountCode",
            "baseName": "merchantAccountCode",
            "type": "string"
        },
        {
            "name": "operations",
            "baseName": "operations",
            "type": "Array<NotificationRequestItem.OperationsEnum>"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "originalReference",
            "baseName": "originalReference",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "NotificationRequestItem.SuccessEnum"
        }
    ];
    return NotificationRequestItem;
}());
exports.NotificationRequestItem = NotificationRequestItem;
(function (NotificationRequestItem) {
    var EventCodeEnum;
    (function (EventCodeEnum) {
        EventCodeEnum[EventCodeEnum["AUTHORISATION"] = 'AUTHORISATION'] = "AUTHORISATION";
        EventCodeEnum[EventCodeEnum["AUTHORISATIONADJUSTMENT"] = 'AUTHORISATION_ADJUSTMENT'] = "AUTHORISATIONADJUSTMENT";
        EventCodeEnum[EventCodeEnum["CANCELLATION"] = 'CANCELLATION'] = "CANCELLATION";
        EventCodeEnum[EventCodeEnum["CANCELORREFUND"] = 'CANCEL_OR_REFUND'] = "CANCELORREFUND";
        EventCodeEnum[EventCodeEnum["CAPTURE"] = 'CAPTURE'] = "CAPTURE";
        EventCodeEnum[EventCodeEnum["CAPTUREFAILED"] = 'CAPTURE_FAILED'] = "CAPTUREFAILED";
        EventCodeEnum[EventCodeEnum["HANDLEDEXTERNALLY"] = 'HANDLED_EXTERNALLY'] = "HANDLEDEXTERNALLY";
        EventCodeEnum[EventCodeEnum["ORDEROPENED"] = 'ORDER_OPENED'] = "ORDEROPENED";
        EventCodeEnum[EventCodeEnum["ORDERCLOSED"] = 'ORDER_CLOSED'] = "ORDERCLOSED";
        EventCodeEnum[EventCodeEnum["PENDING"] = 'PENDING'] = "PENDING";
        EventCodeEnum[EventCodeEnum["PROCESSRETRY"] = 'PROCESS_RETRY'] = "PROCESSRETRY";
        EventCodeEnum[EventCodeEnum["REFUND"] = 'REFUND'] = "REFUND";
        EventCodeEnum[EventCodeEnum["REFUNDFAILED"] = 'REFUND_FAILED'] = "REFUNDFAILED";
        EventCodeEnum[EventCodeEnum["REFUNDEDREVERSED"] = 'REFUNDED_REVERSED'] = "REFUNDEDREVERSED";
        EventCodeEnum[EventCodeEnum["REFUNDWITHDATA"] = 'REFUND_WITH_DATA'] = "REFUNDWITHDATA";
        EventCodeEnum[EventCodeEnum["REPORTAVAILABLE"] = 'REPORT_AVAILABLE'] = "REPORTAVAILABLE";
        EventCodeEnum[EventCodeEnum["VOIDPENDINGREFUND"] = 'VOID_PENDING_REFUND'] = "VOIDPENDINGREFUND";
        EventCodeEnum[EventCodeEnum["CHARGEBACK"] = 'CHARGEBACK'] = "CHARGEBACK";
        EventCodeEnum[EventCodeEnum["CHARGEBACKREVERSED"] = 'CHARGEBACK_REVERSED'] = "CHARGEBACKREVERSED";
        EventCodeEnum[EventCodeEnum["NOTIFICATIONOFCHARGEBACK"] = 'NOTIFICATION_OF_CHARGEBACK'] = "NOTIFICATIONOFCHARGEBACK";
        EventCodeEnum[EventCodeEnum["NOTIFICATIONOFFRAUD"] = 'NOTIFICATION_OF_FRAUD'] = "NOTIFICATIONOFFRAUD";
        EventCodeEnum[EventCodeEnum["PREARBITRATIONLOST"] = 'PREARBITRATION_LOST'] = "PREARBITRATIONLOST";
        EventCodeEnum[EventCodeEnum["PREARBITRATIONWON"] = 'PREARBITRATION_WON'] = "PREARBITRATIONWON";
        EventCodeEnum[EventCodeEnum["REQUESTFORINFORMATION"] = 'REQUEST_FOR_INFORMATION'] = "REQUESTFORINFORMATION";
        EventCodeEnum[EventCodeEnum["SECONDCHARGEBACK"] = 'SECOND_CHARGEBACK'] = "SECONDCHARGEBACK";
        EventCodeEnum[EventCodeEnum["PAYOUTEXPIRE"] = 'PAYOUT_EXPIRE'] = "PAYOUTEXPIRE";
        EventCodeEnum[EventCodeEnum["PAYOUTDECLINE"] = 'PAYOUT_DECLINE'] = "PAYOUTDECLINE";
        EventCodeEnum[EventCodeEnum["PAYOUTTHIRDPARTY"] = 'PAYOUT_THIRDPARTY'] = "PAYOUTTHIRDPARTY";
        EventCodeEnum[EventCodeEnum["PAIDOUTREVERSED"] = 'PAIDOUT_REVERSED'] = "PAIDOUTREVERSED";
        EventCodeEnum[EventCodeEnum["AUTORESCUE"] = 'AUTORESCUE'] = "AUTORESCUE";
        EventCodeEnum[EventCodeEnum["CANCELAUTORESCUE"] = 'CANCEL_AUTORESCUE'] = "CANCELAUTORESCUE";
        EventCodeEnum[EventCodeEnum["RECURRINGCONTRACT"] = 'RECURRING_CONTRACT'] = "RECURRINGCONTRACT";
        EventCodeEnum[EventCodeEnum["POSTPONEDREFUND"] = 'POSTPONED_REFUND'] = "POSTPONEDREFUND";
        EventCodeEnum[EventCodeEnum["OFFERCLOSED"] = 'OFFER_CLOSED'] = "OFFERCLOSED";
        EventCodeEnum[EventCodeEnum["MANUALREVIEWACCEPT"] = 'MANUAL_REVIEW_ACCEPT'] = "MANUALREVIEWACCEPT";
        EventCodeEnum[EventCodeEnum["MANUALREVIEWREJECT"] = 'MANUAL_REVIEW_REJECT'] = "MANUALREVIEWREJECT";
    })(EventCodeEnum = NotificationRequestItem.EventCodeEnum || (NotificationRequestItem.EventCodeEnum = {}));
    var OperationsEnum;
    (function (OperationsEnum) {
        OperationsEnum[OperationsEnum["CANCEL"] = 'CANCEL'] = "CANCEL";
        OperationsEnum[OperationsEnum["CAPTURE"] = 'CAPTURE'] = "CAPTURE";
        OperationsEnum[OperationsEnum["REFUND"] = 'REFUND'] = "REFUND";
    })(OperationsEnum = NotificationRequestItem.OperationsEnum || (NotificationRequestItem.OperationsEnum = {}));
    var SuccessEnum;
    (function (SuccessEnum) {
        SuccessEnum[SuccessEnum["True"] = 'true'] = "True";
        SuccessEnum[SuccessEnum["False"] = 'false'] = "False";
    })(SuccessEnum = NotificationRequestItem.SuccessEnum || (NotificationRequestItem.SuccessEnum = {}));
})(NotificationRequestItem = exports.NotificationRequestItem || (exports.NotificationRequestItem = {}));
exports.NotificationRequestItem = NotificationRequestItem;
//# sourceMappingURL=notificationRequestItem.js.map
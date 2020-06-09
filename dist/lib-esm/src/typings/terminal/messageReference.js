var MessageReference = (function () {
    function MessageReference() {
    }
    MessageReference.getAttributeTypeMap = function () {
        return MessageReference.attributeTypeMap;
    };
    MessageReference.discriminator = undefined;
    MessageReference.attributeTypeMap = [
        {
            "name": "deviceID",
            "baseName": "DeviceID",
            "type": "string"
        },
        {
            "name": "messageCategory",
            "baseName": "MessageCategory",
            "type": "MessageReference.MessageCategoryEnum"
        },
        {
            "name": "pOIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "saleID",
            "baseName": "SaleID",
            "type": "string"
        },
        {
            "name": "serviceID",
            "baseName": "ServiceID",
            "type": "string"
        }
    ];
    return MessageReference;
}());
export { MessageReference };
(function (MessageReference) {
    var MessageCategoryEnum;
    (function (MessageCategoryEnum) {
        MessageCategoryEnum[MessageCategoryEnum["Abort"] = 'Abort'] = "Abort";
        MessageCategoryEnum[MessageCategoryEnum["Admin"] = 'Admin'] = "Admin";
        MessageCategoryEnum[MessageCategoryEnum["BalanceInquiry"] = 'BalanceInquiry'] = "BalanceInquiry";
        MessageCategoryEnum[MessageCategoryEnum["Batch"] = 'Batch'] = "Batch";
        MessageCategoryEnum[MessageCategoryEnum["CardAcquisition"] = 'CardAcquisition'] = "CardAcquisition";
        MessageCategoryEnum[MessageCategoryEnum["CardReaderAPDU"] = 'CardReaderAPDU'] = "CardReaderAPDU";
        MessageCategoryEnum[MessageCategoryEnum["CardReaderInit"] = 'CardReaderInit'] = "CardReaderInit";
        MessageCategoryEnum[MessageCategoryEnum["CardReaderPowerOff"] = 'CardReaderPowerOff'] = "CardReaderPowerOff";
        MessageCategoryEnum[MessageCategoryEnum["Diagnosis"] = 'Diagnosis'] = "Diagnosis";
        MessageCategoryEnum[MessageCategoryEnum["Display"] = 'Display'] = "Display";
        MessageCategoryEnum[MessageCategoryEnum["EnableService"] = 'EnableService'] = "EnableService";
        MessageCategoryEnum[MessageCategoryEnum["Event"] = 'Event'] = "Event";
        MessageCategoryEnum[MessageCategoryEnum["GetTotals"] = 'GetTotals'] = "GetTotals";
        MessageCategoryEnum[MessageCategoryEnum["Input"] = 'Input'] = "Input";
        MessageCategoryEnum[MessageCategoryEnum["InputUpdate"] = 'InputUpdate'] = "InputUpdate";
        MessageCategoryEnum[MessageCategoryEnum["Login"] = 'Login'] = "Login";
        MessageCategoryEnum[MessageCategoryEnum["Logout"] = 'Logout'] = "Logout";
        MessageCategoryEnum[MessageCategoryEnum["Loyalty"] = 'Loyalty'] = "Loyalty";
        MessageCategoryEnum[MessageCategoryEnum["PIN"] = 'PIN'] = "PIN";
        MessageCategoryEnum[MessageCategoryEnum["Payment"] = 'Payment'] = "Payment";
        MessageCategoryEnum[MessageCategoryEnum["Print"] = 'Print'] = "Print";
        MessageCategoryEnum[MessageCategoryEnum["Reconciliation"] = 'Reconciliation'] = "Reconciliation";
        MessageCategoryEnum[MessageCategoryEnum["Reversal"] = 'Reversal'] = "Reversal";
        MessageCategoryEnum[MessageCategoryEnum["Sound"] = 'Sound'] = "Sound";
        MessageCategoryEnum[MessageCategoryEnum["StoredValue"] = 'StoredValue'] = "StoredValue";
        MessageCategoryEnum[MessageCategoryEnum["TransactionStatus"] = 'TransactionStatus'] = "TransactionStatus";
        MessageCategoryEnum[MessageCategoryEnum["Transmit"] = 'Transmit'] = "Transmit";
    })(MessageCategoryEnum = MessageReference.MessageCategoryEnum || (MessageReference.MessageCategoryEnum = {}));
})(MessageReference || (MessageReference = {}));
//# sourceMappingURL=messageReference.js.map
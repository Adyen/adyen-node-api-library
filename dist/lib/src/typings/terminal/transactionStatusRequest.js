"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatusRequest = void 0;
var TransactionStatusRequest = (function () {
    function TransactionStatusRequest() {
    }
    TransactionStatusRequest.getAttributeTypeMap = function () {
        return TransactionStatusRequest.attributeTypeMap;
    };
    TransactionStatusRequest.discriminator = undefined;
    TransactionStatusRequest.attributeTypeMap = [
        {
            "name": "documentQualifier",
            "baseName": "DocumentQualifier",
            "type": "Array<TransactionStatusRequest.DocumentQualifierEnum>"
        },
        {
            "name": "messageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "receiptReprintFlag",
            "baseName": "ReceiptReprintFlag",
            "type": "boolean"
        }
    ];
    return TransactionStatusRequest;
}());
exports.TransactionStatusRequest = TransactionStatusRequest;
(function (TransactionStatusRequest) {
    var DocumentQualifierEnum;
    (function (DocumentQualifierEnum) {
        DocumentQualifierEnum[DocumentQualifierEnum["CashierReceipt"] = 'CashierReceipt'] = "CashierReceipt";
        DocumentQualifierEnum[DocumentQualifierEnum["CustomerReceipt"] = 'CustomerReceipt'] = "CustomerReceipt";
        DocumentQualifierEnum[DocumentQualifierEnum["Document"] = 'Document'] = "Document";
        DocumentQualifierEnum[DocumentQualifierEnum["Journal"] = 'Journal'] = "Journal";
        DocumentQualifierEnum[DocumentQualifierEnum["SaleReceipt"] = 'SaleReceipt'] = "SaleReceipt";
        DocumentQualifierEnum[DocumentQualifierEnum["Voucher"] = 'Voucher'] = "Voucher";
    })(DocumentQualifierEnum = TransactionStatusRequest.DocumentQualifierEnum || (TransactionStatusRequest.DocumentQualifierEnum = {}));
})(TransactionStatusRequest = exports.TransactionStatusRequest || (exports.TransactionStatusRequest = {}));
exports.TransactionStatusRequest = TransactionStatusRequest;
//# sourceMappingURL=transactionStatusRequest.js.map
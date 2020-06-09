var AmountsReq = (function () {
    function AmountsReq() {
    }
    AmountsReq.getAttributeTypeMap = function () {
        return AmountsReq.attributeTypeMap;
    };
    AmountsReq.discriminator = undefined;
    AmountsReq.attributeTypeMap = [
        {
            "name": "cashBackAmount",
            "baseName": "CashBackAmount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "maximumCashBackAmount",
            "baseName": "MaximumCashBackAmount",
            "type": "number"
        },
        {
            "name": "minimumAmountToDeliver",
            "baseName": "MinimumAmountToDeliver",
            "type": "number"
        },
        {
            "name": "minimumSplitAmount",
            "baseName": "MinimumSplitAmount",
            "type": "number"
        },
        {
            "name": "paidAmount",
            "baseName": "PaidAmount",
            "type": "number"
        },
        {
            "name": "requestedAmount",
            "baseName": "RequestedAmount",
            "type": "number"
        },
        {
            "name": "tipAmount",
            "baseName": "TipAmount",
            "type": "number"
        }
    ];
    return AmountsReq;
}());
export { AmountsReq };
//# sourceMappingURL=amountsReq.js.map
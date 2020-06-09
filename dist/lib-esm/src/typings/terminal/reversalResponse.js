var ReversalResponse = (function () {
    function ReversalResponse() {
    }
    ReversalResponse.getAttributeTypeMap = function () {
        return ReversalResponse.attributeTypeMap;
    };
    ReversalResponse.discriminator = undefined;
    ReversalResponse.attributeTypeMap = [
        {
            "name": "customerOrderID",
            "baseName": "CustomerOrderID",
            "type": "string"
        },
        {
            "name": "originalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "paymentReceipt",
            "baseName": "PaymentReceipt",
            "type": "Array<PaymentReceipt>"
        },
        {
            "name": "pOIData",
            "baseName": "POIData",
            "type": "POIData"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "reversedAmount",
            "baseName": "ReversedAmount",
            "type": "number"
        }
    ];
    return ReversalResponse;
}());
export { ReversalResponse };
//# sourceMappingURL=reversalResponse.js.map
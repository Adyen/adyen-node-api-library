var SaleData = (function () {
    function SaleData() {
    }
    SaleData.getAttributeTypeMap = function () {
        return SaleData.attributeTypeMap;
    };
    SaleData.discriminator = undefined;
    SaleData.attributeTypeMap = [
        {
            "name": "customerOrderID",
            "baseName": "CustomerOrderID",
            "type": "string"
        },
        {
            "name": "customerOrderReq",
            "baseName": "CustomerOrderReq",
            "type": "Array<SaleData.CustomerOrderReqEnum>"
        },
        {
            "name": "operatorID",
            "baseName": "OperatorID",
            "type": "string"
        },
        {
            "name": "operatorLanguage",
            "baseName": "OperatorLanguage",
            "type": "string"
        },
        {
            "name": "saleReferenceID",
            "baseName": "SaleReferenceID",
            "type": "string"
        },
        {
            "name": "saleTerminalData",
            "baseName": "SaleTerminalData",
            "type": "SaleTerminalData"
        },
        {
            "name": "saleToAcquirerData",
            "baseName": "SaleToAcquirerData",
            "type": "SaleToAcquirerData"
        },
        {
            "name": "saleToIssuerData",
            "baseName": "SaleToIssuerData",
            "type": "SaleToIssuerData"
        },
        {
            "name": "saleToPOIData",
            "baseName": "SaleToPOIData",
            "type": "string"
        },
        {
            "name": "saleTransactionID",
            "baseName": "SaleTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "shiftNumber",
            "baseName": "ShiftNumber",
            "type": "string"
        },
        {
            "name": "sponsoredMerchant",
            "baseName": "SponsoredMerchant",
            "type": "Array<SponsoredMerchant>"
        },
        {
            "name": "tokenRequestedType",
            "baseName": "TokenRequestedType",
            "type": "SaleData.TokenRequestedTypeEnum"
        }
    ];
    return SaleData;
}());
export { SaleData };
(function (SaleData) {
    var CustomerOrderReqEnum;
    (function (CustomerOrderReqEnum) {
        CustomerOrderReqEnum[CustomerOrderReqEnum["Both"] = 'Both'] = "Both";
        CustomerOrderReqEnum[CustomerOrderReqEnum["Closed"] = 'Closed'] = "Closed";
        CustomerOrderReqEnum[CustomerOrderReqEnum["Open"] = 'Open'] = "Open";
    })(CustomerOrderReqEnum = SaleData.CustomerOrderReqEnum || (SaleData.CustomerOrderReqEnum = {}));
    var TokenRequestedTypeEnum;
    (function (TokenRequestedTypeEnum) {
        TokenRequestedTypeEnum[TokenRequestedTypeEnum["Customer"] = 'Customer'] = "Customer";
        TokenRequestedTypeEnum[TokenRequestedTypeEnum["Transaction"] = 'Transaction'] = "Transaction";
    })(TokenRequestedTypeEnum = SaleData.TokenRequestedTypeEnum || (SaleData.TokenRequestedTypeEnum = {}));
})(SaleData || (SaleData = {}));
//# sourceMappingURL=saleData.js.map
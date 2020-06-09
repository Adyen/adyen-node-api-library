var SaleToIssuerData = (function () {
    function SaleToIssuerData() {
    }
    SaleToIssuerData.getAttributeTypeMap = function () {
        return SaleToIssuerData.attributeTypeMap;
    };
    SaleToIssuerData.discriminator = undefined;
    SaleToIssuerData.attributeTypeMap = [
        {
            "name": "statementReference",
            "baseName": "StatementReference",
            "type": "string"
        }
    ];
    return SaleToIssuerData;
}());
export { SaleToIssuerData };
//# sourceMappingURL=saleToIssuerData.js.map
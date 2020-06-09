"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleToIssuerData = void 0;
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
exports.SaleToIssuerData = SaleToIssuerData;
//# sourceMappingURL=saleToIssuerData.js.map
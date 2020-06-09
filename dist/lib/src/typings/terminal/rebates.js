"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rebates = void 0;
var Rebates = (function () {
    function Rebates() {
    }
    Rebates.getAttributeTypeMap = function () {
        return Rebates.attributeTypeMap;
    };
    Rebates.discriminator = undefined;
    Rebates.attributeTypeMap = [
        {
            "name": "rebateLabel",
            "baseName": "RebateLabel",
            "type": "string"
        },
        {
            "name": "saleItemRebate",
            "baseName": "SaleItemRebate",
            "type": "Array<SaleItemRebate>"
        },
        {
            "name": "totalRebate",
            "baseName": "TotalRebate",
            "type": "number"
        }
    ];
    return Rebates;
}());
exports.Rebates = Rebates;
//# sourceMappingURL=rebates.js.map
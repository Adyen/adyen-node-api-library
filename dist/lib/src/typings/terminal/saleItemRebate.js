"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleItemRebate = void 0;
var SaleItemRebate = (function () {
    function SaleItemRebate() {
    }
    SaleItemRebate.getAttributeTypeMap = function () {
        return SaleItemRebate.attributeTypeMap;
    };
    SaleItemRebate.discriminator = undefined;
    SaleItemRebate.attributeTypeMap = [
        {
            "name": "eanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "itemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "itemID",
            "baseName": "ItemID",
            "type": "number"
        },
        {
            "name": "productCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "Quantity",
            "type": "number"
        },
        {
            "name": "rebateLabel",
            "baseName": "RebateLabel",
            "type": "string"
        },
        {
            "name": "unitOfMeasure",
            "baseName": "UnitOfMeasure",
            "type": "SaleItemRebate.UnitOfMeasureEnum"
        }
    ];
    return SaleItemRebate;
}());
exports.SaleItemRebate = SaleItemRebate;
(function (SaleItemRebate) {
    var UnitOfMeasureEnum;
    (function (UnitOfMeasureEnum) {
        UnitOfMeasureEnum[UnitOfMeasureEnum["Case"] = 'Case'] = "Case";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Centilitre"] = 'Centilitre'] = "Centilitre";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Centimetre"] = 'Centimetre'] = "Centimetre";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Foot"] = 'Foot'] = "Foot";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Gram"] = 'Gram'] = "Gram";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Inch"] = 'Inch'] = "Inch";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Kilogram"] = 'Kilogram'] = "Kilogram";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Kilometre"] = 'Kilometre'] = "Kilometre";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Litre"] = 'Litre'] = "Litre";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Meter"] = 'Meter'] = "Meter";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Mile"] = 'Mile'] = "Mile";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Other"] = 'Other'] = "Other";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Ounce"] = 'Ounce'] = "Ounce";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Pint"] = 'Pint'] = "Pint";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Pound"] = 'Pound'] = "Pound";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Quart"] = 'Quart'] = "Quart";
        UnitOfMeasureEnum[UnitOfMeasureEnum["UKGallon"] = 'UKGallon'] = "UKGallon";
        UnitOfMeasureEnum[UnitOfMeasureEnum["USGallon"] = 'USGallon'] = "USGallon";
        UnitOfMeasureEnum[UnitOfMeasureEnum["Yard"] = 'Yard'] = "Yard";
    })(UnitOfMeasureEnum = SaleItemRebate.UnitOfMeasureEnum || (SaleItemRebate.UnitOfMeasureEnum = {}));
})(SaleItemRebate = exports.SaleItemRebate || (exports.SaleItemRebate = {}));
exports.SaleItemRebate = SaleItemRebate;
//# sourceMappingURL=saleItemRebate.js.map
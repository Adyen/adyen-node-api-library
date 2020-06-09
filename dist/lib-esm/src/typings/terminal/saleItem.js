var SaleItem = (function () {
    function SaleItem() {
    }
    SaleItem.getAttributeTypeMap = function () {
        return SaleItem.attributeTypeMap;
    };
    SaleItem.discriminator = undefined;
    SaleItem.attributeTypeMap = [
        {
            "name": "additionalProductInfo",
            "baseName": "AdditionalProductInfo",
            "type": "string"
        },
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
            "name": "productLabel",
            "baseName": "ProductLabel",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "Quantity",
            "type": "number"
        },
        {
            "name": "saleChannel",
            "baseName": "SaleChannel",
            "type": "string"
        },
        {
            "name": "taxCode",
            "baseName": "TaxCode",
            "type": "string"
        },
        {
            "name": "unitOfMeasure",
            "baseName": "UnitOfMeasure",
            "type": "SaleItem.UnitOfMeasureEnum"
        },
        {
            "name": "unitPrice",
            "baseName": "UnitPrice",
            "type": "number"
        }
    ];
    return SaleItem;
}());
export { SaleItem };
(function (SaleItem) {
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
    })(UnitOfMeasureEnum = SaleItem.UnitOfMeasureEnum || (SaleItem.UnitOfMeasureEnum = {}));
})(SaleItem || (SaleItem = {}));
//# sourceMappingURL=saleItem.js.map
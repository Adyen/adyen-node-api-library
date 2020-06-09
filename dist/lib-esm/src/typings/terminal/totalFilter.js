var TotalFilter = (function () {
    function TotalFilter() {
    }
    TotalFilter.getAttributeTypeMap = function () {
        return TotalFilter.attributeTypeMap;
    };
    TotalFilter.discriminator = undefined;
    TotalFilter.attributeTypeMap = [
        {
            "name": "operatorID",
            "baseName": "OperatorID",
            "type": "string"
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
            "name": "shiftNumber",
            "baseName": "ShiftNumber",
            "type": "string"
        },
        {
            "name": "totalsGroupID",
            "baseName": "TotalsGroupID",
            "type": "string"
        }
    ];
    return TotalFilter;
}());
export { TotalFilter };
//# sourceMappingURL=totalFilter.js.map
var GetTotalsRequest = (function () {
    function GetTotalsRequest() {
    }
    GetTotalsRequest.getAttributeTypeMap = function () {
        return GetTotalsRequest.attributeTypeMap;
    };
    GetTotalsRequest.discriminator = undefined;
    GetTotalsRequest.attributeTypeMap = [
        {
            "name": "totalDetails",
            "baseName": "TotalDetails",
            "type": "Array<GetTotalsRequest.TotalDetailsEnum>"
        },
        {
            "name": "totalFilter",
            "baseName": "TotalFilter",
            "type": "TotalFilter"
        }
    ];
    return GetTotalsRequest;
}());
export { GetTotalsRequest };
(function (GetTotalsRequest) {
    var TotalDetailsEnum;
    (function (TotalDetailsEnum) {
        TotalDetailsEnum[TotalDetailsEnum["OperatorID"] = 'OperatorID'] = "OperatorID";
        TotalDetailsEnum[TotalDetailsEnum["POIID"] = 'POIID'] = "POIID";
        TotalDetailsEnum[TotalDetailsEnum["SaleID"] = 'SaleID'] = "SaleID";
        TotalDetailsEnum[TotalDetailsEnum["ShiftNumber"] = 'ShiftNumber'] = "ShiftNumber";
        TotalDetailsEnum[TotalDetailsEnum["TotalsGroupID"] = 'TotalsGroupID'] = "TotalsGroupID";
    })(TotalDetailsEnum = GetTotalsRequest.TotalDetailsEnum || (GetTotalsRequest.TotalDetailsEnum = {}));
})(GetTotalsRequest || (GetTotalsRequest = {}));
//# sourceMappingURL=getTotalsRequest.js.map
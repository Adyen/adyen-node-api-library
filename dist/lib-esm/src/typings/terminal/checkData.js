var CheckData = (function () {
    function CheckData() {
    }
    CheckData.getAttributeTypeMap = function () {
        return CheckData.attributeTypeMap;
    };
    CheckData.discriminator = undefined;
    CheckData.attributeTypeMap = [
        {
            "name": "accountNumber",
            "baseName": "AccountNumber",
            "type": "string"
        },
        {
            "name": "bankID",
            "baseName": "BankID",
            "type": "string"
        },
        {
            "name": "checkCardNumber",
            "baseName": "CheckCardNumber",
            "type": "string"
        },
        {
            "name": "checkNumber",
            "baseName": "CheckNumber",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "string"
        },
        {
            "name": "trackData",
            "baseName": "TrackData",
            "type": "TrackData"
        },
        {
            "name": "typeCode",
            "baseName": "TypeCode",
            "type": "CheckData.TypeCodeEnum"
        }
    ];
    return CheckData;
}());
export { CheckData };
(function (CheckData) {
    var TypeCodeEnum;
    (function (TypeCodeEnum) {
        TypeCodeEnum[TypeCodeEnum["Company"] = 'Company'] = "Company";
        TypeCodeEnum[TypeCodeEnum["Personal"] = 'Personal'] = "Personal";
    })(TypeCodeEnum = CheckData.TypeCodeEnum || (CheckData.TypeCodeEnum = {}));
})(CheckData || (CheckData = {}));
//# sourceMappingURL=checkData.js.map
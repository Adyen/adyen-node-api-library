"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instalment = void 0;
var Instalment = (function () {
    function Instalment() {
    }
    Instalment.getAttributeTypeMap = function () {
        return Instalment.attributeTypeMap;
    };
    Instalment.discriminator = undefined;
    Instalment.attributeTypeMap = [
        {
            "name": "charges",
            "baseName": "Charges",
            "type": "number"
        },
        {
            "name": "cumulativeAmount",
            "baseName": "CumulativeAmount",
            "type": "number"
        },
        {
            "name": "firstAmount",
            "baseName": "FirstAmount",
            "type": "number"
        },
        {
            "name": "firstPaymentDate",
            "baseName": "FirstPaymentDate",
            "type": "string"
        },
        {
            "name": "instalmentType",
            "baseName": "InstalmentType",
            "type": "Array<Instalment.InstalmentTypeEnum>"
        },
        {
            "name": "period",
            "baseName": "Period",
            "type": "number"
        },
        {
            "name": "periodUnit",
            "baseName": "PeriodUnit",
            "type": "Instalment.PeriodUnitEnum"
        },
        {
            "name": "planID",
            "baseName": "PlanID",
            "type": "string"
        },
        {
            "name": "sequenceNumber",
            "baseName": "SequenceNumber",
            "type": "number"
        },
        {
            "name": "totalNbOfPayments",
            "baseName": "TotalNbOfPayments",
            "type": "number"
        }
    ];
    return Instalment;
}());
exports.Instalment = Instalment;
(function (Instalment) {
    var InstalmentTypeEnum;
    (function (InstalmentTypeEnum) {
        InstalmentTypeEnum[InstalmentTypeEnum["DeferredInstalments"] = 'DeferredInstalments'] = "DeferredInstalments";
        InstalmentTypeEnum[InstalmentTypeEnum["EqualInstalments"] = 'EqualInstalments'] = "EqualInstalments";
        InstalmentTypeEnum[InstalmentTypeEnum["InequalInstalments"] = 'InequalInstalments'] = "InequalInstalments";
    })(InstalmentTypeEnum = Instalment.InstalmentTypeEnum || (Instalment.InstalmentTypeEnum = {}));
    var PeriodUnitEnum;
    (function (PeriodUnitEnum) {
        PeriodUnitEnum[PeriodUnitEnum["Annual"] = 'Annual'] = "Annual";
        PeriodUnitEnum[PeriodUnitEnum["Daily"] = 'Daily'] = "Daily";
        PeriodUnitEnum[PeriodUnitEnum["Monthly"] = 'Monthly'] = "Monthly";
        PeriodUnitEnum[PeriodUnitEnum["Weekly"] = 'Weekly'] = "Weekly";
    })(PeriodUnitEnum = Instalment.PeriodUnitEnum || (Instalment.PeriodUnitEnum = {}));
})(Instalment = exports.Instalment || (exports.Instalment = {}));
exports.Instalment = Instalment;
//# sourceMappingURL=instalment.js.map
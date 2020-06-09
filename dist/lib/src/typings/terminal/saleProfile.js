"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleProfile = void 0;
var SaleProfile = (function () {
    function SaleProfile() {
    }
    SaleProfile.getAttributeTypeMap = function () {
        return SaleProfile.attributeTypeMap;
    };
    SaleProfile.discriminator = undefined;
    SaleProfile.attributeTypeMap = [
        {
            "name": "genericProfile",
            "baseName": "GenericProfile",
            "type": "SaleProfile.GenericProfileEnum"
        },
        {
            "name": "serviceProfiles",
            "baseName": "ServiceProfiles",
            "type": "Array<SaleProfile.ServiceProfilesEnum>"
        }
    ];
    return SaleProfile;
}());
exports.SaleProfile = SaleProfile;
(function (SaleProfile) {
    var GenericProfileEnum;
    (function (GenericProfileEnum) {
        GenericProfileEnum[GenericProfileEnum["Basic"] = 'Basic'] = "Basic";
        GenericProfileEnum[GenericProfileEnum["Extended"] = 'Extended'] = "Extended";
        GenericProfileEnum[GenericProfileEnum["Standard"] = 'Standard'] = "Standard";
    })(GenericProfileEnum = SaleProfile.GenericProfileEnum || (SaleProfile.GenericProfileEnum = {}));
    var ServiceProfilesEnum;
    (function (ServiceProfilesEnum) {
        ServiceProfilesEnum[ServiceProfilesEnum["Batch"] = 'Batch'] = "Batch";
        ServiceProfilesEnum[ServiceProfilesEnum["CardReader"] = 'CardReader'] = "CardReader";
        ServiceProfilesEnum[ServiceProfilesEnum["Communication"] = 'Communication'] = "Communication";
        ServiceProfilesEnum[ServiceProfilesEnum["Loyalty"] = 'Loyalty'] = "Loyalty";
        ServiceProfilesEnum[ServiceProfilesEnum["OneTimeRes"] = 'OneTimeRes'] = "OneTimeRes";
        ServiceProfilesEnum[ServiceProfilesEnum["PIN"] = 'PIN'] = "PIN";
        ServiceProfilesEnum[ServiceProfilesEnum["Reservation"] = 'Reservation'] = "Reservation";
        ServiceProfilesEnum[ServiceProfilesEnum["Sound"] = 'Sound'] = "Sound";
        ServiceProfilesEnum[ServiceProfilesEnum["StoredValue"] = 'StoredValue'] = "StoredValue";
        ServiceProfilesEnum[ServiceProfilesEnum["Synchro"] = 'Synchro'] = "Synchro";
    })(ServiceProfilesEnum = SaleProfile.ServiceProfilesEnum || (SaleProfile.ServiceProfilesEnum = {}));
})(SaleProfile = exports.SaleProfile || (exports.SaleProfile = {}));
exports.SaleProfile = SaleProfile;
//# sourceMappingURL=saleProfile.js.map
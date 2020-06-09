"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POIProfile = void 0;
var POIProfile = (function () {
    function POIProfile() {
    }
    POIProfile.getAttributeTypeMap = function () {
        return POIProfile.attributeTypeMap;
    };
    POIProfile.discriminator = undefined;
    POIProfile.attributeTypeMap = [
        {
            "name": "genericProfile",
            "baseName": "GenericProfile",
            "type": "POIProfile.GenericProfileEnum"
        },
        {
            "name": "serviceProfiles",
            "baseName": "ServiceProfiles",
            "type": "Array<POIProfile.ServiceProfilesEnum>"
        }
    ];
    return POIProfile;
}());
exports.POIProfile = POIProfile;
(function (POIProfile) {
    var GenericProfileEnum;
    (function (GenericProfileEnum) {
        GenericProfileEnum[GenericProfileEnum["Basic"] = 'Basic'] = "Basic";
        GenericProfileEnum[GenericProfileEnum["Extended"] = 'Extended'] = "Extended";
        GenericProfileEnum[GenericProfileEnum["Standard"] = 'Standard'] = "Standard";
    })(GenericProfileEnum = POIProfile.GenericProfileEnum || (POIProfile.GenericProfileEnum = {}));
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
    })(ServiceProfilesEnum = POIProfile.ServiceProfilesEnum || (POIProfile.ServiceProfilesEnum = {}));
})(POIProfile = exports.POIProfile || (exports.POIProfile = {}));
exports.POIProfile = POIProfile;
//# sourceMappingURL=pOIProfile.js.map
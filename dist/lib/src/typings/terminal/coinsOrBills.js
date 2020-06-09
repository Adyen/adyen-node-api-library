"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoinsOrBills = void 0;
var CoinsOrBills = (function () {
    function CoinsOrBills() {
    }
    CoinsOrBills.getAttributeTypeMap = function () {
        return CoinsOrBills.attributeTypeMap;
    };
    CoinsOrBills.discriminator = undefined;
    CoinsOrBills.attributeTypeMap = [
        {
            "name": "number",
            "baseName": "Number",
            "type": "number"
        },
        {
            "name": "unitValue",
            "baseName": "UnitValue",
            "type": "number"
        }
    ];
    return CoinsOrBills;
}());
exports.CoinsOrBills = CoinsOrBills;
//# sourceMappingURL=coinsOrBills.js.map
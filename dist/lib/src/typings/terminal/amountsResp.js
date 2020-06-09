"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountsResp = void 0;
var AmountsResp = (function () {
    function AmountsResp() {
    }
    AmountsResp.getAttributeTypeMap = function () {
        return AmountsResp.attributeTypeMap;
    };
    AmountsResp.discriminator = undefined;
    AmountsResp.attributeTypeMap = [
        {
            "name": "authorizedAmount",
            "baseName": "AuthorizedAmount",
            "type": "number"
        },
        {
            "name": "cashBackAmount",
            "baseName": "CashBackAmount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "tipAmount",
            "baseName": "TipAmount",
            "type": "number"
        },
        {
            "name": "totalFeesAmount",
            "baseName": "TotalFeesAmount",
            "type": "number"
        },
        {
            "name": "totalRebatesAmount",
            "baseName": "TotalRebatesAmount",
            "type": "number"
        }
    ];
    return AmountsResp;
}());
exports.AmountsResp = AmountsResp;
//# sourceMappingURL=amountsResp.js.map
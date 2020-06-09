"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrder = void 0;
var CustomerOrder = (function () {
    function CustomerOrder() {
    }
    CustomerOrder.getAttributeTypeMap = function () {
        return CustomerOrder.attributeTypeMap;
    };
    CustomerOrder.discriminator = undefined;
    CustomerOrder.attributeTypeMap = [
        {
            "name": "accessedBy",
            "baseName": "AccessedBy",
            "type": "string"
        },
        {
            "name": "additionalInformation",
            "baseName": "AdditionalInformation",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "currentAmount",
            "baseName": "CurrentAmount",
            "type": "number"
        },
        {
            "name": "customerOrderID",
            "baseName": "CustomerOrderID",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "EndDate",
            "type": "{ [key: string]: AnyType; }"
        },
        {
            "name": "forecastedAmount",
            "baseName": "ForecastedAmount",
            "type": "number"
        },
        {
            "name": "openOrderState",
            "baseName": "OpenOrderState",
            "type": "boolean"
        },
        {
            "name": "startDate",
            "baseName": "StartDate",
            "type": "{ [key: string]: AnyType; }"
        }
    ];
    return CustomerOrder;
}());
exports.CustomerOrder = CustomerOrder;
//# sourceMappingURL=customerOrder.js.map
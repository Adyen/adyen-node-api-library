"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PayoutRequest;
(function (PayoutRequest) {
    PayoutRequest.EntityTypeEnum = {
        NaturalPerson: 'NaturalPerson',
        CompanyName: 'CompanyName'
    };
    PayoutRequest.RecurringProcessingModelEnum = {
        CardOnFile: 'CardOnFile',
        Subscription: 'Subscription'
    };
    PayoutRequest.ShopperInteractionEnum = {
        Ecommerce: 'Ecommerce',
        ContAuth: 'ContAuth',
        Moto: 'Moto',
        POS: 'POS'
    };
})(PayoutRequest = exports.PayoutRequest || (exports.PayoutRequest = {}));
//# sourceMappingURL=payoutRequest.js.map
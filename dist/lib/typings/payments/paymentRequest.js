"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentRequest;
(function (PaymentRequest) {
    PaymentRequest.EntityTypeEnum = {
        NaturalPerson: 'NaturalPerson',
        CompanyName: 'CompanyName'
    };
    PaymentRequest.RecurringProcessingModelEnum = {
        CardOnFile: 'CardOnFile',
        Subscription: 'Subscription',
        UnscheduledCardOnFile: 'UnscheduledCardOnFile'
    };
    PaymentRequest.ShopperInteractionEnum = {
        Ecommerce: 'Ecommerce',
        ContAuth: 'ContAuth',
        Moto: 'Moto',
        POS: 'POS'
    };
})(PaymentRequest = exports.PaymentRequest || (exports.PaymentRequest = {}));
//# sourceMappingURL=paymentRequest.js.map
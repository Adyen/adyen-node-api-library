"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applicationInfo_1 = require("../applicationInfo");
var PaymentRequest = /** @class */ (function () {
    function PaymentRequest() {
        if (!this.applicationInfo) {
            this.applicationInfo = new applicationInfo_1.ApplicationInfo();
        }
    }
    return PaymentRequest;
}());
exports.PaymentRequest = PaymentRequest;
(function (PaymentRequest) {
    PaymentRequest.ChannelEnum = {
        IOS: 'iOS',
        Android: 'Android',
        Web: 'Web'
    };
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
exports.PaymentRequest = PaymentRequest;
//# sourceMappingURL=paymentRequest.js.map
import { ApplicationInfo } from "../applicationInfo";
var PaymentRequest = /** @class */ (function () {
    function PaymentRequest() {
        if (!this.applicationInfo) {
            this.applicationInfo = new ApplicationInfo();
        }
    }
    return PaymentRequest;
}());
export { PaymentRequest };
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
})(PaymentRequest || (PaymentRequest = {}));
//# sourceMappingURL=paymentRequest.js.map
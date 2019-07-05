export var PaymentRequest;
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
})(PaymentRequest || (PaymentRequest = {}));
//# sourceMappingURL=paymentRequest.js.map
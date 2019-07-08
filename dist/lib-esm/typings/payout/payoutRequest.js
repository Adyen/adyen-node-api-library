export var PayoutRequest;
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
})(PayoutRequest || (PayoutRequest = {}));
//# sourceMappingURL=payoutRequest.js.map
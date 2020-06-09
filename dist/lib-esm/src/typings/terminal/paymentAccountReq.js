var PaymentAccountReq = (function () {
    function PaymentAccountReq() {
    }
    PaymentAccountReq.getAttributeTypeMap = function () {
        return PaymentAccountReq.attributeTypeMap;
    };
    PaymentAccountReq.discriminator = undefined;
    PaymentAccountReq.attributeTypeMap = [
        {
            "name": "accountType",
            "baseName": "AccountType",
            "type": "PaymentAccountReq.AccountTypeEnum"
        },
        {
            "name": "cardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "paymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        }
    ];
    return PaymentAccountReq;
}());
export { PaymentAccountReq };
(function (PaymentAccountReq) {
    var AccountTypeEnum;
    (function (AccountTypeEnum) {
        AccountTypeEnum[AccountTypeEnum["CardTotals"] = 'CardTotals'] = "CardTotals";
        AccountTypeEnum[AccountTypeEnum["Checking"] = 'Checking'] = "Checking";
        AccountTypeEnum[AccountTypeEnum["CreditCard"] = 'CreditCard'] = "CreditCard";
        AccountTypeEnum[AccountTypeEnum["Default"] = 'Default'] = "Default";
        AccountTypeEnum[AccountTypeEnum["EpurseCard"] = 'EpurseCard'] = "EpurseCard";
        AccountTypeEnum[AccountTypeEnum["Investment"] = 'Investment'] = "Investment";
        AccountTypeEnum[AccountTypeEnum["Savings"] = 'Savings'] = "Savings";
        AccountTypeEnum[AccountTypeEnum["Universal"] = 'Universal'] = "Universal";
    })(AccountTypeEnum = PaymentAccountReq.AccountTypeEnum || (PaymentAccountReq.AccountTypeEnum = {}));
})(PaymentAccountReq || (PaymentAccountReq = {}));
//# sourceMappingURL=paymentAccountReq.js.map
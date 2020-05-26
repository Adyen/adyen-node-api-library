var AdditionalData = (function () {
    function AdditionalData() {
    }
    AdditionalData.getAttributeTypeMap = function () {
        return AdditionalData.attributeTypeMap;
    };
    AdditionalData.discriminator = undefined;
    AdditionalData.attributeTypeMap = [
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "authCode",
            "baseName": "authCode",
            "type": "string"
        },
        {
            "name": "cardSummary",
            "baseName": "cardSummary",
            "type": "string"
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "string"
        },
        {
            "name": "authorisedAmountValue",
            "baseName": "authorisedAmountValue",
            "type": "string"
        },
        {
            "name": "authorisedAmountCurrency",
            "baseName": "authorisedAmountCurrency",
            "type": "string"
        }
    ];
    return AdditionalData;
}());
export { AdditionalData };
//# sourceMappingURL=additionalData.js.map
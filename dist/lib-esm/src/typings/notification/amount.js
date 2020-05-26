var Amount = (function () {
    function Amount() {
    }
    Amount.getAttributeTypeMap = function () {
        return Amount.attributeTypeMap;
    };
    Amount.discriminator = undefined;
    Amount.attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }
    ];
    return Amount;
}());
export { Amount };
//# sourceMappingURL=amount.js.map
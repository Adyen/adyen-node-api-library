var TransactionIdentification = (function () {
    function TransactionIdentification() {
    }
    TransactionIdentification.getAttributeTypeMap = function () {
        return TransactionIdentification.attributeTypeMap;
    };
    TransactionIdentification.discriminator = undefined;
    TransactionIdentification.attributeTypeMap = [
        {
            "name": "timeStamp",
            "baseName": "TimeStamp",
            "type": "string"
        },
        {
            "name": "transactionID",
            "baseName": "TransactionID",
            "type": "string"
        }
    ];
    return TransactionIdentification;
}());
export { TransactionIdentification };
//# sourceMappingURL=transactionIdentification.js.map
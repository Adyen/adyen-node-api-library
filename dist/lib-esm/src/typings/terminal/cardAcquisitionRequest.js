var CardAcquisitionRequest = (function () {
    function CardAcquisitionRequest() {
    }
    CardAcquisitionRequest.getAttributeTypeMap = function () {
        return CardAcquisitionRequest.attributeTypeMap;
    };
    CardAcquisitionRequest.discriminator = undefined;
    CardAcquisitionRequest.attributeTypeMap = [
        {
            "name": "cardAcquisitionTransaction",
            "baseName": "CardAcquisitionTransaction",
            "type": "CardAcquisitionTransaction"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }
    ];
    return CardAcquisitionRequest;
}());
export { CardAcquisitionRequest };
//# sourceMappingURL=cardAcquisitionRequest.js.map
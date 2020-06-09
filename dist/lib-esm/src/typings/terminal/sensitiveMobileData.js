var SensitiveMobileData = (function () {
    function SensitiveMobileData() {
    }
    SensitiveMobileData.getAttributeTypeMap = function () {
        return SensitiveMobileData.attributeTypeMap;
    };
    SensitiveMobileData.discriminator = undefined;
    SensitiveMobileData.attributeTypeMap = [
        {
            "name": "iMEI",
            "baseName": "IMEI",
            "type": "string"
        },
        {
            "name": "iMSI",
            "baseName": "IMSI",
            "type": "string"
        },
        {
            "name": "mSISDN",
            "baseName": "MSISDN",
            "type": "string"
        }
    ];
    return SensitiveMobileData;
}());
export { SensitiveMobileData };
//# sourceMappingURL=sensitiveMobileData.js.map
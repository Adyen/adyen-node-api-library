var SaleSoftware = (function () {
    function SaleSoftware() {
    }
    SaleSoftware.getAttributeTypeMap = function () {
        return SaleSoftware.attributeTypeMap;
    };
    SaleSoftware.discriminator = undefined;
    SaleSoftware.attributeTypeMap = [
        {
            "name": "applicationName",
            "baseName": "ApplicationName",
            "type": "string"
        },
        {
            "name": "certificationCode",
            "baseName": "CertificationCode",
            "type": "string"
        },
        {
            "name": "manufacturerID",
            "baseName": "ManufacturerID",
            "type": "string"
        },
        {
            "name": "softwareVersion",
            "baseName": "SoftwareVersion",
            "type": "string"
        }
    ];
    return SaleSoftware;
}());
export { SaleSoftware };
//# sourceMappingURL=saleSoftware.js.map
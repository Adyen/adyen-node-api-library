var POISoftware = (function () {
    function POISoftware() {
    }
    POISoftware.getAttributeTypeMap = function () {
        return POISoftware.attributeTypeMap;
    };
    POISoftware.discriminator = undefined;
    POISoftware.attributeTypeMap = [
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
    return POISoftware;
}());
export { POISoftware };
//# sourceMappingURL=pOISoftware.js.map
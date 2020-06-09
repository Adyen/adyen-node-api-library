var ExternalPlatform = (function () {
    function ExternalPlatform() {
    }
    ExternalPlatform.getAttributeTypeMap = function () {
        return ExternalPlatform.attributeTypeMap;
    };
    ExternalPlatform.discriminator = undefined;
    ExternalPlatform.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }
    ];
    return ExternalPlatform;
}());
export { ExternalPlatform };
//# sourceMappingURL=externalPlatform.js.map
var PrintOutput = (function () {
    function PrintOutput() {
    }
    PrintOutput.getAttributeTypeMap = function () {
        return PrintOutput.attributeTypeMap;
    };
    PrintOutput.discriminator = undefined;
    PrintOutput.attributeTypeMap = [
        {
            "name": "documentQualifier",
            "baseName": "DocumentQualifier",
            "type": "DocumentQualifierType"
        },
        {
            "name": "integratedPrintFlag",
            "baseName": "IntegratedPrintFlag",
            "type": "boolean"
        },
        {
            "name": "outputContent",
            "baseName": "OutputContent",
            "type": "OutputContent"
        },
        {
            "name": "outputSignature",
            "baseName": "OutputSignature",
            "type": "AnyType"
        },
        {
            "name": "requiredSignatureFlag",
            "baseName": "RequiredSignatureFlag",
            "type": "boolean"
        },
        {
            "name": "responseMode",
            "baseName": "ResponseMode",
            "type": "ResponseModeType"
        }
    ];
    return PrintOutput;
}());
export { PrintOutput };
//# sourceMappingURL=printOutput.js.map
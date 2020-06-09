"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputData = void 0;
var InputData = (function () {
    function InputData() {
    }
    InputData.getAttributeTypeMap = function () {
        return InputData.attributeTypeMap;
    };
    InputData.discriminator = undefined;
    InputData.attributeTypeMap = [
        {
            "name": "beepKeyFlag",
            "baseName": "BeepKeyFlag",
            "type": "boolean"
        },
        {
            "name": "defaultInputString",
            "baseName": "DefaultInputString",
            "type": "string"
        },
        {
            "name": "device",
            "baseName": "Device",
            "type": "DeviceType"
        },
        {
            "name": "disableCancelFlag",
            "baseName": "DisableCancelFlag",
            "type": "boolean"
        },
        {
            "name": "disableCorrectFlag",
            "baseName": "DisableCorrectFlag",
            "type": "boolean"
        },
        {
            "name": "disableValidFlag",
            "baseName": "DisableValidFlag",
            "type": "boolean"
        },
        {
            "name": "fromRightToLeftFlag",
            "baseName": "FromRightToLeftFlag",
            "type": "boolean"
        },
        {
            "name": "globalCorrectionFlag",
            "baseName": "GlobalCorrectionFlag",
            "type": "boolean"
        },
        {
            "name": "immediateResponseFlag",
            "baseName": "ImmediateResponseFlag",
            "type": "boolean"
        },
        {
            "name": "infoQualify",
            "baseName": "InfoQualify",
            "type": "InfoQualifyType"
        },
        {
            "name": "inputCommand",
            "baseName": "InputCommand",
            "type": "InputCommandType"
        },
        {
            "name": "maskCharactersFlag",
            "baseName": "MaskCharactersFlag",
            "type": "boolean"
        },
        {
            "name": "maxDecimalLength",
            "baseName": "MaxDecimalLength",
            "type": "number"
        },
        {
            "name": "maxInputTime",
            "baseName": "MaxInputTime",
            "type": "number"
        },
        {
            "name": "maxLength",
            "baseName": "MaxLength",
            "type": "number"
        },
        {
            "name": "menuBackFlag",
            "baseName": "MenuBackFlag",
            "type": "boolean"
        },
        {
            "name": "minLength",
            "baseName": "MinLength",
            "type": "number"
        },
        {
            "name": "notifyCardInputFlag",
            "baseName": "NotifyCardInputFlag",
            "type": "boolean"
        },
        {
            "name": "stringMask",
            "baseName": "StringMask",
            "type": "string"
        },
        {
            "name": "waitUserValidationFlag",
            "baseName": "WaitUserValidationFlag",
            "type": "boolean"
        }
    ];
    return InputData;
}());
exports.InputData = InputData;
//# sourceMappingURL=inputData.js.map
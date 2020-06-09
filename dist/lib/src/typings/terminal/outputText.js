"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputText = void 0;
var OutputText = (function () {
    function OutputText() {
    }
    OutputText.getAttributeTypeMap = function () {
        return OutputText.attributeTypeMap;
    };
    OutputText.discriminator = undefined;
    OutputText.attributeTypeMap = [
        {
            "name": "alignment",
            "baseName": "Alignment",
            "type": "OutputText.AlignmentEnum"
        },
        {
            "name": "characterHeight",
            "baseName": "CharacterHeight",
            "type": "OutputText.CharacterHeightEnum"
        },
        {
            "name": "characterSet",
            "baseName": "CharacterSet",
            "type": "number"
        },
        {
            "name": "characterStyle",
            "baseName": "CharacterStyle",
            "type": "OutputText.CharacterStyleEnum"
        },
        {
            "name": "characterWidth",
            "baseName": "CharacterWidth",
            "type": "OutputText.CharacterWidthEnum"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "OutputText.ColorEnum"
        },
        {
            "name": "endOfLineFlag",
            "baseName": "EndOfLineFlag",
            "type": "boolean"
        },
        {
            "name": "font",
            "baseName": "Font",
            "type": "string"
        },
        {
            "name": "startColumn",
            "baseName": "StartColumn",
            "type": "number"
        },
        {
            "name": "startRow",
            "baseName": "StartRow",
            "type": "number"
        },
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        }
    ];
    return OutputText;
}());
exports.OutputText = OutputText;
(function (OutputText) {
    var AlignmentEnum;
    (function (AlignmentEnum) {
        AlignmentEnum[AlignmentEnum["Centred"] = 'Centred'] = "Centred";
        AlignmentEnum[AlignmentEnum["Justified"] = 'Justified'] = "Justified";
        AlignmentEnum[AlignmentEnum["Left"] = 'Left'] = "Left";
        AlignmentEnum[AlignmentEnum["Right"] = 'Right'] = "Right";
    })(AlignmentEnum = OutputText.AlignmentEnum || (OutputText.AlignmentEnum = {}));
    var CharacterHeightEnum;
    (function (CharacterHeightEnum) {
        CharacterHeightEnum[CharacterHeightEnum["DoubleHeight"] = 'DoubleHeight'] = "DoubleHeight";
        CharacterHeightEnum[CharacterHeightEnum["HalfHeight"] = 'HalfHeight'] = "HalfHeight";
        CharacterHeightEnum[CharacterHeightEnum["SingleHeight"] = 'SingleHeight'] = "SingleHeight";
    })(CharacterHeightEnum = OutputText.CharacterHeightEnum || (OutputText.CharacterHeightEnum = {}));
    var CharacterStyleEnum;
    (function (CharacterStyleEnum) {
        CharacterStyleEnum[CharacterStyleEnum["Bold"] = 'Bold'] = "Bold";
        CharacterStyleEnum[CharacterStyleEnum["Italic"] = 'Italic'] = "Italic";
        CharacterStyleEnum[CharacterStyleEnum["Normal"] = 'Normal'] = "Normal";
        CharacterStyleEnum[CharacterStyleEnum["Underlined"] = 'Underlined'] = "Underlined";
    })(CharacterStyleEnum = OutputText.CharacterStyleEnum || (OutputText.CharacterStyleEnum = {}));
    var CharacterWidthEnum;
    (function (CharacterWidthEnum) {
        CharacterWidthEnum[CharacterWidthEnum["DoubleWidth"] = 'DoubleWidth'] = "DoubleWidth";
        CharacterWidthEnum[CharacterWidthEnum["SingleWidth"] = 'SingleWidth'] = "SingleWidth";
    })(CharacterWidthEnum = OutputText.CharacterWidthEnum || (OutputText.CharacterWidthEnum = {}));
    var ColorEnum;
    (function (ColorEnum) {
        ColorEnum[ColorEnum["Black"] = 'Black'] = "Black";
        ColorEnum[ColorEnum["Blue"] = 'Blue'] = "Blue";
        ColorEnum[ColorEnum["Cyan"] = 'Cyan'] = "Cyan";
        ColorEnum[ColorEnum["Green"] = 'Green'] = "Green";
        ColorEnum[ColorEnum["Magenta"] = 'Magenta'] = "Magenta";
        ColorEnum[ColorEnum["Red"] = 'Red'] = "Red";
        ColorEnum[ColorEnum["White"] = 'White'] = "White";
        ColorEnum[ColorEnum["Yellow"] = 'Yellow'] = "Yellow";
    })(ColorEnum = OutputText.ColorEnum || (OutputText.ColorEnum = {}));
})(OutputText = exports.OutputText || (exports.OutputText = {}));
exports.OutputText = OutputText;
//# sourceMappingURL=outputText.js.map
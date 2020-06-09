var SoundContent = (function () {
    function SoundContent() {
    }
    SoundContent.getAttributeTypeMap = function () {
        return SoundContent.attributeTypeMap;
    };
    SoundContent.discriminator = undefined;
    SoundContent.attributeTypeMap = [
        {
            "name": "language",
            "baseName": "Language",
            "type": "string"
        },
        {
            "name": "referenceID",
            "baseName": "ReferenceID",
            "type": "string"
        },
        {
            "name": "soundFormat",
            "baseName": "SoundFormat",
            "type": "SoundContent.SoundFormatEnum"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }
    ];
    return SoundContent;
}());
export { SoundContent };
(function (SoundContent) {
    var SoundFormatEnum;
    (function (SoundFormatEnum) {
        SoundFormatEnum[SoundFormatEnum["MessageRef"] = 'MessageRef'] = "MessageRef";
        SoundFormatEnum[SoundFormatEnum["SoundRef"] = 'SoundRef'] = "SoundRef";
        SoundFormatEnum[SoundFormatEnum["Text"] = 'Text'] = "Text";
    })(SoundFormatEnum = SoundContent.SoundFormatEnum || (SoundContent.SoundFormatEnum = {}));
})(SoundContent || (SoundContent = {}));
//# sourceMappingURL=soundContent.js.map
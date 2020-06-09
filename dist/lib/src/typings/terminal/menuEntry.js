"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuEntry = void 0;
var MenuEntry = (function () {
    function MenuEntry() {
    }
    MenuEntry.getAttributeTypeMap = function () {
        return MenuEntry.attributeTypeMap;
    };
    MenuEntry.discriminator = undefined;
    MenuEntry.attributeTypeMap = [
        {
            "name": "defaultSelectedFlag",
            "baseName": "DefaultSelectedFlag",
            "type": "boolean"
        },
        {
            "name": "menuEntryTag",
            "baseName": "MenuEntryTag",
            "type": "MenuEntry.MenuEntryTagEnum"
        },
        {
            "name": "outputFormat",
            "baseName": "OutputFormat",
            "type": "OutputFormatType"
        },
        {
            "name": "outputText",
            "baseName": "OutputText",
            "type": "Array<OutputText>"
        },
        {
            "name": "outputXHTML",
            "baseName": "OutputXHTML",
            "type": "AnyType"
        },
        {
            "name": "predefinedContent",
            "baseName": "PredefinedContent",
            "type": "PredefinedContent"
        }
    ];
    return MenuEntry;
}());
exports.MenuEntry = MenuEntry;
(function (MenuEntry) {
    var MenuEntryTagEnum;
    (function (MenuEntryTagEnum) {
        MenuEntryTagEnum[MenuEntryTagEnum["NonSelectable"] = 'NonSelectable'] = "NonSelectable";
        MenuEntryTagEnum[MenuEntryTagEnum["NonSelectableSubMenu"] = 'NonSelectableSubMenu'] = "NonSelectableSubMenu";
        MenuEntryTagEnum[MenuEntryTagEnum["Selectable"] = 'Selectable'] = "Selectable";
        MenuEntryTagEnum[MenuEntryTagEnum["SubMenu"] = 'SubMenu'] = "SubMenu";
    })(MenuEntryTagEnum = MenuEntry.MenuEntryTagEnum || (MenuEntry.MenuEntryTagEnum = {}));
})(MenuEntry = exports.MenuEntry || (exports.MenuEntry = {}));
exports.MenuEntry = MenuEntry;
//# sourceMappingURL=menuEntry.js.map
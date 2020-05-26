"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationInfo = void 0;
var client_1 = __importDefault(require("../client"));
var ApplicationInfo = (function () {
    function ApplicationInfo() {
        this.adyenLibrary = {
            name: client_1.default.LIB_NAME,
            version: client_1.default.LIB_VERSION,
        };
    }
    return ApplicationInfo;
}());
exports.ApplicationInfo = ApplicationInfo;
//# sourceMappingURL=applicationInfo.js.map
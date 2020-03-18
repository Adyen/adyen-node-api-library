"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var applicationInfo_1 = require("../typings/applicationInfo");
function setApplicationInfo(request) {
    var hasApplicationInfo = "applicationInfo" in request;
    var requestAppInfo = hasApplicationInfo && request.applicationInfo;
    var applicationInfo = new applicationInfo_1.ApplicationInfo();
    return __assign(__assign({}, request), { applicationInfo: __assign(__assign({}, requestAppInfo), applicationInfo) });
}
exports.default = setApplicationInfo;
//# sourceMappingURL=setApplicationInfo.js.map
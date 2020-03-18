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
import { ApplicationInfo } from "../typings/applicationInfo";
function setApplicationInfo(request) {
    var hasApplicationInfo = "applicationInfo" in request;
    var requestAppInfo = hasApplicationInfo && request.applicationInfo;
    var applicationInfo = new ApplicationInfo();
    return __assign(__assign({}, request), { applicationInfo: __assign(__assign({}, requestAppInfo), applicationInfo) });
}
export default setApplicationInfo;
//# sourceMappingURL=setApplicationInfo.js.map
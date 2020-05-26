import Client from "../client";
var ApplicationInfo = (function () {
    function ApplicationInfo() {
        this.adyenLibrary = {
            name: Client.LIB_NAME,
            version: Client.LIB_VERSION,
        };
    }
    return ApplicationInfo;
}());
export { ApplicationInfo };
//# sourceMappingURL=applicationInfo.js.map
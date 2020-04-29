import {ApplicationInfo} from "../typings/applicationInfo";

interface AppInfo { applicationInfo?: ApplicationInfo }

function setApplicationInfo<T extends AppInfo>(request: T): T {
    const hasApplicationInfo = "applicationInfo" in request;
    const requestAppInfo = hasApplicationInfo && request.applicationInfo;
    const applicationInfo = new ApplicationInfo();
    return {...request, applicationInfo: {...requestAppInfo, ...applicationInfo}};
}


export default setApplicationInfo;

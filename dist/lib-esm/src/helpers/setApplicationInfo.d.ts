import { ApplicationInfo } from "../typings/applicationInfo";
interface AppInfo {
    applicationInfo?: ApplicationInfo;
}
declare function setApplicationInfo<T extends AppInfo>(request: T): T;
export default setApplicationInfo;

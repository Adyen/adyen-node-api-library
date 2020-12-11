import { ApplicationInfo } from "./applicationInfo";

interface AppInfo { applicationInfo?: ApplicationInfo }
export type GenericRequest<T> = T & AppInfo;

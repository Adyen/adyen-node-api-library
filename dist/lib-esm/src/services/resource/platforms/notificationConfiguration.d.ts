import Service from "../../../service";
import Resource from "../../resource";
declare type Endpoints = "/createNotificationConfiguration" | "/getNotificationConfiguration" | "/getNotificationConfigurationList" | "/testNotificationConfiguration" | "/updateNotificationConfiguration" | "/deleteNotificationConfigurations";
declare class PlatformsNotificationConfiguration extends Resource {
    constructor(service: Service, endpoint: Endpoints);
}
export default PlatformsNotificationConfiguration;

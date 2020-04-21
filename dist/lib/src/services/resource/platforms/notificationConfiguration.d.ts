import Service from "../../../service";
import Resource from "../../resource";
declare enum Endpoints {
    create = "/createNotificationConfiguration",
    get = "/getNotificationConfiguration",
    getList = "/getNotificationConfigurationList",
    test = "/testNotificationConfiguration",
    update = "/updateNotificationConfiguration",
    delete = "/deleteNotificaitonConfigurations"
}
declare class PlatformsNotificationConfiguration extends Resource {
    constructor(service: Service, endpoint: Endpoints);
}
export default PlatformsNotificationConfiguration;

import Client from "../../client";
import Service from "../../service";
import Resource from "../resource";

class BalancePlatformResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.balancePlatformEndpoint}/${Client.BALANCE_PLATFORM_API_VERSION}${endpoint}`
        );
    }
}

export default BalancePlatformResource;
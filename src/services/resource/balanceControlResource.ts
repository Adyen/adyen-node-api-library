import Client from "../../client";
import Service from "../../service";
import Resource from "../resource";

class BalanceControlResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.balanceControlEndpoint}/${Client.BALANCE_CONTROL_API_VERSION}${endpoint}`
        );
    }
}

export default BalanceControlResource;
import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";


class Me extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.managementEndpoint}/${Client.MANAGEMENT_API_VERSION}/me${endpoint}`,
        );
    }
}

export default Me;
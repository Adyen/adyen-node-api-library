import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class ManagementResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.managementEndpoint}/${Client.MANAGEMENT_API_VERSION}${endpoint}`
        );
    }
}

export default ManagementResource;
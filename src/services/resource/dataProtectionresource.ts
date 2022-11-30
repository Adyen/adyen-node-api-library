import Client from "../../client";
import Service from "../../service";
import Resource from "../resource";

class DataProtectionResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.dataProtectionEndpoint}/${Client.DATA_PROTECTION_API_VERSION}${endpoint}`
        );
    }
}

export default DataProtectionResource;
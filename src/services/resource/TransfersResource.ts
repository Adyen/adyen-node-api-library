import Client from "../../client";
import Service from "../../service";
import Resource from "../resource";

class TransfersResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.transfersEndpoint}/${Client.TRANSFERS_API_VERSION}${endpoint}`
        );
    }
}

export default TransfersResource;
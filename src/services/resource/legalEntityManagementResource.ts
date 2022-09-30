import Client from "../../client";
import Service from "../../service";
import Resource from "../resource";

class LegalEntityManagementResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.legalEntityManagementEndpoint}/${Client.LEGAL_ENTITY_MANAGEMENT_API_VERSION}${endpoint}`
        );
    }
}

export default legalEntityManagementResource;
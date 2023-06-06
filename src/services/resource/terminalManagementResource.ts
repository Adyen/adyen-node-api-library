import Client from "./../../client";
import Service from "./../../service";
import Resource from "./../resource";

class AssignTerminals extends Resource {
    public constructor(service: Service, endpoint: String) {
        super(
            service,
            `${service.client.config.terminalManagementEndpoint}/${Client.TERMINAL_MANAGEMENT_API_VERSION}${endpoint}`
        );
    }
}

export default AssignTerminals;
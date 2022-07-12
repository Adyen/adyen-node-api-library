import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class VoidTransaction extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.storedValueEndpoint}/${Client.STOREDVALUE_API_VERSION}/voidTransaction`
        );
    }
}

export default VoidTransaction;
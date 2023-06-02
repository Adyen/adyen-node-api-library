import Resource from "./../resource";
import Service from "./../../service";
import Client from "./../../client";

class BinLookupResource extends Resource {
    public constructor(service: Service, endpoint: String) {
        super(
            service,
            `${service.client.config.endpoint}${Client.BIN_LOOKUP_PAL_SUFFIX}${Client.BIN_LOOKUP_API_VERSION}${endpoint}`
        );
    }
}

export default BinLookupResource;

import Resource from "./../resource";
import Service from "./../../service";
import Client from "./../../client";

class PayoutResource extends Resource {
    public constructor(service: Service, endpoint: String) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Payout/${Client.API_VERSION}${endpoint}`
        );
    }
}

export default PayoutResource;s
import Client from "../../client";
import Service from "../../service";
import Resource from "../resource";

class CheckoutResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}${endpoint}`
        );
    }
}

export default CheckoutResource;
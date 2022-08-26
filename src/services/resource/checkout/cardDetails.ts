import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class CardDetails extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/cardDetails`,
        );
    }
}

export default CardDetails;

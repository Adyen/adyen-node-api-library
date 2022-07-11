import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class Retrieve3ds2Result extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}/retrieve3ds2Result`,
        );
    }
}

export default Retrieve3ds2Result;
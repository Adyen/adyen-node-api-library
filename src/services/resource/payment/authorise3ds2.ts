import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class Authorise3ds2 extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}/authorise3ds2`,
        );
    }
}

export default Authorise3ds2;
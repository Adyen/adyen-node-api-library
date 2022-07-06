import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class Authorise3d extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}/authorise3d`,
        );
    }
}

export default Authorise3d;
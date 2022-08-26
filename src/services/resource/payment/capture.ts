import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class Capture extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}/capture`,
        );
    }
}

export default Capture;
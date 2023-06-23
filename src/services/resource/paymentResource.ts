import Client from "./../../client";
import Service from "./../../service";
import Resource from "./../resource";

class PaymentResource extends Resource {
    public constructor(service: Service, endpoint: String) {
        super(
            service,
            `${service.client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}${endpoint}`,
        );
    }
}

export default PaymentResource;
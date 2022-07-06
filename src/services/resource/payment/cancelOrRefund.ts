import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class CancelOrRefund extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}/cancelOrRefund`,
        );
    }
}

export default CancelOrRefund;
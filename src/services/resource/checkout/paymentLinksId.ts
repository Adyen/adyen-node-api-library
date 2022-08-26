import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class PaymentLinksId extends Resource {

    public constructor(service: Service, paymentLinksId: string) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/paymentLinks/${paymentLinksId}`,
        );
    }
}

export default PaymentLinksId;

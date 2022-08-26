import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

class GetAuthenticationResult extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.paymentEndpoint}/${Client.PAYMENT_API_VERSION}/getAuthenticationResult`,
        );
    }
}

export default GetAuthenticationResult;
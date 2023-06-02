import Client from "../../client";
import Service from "../../service";
import Resource from "../resource";

class RecurringResource extends Resource {
    public constructor(service: Service, endpoint: string) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Recurring/${Client.RECURRING_API_VERSION}${endpoint}` ,
        );
    }
}

export default RecurringResource;
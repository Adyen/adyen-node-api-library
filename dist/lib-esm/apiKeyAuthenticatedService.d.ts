import Client from "./client";
import Service from "./service";
declare class ApiKeyAuthenticatedService extends Service {
    protected constructor(client: Client);
}
export default ApiKeyAuthenticatedService;

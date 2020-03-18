import Client from "./client";
declare class Service {
    apiKeyRequired: boolean;
    client: Client;
    protected constructor(client: Client);
}
export default Service;

import Client from "./client";
declare class Service {
    protected _apiKeyRequired: boolean;
    private _client;
    protected constructor(client: Client);
    client: Client;
    apiKeyRequired: boolean;
}
export default Service;

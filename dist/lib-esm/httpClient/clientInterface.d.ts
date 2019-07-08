/// <reference types="node" />
import Config from "../config";
import { RequestOptions } from "../typings/requestOptions";
import { AgentOptions } from "https";
interface ClientInterface {
    request(endpoint: string, json: string, config: Config, isApiKeyRequired: boolean, requestOptions?: RequestOptions): Promise<string>;
    post(endpoint: string, postParameters: [string, string][], config: Config): Promise<string>;
    proxy?: AgentOptions;
}
export default ClientInterface;

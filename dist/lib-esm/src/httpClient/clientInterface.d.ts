/// <reference types="node" />
import { AgentOptions } from "https";
import HttpClientException from "./httpClientException";
import ApiException from "../services/exception/apiException";
import { Config } from "../index";
import { IRequest } from "../typings/requestOptions";
interface ClientInterface {
    request(endpoint: string, json: string, config: Config, isApiKeyRequired: boolean, requestOptions?: IRequest.Options): Promise<string | HttpClientException | ApiException>;
    post(endpoint: string, postParameters: [string, string][], config: Config): Promise<HttpClientException | string>;
    proxy?: AgentOptions;
}
export default ClientInterface;

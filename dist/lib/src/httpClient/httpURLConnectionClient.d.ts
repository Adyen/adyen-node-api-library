/// <reference types="node" />
import { AgentOptions } from "https";
import Config from "../config";
import HttpClientException from "./httpClientException";
import ApiException from "../services/exception/apiException";
import ClientInterface from "./clientInterface";
import { IRequest } from "../typings/requestOptions";
declare class HttpURLConnectionClient implements ClientInterface {
    private static CHARSET;
    proxy?: AgentOptions;
    private agentOptions;
    request(endpoint: string, json: string, config: Config, isApiRequired: boolean, requestOptions: IRequest.Options): Promise<string | HttpClientException | ApiException>;
    post(endpoint: string, postParameters: [string, string][], config: Config): Promise<HttpClientException | string>;
    private createRequest;
    private getQuery;
    private doPostRequest;
    private installCertificateVerifier;
}
export default HttpURLConnectionClient;

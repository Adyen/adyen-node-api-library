/// <reference types="node" />
import { AgentOptions } from "https";
import Config from "../config";
import { RequestOptions } from "../typings/requestOptions";
import ClientInterface from "./clientInterface";
declare class HttpURLConnectionClient implements ClientInterface {
    private static CHARSET;
    private _proxy;
    private agentOptions;
    request(endpoint: string, json: string, config: Config, isApiRequired: boolean, requestOptions?: RequestOptions): Promise<string>;
    post(endpoint: string, postParameters: [string, string][], config: Config): Promise<string>;
    proxy: AgentOptions;
    private createRequest;
    private getQuery;
    private doPostRequest;
    private static setBasicAuthentication;
    private installCertificateVerifier;
}
export default HttpURLConnectionClient;

/// <reference types="node" />
import { IncomingHttpHeaders, IncomingMessage } from "http";
declare class HttpClientException implements Error {
    private _code;
    private _responseHeaders;
    private readonly _message;
    private readonly _name;
    private _responseBody;
    constructor(message: string, code?: number, responseHeaders?: IncomingHttpHeaders, responseBody?: IncomingMessage);
    readonly message: string;
    readonly name: string;
    code: number;
    responseHeaders: IncomingHttpHeaders;
    responseBody: IncomingMessage;
}
export default HttpClientException;

/// <reference types="node" />
import { IncomingHttpHeaders, IncomingMessage } from "http";
declare class HttpClientException implements Error {
    statusCode: number;
    errorCode: string | undefined;
    responseHeaders: IncomingHttpHeaders | undefined;
    readonly message: string;
    readonly name: string;
    responseBody: IncomingMessage | undefined;
    constructor(message: string, statusCode?: number, errorCode?: string, responseHeaders?: IncomingHttpHeaders, responseBody?: IncomingMessage);
}
export default HttpClientException;

/// <reference types="node" />
import { IncomingHttpHeaders } from "http";
interface ExceptionInterface {
    message: string;
    statusCode?: number;
    errorCode?: string;
    responseHeaders?: IncomingHttpHeaders;
    responseBody?: string;
}
declare class HttpClientException implements Error {
    statusCode: number;
    errorCode?: string;
    responseHeaders?: IncomingHttpHeaders;
    readonly message: string;
    readonly name: string;
    responseBody?: string;
    constructor(props: ExceptionInterface);
}
export default HttpClientException;

/// <reference types="node" />
import { RequestOptions as HttpsRequestOptions } from "https";
export declare type RequestOptions = HttpsRequestOptions & {
    idempotencyKey?: string;
};

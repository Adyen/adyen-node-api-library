/// <reference types="node" />
import * as https from "https";
export declare namespace IRequest {
    type Options = https.RequestOptions & {
        idempotencyKey?: string;
    };
}

// Generated using typescript-generator version 2.14.505 on 2019-06-03 16:13:35.

/// <reference types="node"/>

import * as https from "https";
import { URLSearchParams } from "url";

export namespace IRequest {
    type QueryString = ConstructorParameters<typeof URLSearchParams>[0];

    export type Options = https.RequestOptions & {
        idempotencyKey?: string;
        params?: QueryString;
    };
}


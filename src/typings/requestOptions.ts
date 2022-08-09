/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

// Generated using typescript-generator version 2.14.505 on 2019-06-03 16:13:35.

/// <reference types="node"/>

import * as https from "https";
import { URLSearchParams } from "url";

export namespace IRequest {
    type QueryString = URLSearchParams | string | NodeJS.Dict<string | string[]> | Iterable<[string, string]> | Array<[string, string]>;
    export type Options = https.RequestOptions & {
        idempotencyKey?: string;
        params?: QueryString;
    };
}


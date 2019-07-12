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
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import {IncomingHttpHeaders, IncomingMessage} from "http";

class HttpClientException implements Error {
    public code: number = 0;
    public responseHeaders: IncomingHttpHeaders | undefined;
    public readonly message: string;
    public readonly name: string;
    public responseBody: IncomingMessage | undefined;

    public constructor(message: string, code?: number, responseHeaders?: IncomingHttpHeaders, responseBody?: IncomingMessage) {
        this.name = "HttpClientException";
        this.message = message;
        if(code) this.code = code;
        if(responseHeaders) this.responseHeaders = responseHeaders;
        if(responseBody) this.responseBody = responseBody;
    }
}

export default HttpClientException;

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

import { IncomingHttpHeaders } from "http";
import { ApiError } from "../typings/apiError";

interface ExceptionInterface {
    message: string;
    statusCode?: number;
    errorCode?: string;
    responseHeaders?: IncomingHttpHeaders;
    responseBody?: string;
    apiError?: ApiError; // model of the error returned by the API
}

class HttpClientException extends Error {
    public statusCode = 500;
    public errorCode?: string;
    public responseHeaders?: IncomingHttpHeaders;
    public readonly name: string;
    public responseBody?: string;
    public apiError?: ApiError;

    public constructor(props: ExceptionInterface) {
        super(props.message);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = "HttpClientException";

        if (props.responseHeaders) this.responseHeaders = props.responseHeaders;
        if (props.responseBody) this.responseBody = props.responseBody;
        if (props.errorCode) this.errorCode = props.errorCode;
        if (props.statusCode) this.statusCode = props.statusCode;
        if (props.apiError) this.apiError = props.apiError;
    }
}

export default HttpClientException;


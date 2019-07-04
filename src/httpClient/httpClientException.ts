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
    private _code: number = 0;
    private _responseHeaders: IncomingHttpHeaders;
    private readonly _message: string;
    private readonly _name: string;
    private _responseBody: IncomingMessage;

    public constructor(message: string, code?: number, responseHeaders?: IncomingHttpHeaders, responseBody?: IncomingMessage) {
        this._name = "HttpClientException";
        this._message = message;
        this._code = code;
        this._responseHeaders = responseHeaders;
        this._responseBody = responseBody;
    }

    public get message(): string {
        return this._message;
    }

    public get name(): string {
        return this._name;
    }

    public get code(): number {
        return this._code;
    }

    public set code(value: number) {
        this._code = value;
    }

    public get responseHeaders(): IncomingHttpHeaders {
        return this._responseHeaders;
    }

    public set responseHeaders(value: IncomingHttpHeaders) {
        this._responseHeaders = value;
    }

    public get responseBody(): IncomingMessage {
        return this._responseBody;
    }

    public set responseBody(value: IncomingMessage) {
        this._responseBody = value;
    }
}

export default HttpClientException;

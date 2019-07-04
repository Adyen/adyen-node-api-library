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

import { ApiError } from "../../typings/apiError";

class ApiException implements Error {
    private _error: ApiError;
    private _statusCode: number;
    private readonly _message: string;
    private readonly _name: string;

    public constructor(message: string, statusCode: number) {
        this._name = "ApiException";
        this._message = message;
        this._statusCode = statusCode;
    }

    public get error(): ApiError {
        return this._error;
    }

    public set error(error: ApiError) {
        this._error = error;
    }

    public get statusCode(): number {
        return this._statusCode;
    }

    public set statusCode(statusCode: number) {
        this._statusCode = statusCode;
    }

    public get message(): string {
        return this._message;
    }

    public get name(): string {
        return this._name;
    }
}

export default ApiException;

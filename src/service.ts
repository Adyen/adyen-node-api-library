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

import Client from "./client";

class Service {
    protected _apiKeyRequired: boolean = false;
    private _client: Client;

    protected constructor(client: Client) {
        this._client = client;
    }

    public get client(): Client {
        return this._client;
    }

    public set client(client: Client) {
        this._client = client;
    }

    public get apiKeyRequired(): boolean {
        return this._apiKeyRequired;
    }

    public set apiKeyRequired(apiKeyRequired: boolean) {
        this._apiKeyRequired = apiKeyRequired;
    }
}

export default Service;

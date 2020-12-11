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

import Config from "../config";
import Service from "../service";
import HttpClientException from "../httpClient/httpClientException";
import ApiException from "./exception/apiException";
import ClientInterface from "../httpClient/clientInterface";
import { IRequest } from "../typings/requestOptions";

abstract class Resource {
    protected endpoint: string;
    protected _params: string = '';
    private service: Service;

    protected constructor(service: Service, endpoint: string) {
        this.service = service;
        this.endpoint = endpoint;
    }

    protected set params(par: string) {
        this._params = par;
    }

    protected request(json: string, requestOptions?: IRequest.Options): Promise<string | HttpClientException | ApiException> {
        const clientInterface: ClientInterface = this.service.client.httpClient;
        const config: Config = this.service.client.config;

        return clientInterface.request(
            `${this.endpoint}${this._params}`,
            json, config,
            this.service.apiKeyRequired,
            requestOptions,
        );
    }
}

export default Resource;

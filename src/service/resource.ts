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

import Config from "../config";
import ClientInterface from "../typings/httpClient/clientInterface";
import Service from "../service";
import { RequestOptions } from "../typings/requestOptions";
import ApiException from "./exception/apiException";

abstract class Resource {
    protected endpoint: string;
    private service: Service;

    protected constructor(service: Service, endpoint: string) {
        this.service = service;
        this.endpoint = endpoint;
    }

    public request(json: string, requestOptions?: RequestOptions): Promise<string> {
        const clientInterface: ClientInterface = this.service.client.httpClient;
        const config: Config = this.service.client.config;

        try {
            return clientInterface.request(
                this.endpoint,
                json, config,
                this.service.apiKeyRequired,
                requestOptions,
            );
        } catch (e) {
            const apiException: ApiException = new ApiException(e.message, e.statusCode);

            try {
                apiException.error = e.responseBody;
            } catch (err) {
                throw new ApiException("Invalid response or an invalid X-API-Key key was used", err.statusCode);
            }

            throw apiException;
        }
    }
}

export default Resource;

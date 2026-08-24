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
import ClientInterface from "../httpClient/clientInterface";
import { IRequest } from "../typings/requestOptions";

class Resource {
    private endpoint: string;
    private service: Service;

    /**
     * Creates a resource for an API service endpoint.
     *
     * @param service - Service used to access the configured HTTP client.
     * @param endpoint - Fully qualified URL for the API operation.
     */
    public constructor(service: Service, endpoint: string) {
        this.service = service;
        this.endpoint = endpoint;
    }

    /**
     * Sends a string or binary request to the resource endpoint.
     *
     * @param json - Request body to send.
     * @param requestOptions - Optional HTTP request configuration.
     * @returns The response body as a string.
     */
    public request(json: string | Buffer, requestOptions?: IRequest.Options): Promise<string> {
        const clientInterface: ClientInterface = this.service.client.httpClient;
        const config: Config = this.service.client.config;

        return clientInterface.request(
            this.endpoint,
            json, config,
            this.service.apiKeyRequired,
            requestOptions,
        );
    }
}

export default Resource;

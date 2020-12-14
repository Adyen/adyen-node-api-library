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

type Req = { [key: string]: any };
type ReqWithId = { id?: string } & Req;

abstract class Resource {
    protected endpoint: string;
    protected post?(req: Req, requestOptions?: IRequest.Options): Promise<{}>;
    protected patch?(req?: ReqWithId, requestOptions?: IRequest.Options): Promise<{}>;
    protected get?(req?: ReqWithId, requestOptions?: IRequest.Options): Promise<{}>;
    protected delete?(req?: ReqWithId, requestOptions?: IRequest.Options): Promise<{}>;
    private service: Service;

    protected constructor(service: Service, endpoint: string) {
        this.service = service;
        this.endpoint = endpoint;
    }

    protected request(json: string, requestOptions?: IRequest.Options): Promise<string | HttpClientException | ApiException> {
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

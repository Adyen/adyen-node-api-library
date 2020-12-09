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
import { AgentOptions } from "https";
import HttpClientException from "./httpClientException";
import ApiException from "../services/exception/apiException";
import { Config } from "../index";
import { IRequest } from "../typings/requestOptions";

interface ClientInterface {
    request(
        endpoint: string, json: string, config: Config, isApiKeyRequired: boolean, requestOptions?: IRequest.Options,
    ): Promise<string | HttpClientException | ApiException>;
    proxy?: AgentOptions;
}

export default ClientInterface;

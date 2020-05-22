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

import Resource from "../services/resource";
import HttpClientException from "../httpClient/httpClientException";
import ApiException from "../services/exception/apiException";
import {IRequest} from "../typings/requestOptions";

async function getJsonResponse<T>(resource: Resource, jsonRequest: T | string, requestOptions?: IRequest.Options): Promise<string>;
async function getJsonResponse<T, R>(resource: Resource, jsonRequest: T | string, requestOptions?: IRequest.Options): Promise<R>;

async function getJsonResponse<T, R>(
    resource: Resource,
    jsonRequest: T | string,
    requestOptions: IRequest.Options = {},
): Promise<R | string | HttpClientException | ApiException> {
    const request = typeof jsonRequest === "string" ? jsonRequest : JSON.stringify(jsonRequest);
    const response = await resource.request(request, requestOptions);
    try {
        return typeof response === "string" ? JSON.parse(response) : response;
    } catch (e) {
        return response;
    }
}
export default getJsonResponse;

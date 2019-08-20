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

import Resource from "../services/resource";
import { RequestOptions } from "../typings/requestOptions";
import HttpClientException from "../httpClient/httpClientException";
import ApiException from "../services/exception/apiException";

async function getJsonResponse<T>(resource: Resource, jsonRequest: T | string, requestOptions?: RequestOptions): Promise<string>;
async function getJsonResponse<T, R>(resource: Resource, jsonRequest: T | string, requestOptions?: RequestOptions): Promise<R>;

async function getJsonResponse<T, R>(
    resource: Resource,
    jsonRequest: T | string,
    requestOptions: RequestOptions = {},
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

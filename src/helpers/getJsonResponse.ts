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
import { IRequest } from "../typings/requestOptions";

async function getJsonResponse<T>(resource: Resource, jsonRequest: T | string, requestOptions?: IRequest.Options): Promise<string>;
async function getJsonResponse<T, R>(resource: Resource, jsonRequest: T | string, requestOptions?: IRequest.Options): Promise<R>;

/**
 * Makes the API call and returns the parsed JSON response.
 *
 * @template T - The type of the request payload.
 * @template R - The expected type of the parsed JSON response.
 * @param resource - The API resource responsible for handling the request.
 * @param jsonRequest - The request payload, either as an object or a JSON string.
 * @param requestOptions - Optional request options to customize the request.
 * @returns A promise that resolves to the parsed JSON response of type `R`, or the string "ok" for TerminalAPI responses.
 */
async function getJsonResponse<T, R>(
    resource: Resource,
    jsonRequest: T | string,
    requestOptions: IRequest.Options = {},
): Promise<R | string> {
    const request = typeof jsonRequest === "string" ? jsonRequest : JSON.stringify(jsonRequest);
    const response = await resource.request(request, requestOptions);

    if (!response) {
        return "" as string;
    }

    if (typeof response !== "string") {
        return response;
    }

    if (response === "ok") {
        // handling TerminalAPI responses
        return response;
    }

    try {
        return JSON.parse(response);
    } catch (e) {
        console.warn("Unexpected error in getJsonResponse:", (e as Error).message);
        return response; // or: return response as R | string;
    }
}

export default getJsonResponse;

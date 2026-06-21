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
import { CloudDeviceApiResponse } from "../typings/cloudDevice/cloudDeviceApiResponse";
import { IRequest } from "../typings/requestOptions";
import { TerminalApiResponse } from "../typings/terminal/models";

/**
 * Sends a JSON request to the given resource and returns a string or a deserialized `TerminalApiResponse`.
 * Used by Terminal API /async method
 * 
 * @template T The request type (usually a model or plain object).
 * @param {Resource} resource - The API resource to which the request is sent.
 * @param {T | string} jsonRequest - The request payload, either as an object or raw JSON string.
 * @param {IRequest.Options} [requestOptions] - Optional HTTP request options.
 * @returns {Promise<string | TerminalApiResponse>} A promise resolving to either a raw response string or a `TerminalApiResponse` object.
 *
 * @example
 * const response = await getJsonResponse<TerminalApiRequest>(terminalApiResource, request);
 */
async function getJsonResponse<T>(resource: Resource, jsonRequest: T | string, requestOptions?: IRequest.Options): Promise<string | TerminalApiResponse>;

/**
 * Sends a JSON request and returns a deserialized CloudDeviceApiResponse.
 *
 * @template T The request type
 * @param resource - The API resource.
 * @param jsonRequest - The request payload.
 * @param requestOptions - Optional HTTP request options.
 * @returns A promise resolving to a CloudDeviceApiResponse.
 */
async function getJsonResponse<T>(resource: Resource, jsonRequest: T | string, requestOptions?: IRequest.Options,): Promise<string | CloudDeviceApiResponse>;


/**
 * Sends a JSON request to the given resource and returns a deserialized response of the expected type.
 * Used by all APIs and Terminal API sync method 
 *
 * @template T The request type.
 * @template R The expected deserialized response type.
 * @param {Resource} resource - The API resource to which the request is sent.
 * @param {T | string} jsonRequest - The request payload, either as an object or raw JSON string.
 * @param {IRequest.Options} [requestOptions] - Optional HTTP request options.
 * @returns {Promise<R>} A promise resolving to the deserialized response object.
 *
 * @example
 * const response = await getJsonResponse<MyRequestType, MyResponseType>(resource, request);
 */
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

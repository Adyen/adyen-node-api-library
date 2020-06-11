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

import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Async from "./resource/terminal/cloud/async";
import Sync from "./resource/terminal/cloud/sync";
import mergeDeep from "../utils/mergeDeep";
import {ApplicationInfo} from "../typings/applicationInfo";
import {ObjectSerializer, TerminalApiRequest, TerminalApiResponse} from "../typings/terminal/models";

class TerminalCloudAPI extends ApiKeyAuthenticatedService {
    private readonly terminalApiAsync: Async;
    private readonly terminalApiSync: Sync;

    public constructor(client: Client) {
        super(client);
        this.terminalApiAsync = new Async(this);
        this.terminalApiSync = new Sync(this);
    }

    private static setApplicationInfo(request: TerminalApiRequest): TerminalApiRequest {
        if (request.saleToPOIRequest.paymentRequest) {
            const applicationInfo = new ApplicationInfo();
            const saleToAcquirerData = {applicationInfo};
            const saleData = {saleToAcquirerData};
            const paymentRequest = {saleData};
            const saleToPOIRequest = {paymentRequest};
            const reqWithAppInfo = {saleToPOIRequest};

            mergeDeep(request, reqWithAppInfo);
            const formattedRequest = ObjectSerializer.serialize(request, "TerminalApiRequest");

            if (formattedRequest.SaleToPOIRequest?.PaymentRequest?.SaleData?.SaleToAcquirerData) {
                const dataString = JSON.stringify(formattedRequest.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData);
                formattedRequest.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData = Buffer.from(dataString).toString("base64");
            }

            return formattedRequest;
        }

        return ObjectSerializer.serialize(request, "TerminalApiRequest");
    }

    public async(terminalApiRequest: TerminalApiRequest): Promise<string> {
        const request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        return getJsonResponse<TerminalApiRequest>(this.terminalApiAsync, request);
    }

    public async sync(terminalApiRequest: TerminalApiRequest): Promise<TerminalApiResponse> {
        const request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        const response = await getJsonResponse<TerminalApiRequest, TerminalApiResponse>(
            this.terminalApiSync,
            request,
        );

        return ObjectSerializer.deserialize(response, "TerminalApiResponse");
    }
}

export default TerminalCloudAPI;

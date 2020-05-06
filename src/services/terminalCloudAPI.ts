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

import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import {Convert, TerminalApiRequest, TerminalApiResponse} from "../typings/terminal";
import Async from "./resource/terminal/cloud/async";
import Sync from "./resource/terminal/cloud/sync";
import mergeDeep from "../utils/mergeDeep";
import {ApplicationInfo} from "../typings/applicationInfo";

class TerminalCloudAPI extends ApiKeyAuthenticatedService {
    private readonly terminalApiAsync: Async;
    private readonly terminalApiSync: Sync;

    public constructor(client: Client) {
        super(client);
        this.terminalApiAsync = new Async(this);
        this.terminalApiSync = new Sync(this);
    }

    private static setApplicationInfo(request: TerminalApiRequest): TerminalApiRequest {
        if (request.saleToPoiRequest.paymentRequest) {
            const applicationInfo = Buffer.from(JSON.stringify(new ApplicationInfo())).toString("base64");

            const saleToAcquirerData = {applicationInfo};
            const saleData = {saleToAcquirerData};
            const paymentRequest = {saleData};
            const saleToPoiRequest = {paymentRequest};
            const newRequest = {saleToPoiRequest};

            return mergeDeep(request, newRequest);
        }

        return request;
    }

    public async(terminalApiRequest: TerminalApiRequest): Promise<string> {
        const request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        return getJsonResponse<TerminalApiRequest>(this.terminalApiAsync, Convert.terminalApiRequestToJson(request));
    }

    public async sync(terminalApiRequest: TerminalApiRequest): Promise<TerminalApiResponse> {
        const request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        const response = await getJsonResponse<TerminalApiRequest, TerminalApiResponse>(
            this.terminalApiSync,
            Convert.terminalApiRequestToJson(request),
        );

        return Convert.toTerminalApiResponse(JSON.stringify(response));
    }
}

export default TerminalCloudAPI;

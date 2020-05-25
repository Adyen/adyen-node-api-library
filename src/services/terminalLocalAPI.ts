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
import NexoCrypto from "../security/nexoCrypto";
import {
    Convert,
    SaleToPoiSecuredMessage,
    SecurityKey,
    TerminalApiRequest, TerminalApiResponse,
    TerminalApiSecuredRequest,
} from "../typings/terminal";
import LocalRequest from "./resource/terminal/local/localRequest";

class TerminalLocalAPI extends ApiKeyAuthenticatedService {
    private readonly localRequest: LocalRequest;
    private nexoCrypto: NexoCrypto;

    public constructor(client: Client) {
        super(client);
        this.localRequest = new LocalRequest(this);
        this.nexoCrypto = new NexoCrypto();
    }

    public async request(
        terminalApiRequest: TerminalApiRequest,
        securityKey: SecurityKey,
    ): Promise<TerminalApiResponse> {
        const saleToPoiSecuredMessage: SaleToPoiSecuredMessage = NexoCrypto.encrypt(
            terminalApiRequest.saleToPoiRequest.messageHeader,
            Convert.terminalApiRequestToJson(terminalApiRequest),
            securityKey,
        );

        const securedPaymentRequest: TerminalApiSecuredRequest = {
            saleToPoiRequest: saleToPoiSecuredMessage,
        };

        const jsonResponse = await getJsonResponse<TerminalApiSecuredRequest, TerminalApiResponse>(
            this.localRequest,
            Convert.terminalApiSecuredRequestToJson(securedPaymentRequest),
        );

        const terminalApiSecuredResponse = Convert.toTerminalApiSecuredResponse(JSON.stringify(jsonResponse));

        const response = this.nexoCrypto.decrypt(
            terminalApiSecuredResponse.saleToPoiResponse,
            securityKey,
        );

        return Convert.toTerminalApiResponse(response);
    }
}

export default TerminalLocalAPI;

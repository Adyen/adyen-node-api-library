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
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import Service from "../service";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import NexoCrypto from "../security/nexoCrypto";
import LocalRequest from "./resource/terminal/local/localRequest";
import {
    ObjectSerializer,
    SecurityKey,
    TerminalApiRequest,
    TerminalApiResponse,
    SaleToPOISecuredMessage,
    TerminalApiSecuredRequest,
    TerminalApiSecuredResponse
} from "../typings/terminal/models";

class TerminalLocalAPI extends Service {
    private readonly localRequest: LocalRequest;
    private nexoCrypto: NexoCrypto;

    public constructor(client: Client) {
        super(client);
        this.apiKeyRequired = true;
        this.localRequest = new LocalRequest(this);
        this.nexoCrypto = new NexoCrypto();
    }

    public async request(
        terminalApiRequest: TerminalApiRequest,
        securityKey: SecurityKey,
    ): Promise<TerminalApiResponse> {
        const formattedRequest = ObjectSerializer.serialize(terminalApiRequest, "TerminalApiRequest");
        const saleToPoiSecuredMessage: SaleToPOISecuredMessage = NexoCrypto.encrypt(
            terminalApiRequest.SaleToPOIRequest.MessageHeader,
            JSON.stringify(formattedRequest),
            securityKey,
        );

        const securedPaymentRequest: TerminalApiSecuredRequest = ObjectSerializer.serialize({
            SaleToPOIRequest: saleToPoiSecuredMessage,
        }, "TerminalApiSecuredRequest");

        const jsonResponse = await getJsonResponse<TerminalApiSecuredRequest, TerminalApiResponse>(
            this.localRequest,
            securedPaymentRequest
        );

        // Catch an empty jsonResponse (i.e. Abort Request)
        if(!jsonResponse) {
            return new TerminalApiResponse();
        } else {
            const terminalApiSecuredResponse: TerminalApiSecuredResponse =
                ObjectSerializer.deserialize(jsonResponse, "TerminalApiSecuredResponse");

            const response = this.nexoCrypto.decrypt(
                terminalApiSecuredResponse.SaleToPOIResponse,
                securityKey,
            );
            return ObjectSerializer.deserialize(JSON.parse(response), "TerminalApiResponse");
        }
    }
}

export default TerminalLocalAPI;

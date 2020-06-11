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
        const formattedRequest = ObjectSerializer.serialize(terminalApiRequest, "TerminalApiRequest");

        if (formattedRequest.SaleToPOIRequest?.PaymentRequest?.SaleData?.SaleToAcquirerData) {
            const dataString = JSON.stringify(formattedRequest.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData);
            formattedRequest.SaleToPOIRequest.PaymentRequest.SaleData.SaleToAcquirerData = Buffer.from(dataString).toString("base64");
        }

        const saleToPoiSecuredMessage: SaleToPOISecuredMessage = NexoCrypto.encrypt(
            terminalApiRequest.saleToPOIRequest.messageHeader,
            JSON.stringify(formattedRequest),
            securityKey,
        );

        const securedPaymentRequest: TerminalApiSecuredRequest = ObjectSerializer.serialize({
            saleToPOIRequest: saleToPoiSecuredMessage,
        }, "TerminalApiSecuredRequest");

        const jsonResponse = await getJsonResponse<TerminalApiSecuredRequest, TerminalApiResponse>(
            this.localRequest,
            securedPaymentRequest
        );

        const terminalApiSecuredResponse: TerminalApiSecuredResponse =
            ObjectSerializer.deserialize(jsonResponse, "TerminalApiSecuredResponse");

        const response = this.nexoCrypto.decrypt(
            terminalApiSecuredResponse.saleToPOIResponse,
            securityKey,
        );

        return ObjectSerializer.deserialize(JSON.parse(response), "TerminalApiResponse");
    }
}

export default TerminalLocalAPI;

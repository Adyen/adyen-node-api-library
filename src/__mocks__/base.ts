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

import Client from "../client";
import Config from "../config";
import HttpURLConnectionClient from "../httpClient/httpURLConnectionClient";
import {
    AmountsReq,
    MessageCategoryType,
    MessageClassType,
    MessageHeader,
    MessageType,
    PaymentRequest,
    PaymentTransaction,
    SaleData,
    SaleToPoiRequest,
    TerminalApiRequest,
    TransactionIdentification,
} from "../typings/terminal";
import HttpClientException from "../httpClient/httpClientException";

jest.mock("../httpClient/httpURLConnectionClient");

interface Options { code: number }
export const createMockClientFromResponse = (response: string, { code }: Options = {code: 200}): Client => {
    const httpURLConnectionClient: HttpURLConnectionClient = new HttpURLConnectionClient();
    // @ts-ignore
    httpURLConnectionClient.request.mockImplementation(
        (endpoint: string, json: string, config: Config, isApiRequired: boolean): Promise<string> => {
            if (
                typeof endpoint === "string" &&
                typeof json === "string" &&
                config instanceof Config &&
                (isApiRequired ? typeof isApiRequired === "boolean" : true) &&
                code >= 200 && code < 300
            ) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new HttpClientException(response, code));
            }
        }
    );

    const config: Config = new Config();
    config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
    config.hmacKey = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
    config.endpoint = Client.ENDPOINT_TEST;
    config.checkoutEndpoint = Client.CHECKOUT_ENDPOINT_TEST;

    const client: Client = new Client({ config });
    client.httpClient = httpURLConnectionClient;

    return client;
};

export const createTerminalAPIPaymentRequest = (): TerminalApiRequest => {

    const messageHeader: MessageHeader = {
        messageCategory: MessageCategoryType.Payment,
        messageClass: MessageClassType.Service,
        messageType: MessageType.Request,
        poiid: "P400Plus-123456789",
        protocolVersion: "3.0",
        saleId: "001",
        serviceId: "001",
    };

    const timestamp = new Date().toISOString();
    const transactionIdentification: TransactionIdentification = {
        timeStamp: timestamp,
        transactionId: "001",
    };

    const saleData: SaleData = {
        saleTransactionId: transactionIdentification,
    };

    const amountsReq: AmountsReq = {
        currency: "EUR",
        requestedAmount: 1,
    };

    const paymentTransaction: PaymentTransaction = {
        amountsReq: amountsReq,
    };

    const paymentRequest: PaymentRequest = {
        paymentTransaction: paymentTransaction,
        saleData: saleData,
    };

    const saleToPOIRequest: SaleToPoiRequest = {
        messageHeader: messageHeader,
        paymentRequest: paymentRequest,
    };

    const terminalApiRequest: TerminalApiRequest = {
        saleToPoiRequest: saleToPOIRequest,
    };

    return terminalApiRequest;
};

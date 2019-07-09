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
import {
    DetailsRequest, PaymentMethodsRequest, PaymentMethodsResponse, PaymentRequest, PaymentResponse, PaymentSetupRequest,
    PaymentSetupResponse, PaymentVerificationRequest, PaymentVerificationResponse,
} from "../typings/checkout";
import { RequestOptions } from "../typings/requestOptions";
import PaymentMethods from "./resource/checkout/paymentMethods";
import Payments from "./resource/checkout/payments";
import PaymentsDetails from "./resource/checkout/paymentsDetails";
import PaymentSession from "./resource/checkout/paymentSession";
import PaymentsResult from "./resource/checkout/paymentsResult";
import {ApplicationInfo} from "../typings/applicationInfo";

class Checkout extends ApiKeyAuthenticatedService {
    private readonly _payments: Payments;
    private readonly _paymentMethods: PaymentMethods;
    private readonly _paymentsDetails: PaymentsDetails;
    private readonly _paymentSession: PaymentSession;
    private readonly _paymentsResult: PaymentsResult;

    public constructor(client: Client) {
        super(client);
        this._payments = new Payments(this);
        this._paymentMethods = new PaymentMethods(this);
        this._paymentsDetails = new PaymentsDetails(this);
        this._paymentSession = new PaymentSession(this);
        this._paymentsResult = new PaymentsResult(this);
    }

    private setApplicationInfo(request: PaymentRequest): PaymentRequest {
        const hasApplicationInfo = "applicationInfo" in request;
        if(!hasApplicationInfo) {
            request.applicationInfo = new ApplicationInfo();
        }

        return request;
    }

    public async payments(
        paymentsRequest: PaymentRequest,
        requestOptions?: RequestOptions,
    ): Promise<PaymentResponse> {
        return getJsonResponse<PaymentRequest, PaymentResponse>(
            this._payments,
            this.setApplicationInfo(paymentsRequest),
            requestOptions,
        );
    }

    public async paymentMethods(paymentMethodsRequest: PaymentMethodsRequest): Promise<PaymentMethodsResponse> {
        return getJsonResponse<PaymentMethodsRequest, PaymentMethodsResponse>(
            this._paymentMethods,
            paymentMethodsRequest,
        );
    }

    public async paymentsDetails(paymentsDetailsRequest: DetailsRequest): Promise<PaymentResponse> {
        return getJsonResponse<DetailsRequest, PaymentResponse>(
            this._paymentsDetails,
            paymentsDetailsRequest,
        );
    }

    public async paymentSession(
        paymentSessionRequest: PaymentSetupRequest,
        requestOptions?: RequestOptions,
    ): Promise<PaymentSetupResponse> {
        return getJsonResponse<PaymentSetupRequest, PaymentSetupResponse>(
            this._paymentSession,
            paymentSessionRequest,
            requestOptions,
        );
    }

    public async paymentResult(paymentResultRequest: PaymentVerificationRequest): Promise<PaymentVerificationResponse> {
        return getJsonResponse<PaymentVerificationRequest, PaymentVerificationResponse>(
            this._paymentsResult,
            paymentResultRequest,
        );
    }
}

export default Checkout;

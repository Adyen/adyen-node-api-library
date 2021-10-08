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
import PaymentMethods from "./resource/checkout/paymentMethods";
import Payments from "./resource/checkout/payments";
import PaymentsDetails from "./resource/checkout/paymentsDetails";
import PaymentSession from "./resource/checkout/paymentSession";
import PaymentsResult from "./resource/checkout/paymentsResult";
import PaymentLinks from "./resource/checkout/paymentLinks";
import OriginKeys from "./resource/checkout/originKeys";
import setApplicationInfo from "../helpers/setApplicationInfo";
import { IRequest } from "../typings/requestOptions";
import {
    PaymentRequest,
    PaymentResponse,
    PaymentMethodsRequest,
    PaymentMethodsResponse,
    PaymentLinkResource,
    CreatePaymentLinkRequest,
    DetailsRequest,
    PaymentSetupRequest,
    PaymentSetupResponse,
    PaymentVerificationRequest,
    PaymentVerificationResponse,
    CheckoutUtilityRequest,
    CheckoutUtilityResponse,
    CheckoutBalanceCheckRequest,
    CheckoutBalanceCheckResponse,
    CheckoutCreateOrderRequest,
    CheckoutCreateOrderResponse,
    CheckoutCancelOrderRequest,
    CheckoutCancelOrderResponse,
    CreateCheckoutSessionRequest,
    CreateCheckoutSessionResponse,
    PaymentDonationRequest,
    DonationResponse
} from "../typings/checkout/models";

import PaymentLinksId from "./resource/checkout/paymentLinksId";
import PaymentMethodsBalance from "./resource/checkout/paymentMethodsBalance";
import Orders from "./resource/checkout/orders";
import OrdersCancel from "./resource/checkout/ordersCancel";
import Sessions from "./resource/checkout/sessions";
import Donations from "./resource/checkout/donations";

class Checkout extends ApiKeyAuthenticatedService {
    private readonly _payments: Payments;
    private readonly _paymentMethods: PaymentMethods;
    private readonly _paymentsDetails: PaymentsDetails;
    private readonly _paymentSession: PaymentSession;
    private readonly _paymentsResult: PaymentsResult;
    private readonly _paymentLinks: PaymentLinks;
    private readonly _paymentLinksId: PaymentLinksId;
    private readonly _originKeys: OriginKeys;
    private readonly _paymentMethodsBalance: PaymentMethodsBalance;
    private readonly _orders: Orders;
    private readonly _ordersCancel: OrdersCancel;
    private readonly _sessions: Sessions;
    private readonly _donations: Donations;

    public constructor(client: Client) {
        super(client);
        this._payments = new Payments(this);
        this._paymentMethods = new PaymentMethods(this);
        this._paymentsDetails = new PaymentsDetails(this);
        this._paymentSession = new PaymentSession(this);
        this._paymentsResult = new PaymentsResult(this);
        this._paymentLinks = new PaymentLinks(this);
        this._paymentLinksId = new PaymentLinksId(this);
        this._originKeys = new OriginKeys(this);
        this._paymentMethodsBalance = new PaymentMethodsBalance(this);
        this._orders = new Orders(this);
        this._ordersCancel = new OrdersCancel(this);
        this._sessions = new Sessions(this);
        this._donations = new Donations(this);
    }

    public payments(paymentsRequest: PaymentRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse> {
        return getJsonResponse<PaymentRequest, PaymentResponse>(
            this._payments,
            setApplicationInfo(paymentsRequest),
            requestOptions,
        );
    }

    public paymentMethods(paymentMethodsRequest: PaymentMethodsRequest): Promise<PaymentMethodsResponse> {
        return getJsonResponse<PaymentMethodsRequest, PaymentMethodsResponse>(
            this._paymentMethods,
            paymentMethodsRequest,
        );
    }

    public paymentLinks(paymentLinkRequest: CreatePaymentLinkRequest): Promise<PaymentLinkResource> {
        return getJsonResponse<CreatePaymentLinkRequest, PaymentLinkResource>(
            this._paymentLinks,
            paymentLinkRequest
        );
    }

    public getPaymentLinks(linkId: string): Promise<PaymentLinkResource> {
        this._paymentLinksId.id = linkId;
        return getJsonResponse<Record<string, never>, PaymentLinkResource>(
            this._paymentLinksId,
            {},
            { method: "GET" }
        );
    }

    public updatePaymentLinks(linkId: string, status: "expired"): Promise<PaymentLinkResource> {
        this._paymentLinksId.id = linkId;
        return getJsonResponse<Record<string, unknown>, PaymentLinkResource>(
            this._paymentLinksId,
            { status },
            { method: "PATCH" }
        );
    }

    public paymentsDetails(paymentsDetailsRequest: DetailsRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse> {
        return getJsonResponse<DetailsRequest, PaymentResponse>(
            this._paymentsDetails,
            paymentsDetailsRequest,
            requestOptions
        );
    }

    public paymentSession(
        paymentSessionRequest: PaymentSetupRequest,
        requestOptions?: IRequest.Options,
    ): Promise<PaymentSetupResponse> {
        return getJsonResponse<PaymentSetupRequest, PaymentSetupResponse>(
            this._paymentSession,
            paymentSessionRequest,
            requestOptions,
        );
    }

    public paymentResult(paymentResultRequest: PaymentVerificationRequest): Promise<PaymentVerificationResponse> {
        return getJsonResponse<PaymentVerificationRequest, PaymentVerificationResponse>(
            this._paymentsResult,
            paymentResultRequest,
        );
    }

    public originKeys(originKeysRequest: CheckoutUtilityRequest): Promise<CheckoutUtilityResponse> {
        return getJsonResponse<CheckoutUtilityRequest, CheckoutUtilityResponse>(
            this._originKeys,
            originKeysRequest,
        );
    }

    public paymentMethodsBalance(paymentMethodsBalanceRequest: CheckoutBalanceCheckRequest): Promise<CheckoutBalanceCheckResponse> {
        return getJsonResponse<CheckoutBalanceCheckRequest, CheckoutBalanceCheckResponse>(
            this._paymentMethodsBalance,
            paymentMethodsBalanceRequest,
        );
    }

    public orders(ordersRequest: CheckoutCreateOrderRequest): Promise<CheckoutCreateOrderResponse> {
        return getJsonResponse<CheckoutCreateOrderRequest, CheckoutCreateOrderResponse>(
            this._orders,
            ordersRequest,
        );
    }

    public ordersCancel(ordersCancelRequest: CheckoutCancelOrderRequest): Promise<CheckoutCancelOrderResponse> {
        return getJsonResponse<CheckoutCancelOrderRequest, CheckoutCancelOrderResponse>(
            this._ordersCancel,
            ordersCancelRequest,
        );
    }

    public sessions(checkoutSessionRequest: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
        return getJsonResponse<CreateCheckoutSessionRequest, CreateCheckoutSessionResponse>(
            this._sessions,
            checkoutSessionRequest,
        );
    }

    public donations(donationRequest: PaymentDonationRequest): Promise<DonationResponse> {
        return getJsonResponse<PaymentDonationRequest, DonationResponse>(
            this._donations,
            donationRequest,
        );
    }
}

export default Checkout;

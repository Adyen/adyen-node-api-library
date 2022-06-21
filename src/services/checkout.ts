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
import AmountUpdates from "./resource/checkout/amountUpdates";
import Cancels from "./resource/checkout/cancels";
import Captures from "./resource/checkout/captures";
import Refunds from "./resource/checkout/refunds";
import Reversals from "./resource/checkout/reversals";
import CancelsStandalone from "./resource/checkout/cancelsStandalone";
import { IRequest } from "../typings/requestOptions";
import {
    PaymentRequest,
    PaymentResponse,
    PaymentMethodsRequest,
    PaymentMethodsResponse,
    PaymentLinkResponse,
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
    DonationResponse,
    CardDetailsRequest,
    CardDetailsResponse,
    CreatePaymentAmountUpdateRequest,
    CreatePaymentCancelRequest,
    CreatePaymentCaptureRequest,
    CreatePaymentRefundRequest,
    CreatePaymentReversalRequest,
    CreateStandalonePaymentCancelRequest,
    PaymentAmountUpdateResource,
    PaymentCancelResource,
    PaymentCaptureResource,
    PaymentRefundResource,
    PaymentReversalResource,
    StandalonePaymentCancelResource,
} from "../typings/checkout/models";

import PaymentLinksId from "./resource/checkout/paymentLinksId";
import PaymentMethodsBalance from "./resource/checkout/paymentMethodsBalance";
import Orders from "./resource/checkout/orders";
import OrdersCancel from "./resource/checkout/ordersCancel";
import Sessions from "./resource/checkout/sessions";
import Donations from "./resource/checkout/donations";
import CardDetails from "./resource/checkout/cardDetails";

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
    private readonly _cardDetails: CardDetails;

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
        this._cardDetails = new CardDetails(this);
    }

    // Payments

    public sessions(checkoutSessionRequest: CreateCheckoutSessionRequest): Promise<CreateCheckoutSessionResponse> {
        return getJsonResponse<CreateCheckoutSessionRequest, CreateCheckoutSessionResponse>(
            this._sessions,
            checkoutSessionRequest,
        );
    }

    public paymentMethods(paymentMethodsRequest: PaymentMethodsRequest): Promise<PaymentMethodsResponse> {
        return getJsonResponse<PaymentMethodsRequest, PaymentMethodsResponse>(
            this._paymentMethods,
            paymentMethodsRequest,
        );
    }

    public payments(paymentsRequest: PaymentRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse> {
        return getJsonResponse<PaymentRequest, PaymentResponse>(
            this._payments,
            setApplicationInfo(paymentsRequest),
            requestOptions,
        );
    }

    public paymentsDetails(paymentsDetailsRequest: DetailsRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse> {
        return getJsonResponse<DetailsRequest, PaymentResponse>(
            this._paymentsDetails,
            paymentsDetailsRequest,
            requestOptions
        );
    }

    public donations(donationRequest: PaymentDonationRequest): Promise<DonationResponse> {
        return getJsonResponse<PaymentDonationRequest, DonationResponse>(
            this._donations,
            donationRequest,
        );
    }

    public cardDetails(cardDetailsRequest: CardDetailsRequest): Promise<CardDetailsResponse> {
        return getJsonResponse<CardDetailsRequest, CardDetailsResponse>(
            this._cardDetails,
            cardDetailsRequest,
        );
    }

    // Payment Links

    public paymentLinks(paymentLinkRequest: CreatePaymentLinkRequest): Promise<PaymentLinkResponse> {
        return getJsonResponse<CreatePaymentLinkRequest, PaymentLinkResponse>(
            this._paymentLinks,
            paymentLinkRequest
        );
    }

    public getPaymentLinks(linkId: string): Promise<PaymentLinkResponse> {
        this._paymentLinksId.id = linkId;
        return getJsonResponse<Record<string, never>, PaymentLinkResponse>(
            this._paymentLinksId,
            {},
            { method: "GET" }
        );
    }

    public updatePaymentLinks(linkId: string, status: "expired"): Promise<PaymentLinkResponse> {
        this._paymentLinksId.id = linkId;
        return getJsonResponse<Record<string, unknown>, PaymentLinkResponse>(
            this._paymentLinksId,
            { status },
            { method: "PATCH" }
        );
    }

    // Modifications

    public amountUpdates(
        paymentPspReference: string,
        amountUpdatesRequest: CreatePaymentAmountUpdateRequest,
        requestOptions?: IRequest.Options,
    ): Promise<PaymentAmountUpdateResource> {
        const amountUpdates = new AmountUpdates(this, paymentPspReference);
        return getJsonResponse<CreatePaymentAmountUpdateRequest, PaymentAmountUpdateResource>(
            amountUpdates,
            amountUpdatesRequest,
            requestOptions
        );
    }

    public cancelsStandalone(
        cancelsStandaloneRequest: CreateStandalonePaymentCancelRequest,
        requestOptions?: IRequest.Options
    ): Promise<StandalonePaymentCancelResource> {
        const cancelsStandalone = new CancelsStandalone(this);
        return getJsonResponse<CreateStandalonePaymentCancelRequest, StandalonePaymentCancelResource>(
            cancelsStandalone,
            cancelsStandaloneRequest,
            requestOptions
        );
    }

    public cancels(
        paymentPspReference: string,
        cancelsRequest: CreatePaymentCancelRequest,
        requestOptions?: IRequest.Options,
    ): Promise<PaymentCancelResource> {
        const cancels = new Cancels(this, paymentPspReference);
        return getJsonResponse<CreatePaymentCancelRequest, PaymentCancelResource>(
            cancels,
            cancelsRequest,
            requestOptions
        );
    }

    public captures(
        paymentPspReference: string,
        capturesRequest: CreatePaymentCaptureRequest,
        requestOptions?: IRequest.Options
    ): Promise<PaymentCaptureResource> {
        const captures = new Captures(this, paymentPspReference);
        return getJsonResponse<CreatePaymentCaptureRequest, PaymentCaptureResource>(
            captures,
            capturesRequest,
            requestOptions
        );
    }

    public refunds(
        paymentPspReference: string,
        refundsRequest: CreatePaymentRefundRequest,
        requestOptions?: IRequest.Options
    ): Promise<PaymentRefundResource> {
        const refunds = new Refunds(this, paymentPspReference);
        return getJsonResponse<CreatePaymentRefundRequest, PaymentRefundResource>(
            refunds,
            refundsRequest,
            requestOptions
        );
    }

    public reversals(
        paymentPspReference: string,
        reversalsRequest: CreatePaymentReversalRequest,
        requestOptions?: IRequest.Options
    ): Promise<PaymentReversalResource> {
        const refunds = new Reversals(this, paymentPspReference);
        return getJsonResponse<CreatePaymentReversalRequest, PaymentReversalResource>(
            refunds,
            reversalsRequest,
            requestOptions
        );
    }

    // Orders

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

    // Classic Checkout SDK

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

    //Utility

    public originKeys(originKeysRequest: CheckoutUtilityRequest): Promise<CheckoutUtilityResponse> {
        return getJsonResponse<CheckoutUtilityRequest, CheckoutUtilityResponse>(
            this._originKeys,
            originKeysRequest,
        );
    }
}

export default Checkout;

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
    ObjectSerializer
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
        this._originKeys = new OriginKeys(this);
        this._paymentMethodsBalance = new PaymentMethodsBalance(this);
        this._orders = new Orders(this);
        this._ordersCancel = new OrdersCancel(this);
        this._sessions = new Sessions(this);
        this._donations = new Donations(this);
        this._cardDetails = new CardDetails(this);
    }

    // Payments

    public async sessions(checkoutSessionRequest: CreateCheckoutSessionRequest, requestOptions?: IRequest.Options): Promise<CreateCheckoutSessionResponse> {
        const response = await getJsonResponse<CreateCheckoutSessionRequest, CreateCheckoutSessionResponse>(
            this._sessions,
            checkoutSessionRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "CreateCheckoutSessionResponse");
    }

    public async paymentMethods(paymentMethodsRequest: PaymentMethodsRequest, requestOptions?: IRequest.Options): Promise<PaymentMethodsResponse> {
        const response = await getJsonResponse<PaymentMethodsRequest, PaymentMethodsResponse>(
            this._paymentMethods,
            paymentMethodsRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "PaymentMethodsResponse");
    }

    public async payments(paymentsRequest: PaymentRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse> {
        const response = await getJsonResponse<PaymentRequest, PaymentResponse>(
            this._payments,
            setApplicationInfo(paymentsRequest),
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "PaymentResponse");
    }

    public async paymentsDetails(paymentsDetailsRequest: DetailsRequest, requestOptions?: IRequest.Options): Promise<PaymentResponse> {
        const response = await getJsonResponse<DetailsRequest, PaymentResponse>(
            this._paymentsDetails,
            paymentsDetailsRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "PaymentResponse");
    }

    public async donations(donationRequest: PaymentDonationRequest, requestOptions?: IRequest.Options): Promise<DonationResponse> {
        const response = await getJsonResponse<PaymentDonationRequest, DonationResponse>(
            this._donations,
            donationRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "DonationResponse");
    }

    public async cardDetails(cardDetailsRequest: CardDetailsRequest, requestOptions?: IRequest.Options): Promise<CardDetailsResponse> {
        const response = await getJsonResponse<CardDetailsRequest, CardDetailsResponse>(
            this._cardDetails,
            cardDetailsRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "CardDetailsResponse");
    }

    // Payment Links

    public async paymentLinks(paymentLinkRequest: CreatePaymentLinkRequest, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const response = await getJsonResponse<CreatePaymentLinkRequest, PaymentLinkResponse>(
            this._paymentLinks,
            paymentLinkRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }

    public async getPaymentLinks(linkId: string, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const paymentLinksId = new PaymentLinksId(this, linkId);
        const response = await getJsonResponse<Record<string, never>, PaymentLinkResponse>(
            paymentLinksId,
            {},
            {...{ method: "GET" }, ...requestOptions},
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }

    public async updatePaymentLinks(linkId: string, status: "expired", requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const paymentLinksId = new PaymentLinksId(this, linkId);
        const response = await getJsonResponse<Record<string, unknown>, PaymentLinkResponse>(
            paymentLinksId,
            { status },
            {...{ method: "PATCH" }, ...requestOptions},
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }

    // Modifications

    public async amountUpdates(
        paymentPspReference: string,
        amountUpdatesRequest: CreatePaymentAmountUpdateRequest,
        requestOptions?: IRequest.Options,
    ): Promise<PaymentAmountUpdateResource> {
        const amountUpdates = new AmountUpdates(this, paymentPspReference);
        const response = await getJsonResponse<CreatePaymentAmountUpdateRequest, PaymentAmountUpdateResource>(
            amountUpdates,
            amountUpdatesRequest,
            requestOptions
        );
        return ObjectSerializer.deserialize(response, "PaymentAmountUpdateResource");
    }

    public async cancelsStandalone(
        cancelsStandaloneRequest: CreateStandalonePaymentCancelRequest,
        requestOptions?: IRequest.Options
    ): Promise<StandalonePaymentCancelResource> {
        const cancelsStandalone = new CancelsStandalone(this);
        const response = await getJsonResponse<CreateStandalonePaymentCancelRequest, StandalonePaymentCancelResource>(
            cancelsStandalone,
            cancelsStandaloneRequest,
            requestOptions
        );
        return ObjectSerializer.deserialize(response, "StandalonePaymentCancelResource");
    }

    public async cancels(
        paymentPspReference: string,
        cancelsRequest: CreatePaymentCancelRequest,
        requestOptions?: IRequest.Options,
    ): Promise<PaymentCancelResource> {
        const cancels = new Cancels(this, paymentPspReference);
        const response = await getJsonResponse<CreatePaymentCancelRequest, PaymentCancelResource>(
            cancels,
            cancelsRequest,
            requestOptions
        );
        return ObjectSerializer.deserialize(response, "PaymentCancelResource");
    }

    public async captures(
        paymentPspReference: string,
        capturesRequest: CreatePaymentCaptureRequest,
        requestOptions?: IRequest.Options
    ): Promise<PaymentCaptureResource> {
        const captures = new Captures(this, paymentPspReference);
        const response = await getJsonResponse<CreatePaymentCaptureRequest, PaymentCaptureResource>(
            captures,
            capturesRequest,
            requestOptions
        );
        return ObjectSerializer.deserialize(response, "PaymentCaptureResource");
    }

    public async refunds(
        paymentPspReference: string,
        refundsRequest: CreatePaymentRefundRequest,
        requestOptions?: IRequest.Options
    ): Promise<PaymentRefundResource> {
        const refunds = new Refunds(this, paymentPspReference);
        const response = await getJsonResponse<CreatePaymentRefundRequest, PaymentRefundResource>(
            refunds,
            refundsRequest,
            requestOptions
        );
        return ObjectSerializer.deserialize(response, "PaymentRefundResource");
    }

    public async reversals(
        paymentPspReference: string,
        reversalsRequest: CreatePaymentReversalRequest,
        requestOptions?: IRequest.Options
    ): Promise<PaymentReversalResource> {
        const refunds = new Reversals(this, paymentPspReference);
        const response = await getJsonResponse<CreatePaymentReversalRequest, PaymentReversalResource>(
            refunds,
            reversalsRequest,
            requestOptions
        );
        return ObjectSerializer.deserialize(response, "PaymentReversalResource");
    }

    // Orders

    public async paymentMethodsBalance(paymentMethodsBalanceRequest: CheckoutBalanceCheckRequest, requestOptions?: IRequest.Options): Promise<CheckoutBalanceCheckResponse> {
        const response = await getJsonResponse<CheckoutBalanceCheckRequest, CheckoutBalanceCheckResponse>(
            this._paymentMethodsBalance,
            paymentMethodsBalanceRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "CheckoutBalanceCheckResponse");
    }

    public async orders(ordersRequest: CheckoutCreateOrderRequest, requestOptions?: IRequest.Options): Promise<CheckoutCreateOrderResponse> {
        const response = await getJsonResponse<CheckoutCreateOrderRequest, CheckoutCreateOrderResponse>(
            this._orders,
            ordersRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "CheckoutCreateOrderResponse");
    }

    public async ordersCancel(ordersCancelRequest: CheckoutCancelOrderRequest, requestOptions?: IRequest.Options): Promise<CheckoutCancelOrderResponse> {
        const response = await getJsonResponse<CheckoutCancelOrderRequest, CheckoutCancelOrderResponse>(
            this._ordersCancel,
            ordersCancelRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "CheckoutCancelOrderResponse");
    }

    // Classic Checkout SDK

    public async paymentSession(
        paymentSessionRequest: PaymentSetupRequest,
        requestOptions?: IRequest.Options,
    ): Promise<PaymentSetupResponse> {
        const response = await getJsonResponse<PaymentSetupRequest, PaymentSetupResponse>(
            this._paymentSession,
            paymentSessionRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "PaymentSetupResponse");
    }

    public async paymentResult(paymentResultRequest: PaymentVerificationRequest, requestOptions?: IRequest.Options): Promise<PaymentVerificationResponse> {
        const response = await getJsonResponse<PaymentVerificationRequest, PaymentVerificationResponse>(
            this._paymentsResult,
            paymentResultRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "PaymentVerificationResponse");
    }

    //Utility

    public async originKeys(originKeysRequest: CheckoutUtilityRequest, requestOptions?: IRequest.Options): Promise<CheckoutUtilityResponse> {
        const response = await getJsonResponse<CheckoutUtilityRequest, CheckoutUtilityResponse>(
            this._originKeys,
            originKeysRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "CheckoutUtilityResponse");
    }
}

export default Checkout;

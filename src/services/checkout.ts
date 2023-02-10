import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import CheckoutResource from "./resource/checkoutResource";
import setApplicationInfo from "../helpers/setApplicationInfo";
import { IRequest } from "../typings/requestOptions";
import {
    CreateApplePaySessionRequest,
    ApplePaySessionResponse,
    ListStoredPaymentMethodsResponse,
    StoredPaymentMethodResource,
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
    ObjectSerializer,
} from "../typings/checkout/models";
class Checkout extends ApiKeyAuthenticatedService {
    private readonly _payments: CheckoutResource;
    private readonly _paymentMethods: CheckoutResource;
    private readonly _paymentsDetails: CheckoutResource;
    private readonly _paymentSession: CheckoutResource;
    private readonly _paymentsResult: CheckoutResource;
    private readonly _paymentLinks: CheckoutResource;
    private readonly _originKeys: CheckoutResource;
    private readonly _paymentMethodsBalance: CheckoutResource;
    private readonly _orders: CheckoutResource;
    private readonly _ordersCancel: CheckoutResource;
    private readonly _sessions: CheckoutResource;
    private readonly _donations: CheckoutResource;
    private readonly _cardDetails: CheckoutResource;
    private readonly _cancelsStandalone: CheckoutResource;
    private readonly _applePaySessions: CheckoutResource;
    private readonly _getStoredPaymentMethods: CheckoutResource;

    public constructor(client: Client) {
        super(client);
        this._payments = new CheckoutResource(this, "/payments");
        this._paymentMethods = new CheckoutResource(this, "/paymentMethods");
        this._paymentsDetails = new CheckoutResource(this, "/payments/details");
        this._paymentSession = new CheckoutResource(this, "/paymentSession");
        this._paymentsResult = new CheckoutResource(this, "/payments/result");
        this._paymentLinks = new CheckoutResource(this, "/paymentLinks");
        this._originKeys = new CheckoutResource(this, "/originKeys");
        this._paymentMethodsBalance = new CheckoutResource(this, "/paymentMethods/balance");
        this._orders = new CheckoutResource(this, "/orders");
        this._ordersCancel = new CheckoutResource(this, "/orders/cancel");
        this._sessions = new CheckoutResource(this, "/sessions");
        this._donations = new CheckoutResource(this, "/donations");
        this._cardDetails = new CheckoutResource(this, "/cardDetails");
        this._cancelsStandalone = new CheckoutResource(this, "/cancels");
        this._applePaySessions = new CheckoutResource(this, "/applePay/sessions");
        this._getStoredPaymentMethods = new CheckoutResource(this, "/storedPaymentMethods");
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
        const paymentLinksId = new CheckoutResource(this, `/paymentLinks/${linkId}`);
        const response = await getJsonResponse<Record<string, never>, PaymentLinkResponse>(
            paymentLinksId,
            {},
            {...{ method: "GET" }, ...requestOptions},
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }

    public async updatePaymentLinks(linkId: string, status: "expired", requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const paymentLinksId = new CheckoutResource(this, `/paymentLinks/${linkId}`);
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
        const amountUpdates = new CheckoutResource(this, `/payments/${paymentPspReference}/amountUpdates`);
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
        const response = await getJsonResponse<CreateStandalonePaymentCancelRequest, StandalonePaymentCancelResource>(
            this._cancelsStandalone,
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
        const cancels = new CheckoutResource(this, `/payments/${paymentPspReference}/cancels`);
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
        const captures = new CheckoutResource(this, `/payments/${paymentPspReference}/captures`);
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
        const refunds = new CheckoutResource(this, `/payments/${paymentPspReference}/refunds`);
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
        const refunds = new CheckoutResource(this, `/payments/${paymentPspReference}/reversals`);
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

    /**
     * @deprecated Deprecated in version 67
     */
    public async originKeys(originKeysRequest: CheckoutUtilityRequest, requestOptions?: IRequest.Options): Promise<CheckoutUtilityResponse> {
        const response = await getJsonResponse<CheckoutUtilityRequest, CheckoutUtilityResponse>(
            this._originKeys,
            originKeysRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "CheckoutUtilityResponse");
    }

    public async applePaySessions(applePaySessionRequest: CreateApplePaySessionRequest, requestOptions?: IRequest.Options): Promise<ApplePaySessionResponse> {
        const response = await getJsonResponse<CreateApplePaySessionRequest, ApplePaySessionResponse>(
            this._applePaySessions,
            applePaySessionRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "ApplePaySessionResponse")
    }

    //Recurring

    public async getStoredPaymentMethods(requestOptions?: IRequest.Options): Promise<ListStoredPaymentMethodsResponse> {
        const response = await getJsonResponse<Record<string, never>, PaymentLinkResponse>(
            this._getStoredPaymentMethods,
            {},
            {...{ method: "GET" }, ...requestOptions},
        );
        return ObjectSerializer.deserialize(response, "ListStoredPaymentMethodsResponse");
    }

    public async deleteStoredPaymentMethod(recurringId: string, requestOptions?: IRequest.Options): Promise<StoredPaymentMethodResource> {
        const deleteStoredPaymentMethod = new CheckoutResource(this, `/storedPaymentMethods/${recurringId}`);
        const response = await getJsonResponse<Record<string, never>, StoredPaymentMethodResource>(
            deleteStoredPaymentMethod,
            {},
            {...{ method: "DELETE" }, ...requestOptions}
        );
        return ObjectSerializer.deserialize(response, "StoredPaymentMethodResource");
    }
}

export default Checkout;

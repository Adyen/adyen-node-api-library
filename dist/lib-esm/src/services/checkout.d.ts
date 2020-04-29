import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import { IRequest } from "../typings/requestOptions";
declare class Checkout extends ApiKeyAuthenticatedService {
    private readonly _payments;
    private readonly _paymentMethods;
    private readonly _paymentsDetails;
    private readonly _paymentSession;
    private readonly _paymentsResult;
    private readonly _paymentLinks;
    constructor(client: Client);
    payments(paymentsRequest: ICheckout.PaymentRequest, requestOptions?: IRequest.Options): Promise<ICheckout.PaymentResponse>;
    paymentMethods(paymentMethodsRequest: ICheckout.PaymentMethodsRequest): Promise<ICheckout.PaymentMethodsResponse>;
    paymentLinks(paymentLinkRequest: ICheckout.CreatePaymentLinkRequest): Promise<ICheckout.CreatePaymentLinkResponse>;
    paymentsDetails(paymentsDetailsRequest: ICheckout.DetailsRequest, requestOptions?: IRequest.Options): Promise<ICheckout.PaymentResponse>;
    paymentSession(paymentSessionRequest: ICheckout.PaymentSetupRequest, requestOptions?: IRequest.Options): Promise<ICheckout.PaymentSetupResponse>;
    paymentResult(paymentResultRequest: ICheckout.PaymentVerificationRequest): Promise<ICheckout.PaymentVerificationResponse>;
}
export default Checkout;

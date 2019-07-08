import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import { DetailsRequest, PaymentMethodsRequest, PaymentMethodsResponse, PaymentRequest, PaymentResponse, PaymentSetupRequest, PaymentSetupResponse, PaymentVerificationRequest, PaymentVerificationResponse } from "../typings/checkout";
import { RequestOptions } from "../typings/requestOptions";
declare class Checkout extends ApiKeyAuthenticatedService {
    private readonly _payments;
    private readonly _paymentMethods;
    private readonly _paymentsDetails;
    private readonly _paymentSession;
    private readonly _paymentsResult;
    constructor(client: Client);
    payments(paymentsRequest: PaymentRequest, requestOptions?: RequestOptions): Promise<PaymentResponse>;
    paymentMethods(paymentMethodsRequest: PaymentMethodsRequest): Promise<PaymentMethodsResponse>;
    paymentsDetails(paymentsDetailsRequest: DetailsRequest): Promise<PaymentResponse>;
    paymentSession(paymentSessionRequest: PaymentSetupRequest, requestOptions?: RequestOptions): Promise<PaymentSetupResponse>;
    paymentResult(paymentResultRequest: PaymentVerificationRequest): Promise<PaymentVerificationResponse>;
}
export default Checkout;

/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    PaymentSetupRequest,
    PaymentSetupResponse,
    PaymentVerificationRequest,
    PaymentVerificationResponse,
    ServiceError,
    ObjectSerializer
} from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class ClassicCheckoutSDKApi extends Service {

    private readonly API_BASEPATH: string = "https://checkout-test.adyen.com/v71";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create a payment session
    * @param paymentSetupRequest {@link PaymentSetupRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentSetupResponse }
    */
    public async paymentSession(paymentSetupRequest: PaymentSetupRequest, requestOptions?: IRequest.Options): Promise<PaymentSetupResponse> {
        const endpoint = `${this.baseUrl}/paymentSession`;
        const resource = new Resource(this, endpoint);
        const request: PaymentSetupRequest = ObjectSerializer.serialize(paymentSetupRequest, "PaymentSetupRequest");
        const response = await getJsonResponse<PaymentSetupRequest, PaymentSetupResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentSetupResponse");
    }

    /**
    * @summary Verify a payment result
    * @param paymentVerificationRequest {@link PaymentVerificationRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentVerificationResponse }
    */
    public async verifyPaymentResult(paymentVerificationRequest: PaymentVerificationRequest, requestOptions?: IRequest.Options): Promise<PaymentVerificationResponse> {
        const endpoint = `${this.baseUrl}/payments/result`;
        const resource = new Resource(this, endpoint);
        const request: PaymentVerificationRequest = ObjectSerializer.serialize(paymentVerificationRequest, "PaymentVerificationRequest");
        const response = await getJsonResponse<PaymentVerificationRequest, PaymentVerificationResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentVerificationResponse");
    }
}

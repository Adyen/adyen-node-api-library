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
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

import { ObjectSerializer } from "../../typings/checkout/objectSerializer";
import { PaymentAmountUpdateRequest } from "../../typings/checkout/models";
import { PaymentAmountUpdateResponse } from "../../typings/checkout/models";
import { PaymentCancelRequest } from "../../typings/checkout/models";
import { PaymentCancelResponse } from "../../typings/checkout/models";
import { PaymentCaptureRequest } from "../../typings/checkout/models";
import { PaymentCaptureResponse } from "../../typings/checkout/models";
import { PaymentRefundRequest } from "../../typings/checkout/models";
import { PaymentRefundResponse } from "../../typings/checkout/models";
import { PaymentReversalRequest } from "../../typings/checkout/models";
import { PaymentReversalResponse } from "../../typings/checkout/models";
import { StandalonePaymentCancelRequest } from "../../typings/checkout/models";
import { StandalonePaymentCancelResponse } from "../../typings/checkout/models";

/**
 * API handler for ModificationsApi
 */
export class ModificationsApi extends Service {

    private readonly API_BASEPATH: string = "https://checkout-test.adyen.com/v71";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Cancel an authorised payment
    * @param standalonePaymentCancelRequest {@link StandalonePaymentCancelRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link StandalonePaymentCancelResponse }
    */
    public async cancelAuthorisedPayment(standalonePaymentCancelRequest: StandalonePaymentCancelRequest, requestOptions?: IRequest.Options): Promise<StandalonePaymentCancelResponse> {
        const endpoint = `${this.baseUrl}/cancels`;
        const resource = new Resource(this, endpoint);
        
        const request: StandalonePaymentCancelRequest = ObjectSerializer.serialize(standalonePaymentCancelRequest, "StandalonePaymentCancelRequest");
        const response = await getJsonResponse<StandalonePaymentCancelRequest, StandalonePaymentCancelResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "StandalonePaymentCancelResponse");
    }

    /**
    * @summary Cancel an authorised payment
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to cancel. 
    * @param paymentCancelRequest {@link PaymentCancelRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentCancelResponse }
    */
    public async cancelAuthorisedPaymentByPspReference(paymentPspReference: string, paymentCancelRequest: PaymentCancelRequest, requestOptions?: IRequest.Options): Promise<PaymentCancelResponse> {
        const endpoint = `${this.baseUrl}/payments/{paymentPspReference}/cancels`
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new Resource(this, endpoint);
        
        const request: PaymentCancelRequest = ObjectSerializer.serialize(paymentCancelRequest, "PaymentCancelRequest");
        const response = await getJsonResponse<PaymentCancelRequest, PaymentCancelResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "PaymentCancelResponse");
    }

    /**
    * @summary Capture an authorised payment
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to capture.
    * @param paymentCaptureRequest {@link PaymentCaptureRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentCaptureResponse }
    */
    public async captureAuthorisedPayment(paymentPspReference: string, paymentCaptureRequest: PaymentCaptureRequest, requestOptions?: IRequest.Options): Promise<PaymentCaptureResponse> {
        const endpoint = `${this.baseUrl}/payments/{paymentPspReference}/captures`
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new Resource(this, endpoint);
        
        const request: PaymentCaptureRequest = ObjectSerializer.serialize(paymentCaptureRequest, "PaymentCaptureRequest");
        const response = await getJsonResponse<PaymentCaptureRequest, PaymentCaptureResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "PaymentCaptureResponse");
    }

    /**
    * @summary Refund a captured payment
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to refund.
    * @param paymentRefundRequest {@link PaymentRefundRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentRefundResponse }
    */
    public async refundCapturedPayment(paymentPspReference: string, paymentRefundRequest: PaymentRefundRequest, requestOptions?: IRequest.Options): Promise<PaymentRefundResponse> {
        const endpoint = `${this.baseUrl}/payments/{paymentPspReference}/refunds`
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new Resource(this, endpoint);
        
        const request: PaymentRefundRequest = ObjectSerializer.serialize(paymentRefundRequest, "PaymentRefundRequest");
        const response = await getJsonResponse<PaymentRefundRequest, PaymentRefundResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "PaymentRefundResponse");
    }

    /**
    * @summary Refund or cancel a payment
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to reverse. 
    * @param paymentReversalRequest {@link PaymentReversalRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentReversalResponse }
    */
    public async refundOrCancelPayment(paymentPspReference: string, paymentReversalRequest: PaymentReversalRequest, requestOptions?: IRequest.Options): Promise<PaymentReversalResponse> {
        const endpoint = `${this.baseUrl}/payments/{paymentPspReference}/reversals`
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new Resource(this, endpoint);
        
        const request: PaymentReversalRequest = ObjectSerializer.serialize(paymentReversalRequest, "PaymentReversalRequest");
        const response = await getJsonResponse<PaymentReversalRequest, PaymentReversalResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "PaymentReversalResponse");
    }

    /**
    * @summary Update an authorised amount
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment.
    * @param paymentAmountUpdateRequest {@link PaymentAmountUpdateRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentAmountUpdateResponse }
    */
    public async updateAuthorisedAmount(paymentPspReference: string, paymentAmountUpdateRequest: PaymentAmountUpdateRequest, requestOptions?: IRequest.Options): Promise<PaymentAmountUpdateResponse> {
        const endpoint = `${this.baseUrl}/payments/{paymentPspReference}/amountUpdates`
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new Resource(this, endpoint);
        
        const request: PaymentAmountUpdateRequest = ObjectSerializer.serialize(paymentAmountUpdateRequest, "PaymentAmountUpdateRequest");
        const response = await getJsonResponse<PaymentAmountUpdateRequest, PaymentAmountUpdateResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "PaymentAmountUpdateResponse");
    }

}

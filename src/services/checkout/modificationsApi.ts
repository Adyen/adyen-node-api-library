/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { CreatePaymentAmountUpdateRequest } from "../../typings/checkout/models";
import { CreatePaymentCancelRequest } from "../../typings/checkout/models";
import { CreatePaymentCaptureRequest } from "../../typings/checkout/models";
import { CreatePaymentRefundRequest } from "../../typings/checkout/models";
import { CreatePaymentReversalRequest } from "../../typings/checkout/models";
import { CreateStandalonePaymentCancelRequest } from "../../typings/checkout/models";
import { PaymentAmountUpdateResource } from "../../typings/checkout/models";
import { PaymentCancelResource } from "../../typings/checkout/models";
import { PaymentCaptureResource } from "../../typings/checkout/models";
import { PaymentRefundResource } from "../../typings/checkout/models";
import { PaymentReversalResource } from "../../typings/checkout/models";
import { StandalonePaymentCancelResource } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import CheckoutResource from "../resource/checkoutResource";
import { ObjectSerializer } from "../../typings/checkout/models";

export class ModificationsApi extends Service {

    /**
     * @summary Cancel an authorised payment
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param createStandalonePaymentCancelRequest 
     */
    public async cancelAuthorisedPayment(createStandalonePaymentCancelRequest: CreateStandalonePaymentCancelRequest, requestOptions?: IRequest.Options): Promise<StandalonePaymentCancelResource> {
        const localVarPath = "/cancels";
        const resource = new CheckoutResource(this, localVarPath);
        const request: CreateStandalonePaymentCancelRequest = ObjectSerializer.serialize(createStandalonePaymentCancelRequest, "CreateStandalonePaymentCancelRequest");
        const response = await getJsonResponse<CreateStandalonePaymentCancelRequest, StandalonePaymentCancelResource>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StandalonePaymentCancelResource");
    }

    /**
     * @summary Update an authorised amount
     * @param paymentPspReference The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment.
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param createPaymentAmountUpdateRequest 
     */
    public async updateAuthorisedAmount(paymentPspReference: string, createPaymentAmountUpdateRequest: CreatePaymentAmountUpdateRequest, requestOptions?: IRequest.Options): Promise<PaymentAmountUpdateResource> {
        const localVarPath = "/payments/{paymentPspReference}/amountUpdates"
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new CheckoutResource(this, localVarPath);
        const request: CreatePaymentAmountUpdateRequest = ObjectSerializer.serialize(createPaymentAmountUpdateRequest, "CreatePaymentAmountUpdateRequest");
        const response = await getJsonResponse<CreatePaymentAmountUpdateRequest, PaymentAmountUpdateResource>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentAmountUpdateResource");
    }

    /**
     * @summary Cancel an authorised payment
     * @param paymentPspReference The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to cancel. 
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param createPaymentCancelRequest 
     */
    public async cancelAuthorisedPaymentByPspReference(paymentPspReference: string, createPaymentCancelRequest: CreatePaymentCancelRequest, requestOptions?: IRequest.Options): Promise<PaymentCancelResource> {
        const localVarPath = "/payments/{paymentPspReference}/cancels"
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new CheckoutResource(this, localVarPath);
        const request: CreatePaymentCancelRequest = ObjectSerializer.serialize(createPaymentCancelRequest, "CreatePaymentCancelRequest");
        const response = await getJsonResponse<CreatePaymentCancelRequest, PaymentCancelResource>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentCancelResource");
    }

    /**
     * @summary Capture an authorised payment
     * @param paymentPspReference The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to capture.
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param createPaymentCaptureRequest 
     */
    public async captureAuthorisedPayment(paymentPspReference: string, createPaymentCaptureRequest: CreatePaymentCaptureRequest, requestOptions?: IRequest.Options): Promise<PaymentCaptureResource> {
        const localVarPath = "/payments/{paymentPspReference}/captures"
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new CheckoutResource(this, localVarPath);
        const request: CreatePaymentCaptureRequest = ObjectSerializer.serialize(createPaymentCaptureRequest, "CreatePaymentCaptureRequest");
        const response = await getJsonResponse<CreatePaymentCaptureRequest, PaymentCaptureResource>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentCaptureResource");
    }

    /**
     * @summary Refund a captured payment
     * @param paymentPspReference The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to refund.
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param createPaymentRefundRequest 
     */
    public async refundCapturedPayment(paymentPspReference: string, createPaymentRefundRequest: CreatePaymentRefundRequest, requestOptions?: IRequest.Options): Promise<PaymentRefundResource> {
        const localVarPath = "/payments/{paymentPspReference}/refunds"
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new CheckoutResource(this, localVarPath);
        const request: CreatePaymentRefundRequest = ObjectSerializer.serialize(createPaymentRefundRequest, "CreatePaymentRefundRequest");
        const response = await getJsonResponse<CreatePaymentRefundRequest, PaymentRefundResource>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentRefundResource");
    }

    /**
     * @summary Refund or cancel a payment
     * @param paymentPspReference The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to reverse. 
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param createPaymentReversalRequest 
     */
    public async refundOrCancelPayment(paymentPspReference: string, createPaymentReversalRequest: CreatePaymentReversalRequest, requestOptions?: IRequest.Options): Promise<PaymentReversalResource> {
        const localVarPath = "/payments/{paymentPspReference}/reversals"
            .replace("{" + "paymentPspReference" + "}", encodeURIComponent(String(paymentPspReference)));
        const resource = new CheckoutResource(this, localVarPath);
        const request: CreatePaymentReversalRequest = ObjectSerializer.serialize(createPaymentReversalRequest, "CreatePaymentReversalRequest");
        const response = await getJsonResponse<CreatePaymentReversalRequest, PaymentReversalResource>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentReversalResource");
    }
}

/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { AdjustAuthorisationRequest } from "../typings/payment/models";
import { AuthenticationResultRequest } from "../typings/payment/models";
import { AuthenticationResultResponse } from "../typings/payment/models";
import { CancelOrRefundRequest } from "../typings/payment/models";
import { CancelRequest } from "../typings/payment/models";
import { CaptureRequest } from "../typings/payment/models";
import { DonationRequest } from "../typings/payment/models";
import { ModificationResult } from "../typings/payment/models";
import { PaymentRequest } from "../typings/payment/models";
import { PaymentRequest3d } from "../typings/payment/models";
import { PaymentRequest3ds2 } from "../typings/payment/models";
import { PaymentResult } from "../typings/payment/models";
import { RefundRequest } from "../typings/payment/models";
import { TechnicalCancelRequest } from "../typings/payment/models";
import { ThreeDS2ResultRequest } from "../typings/payment/models";
import { ThreeDS2ResultResponse } from "../typings/payment/models";
import { VoidPendingRefundRequest } from "../typings/payment/models";
import { IRequest } from "../typings/requestOptions";
import Resource from "./resource";
import { ObjectSerializer } from "../typings/payment/models";

export class PaymentAPI extends Service {
    
    private readonly API_BASEPATH: string = "https://pal-test.adyen.com/pal/servlet/Payment/v68";
    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Change the authorised amount
    * @param adjustAuthorisationRequest {@link AdjustAuthorisationRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModificationResult }
    */
    public async adjustAuthorisation(adjustAuthorisationRequest: AdjustAuthorisationRequest, requestOptions?: IRequest.Options): Promise<ModificationResult> {
        const endpoint = `${this.baseUrl}/adjustAuthorisation`;
        const resource = new Resource(this, endpoint);
        const request: AdjustAuthorisationRequest = ObjectSerializer.serialize(adjustAuthorisationRequest, "AdjustAuthorisationRequest");
        const response = await getJsonResponse<AdjustAuthorisationRequest, ModificationResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModificationResult");
    }

    /**
    * @summary Create an authorisation
    * @param paymentRequest {@link PaymentRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentResult }
    */
    public async authorise(paymentRequest: PaymentRequest, requestOptions?: IRequest.Options): Promise<PaymentResult> {
        const endpoint = `${this.baseUrl}/authorise`;
        const resource = new Resource(this, endpoint);
        const request: PaymentRequest = ObjectSerializer.serialize(paymentRequest, "PaymentRequest");
        const response = await getJsonResponse<PaymentRequest, PaymentResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentResult");
    }

    /**
    * @summary Complete a 3DS authorisation
    * @param paymentRequest3d {@link PaymentRequest3d } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentResult }
    */
    public async authorise3d(paymentRequest3d: PaymentRequest3d, requestOptions?: IRequest.Options): Promise<PaymentResult> {
        const endpoint = `${this.baseUrl}/authorise3d`;
        const resource = new Resource(this, endpoint);
        const request: PaymentRequest3d = ObjectSerializer.serialize(paymentRequest3d, "PaymentRequest3d");
        const response = await getJsonResponse<PaymentRequest3d, PaymentResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentResult");
    }

    /**
    * @summary Complete a 3DS2 authorisation
    * @param paymentRequest3ds2 {@link PaymentRequest3ds2 } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentResult }
    */
    public async authorise3ds2(paymentRequest3ds2: PaymentRequest3ds2, requestOptions?: IRequest.Options): Promise<PaymentResult> {
        const endpoint = `${this.baseUrl}/authorise3ds2`;
        const resource = new Resource(this, endpoint);
        const request: PaymentRequest3ds2 = ObjectSerializer.serialize(paymentRequest3ds2, "PaymentRequest3ds2");
        const response = await getJsonResponse<PaymentRequest3ds2, PaymentResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentResult");
    }

    /**
    * @summary Cancel an authorisation
    * @param cancelRequest {@link CancelRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModificationResult }
    */
    public async cancel(cancelRequest: CancelRequest, requestOptions?: IRequest.Options): Promise<ModificationResult> {
        const endpoint = `${this.baseUrl}/cancel`;
        const resource = new Resource(this, endpoint);
        const request: CancelRequest = ObjectSerializer.serialize(cancelRequest, "CancelRequest");
        const response = await getJsonResponse<CancelRequest, ModificationResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModificationResult");
    }

    /**
    * @summary Cancel or refund a payment
    * @param cancelOrRefundRequest {@link CancelOrRefundRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModificationResult }
    */
    public async cancelOrRefund(cancelOrRefundRequest: CancelOrRefundRequest, requestOptions?: IRequest.Options): Promise<ModificationResult> {
        const endpoint = `${this.baseUrl}/cancelOrRefund`;
        const resource = new Resource(this, endpoint);
        const request: CancelOrRefundRequest = ObjectSerializer.serialize(cancelOrRefundRequest, "CancelOrRefundRequest");
        const response = await getJsonResponse<CancelOrRefundRequest, ModificationResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModificationResult");
    }

    /**
    * @summary Capture an authorisation
    * @param captureRequest {@link CaptureRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModificationResult }
    */
    public async capture(captureRequest: CaptureRequest, requestOptions?: IRequest.Options): Promise<ModificationResult> {
        const endpoint = `${this.baseUrl}/capture`;
        const resource = new Resource(this, endpoint);
        const request: CaptureRequest = ObjectSerializer.serialize(captureRequest, "CaptureRequest");
        const response = await getJsonResponse<CaptureRequest, ModificationResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModificationResult");
    }

    /**
    * @summary Create a donation
    * @param donationRequest {@link DonationRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModificationResult }
    *
	* @deprecated 
    */
    public async donate(donationRequest: DonationRequest, requestOptions?: IRequest.Options): Promise<ModificationResult> {
        const endpoint = `${this.baseUrl}/donate`;
        const resource = new Resource(this, endpoint);
        const request: DonationRequest = ObjectSerializer.serialize(donationRequest, "DonationRequest");
        const response = await getJsonResponse<DonationRequest, ModificationResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModificationResult");
    }

    /**
    * @summary Get the 3DS authentication result
    * @param authenticationResultRequest {@link AuthenticationResultRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AuthenticationResultResponse }
    */
    public async getAuthenticationResult(authenticationResultRequest: AuthenticationResultRequest, requestOptions?: IRequest.Options): Promise<AuthenticationResultResponse> {
        const endpoint = `${this.baseUrl}/getAuthenticationResult`;
        const resource = new Resource(this, endpoint);
        const request: AuthenticationResultRequest = ObjectSerializer.serialize(authenticationResultRequest, "AuthenticationResultRequest");
        const response = await getJsonResponse<AuthenticationResultRequest, AuthenticationResultResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AuthenticationResultResponse");
    }

    /**
    * @summary Refund a captured payment
    * @param refundRequest {@link RefundRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModificationResult }
    */
    public async refund(refundRequest: RefundRequest, requestOptions?: IRequest.Options): Promise<ModificationResult> {
        const endpoint = `${this.baseUrl}/refund`;
        const resource = new Resource(this, endpoint);
        const request: RefundRequest = ObjectSerializer.serialize(refundRequest, "RefundRequest");
        const response = await getJsonResponse<RefundRequest, ModificationResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModificationResult");
    }

    /**
    * @summary Get the 3DS2 authentication result
    * @param threeDS2ResultRequest {@link ThreeDS2ResultRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ThreeDS2ResultResponse }
    */
    public async retrieve3ds2Result(threeDS2ResultRequest: ThreeDS2ResultRequest, requestOptions?: IRequest.Options): Promise<ThreeDS2ResultResponse> {
        const endpoint = `${this.baseUrl}/retrieve3ds2Result`;
        const resource = new Resource(this, endpoint);
        const request: ThreeDS2ResultRequest = ObjectSerializer.serialize(threeDS2ResultRequest, "ThreeDS2ResultRequest");
        const response = await getJsonResponse<ThreeDS2ResultRequest, ThreeDS2ResultResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ThreeDS2ResultResponse");
    }

    /**
    * @summary Cancel an authorisation using your reference
    * @param technicalCancelRequest {@link TechnicalCancelRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModificationResult }
    */
    public async technicalCancel(technicalCancelRequest: TechnicalCancelRequest, requestOptions?: IRequest.Options): Promise<ModificationResult> {
        const endpoint = `${this.baseUrl}/technicalCancel`;
        const resource = new Resource(this, endpoint);
        const request: TechnicalCancelRequest = ObjectSerializer.serialize(technicalCancelRequest, "TechnicalCancelRequest");
        const response = await getJsonResponse<TechnicalCancelRequest, ModificationResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModificationResult");
    }

    /**
    * @summary Cancel an in-person refund
    * @param voidPendingRefundRequest {@link VoidPendingRefundRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ModificationResult }
    */
    public async voidPendingRefund(voidPendingRefundRequest: VoidPendingRefundRequest, requestOptions?: IRequest.Options): Promise<ModificationResult> {
        const endpoint = `${this.baseUrl}/voidPendingRefund`;
        const resource = new Resource(this, endpoint);
        const request: VoidPendingRefundRequest = ObjectSerializer.serialize(voidPendingRefundRequest, "VoidPendingRefundRequest");
        const response = await getJsonResponse<VoidPendingRefundRequest, ModificationResult>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ModificationResult");
    }
}

export default PaymentAPI;

import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Authorise from "./resource/payment/authorise";
import Authorise3d from "./resource/payment/authorise3d";
import Authorise3ds2 from "./resource/payment/authorise3ds2";
import GetAuthenticationResult from "./resource/payment/getAuthenticationResult";
import Retrieve3ds2Result from "./resource/payment/retrieve3ds2Result";
import Capture from "./resource/payment/capture";
import Cancel from "./resource/payment/cancel";
import Refund from "./resource/payment/refund";
import CancelOrRefund from "./resource/payment/cancelOrRefund";
import TechnicalCancel from "./resource/payment/technicalCancel";
import AdjustAuthorisation from "./resource/payment/adjustAuthorisation";
import Donate from "./resource/payment/donate";
import VoidPendingRefund from "./resource/payment/voidPendingRefund";

import { 
    AdjustAuthorisationRequest, 
    AuthenticationResultRequest, 
    AuthenticationResultResponse, 
    CancelOrRefundRequest, 
    CancelRequest, 
    CaptureRequest, 
    DonationRequest, 
    ModificationResult, 
    PaymentRequest,
    PaymentRequest3d,
    PaymentRequest3ds2,
    PaymentResult,
    RefundRequest,
    TechnicalCancelRequest,
    ThreeDS2ResultRequest,
    ThreeDS2ResultResponse,
    VoidPendingRefundRequest,
} from "../typings/payments/models";


class ClassicIntegration extends ApiKeyAuthenticatedService {
    private readonly _authorise;
    private readonly _authorise3d;
    private readonly _authorise3ds2;
    private readonly _getAuthenticationResult;
    private readonly _retrieve3ds2Result;
    private readonly _capture;
    private readonly _cancel;
    private readonly _refund;
    private readonly _cancelOrRefund;
    private readonly _technicalCancel;
    private readonly _adjustAuthorisation;
    private readonly _donate;
    private readonly _voidPendingRefund;



    public constructor(client: Client) {
        super(client);
        this._authorise = new Authorise(this);
        this._authorise3d = new Authorise3d(this);
        this._authorise3ds2 = new Authorise3ds2(this);
        this._getAuthenticationResult = new GetAuthenticationResult(this);
        this._retrieve3ds2Result = new Retrieve3ds2Result(this);
        this._capture = new Capture(this);
        this._cancel = new Cancel(this);
        this._refund = new Refund(this);
        this._cancelOrRefund = new CancelOrRefund(this);
        this._technicalCancel = new TechnicalCancel(this);
        this._adjustAuthorisation = new AdjustAuthorisation(this);
        this._donate = new Donate(this);
        this._voidPendingRefund = new VoidPendingRefund(this);

    }

    // General

    public authorise(paymentRequest: PaymentRequest): Promise<PaymentResult> {
        return getJsonResponse<PaymentRequest, PaymentResult>(
            this._authorise,
            paymentRequest,
        );
    }

    public authorise3d(paymentRequest3d: PaymentRequest3d): Promise<PaymentResult> {
        return getJsonResponse<PaymentRequest3d, PaymentResult>(
            this._authorise3d,
            paymentRequest3d,
        );
    }

    public authorise3ds2(paymentRequest3ds2: PaymentRequest3ds2): Promise<PaymentResult> {
        return getJsonResponse<PaymentRequest3ds2, PaymentResult>(
            this._authorise3ds2,
            paymentRequest3ds2,
        );
    }

    public getAuthenticationResult(authenticationResultRequest: AuthenticationResultRequest): Promise<AuthenticationResultResponse> {
        return getJsonResponse<AuthenticationResultRequest, AuthenticationResultResponse>(
            this._getAuthenticationResult,
            authenticationResultRequest,
        );
    }

    public retrieve3ds2Result(threeDs2ResultRequest: ThreeDS2ResultRequest): Promise<ThreeDS2ResultResponse> {
        return getJsonResponse<ThreeDS2ResultRequest, ThreeDS2ResultResponse>(
            this._retrieve3ds2Result,
            threeDs2ResultRequest,
        );
    }

    // Modifications

    public capture(captureRequest: CaptureRequest): Promise<ModificationResult> {
        return getJsonResponse<CaptureRequest, ModificationResult>(
            this._capture,
            captureRequest,
        );
    }

    public cancel(cancelRequest: CancelRequest): Promise<ModificationResult> {
        return getJsonResponse<CancelRequest, ModificationResult>(
            this._cancel,
            cancelRequest,
        );
    }

    public refund(refundRequest: RefundRequest): Promise<ModificationResult> {
        return getJsonResponse<RefundRequest, ModificationResult>(
            this._refund,
            refundRequest,
        );
    }

    public cancelOrRefund(cancelOrRefundRequest: CancelOrRefundRequest): Promise<ModificationResult> {
        return getJsonResponse<CancelOrRefundRequest, ModificationResult>(
            this._cancelOrRefund,
            cancelOrRefundRequest,
        );
    }

    public technicalCancel(technicalCancelRequest: TechnicalCancelRequest): Promise<ModificationResult> {
        return getJsonResponse<TechnicalCancelRequest, ModificationResult>(
            this._technicalCancel,
            technicalCancelRequest,
        );
    }

    public adjustAuthorisation(adjustAuthorisationRequest: AdjustAuthorisationRequest): Promise<ModificationResult> {
        return getJsonResponse<AdjustAuthorisationRequest, ModificationResult>(
            this._adjustAuthorisation,
            adjustAuthorisationRequest,
        );
    }

    public donate(donationRequest: DonationRequest): Promise<ModificationResult> {
        return getJsonResponse<DonationRequest, ModificationResult>(
            this._donate,
            donationRequest,
        );
    }

    public voidPendingRefund(voidPendingRefundRequest: VoidPendingRefundRequest): Promise<ModificationResult> {
        return getJsonResponse<VoidPendingRefundRequest, ModificationResult>(
            this._voidPendingRefund,
            voidPendingRefundRequest,
        );
    }
}

export default ClassicIntegration;


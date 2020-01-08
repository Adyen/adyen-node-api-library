/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import AdjustAuthorisation from "./resource/modification/adjustAuthorisation";
import Cancel from "./resource/modification/cancel";
import CancelOrRefund from "./resource/modification/cancelOrRefund";
import Capture from "./resource/modification/capture";
import Refund from "./resource/modification/refund";
import TechnicalCancel from "./resource/modification/technicalCancel";
import setApplicationInfo from "../helpers/setApplicationInfo";
import {ApplicationInfo} from "../typings/applicationInfo";

interface AppInfo { applicationInfo?: ApplicationInfo }
type GenericRequest<T> = T & AppInfo;

class Modification extends Service {
    private readonly _cancelOrRefund: CancelOrRefund;
    private readonly _cancel: Cancel;
    private readonly _capture: Capture;
    private readonly _refund: Refund;
    private readonly _adjustAuthorisation: AdjustAuthorisation;
    private readonly _technicalCancel: TechnicalCancel;

    public constructor(client: Client) {
        super(client);
        this._capture = new Capture(this);
        this._cancelOrRefund = new CancelOrRefund(this);
        this._cancel = new Cancel(this);
        this._refund = new Refund(this);
        this._adjustAuthorisation = new AdjustAuthorisation(this);
        this._technicalCancel = new TechnicalCancel(this);
    }

    public capture(
        captureRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse<IPayments.ModificationRequest, IPayments.ModificationResult>(
            this._capture,
            setApplicationInfo(captureRequest),
            requestOptions,
        );
    }

    public cancelOrRefund(
        cancelOrRefundRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse<IPayments.ModificationRequest, IPayments.ModificationResult>(
            this._cancelOrRefund,
            setApplicationInfo(cancelOrRefundRequest),
            requestOptions,
        );
    }

    public refund(
        refundRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse<IPayments.ModificationRequest, IPayments.ModificationResult>(
            this._refund,
            setApplicationInfo(refundRequest),
            requestOptions,
        );
    }

    public cancel(
        cancelRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse<IPayments.ModificationRequest, IPayments.ModificationResult>(
            this._cancel,
            setApplicationInfo(cancelRequest),
            requestOptions,
        );
    }

    public technicalCancel(
        technicalCancelRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse<IPayments.ModificationRequest, IPayments.ModificationResult>(
            this._technicalCancel,
            setApplicationInfo(technicalCancelRequest),
            requestOptions,
        );
    }

    public adjustAuthorisation(
        adjustAuthorisationRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse<IPayments.ModificationRequest, IPayments.ModificationResult>(
            this._adjustAuthorisation,
            setApplicationInfo(adjustAuthorisationRequest),
            requestOptions,
        );
    }
}

export default Modification;

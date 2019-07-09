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
import { ModificationRequest, ModificationResult } from "../typings/payments";
import { RequestOptions } from "../typings/requestOptions";
import AdjustAuthorisation from "./resource/modification/adjustAuthorisation";
import Cancel from "./resource/modification/cancel";
import CancelOrRefund from "./resource/modification/cancelOrRefund";
import Capture from "./resource/modification/capture";
import Refund from "./resource/modification/refund";
import TechnicalCancel from "./resource/modification/technicalCancel";
import {ApplicationInfo} from "../typings/applicationInfo";

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

    private setApplicationInfo(request: ModificationRequest): ModificationRequest {
        const hasApplicationInfo = "applicationInfo" in request;
        if(!hasApplicationInfo) {
            request.applicationInfo = new ApplicationInfo();
        }

        return request;
    }

    public async capture(
        captureRequest: ModificationRequest,
        requestOptions?: RequestOptions,
    ): Promise<ModificationResult> {
        return await getJsonResponse<ModificationRequest, ModificationResult>(
            this._capture,
            this.setApplicationInfo(captureRequest),
            requestOptions,
        );
    }

    public async cancelOrRefund(
        cancelOrRefundRequest: ModificationRequest,
        requestOptions?: RequestOptions,
    ): Promise<ModificationResult> {
        return await getJsonResponse<ModificationRequest, ModificationResult>(
            this._cancelOrRefund,
            this.setApplicationInfo(cancelOrRefundRequest),
            requestOptions,
        );
    }

    public async refund(
        refundRequest: ModificationRequest,
        requestOptions?: RequestOptions,
    ): Promise<ModificationResult> {
        return await getJsonResponse<ModificationRequest, ModificationResult>(
            this._refund,
            this.setApplicationInfo(refundRequest),
            requestOptions,
        );
    }

    public async cancel(
        cancelRequest: ModificationRequest,
        requestOptions?: RequestOptions,
    ): Promise<ModificationResult> {
        return await getJsonResponse<ModificationRequest, ModificationResult>(
            this._cancel,
            this.setApplicationInfo(cancelRequest),
            requestOptions,
        );
    }

    public async technicalCancel(
        technicalCancelRequest: ModificationRequest,
        requestOptions?: RequestOptions,
    ): Promise<ModificationResult> {
        return await getJsonResponse<ModificationRequest, ModificationResult>(
            this._technicalCancel,
            this.setApplicationInfo(technicalCancelRequest),
            requestOptions,
        );
    }

    public async adjustAuthorisation(
        adjustAuthorisationRequest: ModificationRequest,
        requestOptions?: RequestOptions,
    ): Promise<ModificationResult> {
        return await getJsonResponse<ModificationRequest, ModificationResult>(
            this._adjustAuthorisation,
            this.setApplicationInfo(adjustAuthorisationRequest),
            requestOptions,
        );
    }
}

export default Modification;

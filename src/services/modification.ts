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
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { ApplicationInfo } from "../typings/applicationInfo";
import { IRequest } from "../typings/requestOptions";
import AmountUpdates from "./resource/modification/amountUpdates";
import Cancels from "./resource/modification/cancels";
import Captures from "./resource/modification/captures";
import Refunds from "./resource/modification/refunds";
import Reversals from "./resource/modification/reversals";
import CancelsStandalone from "./resource/modification/cancelsStandalone";
import {
    CreatePaymentAmountUpdateRequest,
    CreatePaymentCancelRequest,
    CreatePaymentCaptureRequest,
    CreatePaymentRefundRequest, CreatePaymentReversalRequest,
    CreateStandalonePaymentCancelRequest,
    PaymentAmountUpdateResource,
    PaymentCancelResource,
    PaymentCaptureResource, PaymentRefundResource, PaymentReversalResource,
    StandalonePaymentCancelResource
} from "../typings/checkout/models";

interface AppInfo { applicationInfo?: ApplicationInfo }
type GenericRequest<T> = T & AppInfo;

class Modification extends Service {
    public constructor(client: Client) {
        super(client);
    }

    public amountUpdates(
        paymentPspReference: string,
        amountUpdatesRequest: GenericRequest<CreatePaymentAmountUpdateRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<PaymentAmountUpdateResource> {
        const amountUpdates = new AmountUpdates(this, paymentPspReference);
        return getJsonResponse<CreatePaymentAmountUpdateRequest, PaymentAmountUpdateResource>(
            amountUpdates,
            amountUpdatesRequest,
            requestOptions
        );
    }

    public cancelsStandalone(
        cancelsStandaloneRequest: GenericRequest<CreateStandalonePaymentCancelRequest>,
        requestOptions?: IRequest.Options
    ): Promise<StandalonePaymentCancelResource> {
        const cancelsStandalone = new CancelsStandalone(this);
        return getJsonResponse<CreateStandalonePaymentCancelRequest, StandalonePaymentCancelResource>(
            cancelsStandalone,
            cancelsStandaloneRequest,
            requestOptions
        );
    }

    public cancels(
        paymentPspReference: string,
        cancelsRequest: GenericRequest<CreatePaymentCancelRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<PaymentCancelResource> {
        const cancels = new Cancels(this, paymentPspReference);
        return getJsonResponse<CreatePaymentCancelRequest, PaymentCancelResource>(
            cancels,
            cancelsRequest,
            requestOptions
        );
    }

    public captures(
        paymentPspReference: string,
        capturesRequest: GenericRequest<CreatePaymentCaptureRequest>,
        requestOptions?: IRequest.Options
    ): Promise<PaymentCaptureResource> {
        const captures = new Captures(this, paymentPspReference);
        return getJsonResponse<CreatePaymentCaptureRequest, PaymentCaptureResource>(
            captures,
            capturesRequest,
            requestOptions
        );
    }

    public refunds(
        paymentPspReference: string,
        refundsRequest: GenericRequest<CreatePaymentRefundRequest>,
        requestOptions?: IRequest.Options
    ): Promise<PaymentRefundResource> {
        const refunds = new Refunds(this, paymentPspReference);
        return getJsonResponse<CreatePaymentRefundRequest, PaymentRefundResource>(
            refunds,
            refundsRequest,
            requestOptions
        );
    }

    public reversals(
        paymentPspReference: string,
        reversalsRequest: GenericRequest<CreatePaymentReversalRequest>,
        requestOptions?: IRequest.Options
    ): Promise<PaymentReversalResource> {
        const refunds = new Reversals(this, paymentPspReference);
        return getJsonResponse<CreatePaymentReversalRequest, PaymentReversalResource>(
            refunds,
            reversalsRequest,
            requestOptions
        );
    }
}

export default Modification;

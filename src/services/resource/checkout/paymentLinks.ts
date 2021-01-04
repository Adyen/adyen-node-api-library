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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import Client from "../../../client";
import getJsonResponse from "../../../helpers/getJsonResponse";
import Service from "../../../service";
import Resource from "../../resource";
import { HTTPMethod } from "../../../typings/HTTPMethod";
import { IRequest } from "../../../typings/requestOptions";

class PaymentLinks extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/paymentLinks`,
        );
    }

    public post(paymentLinkRequest: ICheckout.CreatePaymentLinkRequest): Promise<ICheckout.PaymentLinkResource> {
        return getJsonResponse.call<PaymentLinks, [ICheckout.CreatePaymentLinkRequest], Promise<ICheckout.PaymentLinkResource>>(
            this,
            paymentLinkRequest
        );
    }

    public get({ id }: { id: string }): Promise<ICheckout.PaymentLinkResource> {
        return getJsonResponse.call<PaymentLinks, [{}, IRequest.Options], Promise<ICheckout.PaymentLinkResource>>(
            this,
            {},
            { id, method: HTTPMethod.GET }
        );
    }

    public patch({ id, status }: { id: string, status: "expired" }): Promise<ICheckout.PaymentLinkResource> {
        return getJsonResponse.call<PaymentLinks, [{}, IRequest.Options], Promise<ICheckout.PaymentLinkResource>>(
            this,
            { status },
            { id, method: HTTPMethod.PATCH }
        );
    }
}

export default PaymentLinks;

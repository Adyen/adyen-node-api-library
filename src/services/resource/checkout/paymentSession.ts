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
import { IRequest } from "../../../typings/requestOptions";
import Resource from "../../resource";

class PaymentSession extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/paymentSession`,
        );
    }

    public post(
        paymentSessionRequest: ICheckout.PaymentSetupRequest,
        requestOptions?: IRequest.Options,
    ): Promise<ICheckout.PaymentSetupResponse> {
        return getJsonResponse.call<PaymentSession, [ICheckout.PaymentSetupRequest, IRequest.Options | undefined], Promise<ICheckout.PaymentSetupResponse>>(
            this,
            paymentSessionRequest,
            requestOptions,
        );
    }
}

export default PaymentSession;

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

class PaymentsResult extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/payments/result`,
        );
    }

    public post(paymentResultRequest: ICheckout.PaymentVerificationRequest): Promise<ICheckout.PaymentVerificationResponse> {
        return getJsonResponse<ICheckout.PaymentVerificationRequest, ICheckout.PaymentVerificationResponse>(
            this,
            paymentResultRequest,
        );
    }

}

export default PaymentsResult;

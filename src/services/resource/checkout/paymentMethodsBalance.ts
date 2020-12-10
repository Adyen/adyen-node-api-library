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

class PaymentMethodsBalance extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/paymentMethods/balance`,
        );
    }

    public post(paymentMethodsBalanceRequest: ICheckout.CheckoutBalanceCheckRequest): Promise<ICheckout.CheckoutBalanceCheckResponse> {
        return getJsonResponse.call<PaymentMethodsBalance, [ICheckout.CheckoutBalanceCheckRequest], Promise<ICheckout.CheckoutBalanceCheckResponse>>(
            this,
            paymentMethodsBalanceRequest,
        );
    }

}

export default PaymentMethodsBalance;

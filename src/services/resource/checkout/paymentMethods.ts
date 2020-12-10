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
import PaymentMethodsBalance from "./paymentMethodsBalance";

class PaymentMethods extends Resource {
    public readonly balance: PaymentMethodsBalance;

    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/paymentMethods`,
        );

        this.balance = new PaymentMethodsBalance(service);
    }

    public post(paymentMethodsRequest: ICheckout.PaymentMethodsRequest): Promise<ICheckout.PaymentMethodsResponse> {
        return getJsonResponse.call<PaymentMethods, [ICheckout.PaymentMethodsRequest], Promise<ICheckout.PaymentMethodsResponse>>(
            this,
            paymentMethodsRequest,
        );
    }

}

export default PaymentMethods;

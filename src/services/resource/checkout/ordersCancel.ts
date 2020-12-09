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

class OrdersCancel extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/orders/cancel`,
        );
    }

    public post(ordersCancelRequest: ICheckout.CheckoutCancelOrderRequest): Promise<ICheckout.CheckoutCancelOrderResponse> {
        return getJsonResponse<ICheckout.CheckoutCancelOrderRequest, ICheckout.CheckoutCancelOrderResponse>(
            this,
            ordersCancelRequest,
        );
    }
}

export default OrdersCancel;

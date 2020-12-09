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
import OrdersCancel from "./ordersCancel";

class Orders extends Resource {
    public readonly cancel: OrdersCancel;

    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/orders`,
        );

        this.cancel = new OrdersCancel(service);
    }

    public post(ordersRequest: ICheckout.CheckoutCreateOrderRequest): Promise<ICheckout.CheckoutCreateOrderResponse> {
        return getJsonResponse<ICheckout.CheckoutCreateOrderRequest, ICheckout.CheckoutCreateOrderResponse>(
            this,
            ordersRequest,
        );
    }

}

export default Orders;

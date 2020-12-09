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

import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import PaymentMethods from "./resource/checkout/paymentMethods";
import Payments from "./resource/checkout/payments";
import PaymentSession from "./resource/checkout/paymentSession";
import PaymentLinks from "./resource/checkout/paymentLinks";
import OriginKeys from "./resource/checkout/originKeys";
import Orders from "./resource/checkout/orders";

class Checkout extends ApiKeyAuthenticatedService {
    public readonly payments: Payments;
    public readonly paymentMethods: PaymentMethods;
    public readonly paymentSession: PaymentSession;
    public readonly paymentLinks: PaymentLinks;
    public readonly originKeys: OriginKeys;
    public readonly orders: Orders;

    public constructor(client: Client) {
        super(client);
        this.payments = new Payments(this);
        this.paymentMethods = new PaymentMethods(this);
        this.paymentSession = new PaymentSession(this);
        this.paymentLinks = new PaymentLinks(this);
        this.originKeys = new OriginKeys(this);
        this.orders = new Orders(this);
    }

}

export default Checkout;

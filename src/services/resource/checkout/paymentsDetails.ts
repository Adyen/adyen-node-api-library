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

class PaymentsDetails extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/payments/details`,
        );
    }

    public post(paymentsDetailsRequest: ICheckout.DetailsRequest, requestOptions?: IRequest.Options): Promise<ICheckout.PaymentResponse> {
        return getJsonResponse<ICheckout.DetailsRequest, ICheckout.PaymentResponse>(
            this,
            paymentsDetailsRequest,
            requestOptions
        );
    }

}

export default PaymentsDetails;

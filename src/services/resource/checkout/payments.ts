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
import setApplicationInfo from "../../../helpers/setApplicationInfo";
import Service from "../../../service";
import { IRequest } from "../../../typings/requestOptions";
import Resource from "../../resource";
import PaymentsDetails from "./paymentsDetails";
import PaymentsResult from "./paymentsResult";

class Payments extends Resource {
    public readonly details: PaymentsDetails;
    public readonly result: PaymentsResult;

    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/payments`,
        );

        this.details = new PaymentsDetails(service);
        this.result = new PaymentsResult(service);
    }

    public post(paymentsRequest: ICheckout.PaymentRequest, requestOptions?: IRequest.Options): Promise<ICheckout.PaymentResponse> {
        return getJsonResponse<ICheckout.PaymentRequest, ICheckout.PaymentResponse>(
            this,
            setApplicationInfo(paymentsRequest),
            requestOptions,
        );
    }

}

export default Payments;

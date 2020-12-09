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

class OriginKeys extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.checkoutEndpoint}/${Client.CHECKOUT_API_VERSION}/originKeys`,
        );
    }

    public post(originKeysRequest: ICheckout.CheckoutUtilityRequest): Promise<ICheckout.CheckoutUtilityResponse> {
        return getJsonResponse<ICheckout.CheckoutUtilityRequest, ICheckout.CheckoutUtilityResponse>(
            this,
            originKeysRequest,
        );
    }

}

export default OriginKeys;

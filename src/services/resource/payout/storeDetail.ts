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
import Resource from "../../resource";
import Service from "../../../service";
import Client from "../../../client";
import getJsonResponse from "../../../helpers/getJsonResponse";

class StoreDetail extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Payout/${Client.API_VERSION}/storeDetail`
        );
    }

    public post(request: IPayouts.StoreDetailRequest): Promise<IPayouts.StoreDetailResponse> {
        return getJsonResponse<IPayouts.StoreDetailRequest, IPayouts.StoreDetailResponse>(
            this,
            request
        );
    }

}

export default StoreDetail;

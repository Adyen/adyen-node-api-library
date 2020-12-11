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

class StoreDetailAndSubmitThirdParty extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Payout/${Client.API_VERSION}/storeDetailAndSubmitThirdParty`
        );
    }

    public post(request: IPayouts.StoreDetailAndSubmitRequest): Promise<IPayouts.StoreDetailAndSubmitResponse> {
        return getJsonResponse.call<StoreDetailAndSubmitThirdParty, [IPayouts.StoreDetailAndSubmitRequest], Promise<IPayouts.StoreDetailAndSubmitResponse>>(
            this,
            request
        );
    }

}

export default StoreDetailAndSubmitThirdParty;

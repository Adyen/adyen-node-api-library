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

class DeclineThirdParty extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Payout/${Client.API_VERSION}/declineThirdParty`
        );
    }

    public post(request: IPayouts.ModifyRequest): Promise<IPayouts.ModifyResponse> {
        return getJsonResponse<IPayouts.ModifyRequest, IPayouts.ModifyResponse>(
            this,
            request
        );
    }
}

export default DeclineThirdParty;

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
import Service from "../../../service";
import Resource from "../../resource";
import getJsonResponse from "../../../helpers/getJsonResponse";

class Disable extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Recurring/${Client.RECURRING_API_VERSION}/disable`,
        );
    }

    public post(request: IRecurring.DisableRequest): Promise<IRecurring.DisableResult> {
        return getJsonResponse.call<Disable, [IRecurring.DisableRequest], Promise<IRecurring.DisableResult>>(
            this,
            request,
        );
    }

}

export default Disable;

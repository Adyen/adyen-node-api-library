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

class ListRecurringDetails extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Recurring/${Client.RECURRING_API_VERSION}/listRecurringDetails`,
        );
    }

    public post(request: IRecurring.RecurringDetailsRequest): Promise<IRecurring.RecurringDetailsResult> {
        return getJsonResponse.call<ListRecurringDetails, [IRecurring.RecurringDetailsRequest], Promise<IRecurring.RecurringDetailsResult>>(
            this,
            request,
        );
    }

}

export default ListRecurringDetails;

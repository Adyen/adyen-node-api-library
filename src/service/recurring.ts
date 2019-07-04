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
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { DisableRequest, DisableResult, RecurringDetailsRequest, RecurringDetailsResult } from "../typings/recurring";
import Disable from "./resource/recurring/disable";
import ListRecurringDetails from "./resource/recurring/listRecurringDetails";

class Recurring extends Service {
    private readonly _listRecurringDetails: ListRecurringDetails;
    private readonly _disable: Disable;

    public constructor(client: Client) {
        super(client);
        this._listRecurringDetails = new ListRecurringDetails(this);
        this._disable = new Disable(this);
    }

    public async listRecurringDetails(request: RecurringDetailsRequest): Promise<RecurringDetailsResult> {
        return await getJsonResponse<RecurringDetailsRequest, RecurringDetailsResult>(
            this._listRecurringDetails,
            request,
        );
    }

    public async disable(request: DisableRequest): Promise<DisableResult> {
        return await getJsonResponse<DisableRequest, DisableResult>(
            this._disable,
            request,
        );
    }
}

export default Recurring;

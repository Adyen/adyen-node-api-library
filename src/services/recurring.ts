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

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import Disable from "./resource/recurring/disable";
import ListRecurringDetails from "./resource/recurring/listRecurringDetails";
import ScheduleAccountUpdater from "./resource/recurring/scheduleAccountUpdater";
import {
    RecurringDetailsRequest,
    RecurringDetailsResult,
    DisableRequest,
    DisableResult,
    ScheduleAccountUpdaterRequest,
    ScheduleAccountUpdaterResult
} from "../typings/recurring/models";

class Recurring extends Service {
    private readonly _listRecurringDetails: ListRecurringDetails;
    private readonly _disable: Disable;
    private readonly _scheduleAccountUpdater: ScheduleAccountUpdater;

    public constructor(client: Client) {
        super(client);
        this._listRecurringDetails = new ListRecurringDetails(this);
        this._disable = new Disable(this);
        this._scheduleAccountUpdater = new ScheduleAccountUpdater(this);
    }

    public listRecurringDetails(request: RecurringDetailsRequest): Promise<RecurringDetailsResult> {
        return getJsonResponse<RecurringDetailsRequest, RecurringDetailsResult>(
            this._listRecurringDetails,
            request,
        );
    }

    public disable(request: DisableRequest): Promise<DisableResult> {
        return getJsonResponse<DisableRequest, DisableResult>(
            this._disable,
            request,
        );
    }

    public scheduleAccountUpdater(request: ScheduleAccountUpdaterRequest): Promise<ScheduleAccountUpdaterResult> {
        return getJsonResponse<ScheduleAccountUpdaterRequest, ScheduleAccountUpdaterResult>(
            this._scheduleAccountUpdater,
            request,
        );
    }
}

export default Recurring;

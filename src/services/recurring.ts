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
import Service from "../service";
import Disable from "./resource/recurring/disable";
import ListRecurringDetails from "./resource/recurring/listRecurringDetails";
import ScheduleAccountUpdater from "./resource/recurring/scheduleAccountUpdater";

class Recurring extends Service {
    public readonly listRecurringDetails: ListRecurringDetails;
    public readonly disable: Disable;
    public readonly scheduleAccountUpdater: ScheduleAccountUpdater;

    public constructor(client: Client) {
        super(client);
        this.listRecurringDetails = new ListRecurringDetails(this);
        this.disable = new Disable(this);
        this.scheduleAccountUpdater = new ScheduleAccountUpdater(this);
    }
}

export default Recurring;

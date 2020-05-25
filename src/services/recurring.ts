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

class Recurring extends Service {
    private readonly _listRecurringDetails: ListRecurringDetails;
    private readonly _disable: Disable;

    public constructor(client: Client) {
        super(client);
        this._listRecurringDetails = new ListRecurringDetails(this);
        this._disable = new Disable(this);
    }

    public listRecurringDetails(request: IRecurring.RecurringDetailsRequest): Promise<IRecurring.RecurringDetailsResult> {
        return getJsonResponse<IRecurring.RecurringDetailsRequest, IRecurring.RecurringDetailsResult>(
            this._listRecurringDetails,
            request,
        );
    }

    public disable(request: IRecurring.DisableRequest): Promise<IRecurring.DisableResult> {
        return getJsonResponse<IRecurring.DisableRequest, IRecurring.DisableResult>(
            this._disable,
            request,
        );
    }
}

export default Recurring;

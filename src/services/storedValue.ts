import { LookupAddress } from "dns";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import {

} from "../typings/storedValue/models";
import { Issuer } from "../typings/terminal/issuer";

class Recurring extends Service {

    private readonly _issue: Issuer;
    private readonly _changeStatus: ChangeStatus;
    private readonly _load: Load;
    private readonly _checkBalance CheckBalance;
    private readonly _mergebalance MergeBalance;
    private readonly _voidTransaction VoidTransaction;


    public constructor(client: Client) {
        super(client);
        this._listRecurringDetails = new ListRecurringDetails(this);
        this._disable = new Disable(this);
        this._scheduleAccountUpdater = new ScheduleAccountUpdater(this);
        this._notifyShopper = new NotifyShopper(this);
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

    public notifyShopper(request: NotifyShopperRequest): Promise<NotifyShopperResult> {
        return getJsonResponse<NotifyShopperRequest, NotifyShopperResult>(
            this._notifyShopper,
            request
        );
    }
}

export default Recurring;

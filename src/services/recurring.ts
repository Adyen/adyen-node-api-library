import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import {
    RecurringDetailsRequest,
    RecurringDetailsResult,
    DisableRequest,
    DisableResult,
    ScheduleAccountUpdaterRequest,
    ScheduleAccountUpdaterResult,
    NotifyShopperRequest,
    NotifyShopperResult,
    CreatePermitRequest,
    CreatePermitResult,
    DisablePermitRequest,
    DisablePermitResult
} from "../typings/recurring/models";
import RecurringResource from "./resource/RecurringResource";

class Recurring extends Service {
    private readonly _listRecurringDetails: RecurringResource;
    private readonly _disable: RecurringResource;
    private readonly _scheduleAccountUpdater: RecurringResource;
    private readonly _notifyShopper: RecurringResource;
    private readonly _createPermit: RecurringResource;
    private readonly _disablePermit: RecurringResource;

    public constructor(client: Client) {
        super(client);
        this._listRecurringDetails = new RecurringResource(this, "/listRecurringDetails");
        this._disable = new RecurringResource(this, "/disable");
        this._scheduleAccountUpdater = new RecurringResource(this, "/scheduleAccountUpdater");
        this._notifyShopper = new RecurringResource(this, "/notifyShopper");
        this._createPermit = new RecurringResource(this, "/createPermit");
        this._disablePermit = new RecurringResource(this, "/disablePermit")
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

    public createPermit(request: CreatePermitRequest): Promise<CreatePermitResult>{
        return getJsonResponse<CreatePermitRequest, CreatePermitResult>(
            this._createPermit,
            request
        );
    }

    public disablePermit(request: DisablePermitRequest): Promise<DisablePermitResult>{
        return getJsonResponse<DisablePermitRequest, DisablePermitResult>(
            this._disablePermit,
            request
        );
    }
}

export default Recurring;

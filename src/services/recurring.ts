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
    DisablePermitResult, ObjectSerializer
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

    public listRecurringDetails(recurringDetailsRequest: RecurringDetailsRequest): Promise<RecurringDetailsResult> {
        const request: RecurringDetailsRequest = ObjectSerializer.serialize(recurringDetailsRequest, "RecurringDetailsRequest");
        return getJsonResponse<RecurringDetailsRequest, RecurringDetailsResult>(
            this._listRecurringDetails,
            request,
        );
    }

    public disable(disableRequest: DisableRequest): Promise<DisableResult> {
        const request: DisableRequest = ObjectSerializer.serialize(disableRequest, "DisableRequest");
        return getJsonResponse<DisableRequest, DisableResult>(
            this._disable,
            request,
        );
    }

    public scheduleAccountUpdater(scheduleAccountUpdaterRequest: ScheduleAccountUpdaterRequest): Promise<ScheduleAccountUpdaterResult> {
        const request: ScheduleAccountUpdaterRequest = ObjectSerializer.serialize(scheduleAccountUpdaterRequest, "ScheduleAccountUpdaterRequest");
        return getJsonResponse<ScheduleAccountUpdaterRequest, ScheduleAccountUpdaterResult>(
            this._scheduleAccountUpdater,
            request,
        );
    }

    public notifyShopper(notifyShopperRequest: NotifyShopperRequest): Promise<NotifyShopperResult> {
        const request: NotifyShopperRequest = ObjectSerializer.serialize(notifyShopperRequest, "NotifyShopperRequest");
        return getJsonResponse<NotifyShopperRequest, NotifyShopperResult>(
            this._notifyShopper,
            request
        );
    }

    public createPermit(createPermitRequest: CreatePermitRequest): Promise<CreatePermitResult>{
        const request: CreatePermitRequest = ObjectSerializer.serialize(createPermitRequest, "CreatePermitRequest");
        return getJsonResponse<CreatePermitRequest, CreatePermitResult>(
            this._createPermit,
            request
        );
    }

    public disablePermit(disablePermitRequest: DisablePermitRequest): Promise<DisablePermitResult>{
        const request: DisablePermitRequest = ObjectSerializer.serialize(disablePermitRequest, "DisablePermitRequest");
        return getJsonResponse<DisablePermitRequest, DisablePermitResult>(
            this._disablePermit,
            request
        );
    }
}

export default Recurring;

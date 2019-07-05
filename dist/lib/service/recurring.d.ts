import Client from "../client";
import Service from "../service";
import { DisableRequest, DisableResult, RecurringDetailsRequest, RecurringDetailsResult } from "../typings/recurring";
declare class Recurring extends Service {
    private readonly _listRecurringDetails;
    private readonly _disable;
    constructor(client: Client);
    listRecurringDetails(request: RecurringDetailsRequest): Promise<RecurringDetailsResult>;
    disable(request: DisableRequest): Promise<DisableResult>;
}
export default Recurring;

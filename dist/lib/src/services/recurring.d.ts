import Client from "../client";
import Service from "../service";
declare class Recurring extends Service {
    private readonly _listRecurringDetails;
    private readonly _disable;
    constructor(client: Client);
    listRecurringDetails(request: IRecurring.RecurringDetailsRequest): Promise<IRecurring.RecurringDetailsResult>;
    disable(request: IRecurring.DisableRequest): Promise<IRecurring.DisableResult>;
}
export default Recurring;

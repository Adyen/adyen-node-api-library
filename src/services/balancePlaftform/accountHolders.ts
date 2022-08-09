import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { AccountHolder, AccountHolderInfo, ObjectSerializer, PaginatedBalanceAccountsResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import BalancePlatformResource from "../resource/balancePlaftformResource";

// @TODO PW-7013: make this change at the spec level?
export type AccountHolderUpdate = Omit<AccountHolder, "id">;

class AccountHolders extends Service {
    public async create(request: AccountHolderInfo): Promise<AccountHolder> {
        const resource = new BalancePlatformResource(this, "/accountHolders");
        const response = await getJsonResponse<AccountHolderInfo, AccountHolder>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AccountHolder");
    }

    public async retrieve(id: string): Promise<AccountHolder> {
        const resource = new BalancePlatformResource(this, `/accountHolders/${id}`);
        const response = await getJsonResponse<string, AccountHolder>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AccountHolder");
    }

    public async update(id: string, request: AccountHolderUpdate): Promise<AccountHolder> {
        const resource = new BalancePlatformResource(this, `/accountHolders/${id}`);
        const response = await getJsonResponse<AccountHolderUpdate, AccountHolder>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "AccountHolder");
    }

    public async listBalanceAccounts(id: string, requestOptions?: IRequest.Options): Promise<PaginatedBalanceAccountsResponse> {
        const resource = new BalancePlatformResource(this, `/accountHolders/${id}/balanceAccounts`);
        const response = await getJsonResponse<string, PaginatedBalanceAccountsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaginatedBalanceAccountsResponse");
    }
}

export default AccountHolders;
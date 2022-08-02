import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { AccountHolder } from "../../typings/balancePlatform/accountHolder";
import { AccountHolderInfo } from "../../typings/balancePlatform/accountHolderInfo";
import { PaginatedBalanceAccountsResponse } from "../../typings/balancePlatform/paginatedBalanceAccountsResponse";
import { ObjectSerializer } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import BalancePlatformResource from "../resource/balancePlaftformResource";

class AccountHolders extends Service {
    public async create(request: AccountHolderInfo): Promise<AccountHolder> {
        const resource = new BalancePlatformResource(this, `/accountHolders`);
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
            '',
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AccountHolder");
    }

    public async update(id: string, request: AccountHolder): Promise<AccountHolder> {
        const resource = new BalancePlatformResource(this, `/accountHolders/${id}`);
        const response = await getJsonResponse<AccountHolder, AccountHolder>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "AccountHolder");
    }

    public async list(id: string, requestOptions?: IRequest.Options): Promise<PaginatedBalanceAccountsResponse> {
        const resource = new BalancePlatformResource(this, `/accountHolders/${id}/balanceAccounts`);
        const response = await getJsonResponse<string, PaginatedBalanceAccountsResponse>(
            resource,
            '',
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaginatedBalanceAccountsResponse");
    }
}

export default AccountHolders;
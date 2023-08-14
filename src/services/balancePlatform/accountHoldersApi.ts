/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { AccountHolder } from "../../typings/balancePlatform/models";
import { AccountHolderInfo } from "../../typings/balancePlatform/models";
import { AccountHolderUpdateRequest } from "../../typings/balancePlatform/models";
import { PaginatedBalanceAccountsResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/balancePlatform/models";

export class AccountHoldersApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get an account holder
    * @param id {@link string } The unique identifier of the account holder.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link AccountHolder }
    */
    public async getAccountHolder(id: string, requestOptions?: IRequest.Options): Promise<AccountHolder> {
        const endpoint = `${this.baseUrl}/accountHolders/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, AccountHolder>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AccountHolder");
    }

    /**
    * @summary Get all balance accounts of an account holder
    * @param id {@link string } The unique identifier of the account holder.
    * @param offset {@link number } The number of items that you want to skip.
    * @param limit {@link number } The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link PaginatedBalanceAccountsResponse }
    */
    public async getAllBalanceAccountsOfAccountHolder(id: string, requestOptions?: IRequest.Options): Promise<PaginatedBalanceAccountsResponse> {
        const endpoint = `${this.baseUrl}/accountHolders/{id}/balanceAccounts`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, PaginatedBalanceAccountsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaginatedBalanceAccountsResponse");
    }

    /**
    * @summary Update an account holder
    * @param id {@link string } The unique identifier of the account holder.
    * @param accountHolderUpdateRequest {@link AccountHolderUpdateRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link AccountHolder }
    */
    public async updateAccountHolder(id: string, accountHolderUpdateRequest: AccountHolderUpdateRequest, requestOptions?: IRequest.Options): Promise<AccountHolder> {
        const endpoint = `${this.baseUrl}/accountHolders/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: AccountHolderUpdateRequest = ObjectSerializer.serialize(accountHolderUpdateRequest, "AccountHolderUpdateRequest");
        const response = await getJsonResponse<AccountHolderUpdateRequest, AccountHolder>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "AccountHolder");
    }

    /**
    * @summary Create an account holder
    * @param accountHolderInfo {@link AccountHolderInfo } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link AccountHolder }
    */
    public async createAccountHolder(accountHolderInfo: AccountHolderInfo, requestOptions?: IRequest.Options): Promise<AccountHolder> {
        const endpoint = `${this.baseUrl}/accountHolders`;
        const resource = new Resource(this, endpoint);
        const request: AccountHolderInfo = ObjectSerializer.serialize(accountHolderInfo, "AccountHolderInfo");
        const response = await getJsonResponse<AccountHolderInfo, AccountHolder>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AccountHolder");
    }
}

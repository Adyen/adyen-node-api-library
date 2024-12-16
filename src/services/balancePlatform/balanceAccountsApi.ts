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
import { 
    BalanceAccount,
    BalanceAccountInfo,
    BalanceAccountUpdateRequest,
    BalanceSweepConfigurationsResponse,
    CreateSweepConfigurationV2,
    PaginatedPaymentInstrumentsResponse,
    RestServiceError,
    SweepConfigurationV2,
    TransactionRulesResponse,
    UpdateSweepConfigurationV2,
    ObjectSerializer
} from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class BalanceAccountsApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create a balance account
    * @param balanceAccountInfo {@link BalanceAccountInfo } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalanceAccount }
    */
    public async createBalanceAccount(balanceAccountInfo: BalanceAccountInfo, requestOptions?: IRequest.Options): Promise<BalanceAccount> {
        const endpoint = `${this.baseUrl}/balanceAccounts`;
        const resource = new Resource(this, endpoint);
        const request: BalanceAccountInfo = ObjectSerializer.serialize(balanceAccountInfo, "BalanceAccountInfo");
        const response = await getJsonResponse<BalanceAccountInfo, BalanceAccount>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "BalanceAccount");
    }

    /**
    * @summary Create a sweep
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param createSweepConfigurationV2 {@link CreateSweepConfigurationV2 } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SweepConfigurationV2 }
    */
    public async createSweep(balanceAccountId: string, createSweepConfigurationV2: CreateSweepConfigurationV2, requestOptions?: IRequest.Options): Promise<SweepConfigurationV2> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{balanceAccountId}/sweeps`
            .replace("{" + "balanceAccountId" + "}", encodeURIComponent(String(balanceAccountId)));
        const resource = new Resource(this, endpoint);
        const request: CreateSweepConfigurationV2 = ObjectSerializer.serialize(createSweepConfigurationV2, "CreateSweepConfigurationV2");
        const response = await getJsonResponse<CreateSweepConfigurationV2, SweepConfigurationV2>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "SweepConfigurationV2");
    }

    /**
    * @summary Delete a sweep
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param sweepId {@link string } The unique identifier of the sweep.
    * @param requestOptions {@link IRequest.Options }
    */
    public async deleteSweep(balanceAccountId: string, sweepId: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`
            .replace("{" + "balanceAccountId" + "}", encodeURIComponent(String(balanceAccountId)))
            .replace("{" + "sweepId" + "}", encodeURIComponent(String(sweepId)));
        const resource = new Resource(this, endpoint);
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary Get all sweeps for a balance account
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } The number of items that you want to skip.
    * @param limit {@link number } The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
    * @return {@link BalanceSweepConfigurationsResponse }
    */
    public async getAllSweepsForBalanceAccount(balanceAccountId: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<BalanceSweepConfigurationsResponse> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{balanceAccountId}/sweeps`
            .replace("{" + "balanceAccountId" + "}", encodeURIComponent(String(balanceAccountId)));
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = offset ?? limit;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(offset) requestOptions.params["offset"] = offset;
            if(limit) requestOptions.params["limit"] = limit;
        }
        const response = await getJsonResponse<string, BalanceSweepConfigurationsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BalanceSweepConfigurationsResponse");
    }

    /**
    * @summary Get all transaction rules for a balance account
    * @param id {@link string } The unique identifier of the balance account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransactionRulesResponse }
    */
    public async getAllTransactionRulesForBalanceAccount(id: string, requestOptions?: IRequest.Options): Promise<TransactionRulesResponse> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{id}/transactionRules`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TransactionRulesResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TransactionRulesResponse");
    }

    /**
    * @summary Get a balance account
    * @param id {@link string } The unique identifier of the balance account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalanceAccount }
    */
    public async getBalanceAccount(id: string, requestOptions?: IRequest.Options): Promise<BalanceAccount> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, BalanceAccount>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BalanceAccount");
    }

    /**
    * @summary Get payment instruments linked to a balance account
    * @param id {@link string } The unique identifier of the balance account.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } The number of items that you want to skip.
    * @param limit {@link number } The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
    * @param status {@link string } The status of the payment instruments that you want to get. By default, the response includes payment instruments with any status.
    * @return {@link PaginatedPaymentInstrumentsResponse }
    */
    public async getPaymentInstrumentsLinkedToBalanceAccount(id: string, offset?: number, limit?: number, status?: string, requestOptions?: IRequest.Options): Promise<PaginatedPaymentInstrumentsResponse> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{id}/paymentInstruments`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = offset ?? limit ?? status;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(offset) requestOptions.params["offset"] = offset;
            if(limit) requestOptions.params["limit"] = limit;
            if(status) requestOptions.params["status"] = status;
        }
        const response = await getJsonResponse<string, PaginatedPaymentInstrumentsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaginatedPaymentInstrumentsResponse");
    }

    /**
    * @summary Get a sweep
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param sweepId {@link string } The unique identifier of the sweep.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SweepConfigurationV2 }
    */
    public async getSweep(balanceAccountId: string, sweepId: string, requestOptions?: IRequest.Options): Promise<SweepConfigurationV2> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`
            .replace("{" + "balanceAccountId" + "}", encodeURIComponent(String(balanceAccountId)))
            .replace("{" + "sweepId" + "}", encodeURIComponent(String(sweepId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, SweepConfigurationV2>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "SweepConfigurationV2");
    }

    /**
    * @summary Update a balance account
    * @param id {@link string } The unique identifier of the balance account.
    * @param balanceAccountUpdateRequest {@link BalanceAccountUpdateRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalanceAccount }
    */
    public async updateBalanceAccount(id: string, balanceAccountUpdateRequest: BalanceAccountUpdateRequest, requestOptions?: IRequest.Options): Promise<BalanceAccount> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: BalanceAccountUpdateRequest = ObjectSerializer.serialize(balanceAccountUpdateRequest, "BalanceAccountUpdateRequest");
        const response = await getJsonResponse<BalanceAccountUpdateRequest, BalanceAccount>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "BalanceAccount");
    }

    /**
    * @summary Update a sweep
    * @param balanceAccountId {@link string } The unique identifier of the balance account.
    * @param sweepId {@link string } The unique identifier of the sweep.
    * @param updateSweepConfigurationV2 {@link UpdateSweepConfigurationV2 } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SweepConfigurationV2 }
    */
    public async updateSweep(balanceAccountId: string, sweepId: string, updateSweepConfigurationV2: UpdateSweepConfigurationV2, requestOptions?: IRequest.Options): Promise<SweepConfigurationV2> {
        const endpoint = `${this.baseUrl}/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}`
            .replace("{" + "balanceAccountId" + "}", encodeURIComponent(String(balanceAccountId)))
            .replace("{" + "sweepId" + "}", encodeURIComponent(String(sweepId)));
        const resource = new Resource(this, endpoint);
        const request: UpdateSweepConfigurationV2 = ObjectSerializer.serialize(updateSweepConfigurationV2, "UpdateSweepConfigurationV2");
        const response = await getJsonResponse<UpdateSweepConfigurationV2, SweepConfigurationV2>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "SweepConfigurationV2");
    }
}

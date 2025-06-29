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
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

import { ObjectSerializer } from "../../typings/balancePlatform/objectSerializer";
import { BalancePlatform } from "../../typings/balancePlatform/models";
import { PaginatedAccountHoldersResponse } from "../../typings/balancePlatform/models";
import { TransactionRulesResponse } from "../../typings/balancePlatform/models";

/**
 * API handler for PlatformApi
 */
export class PlatformApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get all account holders under a balance platform
    * @param id {@link string } The unique identifier of the balance platform.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } The number of items that you want to skip.
    * @param limit {@link number } The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
    * @return {@link PaginatedAccountHoldersResponse }
    */
    public async getAllAccountHoldersUnderBalancePlatform(id: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<PaginatedAccountHoldersResponse> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{id}/accountHolders`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        
        const hasDefinedQueryParams = offset ?? limit;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(offset) requestOptions.params["offset"] = offset;
            if(limit) requestOptions.params["limit"] = limit;
        }
        const response = await getJsonResponse<string, PaginatedAccountHoldersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "PaginatedAccountHoldersResponse");
    }

    /**
    * @summary Get all transaction rules for a balance platform
    * @param id {@link string } The unique identifier of the balance platform.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransactionRulesResponse }
    */
    public async getAllTransactionRulesForBalancePlatform(id: string, requestOptions?: IRequest.Options): Promise<TransactionRulesResponse> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{id}/transactionRules`
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
    * @summary Get a balance platform
    * @param id {@link string } The unique identifier of the balance platform.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalancePlatform }
    */
    public async getBalancePlatform(id: string, requestOptions?: IRequest.Options): Promise<BalancePlatform> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        
        const response = await getJsonResponse<string, BalancePlatform>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "BalancePlatform");
    }

}

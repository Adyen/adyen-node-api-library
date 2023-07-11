/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { CreateMerchantRequest } from "../../typings/management/models";
import { CreateMerchantResponse } from "../../typings/management/models";
import { ListMerchantResponse } from "../../typings/management/models";
import { Merchant } from "../../typings/management/models";
import { RequestActivationResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class AccountMerchantLevelApi extends Service {

    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl("https://management-test.adyen.com/v1");
    }

    /**
    * @summary Get a list of merchant accounts
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ListMerchantResponse }
    */
    public async listMerchantAccounts(requestOptions?: IRequest.Options): Promise<ListMerchantResponse> {
        const endpoint = `${this.baseUrl}/merchants`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ListMerchantResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantResponse");
    }

    /**
    * @summary Get a merchant account
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Merchant }
    */
    public async getMerchantAccount(merchantId: string, requestOptions?: IRequest.Options): Promise<Merchant> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, Merchant>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Merchant");
    }

    /**
    * @summary Create a merchant account
    * @param createMerchantRequest {@link CreateMerchantRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CreateMerchantResponse }
    */
    public async createMerchantAccount(createMerchantRequest: CreateMerchantRequest, requestOptions?: IRequest.Options): Promise<CreateMerchantResponse> {
        const endpoint = `${this.baseUrl}/merchants`;
        const resource = new Resource(this, endpoint);
        const request: CreateMerchantRequest = ObjectSerializer.serialize(createMerchantRequest, "CreateMerchantRequest");
        const response = await getJsonResponse<CreateMerchantRequest, CreateMerchantResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateMerchantResponse");
    }

    /**
    * @summary Request to activate a merchant account
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link RequestActivationResponse }
    */
    public async requestToActivateMerchantAccount(merchantId: string, requestOptions?: IRequest.Options): Promise<RequestActivationResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/activate`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, RequestActivationResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "RequestActivationResponse");
    }
}

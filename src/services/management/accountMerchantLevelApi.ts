/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
/* tslint:disable:no-unused-locals */
import { CreateMerchantRequest } from '../../typings/management/models';
import { CreateMerchantResponse } from '../../typings/management/models';
import { ListMerchantResponse } from '../../typings/management/models';
import { Merchant } from '../../typings/management/models';
import { RequestActivationResponse } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class AccountMerchantLevelApi extends Service {
    /**
     * @summary Get a list of merchant accounts
     * @param pageNumber The number of the page to fetch.
     * @param pageSize The number of items to have on a page, maximum 100. The default is 10 items on a page.
     */
    public async listMerchantAccounts(requestOptions?: IRequest.Options): Promise<ListMerchantResponse> {
        const localVarPath = "/merchants";
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ListMerchantResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantResponse");
    }
    /**
     * @summary Get a merchant account
     * @param merchantId The unique identifier of the merchant account.
     */
    public async getMerchantAccount(merchantId: string, requestOptions?: IRequest.Options): Promise<Merchant> {
        const localVarPath = "/merchants/{merchantId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, Merchant>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Merchant");
    }
    /**
     * @summary Create a merchant account
     * @param createMerchantRequest 
     */
    public async createMerchantAccount(createMerchantRequest: CreateMerchantRequest, requestOptions?: IRequest.Options): Promise<CreateMerchantResponse> {
        const localVarPath = "/merchants";
        const resource = new ManagementResource(this, localVarPath);
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
     * @param merchantId The unique identifier of the merchant account.
     */
    public async requestToActivateMerchantAccount(merchantId: string, requestOptions?: IRequest.Options): Promise<RequestActivationResponse> {
        const localVarPath = "/merchants/{merchantId}/activate"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, RequestActivationResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "RequestActivationResponse");
    }
}

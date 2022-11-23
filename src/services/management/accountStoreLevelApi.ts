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
import { ListStoresResponse } from '../../typings/management/models';
import { Store } from '../../typings/management/models';
import { StoreCreationRequest } from '../../typings/management/models';
import { StoreCreationWithMerchantCodeRequest } from '../../typings/management/models';
import { UpdateStoreRequest } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class AccountStoreLevelApi extends Service {
    /**
     * @summary Get a list of stores
     * @param merchantId The unique identifier of the merchant account.
     * @param pageNumber The number of the page to fetch.
     * @param pageSize The number of items to have on a page, maximum 100. The default is 10 items on a page.
     * @param reference The reference of the store.
     */
    public async getMerchantsMerchantIdStores(merchantId: string, requestOptions?: IRequest.Options): Promise<ListStoresResponse> {
        const localVarPath = "/merchants/{merchantId}/stores"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ListStoresResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListStoresResponse");
    }
    /**
     * @summary Get a store
     * @param merchantId The unique identifier of the merchant account.
     * @param storeId The unique identifier of the store.
     */
    public async getMerchantsMerchantIdStoresStoreId(merchantId: string, storeId: string, requestOptions?: IRequest.Options): Promise<Store> {
        const localVarPath = "/merchants/{merchantId}/stores/{storeId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'storeId' + '}', encodeURIComponent(String(storeId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, Store>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Store");
    }
    /**
     * @summary Get a list of stores
     * @param pageNumber The number of the page to fetch.
     * @param pageSize The number of items to have on a page, maximum 100. The default is 10 items on a page.
     * @param reference The reference of the store.
     * @param merchantId The unique identifier of the merchant account.
     */
    public async getStores(requestOptions?: IRequest.Options): Promise<ListStoresResponse> {
        const localVarPath = "/stores";
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ListStoresResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListStoresResponse");
    }
    /**
     * @summary Get a store
     * @param storeId The unique identifier of the store.
     */
    public async getStoresStoreId(storeId: string, requestOptions?: IRequest.Options): Promise<Store> {
        const localVarPath = "/stores/{storeId}"
            .replace('{' + 'storeId' + '}', encodeURIComponent(String(storeId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, Store>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Store");
    }
    /**
     * @summary Update a store
     * @param merchantId The unique identifier of the merchant account.
     * @param storeId The unique identifier of the store.
     * @param updateStoreRequest 
     */
    public async patchMerchantsMerchantIdStoresStoreId(merchantId: string, storeId: string, updateStoreRequest?: UpdateStoreRequest, requestOptions?: IRequest.Options): Promise<Store> {
        const localVarPath = "/merchants/{merchantId}/stores/{storeId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'storeId' + '}', encodeURIComponent(String(storeId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(updateStoreRequest, "UpdateStoreRequest");
        const response = await getJsonResponse<UpdateStoreRequest, Store>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Store");
    }
    /**
     * @summary Update a store
     * @param storeId The unique identifier of the store.
     * @param updateStoreRequest 
     */
    public async patchStoresStoreId(storeId: string, updateStoreRequest?: UpdateStoreRequest, requestOptions?: IRequest.Options): Promise<Store> {
        const localVarPath = "/stores/{storeId}"
            .replace('{' + 'storeId' + '}', encodeURIComponent(String(storeId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(updateStoreRequest, "UpdateStoreRequest");
        const response = await getJsonResponse<UpdateStoreRequest, Store>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Store");
    }
    /**
     * @summary Create a store
     * @param merchantId The unique identifier of the merchant account.
     * @param storeCreationRequest 
     */
    public async postMerchantsMerchantIdStores(merchantId: string, storeCreationRequest?: StoreCreationRequest, requestOptions?: IRequest.Options): Promise<Store> {
        const localVarPath = "/merchants/{merchantId}/stores"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(storeCreationRequest, "StoreCreationRequest");
        const response = await getJsonResponse<StoreCreationRequest, Store>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Store");
    }
    /**
     * @summary Create a store
     * @param storeCreationWithMerchantCodeRequest 
     */
    public async postStores(storeCreationWithMerchantCodeRequest?: StoreCreationWithMerchantCodeRequest, requestOptions?: IRequest.Options): Promise<Store> {
        const localVarPath = "/stores";
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(storeCreationWithMerchantCodeRequest, "StoreCreationWithMerchantCodeRequest");
        const response = await getJsonResponse<StoreCreationWithMerchantCodeRequest, Store>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Store");
    }
}

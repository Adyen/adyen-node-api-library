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
import { PaginatedGetCardOrderItemResponse } from "../../typings/balancePlatform/models";
import { PaginatedGetCardOrderResponse } from "../../typings/balancePlatform/models";

/**
 * API handler for CardOrdersApi
 */
export class CardOrdersApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get card order items
    * @param id {@link string } The unique identifier of the card order.
    * @param requestOptions {@link IRequest.Options }
    * @param offset {@link number } Specifies the position of an element in a list of card orders. The response includes a list of card order items that starts at the specified offset.  **Default:** 0, which means that the response contains all the elements in the list of card order items.
    * @param limit {@link number } The number of card order items returned per page. **Default:** 10.
    * @return {@link PaginatedGetCardOrderItemResponse }
    */
    public async getCardOrderItems(id: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<PaginatedGetCardOrderItemResponse> {
        const endpoint = `${this.baseUrl}/cardorders/{id}/items`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        
        const hasDefinedQueryParams = offset ?? limit;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(offset) requestOptions.params["offset"] = offset;
            if(limit) requestOptions.params["limit"] = limit;
        }
        const response = await getJsonResponse<string, PaginatedGetCardOrderItemResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "PaginatedGetCardOrderItemResponse");
    }

    /**
    * @summary Get a list of card orders
    * @param requestOptions {@link IRequest.Options }
    * @param id {@link string } The unique identifier of the card order. 
    * @param cardManufacturingProfileId {@link string } The unique identifier of the card manufacturer profile.
    * @param status {@link string } The status of the card order.
    * @param txVariantCode {@link string } The unique code of the card manufacturer profile.  Possible values: **mcmaestro**, **mc**, **visa**, **mcdebit**. 
    * @param createdSince {@link Date } Only include card orders that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param createdUntil {@link Date } Only include card orders that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param lockedSince {@link Date } Only include card orders that have been locked on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param lockedUntil {@link Date } Only include card orders that have been locked on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param serviceCenter {@link string } The service center at which the card is issued. The value is case-sensitive. 
    * @param offset {@link number } Specifies the position of an element in a list of card orders. The response includes a list of card orders that starts at the specified offset.  **Default:** 0, which means that the response contains all the elements in the list of card orders.
    * @param limit {@link number } The number of card orders returned per page. **Default:** 10.
    * @return {@link PaginatedGetCardOrderResponse }
    */
    public async listCardOrders(id?: string, cardManufacturingProfileId?: string, status?: string, txVariantCode?: string, createdSince?: Date, createdUntil?: Date, lockedSince?: Date, lockedUntil?: Date, serviceCenter?: string, offset?: number, limit?: number, requestOptions?: IRequest.Options): Promise<PaginatedGetCardOrderResponse> {
        const endpoint = `${this.baseUrl}/cardorders`;
        const resource = new Resource(this, endpoint);
        
        const hasDefinedQueryParams = id ?? cardManufacturingProfileId ?? status ?? txVariantCode ?? createdSince ?? createdUntil ?? lockedSince ?? lockedUntil ?? serviceCenter ?? offset ?? limit;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(id) requestOptions.params["id"] = id;
            if(cardManufacturingProfileId) requestOptions.params["cardManufacturingProfileId"] = cardManufacturingProfileId;
            if(status) requestOptions.params["status"] = status;
            if(txVariantCode) requestOptions.params["txVariantCode"] = txVariantCode;
            if(createdSince) requestOptions.params["createdSince"] = createdSince.toISOString();
            if(createdUntil) requestOptions.params["createdUntil"] = createdUntil.toISOString();
            if(lockedSince) requestOptions.params["lockedSince"] = lockedSince.toISOString();
            if(lockedUntil) requestOptions.params["lockedUntil"] = lockedUntil.toISOString();
            if(serviceCenter) requestOptions.params["serviceCenter"] = serviceCenter;
            if(offset) requestOptions.params["offset"] = offset;
            if(limit) requestOptions.params["limit"] = limit;
        }
        const response = await getJsonResponse<string, PaginatedGetCardOrderResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "PaginatedGetCardOrderResponse");
    }

}

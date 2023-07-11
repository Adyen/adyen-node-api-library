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
import { BillingEntitiesResponse } from "../../typings/management/models";
import { ShippingLocation } from "../../typings/management/models";
import { ShippingLocationsResponse } from "../../typings/management/models";
import { TerminalModelsResponse } from "../../typings/management/models";
import { TerminalOrder } from "../../typings/management/models";
import { TerminalOrderRequest } from "../../typings/management/models";
import { TerminalOrdersResponse } from "../../typings/management/models";
import { TerminalProductsResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class TerminalOrdersCompanyLevelApi extends Service {

    readonly API_BASEPATH: string = "https://management-test.adyen.com/v1";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a list of billing entities
    * @param companyId {@link string } The unique identifier of the company account.
    * @param name {@link string } The name of the billing entity.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link BillingEntitiesResponse }
    */
    public async listBillingEntities(companyId: string, requestOptions?: IRequest.Options): Promise<BillingEntitiesResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/billingEntities`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, BillingEntitiesResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BillingEntitiesResponse");
    }

    /**
    * @summary Get a list of shipping locations
    * @param companyId {@link string } The unique identifier of the company account.
    * @param name {@link string } The name of the shipping location.
    * @param offset {@link number } The number of locations to skip.
    * @param limit {@link number } The number of locations to return.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ShippingLocationsResponse }
    */
    public async listShippingLocations(companyId: string, requestOptions?: IRequest.Options): Promise<ShippingLocationsResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/shippingLocations`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ShippingLocationsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ShippingLocationsResponse");
    }

    /**
    * @summary Get a list of terminal models
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalModelsResponse }
    */
    public async listTerminalModels(companyId: string, requestOptions?: IRequest.Options): Promise<TerminalModelsResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalModels`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TerminalModelsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalModelsResponse");
    }

    /**
    * @summary Get a list of orders
    * @param companyId {@link string } The unique identifier of the company account.
    * @param customerOrderReference {@link string } Your purchase order number.
    * @param status {@link string } The order status. Possible values (not case-sensitive): Placed, Confirmed, Cancelled, Shipped, Delivered.
    * @param offset {@link number } The number of orders to skip.
    * @param limit {@link number } The number of orders to return.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalOrdersResponse }
    */
    public async listOrders(companyId: string, requestOptions?: IRequest.Options): Promise<TerminalOrdersResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalOrders`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TerminalOrdersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrdersResponse");
    }

    /**
    * @summary Get an order
    * @param companyId {@link string } The unique identifier of the company account.
    * @param orderId {@link string } The unique identifier of the order.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalOrder }
    */
    public async getOrder(companyId: string, orderId: string, requestOptions?: IRequest.Options): Promise<TerminalOrder> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalOrders/{orderId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "orderId" + "}", encodeURIComponent(String(orderId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TerminalOrder>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }

    /**
    * @summary Get a list of terminal products
    * @param companyId {@link string } The unique identifier of the company account.
    * @param country {@link string } The country to return products for, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US**
    * @param terminalModelId {@link string } The terminal model to return products for. Use the ID returned in the [GET &#x60;/terminalModels&#x60;](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels) response. For example, **Verifone.M400**
    * @param offset {@link number } The number of products to skip.
    * @param limit {@link number } The number of products to return.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalProductsResponse }
    */
    public async listTerminalProducts(companyId: string, requestOptions?: IRequest.Options): Promise<TerminalProductsResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalProducts`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TerminalProductsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalProductsResponse");
    }

    /**
    * @summary Update an order
    * @param companyId {@link string } The unique identifier of the company account.
    * @param orderId {@link string } The unique identifier of the order.
    * @param terminalOrderRequest {@link TerminalOrderRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalOrder }
    */
    public async updateOrder(companyId: string, orderId: string, terminalOrderRequest: TerminalOrderRequest, requestOptions?: IRequest.Options): Promise<TerminalOrder> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalOrders/{orderId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "orderId" + "}", encodeURIComponent(String(orderId)));
        const resource = new Resource(this, endpoint);
        const request: TerminalOrderRequest = ObjectSerializer.serialize(terminalOrderRequest, "TerminalOrderRequest");
        const response = await getJsonResponse<TerminalOrderRequest, TerminalOrder>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }

    /**
    * @summary Create a shipping location
    * @param companyId {@link string } The unique identifier of the company account.
    * @param shippingLocation {@link ShippingLocation } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ShippingLocation }
    */
    public async createShippingLocation(companyId: string, shippingLocation: ShippingLocation, requestOptions?: IRequest.Options): Promise<ShippingLocation> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/shippingLocations`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const request: ShippingLocation = ObjectSerializer.serialize(shippingLocation, "ShippingLocation");
        const response = await getJsonResponse<ShippingLocation, ShippingLocation>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ShippingLocation");
    }

    /**
    * @summary Create an order
    * @param companyId {@link string } The unique identifier of the company account.
    * @param terminalOrderRequest {@link TerminalOrderRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalOrder }
    */
    public async createOrder(companyId: string, terminalOrderRequest: TerminalOrderRequest, requestOptions?: IRequest.Options): Promise<TerminalOrder> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalOrders`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const request: TerminalOrderRequest = ObjectSerializer.serialize(terminalOrderRequest, "TerminalOrderRequest");
        const response = await getJsonResponse<TerminalOrderRequest, TerminalOrder>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }

    /**
    * @summary Cancel an order
    * @param companyId {@link string } The unique identifier of the company account.
    * @param orderId {@link string } The unique identifier of the order.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalOrder }
    */
    public async cancelOrder(companyId: string, orderId: string, requestOptions?: IRequest.Options): Promise<TerminalOrder> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalOrders/{orderId}/cancel`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "orderId" + "}", encodeURIComponent(String(orderId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TerminalOrder>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }
}

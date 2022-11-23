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
import { BillingEntitiesResponse } from '../../typings/management/models';
import { ShippingLocation } from '../../typings/management/models';
import { ShippingLocationsResponse } from '../../typings/management/models';
import { TerminalModelsResponse } from '../../typings/management/models';
import { TerminalOrder } from '../../typings/management/models';
import { TerminalOrderRequest } from '../../typings/management/models';
import { TerminalOrdersResponse } from '../../typings/management/models';
import { TerminalProductsResponse } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class TerminalOrdersMerchantLevelApi extends Service {
    /**
     * @summary Get a list of billing entities
     * @param merchantId The unique identifier of the merchant account.
     * @param name The name of the billing entity.
     */
    public async getMerchantsMerchantIdBillingEntities(merchantId: string, requestOptions?: IRequest.Options): Promise<BillingEntitiesResponse> {
        const localVarPath = "/merchants/{merchantId}/billingEntities"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, BillingEntitiesResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BillingEntitiesResponse");
    }
    /**
     * @summary Get a list of shipping locations
     * @param merchantId The unique identifier of the merchant account.
     * @param name The name of the shipping location.
     * @param offset The number of locations to skip.
     * @param limit The number of locations to return.
     */
    public async getMerchantsMerchantIdShippingLocations(merchantId: string, requestOptions?: IRequest.Options): Promise<ShippingLocationsResponse> {
        const localVarPath = "/merchants/{merchantId}/shippingLocations"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ShippingLocationsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ShippingLocationsResponse");
    }
    /**
     * @summary Get a list of terminal models
     * @param merchantId The unique identifier of the merchant account.
     */
    public async getMerchantsMerchantIdTerminalModels(merchantId: string, requestOptions?: IRequest.Options): Promise<TerminalModelsResponse> {
        const localVarPath = "/merchants/{merchantId}/terminalModels"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, TerminalModelsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalModelsResponse");
    }
    /**
     * @summary Get a list of orders
     * @param merchantId 
     * @param customerOrderReference Your purchase order number.
     * @param status The order status. Possible values (not case-sensitive): Placed, Confirmed, Cancelled, Shipped, Delivered.
     * @param offset The number of orders to skip.
     * @param limit The number of orders to return.
     */
    public async getMerchantsMerchantIdTerminalOrders(merchantId: string, requestOptions?: IRequest.Options): Promise<TerminalOrdersResponse> {
        const localVarPath = "/merchants/{merchantId}/terminalOrders"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, TerminalOrdersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrdersResponse");
    }
    /**
     * @summary Get an order
     * @param merchantId The unique identifier of the merchant account.
     * @param orderId The unique identifier of the order.
     */
    public async getMerchantsMerchantIdTerminalOrdersOrderId(merchantId: string, orderId: string, requestOptions?: IRequest.Options): Promise<TerminalOrder> {
        const localVarPath = "/merchants/{merchantId}/terminalOrders/{orderId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, TerminalOrder>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }
    /**
     * @summary Get a list of terminal products
     * @param merchantId The unique identifier of the merchant account.
     * @param country The country to return products for, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **US**
     * @param terminalModelId The terminal model to return products for. Use the ID returned in the [GET &#x60;/terminalModels&#x60;](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/terminalModels) response. For example, **Verifone.M400**
     * @param offset The number of products to skip.
     * @param limit The number of products to return.
     */
    public async getMerchantsMerchantIdTerminalProducts(merchantId: string, requestOptions?: IRequest.Options): Promise<TerminalProductsResponse> {
        const localVarPath = "/merchants/{merchantId}/terminalProducts"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, TerminalProductsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalProductsResponse");
    }
    /**
     * @summary Update an order
     * @param merchantId The unique identifier of the merchant account.
     * @param orderId The unique identifier of the order.
     * @param terminalOrderRequest 
     */
    public async patchMerchantsMerchantIdTerminalOrdersOrderId(merchantId: string, orderId: string, terminalOrderRequest?: TerminalOrderRequest, requestOptions?: IRequest.Options): Promise<TerminalOrder> {
        const localVarPath = "/merchants/{merchantId}/terminalOrders/{orderId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(terminalOrderRequest, "TerminalOrderRequest");
        const response = await getJsonResponse<TerminalOrderRequest, TerminalOrder>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }
    /**
     * @summary Create a shipping location
     * @param merchantId The unique identifier of the merchant account.
     * @param shippingLocation 
     */
    public async postMerchantsMerchantIdShippingLocations(merchantId: string, shippingLocation?: ShippingLocation, requestOptions?: IRequest.Options): Promise<ShippingLocation> {
        const localVarPath = "/merchants/{merchantId}/shippingLocations"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(shippingLocation, "ShippingLocation");
        const response = await getJsonResponse<ShippingLocation, ShippingLocation>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ShippingLocation");
    }
    /**
     * @summary Create an order
     * @param merchantId The unique identifier of the merchant account.
     * @param terminalOrderRequest 
     */
    public async postMerchantsMerchantIdTerminalOrders(merchantId: string, terminalOrderRequest?: TerminalOrderRequest, requestOptions?: IRequest.Options): Promise<TerminalOrder> {
        const localVarPath = "/merchants/{merchantId}/terminalOrders"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(terminalOrderRequest, "TerminalOrderRequest");
        const response = await getJsonResponse<TerminalOrderRequest, TerminalOrder>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }
    /**
     * @summary Cancel an order
     * @param merchantId The unique identifier of the merchant account.
     * @param orderId The unique identifier of the order.
     */
    public async postMerchantsMerchantIdTerminalOrdersOrderIdCancel(merchantId: string, orderId: string, requestOptions?: IRequest.Options): Promise<TerminalOrder> {
        const localVarPath = "/merchants/{merchantId}/terminalOrders/{orderId}/cancel"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, TerminalOrder>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }
}

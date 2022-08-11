import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { BillingEntitiesResponse, ObjectSerializer, ShippingLocation, ShippingLocationsResponse, TerminalModelsResponse, TerminalOrder, TerminalOrderRequest, TerminalOrdersResponse, TerminalProductsResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";

class MerchantTerminalOrders extends Service {
    /**
     * Get a list of billing entities
     */
    public async listBillingEntities(merchantId: string, requestOptions?: IRequest.Options): Promise<BillingEntitiesResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/billingEntities`);
        const response = await getJsonResponse<string, BillingEntitiesResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BillingEntitiesResponse");
    }

    /**
     * Get a list of shipping locations
     */
    public async listShippingLocations(merchantId: string, requestOptions?: IRequest.Options): Promise<ShippingLocationsResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/shippingLocations`);
        const response = await getJsonResponse<string, ShippingLocationsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ShippingLocationsResponse");
    }

    /**
     * Create a shipping location
     */
    public async createShippingLocation(merchantId: string, request: ShippingLocation): Promise<ShippingLocation> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/shippingLocations`);
        const response = await getJsonResponse<ShippingLocation, ShippingLocation>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ShippingLocation");
    }

    /**
     * Get a list of terminal models
     */
    public async listTerminalModels(merchantId: string): Promise<TerminalModelsResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalModels`);
        const response = await getJsonResponse<string, TerminalModelsResponse>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalModelsResponse");
    }

    /**
     * Get a list of orders
     */
    public async listTerminalOrders(merchantId: string, requestOptions?: IRequest.Options): Promise<TerminalOrdersResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalOrders`);
        const response = await getJsonResponse<string, TerminalOrdersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrdersResponse");
    }

    /**
     * Create an order
     */
    public async create(merchantId: string, request: TerminalOrderRequest): Promise<TerminalOrder> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalOrders`);
        const response = await getJsonResponse<TerminalOrderRequest, TerminalOrder>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }

    /**
     * Get an order
     */
    public async retrieve(merchantId: string, orderId: string): Promise<TerminalOrder> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalOrders/${orderId}`);
        const response = await getJsonResponse<string, TerminalOrder>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }

    /**
     * Update an order
     */
    public async update(merchantId: string, orderId: string, request: TerminalOrderRequest): Promise<TerminalOrder> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalOrders/${orderId}`);
        const response = await getJsonResponse<TerminalOrderRequest, TerminalOrder>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }

    /**
     * Cancel an order
     */
    public async cancel(merchantId: string, orderId: string): Promise<TerminalOrder> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalOrders/${orderId}/cancel`);
        const response = await getJsonResponse<string, TerminalOrder>(
            resource,
            "",
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TerminalOrder");
    }

    /**
     * Get a list of terminal products
     */
    public async listTerminalProducts(merchantId: string, requestOptions?: IRequest.Options): Promise<TerminalProductsResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalProducts`);
        const response = await getJsonResponse<string, TerminalProductsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalProductsResponse");
    }
}

export default MerchantTerminalOrders;

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { CreateMerchantWebhookRequest, GenerateHmacKeyResponse, ListWebhooksResponse, ObjectSerializer, TestWebhookRequest, TestWebhookResponse, UpdateMerchantWebhookRequest, Webhook } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";

class MerchantWebhooks extends Service {
    /**
     * List all webhooks
     */
    public async list(merchantId: string, requestOptions?: IRequest.Options): Promise<ListWebhooksResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks`);
        const response = await getJsonResponse<string, ListWebhooksResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListWebhooksResponse");
    }

    /**
     * Set up a webhook
     */
    public async create(merchantId: string, request: CreateMerchantWebhookRequest): Promise<Webhook> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks`);
        const response = await getJsonResponse<CreateMerchantWebhookRequest, Webhook>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    /**
     * Remove a webhook
     */
    public async delete(merchantId: string, webhookId: string): Promise<void> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}`);
        await getJsonResponse<string, void>(
            resource,
            "",
            { method: "DELETE" }
        );
    }

    /**
     * Get a webhook
     */
    public async retrieve(merchantId: string, webhookId: string): Promise<Webhook> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}`);
        const response = await getJsonResponse<string, Webhook>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    /**
     * Update a webhook
     */
    public async update(merchantId: string, webhookId: string, request: UpdateMerchantWebhookRequest): Promise<Webhook> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}`);
        const response = await getJsonResponse<UpdateMerchantWebhookRequest, Webhook>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    /**
     * Generate an HMAC key
     */
    public async generateHmac(merchantId: string, webhookId: string): Promise<GenerateHmacKeyResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}/generateHmac`);
        const response = await getJsonResponse<string, GenerateHmacKeyResponse>(
            resource,
            "",
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateHmacKeyResponse");
    }

    /**
     * Test a webhook
     */
    public async test(merchantId: string, webhookId: string, request: TestWebhookRequest): Promise<TestWebhookResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}/test`);
        const response = await getJsonResponse<TestWebhookRequest, TestWebhookResponse>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TestWebhookResponse");
    }
}

export default MerchantWebhooks;

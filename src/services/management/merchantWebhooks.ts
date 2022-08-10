import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { CreateMerchantWebhookRequest, GenerateHmacKeyResponse, ListWebhooksResponse, ObjectSerializer, TestWebhookRequest, TestWebhookResponse, UpdateMerchantWebhookRequest, Webhook } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";

class MerchantWebhooks extends Service {
    public async listWebhooks(merchantId: string, requestOptions?: IRequest.Options): Promise<ListWebhooksResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks`);
        const response = await getJsonResponse<string, ListWebhooksResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListWebhooksResponse");
    }

    public async create(merchantId: string, request: CreateMerchantWebhookRequest): Promise<Webhook> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks`);
        const response = await getJsonResponse<CreateMerchantWebhookRequest, Webhook>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    public async delete(merchantId: string, webhookId: string): Promise<void> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}`);
        const response = await getJsonResponse<string, void>(
            resource,
            "",
            { method: "DELETE" }
        );
        return ObjectSerializer.deserialize(response, "void");
    }

    public async retrieve(merchantId: string, webhookId: string): Promise<Webhook> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}`);
        const response = await getJsonResponse<string, Webhook>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    public async update(merchantId: string, webhookId: string, request: UpdateMerchantWebhookRequest): Promise<Webhook> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}`);
        const response = await getJsonResponse<UpdateMerchantWebhookRequest, Webhook>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    public async generateHmac(merchantId: string, webhookId: string): Promise<GenerateHmacKeyResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/webhooks/${webhookId}/generateHmac`);
        const response = await getJsonResponse<string, GenerateHmacKeyResponse>(
            resource,
            "",
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateHmacKeyResponse");
    }

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

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
import { CreateMerchantWebhookRequest } from "../../typings/management/models";
import { GenerateHmacKeyResponse } from "../../typings/management/models";
import { ListWebhooksResponse } from "../../typings/management/models";
import { TestWebhookRequest } from "../../typings/management/models";
import { TestWebhookResponse } from "../../typings/management/models";
import { UpdateMerchantWebhookRequest } from "../../typings/management/models";
import { Webhook } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class WebhooksMerchantLevelApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v1";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Remove a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } Unique identifier of the webhook configuration.
    * @param requestOptions {@link IRequest.Options}
    */
    public async removeWebhook(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/webhooks/{webhookId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary List all webhooks
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ListWebhooksResponse }
    */
    public async listAllWebhooks(merchantId: string, requestOptions?: IRequest.Options): Promise<ListWebhooksResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/webhooks`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ListWebhooksResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListWebhooksResponse");
    }

    /**
    * @summary Get a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } Unique identifier of the webhook configuration.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Webhook }
    */
    public async getWebhook(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<Webhook> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/webhooks/{webhookId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, Webhook>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    /**
    * @summary Update a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } Unique identifier of the webhook configuration.
    * @param updateMerchantWebhookRequest {@link UpdateMerchantWebhookRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Webhook }
    */
    public async updateWebhook(merchantId: string, webhookId: string, updateMerchantWebhookRequest: UpdateMerchantWebhookRequest, requestOptions?: IRequest.Options): Promise<Webhook> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/webhooks/{webhookId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        const request: UpdateMerchantWebhookRequest = ObjectSerializer.serialize(updateMerchantWebhookRequest, "UpdateMerchantWebhookRequest");
        const response = await getJsonResponse<UpdateMerchantWebhookRequest, Webhook>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    /**
    * @summary Set up a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param createMerchantWebhookRequest {@link CreateMerchantWebhookRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Webhook }
    */
    public async setUpWebhook(merchantId: string, createMerchantWebhookRequest: CreateMerchantWebhookRequest, requestOptions?: IRequest.Options): Promise<Webhook> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/webhooks`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        const request: CreateMerchantWebhookRequest = ObjectSerializer.serialize(createMerchantWebhookRequest, "CreateMerchantWebhookRequest");
        const response = await getJsonResponse<CreateMerchantWebhookRequest, Webhook>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }

    /**
    * @summary Generate an HMAC key
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link GenerateHmacKeyResponse }
    */
    public async generateHmacKey(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<GenerateHmacKeyResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/webhooks/{webhookId}/generateHmac`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, GenerateHmacKeyResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateHmacKeyResponse");
    }

    /**
    * @summary Test a webhook
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param webhookId {@link string } Unique identifier of the webhook configuration.
    * @param testWebhookRequest {@link TestWebhookRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TestWebhookResponse }
    */
    public async testWebhook(merchantId: string, webhookId: string, testWebhookRequest: TestWebhookRequest, requestOptions?: IRequest.Options): Promise<TestWebhookResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/webhooks/{webhookId}/test`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        const request: TestWebhookRequest = ObjectSerializer.serialize(testWebhookRequest, "TestWebhookRequest");
        const response = await getJsonResponse<TestWebhookRequest, TestWebhookResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TestWebhookResponse");
    }
}

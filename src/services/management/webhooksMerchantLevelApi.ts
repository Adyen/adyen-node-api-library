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
import { CreateMerchantWebhookRequest } from '../../typings/management/models';
import { GenerateHmacKeyResponse } from '../../typings/management/models';
import { ListWebhooksResponse } from '../../typings/management/models';
import { TestWebhookRequest } from '../../typings/management/models';
import { TestWebhookResponse } from '../../typings/management/models';
import { UpdateMerchantWebhookRequest } from '../../typings/management/models';
import { Webhook } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class WebhooksMerchantLevelApi extends Service {
    /**
     * @summary Remove a webhook
     * @param merchantId The unique identifier of the merchant account.
     * @param webhookId Unique identifier of the webhook configuration.
     */
    public async deleteMerchantsMerchantIdWebhooksWebhookId(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<void> {
        const localVarPath = "/merchants/{merchantId}/webhooks/{webhookId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const resource = new ManagementResource(this, localVarPath);
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }
    /**
     * @summary List all webhooks
     * @param merchantId The unique identifier of the merchant account.
     * @param pageNumber The number of the page to fetch.
     * @param pageSize The number of items to have on a page, maximum 100. The default is 10 items on a page.
     */
    public async getMerchantsMerchantIdWebhooks(merchantId: string, requestOptions?: IRequest.Options): Promise<ListWebhooksResponse> {
        const localVarPath = "/merchants/{merchantId}/webhooks"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ListWebhooksResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListWebhooksResponse");
    }
    /**
     * @summary Get a webhook
     * @param merchantId The unique identifier of the merchant account.
     * @param webhookId Unique identifier of the webhook configuration.
     */
    public async getMerchantsMerchantIdWebhooksWebhookId(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<Webhook> {
        const localVarPath = "/merchants/{merchantId}/webhooks/{webhookId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, Webhook>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }
    /**
     * @summary Update a webhook
     * @param merchantId The unique identifier of the merchant account.
     * @param webhookId Unique identifier of the webhook configuration.
     * @param updateMerchantWebhookRequest 
     */
    public async patchMerchantsMerchantIdWebhooksWebhookId(merchantId: string, webhookId: string, updateMerchantWebhookRequest?: UpdateMerchantWebhookRequest, requestOptions?: IRequest.Options): Promise<Webhook> {
        const localVarPath = "/merchants/{merchantId}/webhooks/{webhookId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(updateMerchantWebhookRequest, "UpdateMerchantWebhookRequest");
        const response = await getJsonResponse<UpdateMerchantWebhookRequest, Webhook>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }
    /**
     * @summary Set up a webhook
     * @param merchantId The unique identifier of the merchant account.
     * @param createMerchantWebhookRequest 
     */
    public async postMerchantsMerchantIdWebhooks(merchantId: string, createMerchantWebhookRequest?: CreateMerchantWebhookRequest, requestOptions?: IRequest.Options): Promise<Webhook> {
        const localVarPath = "/merchants/{merchantId}/webhooks"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(createMerchantWebhookRequest, "CreateMerchantWebhookRequest");
        const response = await getJsonResponse<CreateMerchantWebhookRequest, Webhook>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }
    /**
     * @summary Generate an HMAC key
     * @param merchantId The unique identifier of the merchant account.
     * @param webhookId 
     */
    public async postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(merchantId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<GenerateHmacKeyResponse> {
        const localVarPath = "/merchants/{merchantId}/webhooks/{webhookId}/generateHmac"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, GenerateHmacKeyResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateHmacKeyResponse");
    }
    /**
     * @summary Test a webhook
     * @param merchantId The unique identifier of the merchant account.
     * @param webhookId Unique identifier of the webhook configuration.
     * @param testWebhookRequest 
     */
    public async postMerchantsMerchantIdWebhooksWebhookIdTest(merchantId: string, webhookId: string, testWebhookRequest?: TestWebhookRequest, requestOptions?: IRequest.Options): Promise<TestWebhookResponse> {
        const localVarPath = "/merchants/{merchantId}/webhooks/{webhookId}/test"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(testWebhookRequest, "TestWebhookRequest");
        const response = await getJsonResponse<TestWebhookRequest, TestWebhookResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TestWebhookResponse");
    }
}

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
import { CreateCompanyWebhookRequest } from '../../typings/management/models';
import { GenerateHmacKeyResponse } from '../../typings/management/models';
import { ListWebhooksResponse } from '../../typings/management/models';
import { TestCompanyWebhookRequest } from '../../typings/management/models';
import { TestWebhookResponse } from '../../typings/management/models';
import { UpdateCompanyWebhookRequest } from '../../typings/management/models';
import { Webhook } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class WebhooksCompanyLevelApi extends Service {
    /**
     * @summary Remove a webhook
     * @param companyId The unique identifier of the company account.
     * @param webhookId Unique identifier of the webhook configuration.
     */
    public async deleteCompaniesCompanyIdWebhooksWebhookId(companyId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<void> {
        const localVarPath = "/companies/{companyId}/webhooks/{webhookId}"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)))
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
     * @param companyId Unique identifier of the [company account](https://docs.adyen.com/account/account-structure#company-account).
     * @param pageNumber The number of the page to fetch.
     * @param pageSize The number of items to have on a page, maximum 100. The default is 10 items on a page.
     */
    public async getCompaniesCompanyIdWebhooks(companyId: string, requestOptions?: IRequest.Options): Promise<ListWebhooksResponse> {
        const localVarPath = "/companies/{companyId}/webhooks"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));
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
     * @param companyId Unique identifier of the [company account](https://docs.adyen.com/account/account-structure#company-account).
     * @param webhookId Unique identifier of the webhook configuration.
     */
    public async getCompaniesCompanyIdWebhooksWebhookId(companyId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<Webhook> {
        const localVarPath = "/companies/{companyId}/webhooks/{webhookId}"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)))
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
     * @param companyId The unique identifier of the company account.
     * @param webhookId Unique identifier of the webhook configuration.
     * @param updateCompanyWebhookRequest 
     */
    public async patchCompaniesCompanyIdWebhooksWebhookId(companyId: string, webhookId: string, updateCompanyWebhookRequest: UpdateCompanyWebhookRequest, requestOptions?: IRequest.Options): Promise<Webhook> {
        const localVarPath = "/companies/{companyId}/webhooks/{webhookId}"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)))
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: UpdateCompanyWebhookRequest = ObjectSerializer.serialize(updateCompanyWebhookRequest, "UpdateCompanyWebhookRequest");
        const response = await getJsonResponse<UpdateCompanyWebhookRequest, Webhook>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }
    /**
     * @summary Set up a webhook
     * @param companyId Unique identifier of the [company account](https://docs.adyen.com/account/account-structure#company-account).
     * @param createCompanyWebhookRequest 
     */
    public async postCompaniesCompanyIdWebhooks(companyId: string, createCompanyWebhookRequest: CreateCompanyWebhookRequest, requestOptions?: IRequest.Options): Promise<Webhook> {
        const localVarPath = "/companies/{companyId}/webhooks"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: CreateCompanyWebhookRequest = ObjectSerializer.serialize(createCompanyWebhookRequest, "CreateCompanyWebhookRequest");
        const response = await getJsonResponse<CreateCompanyWebhookRequest, Webhook>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Webhook");
    }
    /**
     * @summary Generate an HMAC key
     * @param companyId The unique identifier of the company account.
     * @param webhookId Unique identifier of the webhook configuration.
     */
    public async postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(companyId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<GenerateHmacKeyResponse> {
        const localVarPath = "/companies/{companyId}/webhooks/{webhookId}/generateHmac"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)))
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
     * @param companyId The unique identifier of the company account.
     * @param webhookId Unique identifier of the webhook configuration.
     * @param testCompanyWebhookRequest 
     */
    public async postCompaniesCompanyIdWebhooksWebhookIdTest(companyId: string, webhookId: string, testCompanyWebhookRequest: TestCompanyWebhookRequest, requestOptions?: IRequest.Options): Promise<TestWebhookResponse> {
        const localVarPath = "/companies/{companyId}/webhooks/{webhookId}/test"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)))
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: TestCompanyWebhookRequest = ObjectSerializer.serialize(testCompanyWebhookRequest, "TestCompanyWebhookRequest");
        const response = await getJsonResponse<TestCompanyWebhookRequest, TestWebhookResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TestWebhookResponse");
    }
}

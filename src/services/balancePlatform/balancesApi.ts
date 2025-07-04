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
import { BalanceWebhookSettingInfo } from "../../typings/balancePlatform/models";
import { BalanceWebhookSettingInfoUpdate } from "../../typings/balancePlatform/models";
import { WebhookSetting } from "../../typings/balancePlatform/models";
import { WebhookSettings } from "../../typings/balancePlatform/models";

/**
 * API handler for BalancesApi
 */
export class BalancesApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create a balance webhook setting
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param balanceWebhookSettingInfo {@link BalanceWebhookSettingInfo } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link WebhookSetting }
    */
    public async createWebhookSetting(balancePlatformId: string, webhookId: string, balanceWebhookSettingInfo: BalanceWebhookSettingInfo, requestOptions?: IRequest.Options): Promise<WebhookSetting> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        
        const request: BalanceWebhookSettingInfo = ObjectSerializer.serialize(balanceWebhookSettingInfo, "BalanceWebhookSettingInfo");
        const response = await getJsonResponse<BalanceWebhookSettingInfo, WebhookSetting>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "WebhookSetting");
    }

    /**
    * @summary Delete a balance webhook setting by id
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param settingId {@link string } The unique identifier of the balance webhook setting.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link void }
    */
    public async deleteWebhookSetting(balancePlatformId: string, webhookId: string, settingId: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)))
            .replace("{" + "settingId" + "}", encodeURIComponent(String(settingId)));
        const resource = new Resource(this, endpoint);
        
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary Get all balance webhook settings
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link WebhookSettings }
    */
    public async getAllWebhookSettings(balancePlatformId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<WebhookSettings> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        
        const response = await getJsonResponse<string, WebhookSettings>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "WebhookSettings");
    }

    /**
    * @summary Get a balance webhook setting by id
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param settingId {@link string } The unique identifier of the balance webhook setting.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link WebhookSetting }
    */
    public async getWebhookSetting(balancePlatformId: string, webhookId: string, settingId: string, requestOptions?: IRequest.Options): Promise<WebhookSetting> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)))
            .replace("{" + "settingId" + "}", encodeURIComponent(String(settingId)));
        const resource = new Resource(this, endpoint);
        
        const response = await getJsonResponse<string, WebhookSetting>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "WebhookSetting");
    }

    /**
    * @summary Update a balance webhook setting by id
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param settingId {@link string } The unique identifier of the balance webhook setting.
    * @param balanceWebhookSettingInfoUpdate {@link BalanceWebhookSettingInfoUpdate } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link WebhookSetting }
    */
    public async updateWebhookSetting(balancePlatformId: string, webhookId: string, settingId: string, balanceWebhookSettingInfoUpdate: BalanceWebhookSettingInfoUpdate, requestOptions?: IRequest.Options): Promise<WebhookSetting> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)))
            .replace("{" + "settingId" + "}", encodeURIComponent(String(settingId)));
        const resource = new Resource(this, endpoint);
        
        const request: BalanceWebhookSettingInfoUpdate = ObjectSerializer.serialize(balanceWebhookSettingInfoUpdate, "BalanceWebhookSettingInfoUpdate");
        const response = await getJsonResponse<BalanceWebhookSettingInfoUpdate, WebhookSetting>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );

        return ObjectSerializer.deserialize(response, "WebhookSetting");
    }

}

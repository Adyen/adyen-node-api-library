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
import { 
    BalanceWebhookSettingsRequest,
    DefaultErrorResponseEntity,
    PatchableBalanceWebhookSettingsRequest,
    WebhookSettingResponse,
    ObjectSerializer
} from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class BalancesApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get webhook settings
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Array&lt;WebhookSettingResponse&gt; }
    */
    public async _null(balancePlatformId: string, webhookId: string, requestOptions?: IRequest.Options): Promise<Array<WebhookSettingResponse>> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, Array<WebhookSettingResponse>>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Array<WebhookSettingResponse>");
    }

    /**
    * @summary Create a balance webhook setting
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param balanceWebhookSettingsRequest {@link BalanceWebhookSettingsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link WebhookSettingResponse }
    */
    public async _null_1(balancePlatformId: string, webhookId: string, balanceWebhookSettingsRequest: BalanceWebhookSettingsRequest, requestOptions?: IRequest.Options): Promise<WebhookSettingResponse> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)));
        const resource = new Resource(this, endpoint);
        const request: BalanceWebhookSettingsRequest = ObjectSerializer.serialize(balanceWebhookSettingsRequest, "BalanceWebhookSettingsRequest");
        const response = await getJsonResponse<BalanceWebhookSettingsRequest, WebhookSettingResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "WebhookSettingResponse");
    }

    /**
    * @summary Get a webhook setting
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param settingId {@link string } The unique identifier of the balance webhook setting.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link WebhookSettingResponse }
    */
    public async _null_2(balancePlatformId: string, webhookId: string, settingId: string, requestOptions?: IRequest.Options): Promise<WebhookSettingResponse> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)))
            .replace("{" + "settingId" + "}", encodeURIComponent(String(settingId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, WebhookSettingResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "WebhookSettingResponse");
    }

    /**
    * @summary Delete a webhook setting
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param settingId {@link string } The unique identifier of the balance webhook setting.
    * @param requestOptions {@link IRequest.Options }
    */
    public async _null_3(balancePlatformId: string, webhookId: string, settingId: string, requestOptions?: IRequest.Options): Promise<void> {
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
    * @summary Update a webhook setting
    * @param balancePlatformId {@link string } The unique identifier of the balance platform.
    * @param webhookId {@link string } The unique identifier of the balance webhook.
    * @param settingId {@link string } The unique identifier of the balance webhook setting.
    * @param patchableBalanceWebhookSettingsRequest {@link PatchableBalanceWebhookSettingsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link WebhookSettingResponse }
    */
    public async _null_4(balancePlatformId: string, webhookId: string, settingId: string, patchableBalanceWebhookSettingsRequest: PatchableBalanceWebhookSettingsRequest, requestOptions?: IRequest.Options): Promise<WebhookSettingResponse> {
        const endpoint = `${this.baseUrl}/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}`
            .replace("{" + "balancePlatformId" + "}", encodeURIComponent(String(balancePlatformId)))
            .replace("{" + "webhookId" + "}", encodeURIComponent(String(webhookId)))
            .replace("{" + "settingId" + "}", encodeURIComponent(String(settingId)));
        const resource = new Resource(this, endpoint);
        const request: PatchableBalanceWebhookSettingsRequest = ObjectSerializer.serialize(patchableBalanceWebhookSettingsRequest, "PatchableBalanceWebhookSettingsRequest");
        const response = await getJsonResponse<PatchableBalanceWebhookSettingsRequest, WebhookSettingResponse>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "WebhookSettingResponse");
    }
}

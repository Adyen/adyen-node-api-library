/*
 * The version of the OpenAPI document: v3
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

import { ObjectSerializer } from "../../typings/management/objectSerializer";
import { PayoutSettings } from "../../typings/management/models";
import { PayoutSettingsRequest } from "../../typings/management/models";
import { PayoutSettingsResponse } from "../../typings/management/models";
import { UpdatePayoutSettingsRequest } from "../../typings/management/models";

/**
 * API handler for PayoutSettingsMerchantLevelApi
 */
export class PayoutSettingsMerchantLevelApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Add a payout setting
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param payoutSettingsRequest {@link PayoutSettingsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PayoutSettings }
    */
    public async addPayoutSetting(merchantId: string, payoutSettingsRequest: PayoutSettingsRequest, requestOptions?: IRequest.Options): Promise<PayoutSettings> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/payoutSettings`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        
        const request: PayoutSettingsRequest = ObjectSerializer.serialize(payoutSettingsRequest, "PayoutSettingsRequest");
        const response = await getJsonResponse<PayoutSettingsRequest, PayoutSettings>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }

    /**
    * @summary Delete a payout setting
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param payoutSettingsId {@link string } The unique identifier of the payout setting.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link void }
    */
    public async deletePayoutSetting(merchantId: string, payoutSettingsId: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/payoutSettings/{payoutSettingsId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "payoutSettingsId" + "}", encodeURIComponent(String(payoutSettingsId)));
        const resource = new Resource(this, endpoint);
        
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary Get a payout setting
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param payoutSettingsId {@link string } The unique identifier of the payout setting.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PayoutSettings }
    */
    public async getPayoutSetting(merchantId: string, payoutSettingsId: string, requestOptions?: IRequest.Options): Promise<PayoutSettings> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/payoutSettings/{payoutSettingsId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "payoutSettingsId" + "}", encodeURIComponent(String(payoutSettingsId)));
        const resource = new Resource(this, endpoint);
        
        const response = await getJsonResponse<string, PayoutSettings>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }

    /**
    * @summary Get a list of payout settings
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PayoutSettingsResponse }
    */
    public async listPayoutSettings(merchantId: string, requestOptions?: IRequest.Options): Promise<PayoutSettingsResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/payoutSettings`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        
        const response = await getJsonResponse<string, PayoutSettingsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "PayoutSettingsResponse");
    }

    /**
    * @summary Update a payout setting
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param payoutSettingsId {@link string } The unique identifier of the payout setting.
    * @param updatePayoutSettingsRequest {@link UpdatePayoutSettingsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PayoutSettings }
    */
    public async updatePayoutSetting(merchantId: string, payoutSettingsId: string, updatePayoutSettingsRequest: UpdatePayoutSettingsRequest, requestOptions?: IRequest.Options): Promise<PayoutSettings> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/payoutSettings/{payoutSettingsId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "payoutSettingsId" + "}", encodeURIComponent(String(payoutSettingsId)));
        const resource = new Resource(this, endpoint);
        
        const request: UpdatePayoutSettingsRequest = ObjectSerializer.serialize(updatePayoutSettingsRequest, "UpdatePayoutSettingsRequest");
        const response = await getJsonResponse<UpdatePayoutSettingsRequest, PayoutSettings>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );

        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }

}

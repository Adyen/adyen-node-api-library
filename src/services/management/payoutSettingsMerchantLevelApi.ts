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
import { PayoutSettings } from '../../typings/management/models';
import { PayoutSettingsRequest } from '../../typings/management/models';
import { PayoutSettingsResponse } from '../../typings/management/models';
import { UpdatePayoutSettingsRequest } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class PayoutSettingsMerchantLevelApi extends Service {
    /**
     * @summary Delete a payout setting
     * @param merchantId The unique identifier of the merchant account.
     * @param payoutSettingsId The unique identifier of the payout setting.
     */
    public async deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(merchantId: string, payoutSettingsId: string, requestOptions?: IRequest.Options): Promise<any> {
        const localVarPath = "/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'payoutSettingsId' + '}', encodeURIComponent(String(payoutSettingsId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, any>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
        return ObjectSerializer.deserialize(response, "any");
    }
    /**
     * @summary Get a list of payout settings
     * @param merchantId The unique identifier of the merchant account.
     */
    public async getMerchantsMerchantIdPayoutSettings(merchantId: string, requestOptions?: IRequest.Options): Promise<PayoutSettingsResponse> {
        const localVarPath = "/merchants/{merchantId}/payoutSettings"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, PayoutSettingsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PayoutSettingsResponse");
    }
    /**
     * @summary Get a payout setting
     * @param merchantId The unique identifier of the merchant account.
     * @param payoutSettingsId The unique identifier of the payout setting.
     */
    public async getMerchantsMerchantIdPayoutSettingsPayoutSettingsId(merchantId: string, payoutSettingsId: string, requestOptions?: IRequest.Options): Promise<PayoutSettings> {
        const localVarPath = "/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'payoutSettingsId' + '}', encodeURIComponent(String(payoutSettingsId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, PayoutSettings>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }
    /**
     * @summary Update a payout setting
     * @param merchantId The unique identifier of the merchant account.
     * @param payoutSettingsId The unique identifier of the payout setting.
     * @param updatePayoutSettingsRequest 
     */
    public async patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(merchantId: string, payoutSettingsId: string, updatePayoutSettingsRequest: UpdatePayoutSettingsRequest, requestOptions?: IRequest.Options): Promise<PayoutSettings> {
        const localVarPath = "/merchants/{merchantId}/payoutSettings/{payoutSettingsId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'payoutSettingsId' + '}', encodeURIComponent(String(payoutSettingsId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: UpdatePayoutSettingsRequest = ObjectSerializer.serialize(updatePayoutSettingsRequest, "UpdatePayoutSettingsRequest");
        const response = await getJsonResponse<UpdatePayoutSettingsRequest, PayoutSettings>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }
    /**
     * @summary Add a payout setting
     * @param merchantId The unique identifier of the merchant account.
     * @param payoutSettingsRequest 
     */
    public async postMerchantsMerchantIdPayoutSettings(merchantId: string, payoutSettingsRequest: PayoutSettingsRequest, requestOptions?: IRequest.Options): Promise<PayoutSettings> {
        const localVarPath = "/merchants/{merchantId}/payoutSettings"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: PayoutSettingsRequest = ObjectSerializer.serialize(payoutSettingsRequest, "PayoutSettingsRequest");
        const response = await getJsonResponse<PayoutSettingsRequest, PayoutSettings>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }
}

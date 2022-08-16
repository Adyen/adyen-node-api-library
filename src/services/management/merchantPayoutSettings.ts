import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { ObjectSerializer, PayoutSettings, PayoutSettingsRequest, PayoutSettingsResponse, UpdatePayoutSettingsRequest } from "../../typings/management/models";
import ManagementResource from "../resource/management/managementResource";

class MerchantPayoutSettings extends Service {
    /**
     * Get a list of payout settings
     */
    public async listPayoutSettings(merchantId: string): Promise<PayoutSettingsResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/payoutSettings`);
        const response = await getJsonResponse<string, PayoutSettingsResponse>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PayoutSettingsResponse");
    }

    /**
     * Add a payout setting
     */
    public async create(merchantId: string, request: PayoutSettingsRequest): Promise<PayoutSettings> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/payoutSettings`);
        const response = await getJsonResponse<PayoutSettingsRequest, PayoutSettings>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }

    /**
     * Delete a payout setting
     */
    public async delete(merchantId: string, payoutSettingsId: string): Promise<void> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/payoutSettings/${payoutSettingsId}`);
        await getJsonResponse<string, void>(
            resource,
            "",
            { method: "DELETE" }
        );
    }

    /**
     * Get a payout setting
     */
    public async retrieve(merchantId: string, payoutSettingsId: string): Promise<PayoutSettings> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/payoutSettings/${payoutSettingsId}`);
        const response = await getJsonResponse<string, PayoutSettings>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }

    /**
     * Update a payout setting
     */
    public async update(merchantId: string, payoutSettingsId: string, request: UpdatePayoutSettingsRequest): Promise<PayoutSettings> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/payoutSettings/${payoutSettingsId}`);
        const response = await getJsonResponse<UpdatePayoutSettingsRequest, PayoutSettings>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "PayoutSettings");
    }
}

export default MerchantPayoutSettings;

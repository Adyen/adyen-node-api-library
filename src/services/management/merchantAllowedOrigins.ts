import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { AllowedOrigin, AllowedOriginsResponse, ObjectSerializer } from "../../typings/management/models";
import ManagementResource from "../resource/management/managementResource";

class MerchantAllowedOrigins extends Service {
    /**
     * Get a list of allowed origins
     */
    public async list(merchantId: string, apiCredentialId: string): Promise<AllowedOriginsResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials/${apiCredentialId}/allowedOrigins`);
        const response = await getJsonResponse<string, AllowedOriginsResponse>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOriginsResponse");
    }

    /**
     * Create an allowed origin
     */
    public async create(merchantId: string, apiCredentialId: string, request: AllowedOrigin): Promise<AllowedOriginsResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials/${apiCredentialId}/allowedOrigins`);
        const response = await getJsonResponse<AllowedOrigin, AllowedOriginsResponse>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOriginsResponse");
    }

    /**
     * Delete an allowed origin
     */
    public async delete(merchantId: string, apiCredentialId: string, originId: string): Promise<void> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials/${apiCredentialId}/allowedOrigins/${originId}`);
        await getJsonResponse<string, void>(
            resource,
            "",
            { method: "DELETE" }
        );
    }

    /**
     * Get an allowed origin
     */
    public async retrieve(merchantId: string, apiCredentialId: string, originId: string): Promise<AllowedOrigin> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials/${apiCredentialId}/allowedOrigins/${originId}`);
        const response = await getJsonResponse<string, AllowedOrigin>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOrigin");
    }
}

export default MerchantAllowedOrigins;

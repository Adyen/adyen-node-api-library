import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { GenerateApiKeyResponse, ObjectSerializer } from "../../typings/management/models";
import ManagementResource from "../resource/management/managementResource";

class MerchantApiKey extends Service {
    /**
     * Generate new API key
     */
    public async create(merchantId: string, apiCredentialId: string): Promise<GenerateApiKeyResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials/${apiCredentialId}/generateApiKey`);
        const response = await getJsonResponse<string, GenerateApiKeyResponse>(
            resource,
            "",
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateApiKeyResponse");
    }
}

export default MerchantApiKey;

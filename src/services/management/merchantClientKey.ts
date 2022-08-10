import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { GenerateClientKeyResponse, ObjectSerializer } from "../../typings/management/models";
import ManagementResource from "../resource/management/managementResource";

class MerchantClientKey extends Service {
    public async create(merchantId: string, apiCredentialId: string): Promise<GenerateClientKeyResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials/${apiCredentialId}/generateClientKey`);
        const response = await getJsonResponse<string, GenerateClientKeyResponse>(
            resource,
            "",
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateClientKeyResponse");
    }
}

export default MerchantClientKey;

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { ApiCredential, CreateApiCredentialResponse, CreateMerchantApiCredentialRequest, ListMerchantApiCredentialsResponse, ObjectSerializer, UpdateMerchantApiCredentialRequest } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";

class MerchantApiCredentials extends Service {
    /**
     * Get a list of API credentials
     */
    public async list(merchantId: string, requestOptions?: IRequest.Options): Promise<ListMerchantApiCredentialsResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials`);
        const response = await getJsonResponse<string, ListMerchantApiCredentialsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantApiCredentialsResponse");
    }

    /**
     * Create an API credential
     */
    public async create(merchantId: string, request: CreateMerchantApiCredentialRequest): Promise<CreateApiCredentialResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials`);
        const response = await getJsonResponse<CreateMerchantApiCredentialRequest, CreateApiCredentialResponse>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateApiCredentialResponse");
    }

    /**
     * Get an API credential
     */
    public async retrieve(merchantId: string, apiCredentialId: string): Promise<ApiCredential> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials/${apiCredentialId}`);
        const response = await getJsonResponse<string, ApiCredential>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ApiCredential");
    }

    /**
     * Update an API credential
     */
    public async update(merchantId: string, apiCredentialId: string, request: UpdateMerchantApiCredentialRequest): Promise<ApiCredential> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/apiCredentials/${apiCredentialId}`);
        const response = await getJsonResponse<UpdateMerchantApiCredentialRequest, ApiCredential>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "ApiCredential");
    }
}

export default MerchantApiCredentials;

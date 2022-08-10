import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { CreateMerchantRequest, CreateMerchantResponse, ListMerchantResponse, Merchant, ObjectSerializer, RequestActivationResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";

class MerchantAccount extends Service {
    public async list(requestOptions?: IRequest.Options): Promise<ListMerchantResponse> {
        const resource = new ManagementResource(this, `/merchants`);
        const response = await getJsonResponse<string, ListMerchantResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantResponse");
    }

    public async create(request: CreateMerchantRequest): Promise<CreateMerchantResponse> {
        const resource = new ManagementResource(this, `/merchants`);
        const response = await getJsonResponse<CreateMerchantRequest, CreateMerchantResponse>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateMerchantResponse");
    }

    public async retrieve(merchantId: string): Promise<Merchant> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}`);
        const response = await getJsonResponse<string, Merchant>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Merchant");
    }

    public async activate(merchantId: string): Promise<RequestActivationResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/activate`);
        const response = await getJsonResponse<string, RequestActivationResponse>(
            resource,
            "",
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "RequestActivationResponse");
    }
}

export default MerchantAccount;

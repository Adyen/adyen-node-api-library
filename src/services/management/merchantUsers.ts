import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { CreateMerchantUserRequest, CreateUserResponse, ListMerchantUsersResponse, ObjectSerializer, UpdateMerchantUserRequest, User } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";

class MerchantUsers extends Service {
    /**
     * Get a list of users
     */
    public async list(merchantId: string, requestOptions?: IRequest.Options): Promise<ListMerchantUsersResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/users`);
        const response = await getJsonResponse<string, ListMerchantUsersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantUsersResponse");
    }

    /**
     * Create a new user
     */
    public async create(merchantId: string, request: CreateMerchantUserRequest): Promise<CreateUserResponse> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/users`);
        const response = await getJsonResponse<CreateMerchantUserRequest, CreateUserResponse>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateUserResponse");
    }

    /**
     * Get user details
     */
    public async retrieve(merchantId: string, userId: string): Promise<User> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/users/${userId}`);
        const response = await getJsonResponse<string, User>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "User");
    }

    /**
     * Update a user
     */
    public async update(merchantId: string, userId: string, request: UpdateMerchantUserRequest): Promise<User> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/users/${userId}`);
        const response = await getJsonResponse<UpdateMerchantUserRequest, User>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "User");
    }
}

export default MerchantUsers;

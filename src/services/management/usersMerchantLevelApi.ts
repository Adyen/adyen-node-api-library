/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { CreateMerchantUserRequest } from "../../typings/management/models";
import { CreateUserResponse } from "../../typings/management/models";
import { ListMerchantUsersResponse } from "../../typings/management/models";
import { UpdateMerchantUserRequest } from "../../typings/management/models";
import { User } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class UsersMerchantLevelApi extends Service {

    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl("https://management-test.adyen.com/v1");
    }

    /**
    * @summary Get a list of users
    * @param merchantId {@link string } Unique identifier of the merchant.
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page. Maximum value is **100**. The default is **10** items on a page.
    * @param username {@link string } The partial or complete username to select all users that match.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ListMerchantUsersResponse }
    */
    public async listUsers(merchantId: string, requestOptions?: IRequest.Options): Promise<ListMerchantUsersResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/users`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ListMerchantUsersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantUsersResponse");
    }

    /**
    * @summary Get user details
    * @param merchantId {@link string } Unique identifier of the merchant.
    * @param userId {@link string } Unique identifier of the user.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link User }
    */
    public async getUserDetails(merchantId: string, userId: string, requestOptions?: IRequest.Options): Promise<User> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/users/{userId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "userId" + "}", encodeURIComponent(String(userId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, User>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "User");
    }

    /**
    * @summary Update a user
    * @param merchantId {@link string } Unique identifier of the merchant.
    * @param userId {@link string } Unique identifier of the user.
    * @param updateMerchantUserRequest {@link UpdateMerchantUserRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link User }
    */
    public async updateUser(merchantId: string, userId: string, updateMerchantUserRequest: UpdateMerchantUserRequest, requestOptions?: IRequest.Options): Promise<User> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/users/{userId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "userId" + "}", encodeURIComponent(String(userId)));
        const resource = new Resource(this, endpoint);
        const request: UpdateMerchantUserRequest = ObjectSerializer.serialize(updateMerchantUserRequest, "UpdateMerchantUserRequest");
        const response = await getJsonResponse<UpdateMerchantUserRequest, User>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "User");
    }

    /**
    * @summary Create a new user
    * @param merchantId {@link string } Unique identifier of the merchant.
    * @param createMerchantUserRequest {@link CreateMerchantUserRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CreateUserResponse }
    */
    public async createNewUser(merchantId: string, createMerchantUserRequest: CreateMerchantUserRequest, requestOptions?: IRequest.Options): Promise<CreateUserResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/users`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        const request: CreateMerchantUserRequest = ObjectSerializer.serialize(createMerchantUserRequest, "CreateMerchantUserRequest");
        const response = await getJsonResponse<CreateMerchantUserRequest, CreateUserResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateUserResponse");
    }
}

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
import { CompanyUser } from "../../typings/management/models";
import { CreateCompanyUserRequest } from "../../typings/management/models";
import { CreateCompanyUserResponse } from "../../typings/management/models";
import { ListCompanyUsersResponse } from "../../typings/management/models";
import { UpdateCompanyUserRequest } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class UsersCompanyLevelApi extends Service {

    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl("https://management-test.adyen.com/v1");
    }

    /**
    * @summary Get a list of users
    * @param companyId {@link string } The unique identifier of the company account.
    * @param pageNumber {@link number } The number of the page to return.
    * @param pageSize {@link number } The number of items to have on a page. Maximum value is **100**. The default is **10** items on a page.
    * @param username {@link string } The partial or complete username to select all users that match.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ListCompanyUsersResponse }
    */
    public async listUsers(companyId: string, requestOptions?: IRequest.Options): Promise<ListCompanyUsersResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/users`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ListCompanyUsersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListCompanyUsersResponse");
    }

    /**
    * @summary Get user details
    * @param companyId {@link string } The unique identifier of the company account.
    * @param userId {@link string } The unique identifier of the user.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CompanyUser }
    */
    public async getUserDetails(companyId: string, userId: string, requestOptions?: IRequest.Options): Promise<CompanyUser> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/users/{userId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "userId" + "}", encodeURIComponent(String(userId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, CompanyUser>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "CompanyUser");
    }

    /**
    * @summary Update user details
    * @param companyId {@link string } The unique identifier of the company account.
    * @param userId {@link string } The unique identifier of the user.
    * @param updateCompanyUserRequest {@link UpdateCompanyUserRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CompanyUser }
    */
    public async updateUserDetails(companyId: string, userId: string, updateCompanyUserRequest: UpdateCompanyUserRequest, requestOptions?: IRequest.Options): Promise<CompanyUser> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/users/{userId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "userId" + "}", encodeURIComponent(String(userId)));
        const resource = new Resource(this, endpoint);
        const request: UpdateCompanyUserRequest = ObjectSerializer.serialize(updateCompanyUserRequest, "UpdateCompanyUserRequest");
        const response = await getJsonResponse<UpdateCompanyUserRequest, CompanyUser>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "CompanyUser");
    }

    /**
    * @summary Create a new user
    * @param companyId {@link string } The unique identifier of the company account.
    * @param createCompanyUserRequest {@link CreateCompanyUserRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CreateCompanyUserResponse }
    */
    public async createNewUser(companyId: string, createCompanyUserRequest: CreateCompanyUserRequest, requestOptions?: IRequest.Options): Promise<CreateCompanyUserResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/users`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const request: CreateCompanyUserRequest = ObjectSerializer.serialize(createCompanyUserRequest, "CreateCompanyUserRequest");
        const response = await getJsonResponse<CreateCompanyUserRequest, CreateCompanyUserResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateCompanyUserResponse");
    }
}

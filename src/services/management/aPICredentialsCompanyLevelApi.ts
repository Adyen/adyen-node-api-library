/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    CompanyApiCredential,
    CreateCompanyApiCredentialRequest,
    CreateCompanyApiCredentialResponse,
    ListCompanyApiCredentialsResponse,
    RestServiceError,
    UpdateCompanyApiCredentialRequest,
    ObjectSerializer
} from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class APICredentialsCompanyLevelApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create an API credential.
    * @param companyId {@link string } The unique identifier of the company account.
    * @param createCompanyApiCredentialRequest {@link CreateCompanyApiCredentialRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateCompanyApiCredentialResponse }
    */
    public async createApiCredential(companyId: string, createCompanyApiCredentialRequest: CreateCompanyApiCredentialRequest, requestOptions?: IRequest.Options): Promise<CreateCompanyApiCredentialResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const request: CreateCompanyApiCredentialRequest = ObjectSerializer.serialize(createCompanyApiCredentialRequest, "CreateCompanyApiCredentialRequest");
        const response = await getJsonResponse<CreateCompanyApiCredentialRequest, CreateCompanyApiCredentialResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateCompanyApiCredentialResponse");
    }

    /**
    * @summary Get an API credential
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CompanyApiCredential }
    */
    public async getApiCredential(companyId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<CompanyApiCredential> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials/{apiCredentialId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, CompanyApiCredential>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "CompanyApiCredential");
    }

    /**
    * @summary Get a list of API credentials
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @return {@link ListCompanyApiCredentialsResponse }
    */
    public async listApiCredentials(companyId: string, pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<ListCompanyApiCredentialsResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = pageNumber ?? pageSize;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(pageNumber) requestOptions.params["pageNumber"] = pageNumber;
            if(pageSize) requestOptions.params["pageSize"] = pageSize;
        }
        const response = await getJsonResponse<string, ListCompanyApiCredentialsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListCompanyApiCredentialsResponse");
    }

    /**
    * @summary Update an API credential.
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param updateCompanyApiCredentialRequest {@link UpdateCompanyApiCredentialRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CompanyApiCredential }
    */
    public async updateApiCredential(companyId: string, apiCredentialId: string, updateCompanyApiCredentialRequest: UpdateCompanyApiCredentialRequest, requestOptions?: IRequest.Options): Promise<CompanyApiCredential> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials/{apiCredentialId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)));
        const resource = new Resource(this, endpoint);
        const request: UpdateCompanyApiCredentialRequest = ObjectSerializer.serialize(updateCompanyApiCredentialRequest, "UpdateCompanyApiCredentialRequest");
        const response = await getJsonResponse<UpdateCompanyApiCredentialRequest, CompanyApiCredential>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "CompanyApiCredential");
    }
}

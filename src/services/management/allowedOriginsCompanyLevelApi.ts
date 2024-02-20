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
    AllowedOrigin,
    AllowedOriginsResponse,
    ObjectSerializer
} from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class AllowedOriginsCompanyLevelApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create an allowed origin
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param allowedOrigin {@link AllowedOrigin } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOriginsResponse }
    */
    public async createAllowedOrigin(companyId: string, apiCredentialId: string, allowedOrigin: AllowedOrigin, requestOptions?: IRequest.Options): Promise<AllowedOriginsResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)));
        const resource = new Resource(this, endpoint);
        const request: AllowedOrigin = ObjectSerializer.serialize(allowedOrigin, "AllowedOrigin");
        const response = await getJsonResponse<AllowedOrigin, AllowedOriginsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOriginsResponse");
    }

    /**
    * @summary Delete an allowed origin
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param originId {@link string } Unique identifier of the allowed origin.
    * @param requestOptions {@link IRequest.Options }
    */
    public async deleteAllowedOrigin(companyId: string, apiCredentialId: string, originId: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)))
            .replace("{" + "originId" + "}", encodeURIComponent(String(originId)));
        const resource = new Resource(this, endpoint);
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary Get an allowed origin
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param originId {@link string } Unique identifier of the allowed origin.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOrigin }
    */
    public async getAllowedOrigin(companyId: string, apiCredentialId: string, originId: string, requestOptions?: IRequest.Options): Promise<AllowedOrigin> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)))
            .replace("{" + "originId" + "}", encodeURIComponent(String(originId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, AllowedOrigin>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOrigin");
    }

    /**
    * @summary Get a list of allowed origins
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOriginsResponse }
    */
    public async listAllowedOrigins(companyId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<AllowedOriginsResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, AllowedOriginsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOriginsResponse");
    }
}

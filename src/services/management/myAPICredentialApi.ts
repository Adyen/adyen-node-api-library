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
    CreateAllowedOriginRequest,
    GenerateClientKeyResponse,
    MeApiCredential,
    ObjectSerializer
} from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class MyAPICredentialApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Remove allowed origin
    * @param originId {@link string } Unique identifier of the allowed origin.
    * @param requestOptions {@link IRequest.Options }
    */
    public async removeAllowedOrigin(originId: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/me/allowedOrigins/{originId}`
            .replace("{" + "originId" + "}", encodeURIComponent(String(originId)));
        const resource = new Resource(this, endpoint);
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary Get API credential details
    * @param requestOptions {@link IRequest.Options }
    * @return {@link MeApiCredential }
    */
    public async getApiCredentialDetails(requestOptions?: IRequest.Options): Promise<MeApiCredential> {
        const endpoint = `${this.baseUrl}/me`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, MeApiCredential>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "MeApiCredential");
    }

    /**
    * @summary Get allowed origins
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOriginsResponse }
    */
    public async getAllowedOrigins(requestOptions?: IRequest.Options): Promise<AllowedOriginsResponse> {
        const endpoint = `${this.baseUrl}/me/allowedOrigins`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, AllowedOriginsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOriginsResponse");
    }

    /**
    * @summary Get allowed origin details
    * @param originId {@link string } Unique identifier of the allowed origin.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOrigin }
    */
    public async getAllowedOriginDetails(originId: string, requestOptions?: IRequest.Options): Promise<AllowedOrigin> {
        const endpoint = `${this.baseUrl}/me/allowedOrigins/{originId}`
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
    * @summary Add allowed origin
    * @param createAllowedOriginRequest {@link CreateAllowedOriginRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOrigin }
    */
    public async addAllowedOrigin(createAllowedOriginRequest: CreateAllowedOriginRequest, requestOptions?: IRequest.Options): Promise<AllowedOrigin> {
        const endpoint = `${this.baseUrl}/me/allowedOrigins`;
        const resource = new Resource(this, endpoint);
        const request: CreateAllowedOriginRequest = ObjectSerializer.serialize(createAllowedOriginRequest, "CreateAllowedOriginRequest");
        const response = await getJsonResponse<CreateAllowedOriginRequest, AllowedOrigin>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOrigin");
    }

    /**
    * @summary Generate a client key
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GenerateClientKeyResponse }
    */
    public async generateClientKey(requestOptions?: IRequest.Options): Promise<GenerateClientKeyResponse> {
        const endpoint = `${this.baseUrl}/me/generateClientKey`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, GenerateClientKeyResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateClientKeyResponse");
    }
}

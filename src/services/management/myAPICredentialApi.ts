/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
/* tslint:disable:no-unused-locals */
import { AllowedOrigin } from '../../typings/management/models';
import { AllowedOriginsResponse } from '../../typings/management/models';
import { CreateAllowedOriginRequest } from '../../typings/management/models';
import { MeApiCredential } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class MyAPICredentialApi extends Service {
    /**
     * @summary Remove allowed origin
     * @param originId Unique identifier of the allowed origin.
     */
    public async deleteMeAllowedOriginsOriginId(originId: string, requestOptions?: IRequest.Options): Promise<void> {
        const localVarPath = "/me/allowedOrigins/{originId}"
            .replace('{' + 'originId' + '}', encodeURIComponent(String(originId)));
        const resource = new ManagementResource(this, localVarPath);
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }
    /**
     * @summary Get API credential details
     */
    public async getMe(requestOptions?: IRequest.Options): Promise<MeApiCredential> {
        const localVarPath = "/me";
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, MeApiCredential>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "MeApiCredential");
    }
    /**
     * @summary Get allowed origins
     */
    public async getMeAllowedOrigins(requestOptions?: IRequest.Options): Promise<AllowedOriginsResponse> {
        const localVarPath = "/me/allowedOrigins";
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, AllowedOriginsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOriginsResponse");
    }
    /**
     * @summary Get allowed origin details
     * @param originId Unique identifier of the allowed origin.
     */
    public async getMeAllowedOriginsOriginId(originId: string, requestOptions?: IRequest.Options): Promise<AllowedOrigin> {
        const localVarPath = "/me/allowedOrigins/{originId}"
            .replace('{' + 'originId' + '}', encodeURIComponent(String(originId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, AllowedOrigin>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOrigin");
    }
    /**
     * @summary Add allowed origin
     * @param createAllowedOriginRequest 
     */
    public async postMeAllowedOrigins(createAllowedOriginRequest?: CreateAllowedOriginRequest, requestOptions?: IRequest.Options): Promise<AllowedOriginsResponse> {
        const localVarPath = "/me/allowedOrigins";
        const resource = new ManagementResource(this, localVarPath);
        const request: string = ObjectSerializer.serialize(createAllowedOriginRequest, "CreateAllowedOriginRequest");
        const response = await getJsonResponse<CreateAllowedOriginRequest, AllowedOriginsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AllowedOriginsResponse");
    }
}

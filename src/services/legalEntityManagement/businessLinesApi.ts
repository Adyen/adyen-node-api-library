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
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

import { ObjectSerializer } from "../../typings/legalEntityManagement/objectSerializer";
import { BusinessLine } from "../../typings/legalEntityManagement/models";
import { BusinessLineInfo } from "../../typings/legalEntityManagement/models";
import { BusinessLineInfoUpdate } from "../../typings/legalEntityManagement/models";

/**
 * API handler for BusinessLinesApi
 */
export class BusinessLinesApi extends Service {

    private readonly API_BASEPATH: string = "https://kyc-test.adyen.com/lem/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create a business line
    * @param businessLineInfo {@link BusinessLineInfo } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BusinessLine }
    */
    public async createBusinessLine(businessLineInfo: BusinessLineInfo, requestOptions?: IRequest.Options): Promise<BusinessLine> {
        const endpoint = `${this.baseUrl}/businessLines`;
        const resource = new Resource(this, endpoint);
        
        const request: BusinessLineInfo = ObjectSerializer.serialize(businessLineInfo, "BusinessLineInfo");
        const response = await getJsonResponse<BusinessLineInfo, BusinessLine>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );

        return ObjectSerializer.deserialize(response, "BusinessLine");
    }

    /**
    * @summary Delete a business line
    * @param id {@link string } The unique identifier of the business line to be deleted.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link void }
    */
    public async deleteBusinessLine(id: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/businessLines/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary Get a business line
    * @param id {@link string } The unique identifier of the business line.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BusinessLine }
    */
    public async getBusinessLine(id: string, requestOptions?: IRequest.Options): Promise<BusinessLine> {
        const endpoint = `${this.baseUrl}/businessLines/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        
        const response = await getJsonResponse<string, BusinessLine>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "BusinessLine");
    }

    /**
    * @summary Update a business line
    * @param id {@link string } The unique identifier of the business line.
    * @param businessLineInfoUpdate {@link BusinessLineInfoUpdate } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BusinessLine }
    */
    public async updateBusinessLine(id: string, businessLineInfoUpdate: BusinessLineInfoUpdate, requestOptions?: IRequest.Options): Promise<BusinessLine> {
        const endpoint = `${this.baseUrl}/businessLines/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        
        const request: BusinessLineInfoUpdate = ObjectSerializer.serialize(businessLineInfoUpdate, "BusinessLineInfoUpdate");
        const response = await getJsonResponse<BusinessLineInfoUpdate, BusinessLine>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );

        return ObjectSerializer.deserialize(response, "BusinessLine");
    }

}

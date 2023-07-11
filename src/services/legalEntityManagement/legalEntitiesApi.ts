/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { BusinessLines } from "../../typings/legalEntityManagement/models";
import { LegalEntity } from "../../typings/legalEntityManagement/models";
import { LegalEntityInfo } from "../../typings/legalEntityManagement/models";
import { LegalEntityInfoRequiredType } from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/legalEntityManagement/models";

export class LegalEntitiesApi extends Service {

    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl("https://kyc-test.adyen.com/lem/v2");
    }

    /**
    * @summary Get a legal entity
    * @param id {@link string } The unique identifier of the legal entity.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link LegalEntity }
    */
    public async getLegalEntity(id: string, requestOptions?: IRequest.Options): Promise<LegalEntity> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, LegalEntity>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "LegalEntity");
    }

    /**
    * @summary Get all business lines under a legal entity
    * @param id {@link string } The unique identifier of the legal entity.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link BusinessLines }
    */
    public async getAllBusinessLinesUnderLegalEntity(id: string, requestOptions?: IRequest.Options): Promise<BusinessLines> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/businessLines`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, BusinessLines>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BusinessLines");
    }

    /**
    * @summary Update a legal entity
    * @param id {@link string } The unique identifier of the legal entity.
    * @param legalEntityInfo {@link LegalEntityInfo } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link LegalEntity }
    */
    public async updateLegalEntity(id: string, legalEntityInfo: LegalEntityInfo, requestOptions?: IRequest.Options): Promise<LegalEntity> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: LegalEntityInfo = ObjectSerializer.serialize(legalEntityInfo, "LegalEntityInfo");
        const response = await getJsonResponse<LegalEntityInfo, LegalEntity>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "LegalEntity");
    }

    /**
    * @summary Create a legal entity
    * @param legalEntityInfoRequiredType {@link LegalEntityInfoRequiredType } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link LegalEntity }
    */
    public async createLegalEntity(legalEntityInfoRequiredType: LegalEntityInfoRequiredType, requestOptions?: IRequest.Options): Promise<LegalEntity> {
        const endpoint = `${this.baseUrl}/legalEntities`;
        const resource = new Resource(this, endpoint);
        const request: LegalEntityInfoRequiredType = ObjectSerializer.serialize(legalEntityInfoRequiredType, "LegalEntityInfoRequiredType");
        const response = await getJsonResponse<LegalEntityInfoRequiredType, LegalEntity>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "LegalEntity");
    }
}

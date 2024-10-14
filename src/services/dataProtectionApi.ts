/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { SubjectErasureByPspReferenceRequest } from "../typings/dataProtection/models";
import { SubjectErasureResponse } from "../typings/dataProtection/models";
import { IRequest } from "../typings/requestOptions";
import Resource from "./resource";
import { ObjectSerializer } from "../typings/dataProtection/models";

export class DataProtectionAPI extends Service {
    
    private readonly API_BASEPATH: string = "https://ca-test.adyen.com/ca/services/DataProtectionService/v1";
    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Submit a Subject Erasure Request.
    * @param subjectErasureByPspReferenceRequest {@link SubjectErasureByPspReferenceRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SubjectErasureResponse }
    */
    public async requestSubjectErasure(subjectErasureByPspReferenceRequest: SubjectErasureByPspReferenceRequest, requestOptions?: IRequest.Options): Promise<SubjectErasureResponse> {
        const endpoint = `${this.baseUrl}/requestSubjectErasure`;
        const resource = new Resource(this, endpoint);
        const request: SubjectErasureByPspReferenceRequest = ObjectSerializer.serialize(subjectErasureByPspReferenceRequest, "SubjectErasureByPspReferenceRequest");
        const response = await getJsonResponse<SubjectErasureByPspReferenceRequest, SubjectErasureResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "SubjectErasureResponse");
    }
}

export default DataProtectionAPI;

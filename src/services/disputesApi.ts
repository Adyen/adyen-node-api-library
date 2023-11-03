/*
 * The version of the OpenAPI document: v30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { 
    AcceptDisputeRequest,
    AcceptDisputeResponse,
    DefendDisputeRequest, 
    DefendDisputeResponse, 
    DefenseReasonsRequest, 
    DefenseReasonsResponse, 
    DeleteDefenseDocumentRequest, 
    DeleteDefenseDocumentResponse, 
    SupplyDefenseDocumentRequest, 
    SupplyDefenseDocumentResponse 
} from "../typings/disputes/models";
import { IRequest } from "../typings/requestOptions";
import Resource from "./resource";
import { ObjectSerializer } from "../typings/disputes/models";

export class DisputesAPI extends Service {
    
    private readonly API_BASEPATH: string = "https://ca-test.adyen.com/ca/services/DisputeService/v30";
    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Accept a dispute
    * @param acceptDisputeRequest {@link AcceptDisputeRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link AcceptDisputeResponse }
    */
    public async acceptDispute(acceptDisputeRequest: AcceptDisputeRequest, requestOptions?: IRequest.Options): Promise<AcceptDisputeResponse> {
        const endpoint = `${this.baseUrl}/acceptDispute`;
        const resource = new Resource(this, endpoint);
        const request: AcceptDisputeRequest = ObjectSerializer.serialize(acceptDisputeRequest, "AcceptDisputeRequest");
        const response = await getJsonResponse<AcceptDisputeRequest, AcceptDisputeResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AcceptDisputeResponse");
    }

    /**
    * @summary Defend a dispute
    * @param defendDisputeRequest {@link DefendDisputeRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link DefendDisputeResponse }
    */
    public async defendDispute(defendDisputeRequest: DefendDisputeRequest, requestOptions?: IRequest.Options): Promise<DefendDisputeResponse> {
        const endpoint = `${this.baseUrl}/defendDispute`;
        const resource = new Resource(this, endpoint);
        const request: DefendDisputeRequest = ObjectSerializer.serialize(defendDisputeRequest, "DefendDisputeRequest");
        const response = await getJsonResponse<DefendDisputeRequest, DefendDisputeResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "DefendDisputeResponse");
    }

    /**
    * @summary Delete a defense document
    * @param deleteDefenseDocumentRequest {@link DeleteDefenseDocumentRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link DeleteDefenseDocumentResponse }
    */
    public async deleteDisputeDefenseDocument(deleteDefenseDocumentRequest: DeleteDefenseDocumentRequest, requestOptions?: IRequest.Options): Promise<DeleteDefenseDocumentResponse> {
        const endpoint = `${this.baseUrl}/deleteDisputeDefenseDocument`;
        const resource = new Resource(this, endpoint);
        const request: DeleteDefenseDocumentRequest = ObjectSerializer.serialize(deleteDefenseDocumentRequest, "DeleteDefenseDocumentRequest");
        const response = await getJsonResponse<DeleteDefenseDocumentRequest, DeleteDefenseDocumentResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "DeleteDefenseDocumentResponse");
    }

    /**
    * @summary Get applicable defense reasons
    * @param defenseReasonsRequest {@link DefenseReasonsRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link DefenseReasonsResponse }
    */
    public async retrieveApplicableDefenseReasons(defenseReasonsRequest: DefenseReasonsRequest, requestOptions?: IRequest.Options): Promise<DefenseReasonsResponse> {
        const endpoint = `${this.baseUrl}/retrieveApplicableDefenseReasons`;
        const resource = new Resource(this, endpoint);
        const request: DefenseReasonsRequest = ObjectSerializer.serialize(defenseReasonsRequest, "DefenseReasonsRequest");
        const response = await getJsonResponse<DefenseReasonsRequest, DefenseReasonsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "DefenseReasonsResponse");
    }

    /**
    * @summary Supply a defense document
    * @param supplyDefenseDocumentRequest {@link SupplyDefenseDocumentRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link SupplyDefenseDocumentResponse }
    */
    public async supplyDefenseDocument(supplyDefenseDocumentRequest: SupplyDefenseDocumentRequest, requestOptions?: IRequest.Options): Promise<SupplyDefenseDocumentResponse> {
        const endpoint = `${this.baseUrl}/supplyDefenseDocument`;
        const resource = new Resource(this, endpoint);
        const request: SupplyDefenseDocumentRequest = ObjectSerializer.serialize(supplyDefenseDocumentRequest, "SupplyDefenseDocumentRequest");
        const response = await getJsonResponse<SupplyDefenseDocumentRequest, SupplyDefenseDocumentResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "SupplyDefenseDocumentResponse");
    }
}

export default DisputesAPI;

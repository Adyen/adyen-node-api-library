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
import { GeneratePciDescriptionRequest } from "../../typings/legalEntityManagement/models";
import { GeneratePciDescriptionResponse } from "../../typings/legalEntityManagement/models";
import { GetPciQuestionnaireInfosResponse } from "../../typings/legalEntityManagement/models";
import { GetPciQuestionnaireResponse } from "../../typings/legalEntityManagement/models";
import { PciSigningRequest } from "../../typings/legalEntityManagement/models";
import { PciSigningResponse } from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/legalEntityManagement/models";

export class PCIQuestionnairesApi extends Service {

    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl("https://kyc-test.adyen.com/lem/v2");
    }

    /**
    * @summary Get PCI questionnaire details
    * @param id {@link string } The unique identifier of the legal entity to get PCI questionnaire information.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link GetPciQuestionnaireInfosResponse }
    */
    public async getPciQuestionnaireDetails(id: string, requestOptions?: IRequest.Options): Promise<GetPciQuestionnaireInfosResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/pciQuestionnaires`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, GetPciQuestionnaireInfosResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "GetPciQuestionnaireInfosResponse");
    }

    /**
    * @summary Get PCI questionnaire
    * @param id {@link string } The legal entity ID of the individual who signed the PCI questionnaire.
    * @param pciid {@link string } The unique identifier of the signed PCI questionnaire.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link GetPciQuestionnaireResponse }
    */
    public async getPciQuestionnaire(id: string, pciid: string, requestOptions?: IRequest.Options): Promise<GetPciQuestionnaireResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/pciQuestionnaires/{pciid}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)))
            .replace("{" + "pciid" + "}", encodeURIComponent(String(pciid)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, GetPciQuestionnaireResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "GetPciQuestionnaireResponse");
    }

    /**
    * @summary Generate PCI questionnaire
    * @param id {@link string } The legal entity ID of the individual who will sign the PCI questionnaire.
    * @param generatePciDescriptionRequest {@link GeneratePciDescriptionRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link GeneratePciDescriptionResponse }
    */
    public async generatePciQuestionnaire(id: string, generatePciDescriptionRequest: GeneratePciDescriptionRequest, requestOptions?: IRequest.Options): Promise<GeneratePciDescriptionResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/pciQuestionnaires/generatePciTemplates`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: GeneratePciDescriptionRequest = ObjectSerializer.serialize(generatePciDescriptionRequest, "GeneratePciDescriptionRequest");
        const response = await getJsonResponse<GeneratePciDescriptionRequest, GeneratePciDescriptionResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GeneratePciDescriptionResponse");
    }

    /**
    * @summary Sign PCI questionnaire
    * @param id {@link string } The legal entity ID of the individual who signed the PCI questionnaire.
    * @param pciSigningRequest {@link PciSigningRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link PciSigningResponse }
    */
    public async signPciQuestionnaire(id: string, pciSigningRequest: PciSigningRequest, requestOptions?: IRequest.Options): Promise<PciSigningResponse> {
        const endpoint = `${this.baseUrl}/legalEntities/{id}/pciQuestionnaires/signPciTemplates`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: PciSigningRequest = ObjectSerializer.serialize(pciSigningRequest, "PciSigningRequest");
        const response = await getJsonResponse<PciSigningRequest, PciSigningResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PciSigningResponse");
    }
}

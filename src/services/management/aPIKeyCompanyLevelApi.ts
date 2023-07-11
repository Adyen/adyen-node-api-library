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
import { GenerateApiKeyResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class APIKeyCompanyLevelApi extends Service {

    readonly API_BASEPATH: string = "https://management-test.adyen.com/v1";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Generate new API key
    * @param companyId {@link string } The unique identifier of the company account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link GenerateApiKeyResponse }
    */
    public async generateNewApiKey(companyId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<GenerateApiKeyResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/apiCredentials/{apiCredentialId}/generateApiKey`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, GenerateApiKeyResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateApiKeyResponse");
    }
}

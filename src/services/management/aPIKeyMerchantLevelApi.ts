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
import { GenerateApiKeyResponse } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export class APIKeyMerchantLevelApi extends Service {
    /**
     * @summary Generate new API key
     * @param merchantId The unique identifier of the merchant account.
     * @param apiCredentialId Unique identifier of the API credential.
     */
    public async postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(merchantId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<GenerateApiKeyResponse> {
        const localVarPath = "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'apiCredentialId' + '}', encodeURIComponent(String(apiCredentialId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, GenerateApiKeyResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateApiKeyResponse");
    }
}

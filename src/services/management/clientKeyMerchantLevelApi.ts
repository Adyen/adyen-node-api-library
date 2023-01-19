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
import { GenerateClientKeyResponse } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class ClientKeyMerchantLevelApi extends Service {
    /**
     * @summary Generate new client key
     * @param merchantId The unique identifier of the merchant account.
     * @param apiCredentialId Unique identifier of the API credential.
     */
    public async generateNewClientKey(merchantId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<GenerateClientKeyResponse> {
        const localVarPath = "/merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateClientKey"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'apiCredentialId' + '}', encodeURIComponent(String(apiCredentialId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, GenerateClientKeyResponse>(
            resource,
            "",
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GenerateClientKeyResponse");
    }
}

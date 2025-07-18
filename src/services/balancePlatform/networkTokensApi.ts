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
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

import { ObjectSerializer } from "../../typings/balancePlatform/objectSerializer";
import { GetNetworkTokenResponse } from "../../typings/balancePlatform/models";
import { UpdateNetworkTokenRequest } from "../../typings/balancePlatform/models";

/**
 * API handler for NetworkTokensApi
 */
export class NetworkTokensApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a network token
    * @param networkTokenId {@link string } The unique identifier of the network token.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetNetworkTokenResponse }
    */
    public async getNetworkToken(networkTokenId: string, requestOptions?: IRequest.Options): Promise<GetNetworkTokenResponse> {
        const endpoint = `${this.baseUrl}/networkTokens/{networkTokenId}`
            .replace("{" + "networkTokenId" + "}", encodeURIComponent(String(networkTokenId)));
        const resource = new Resource(this, endpoint);
        
        const response = await getJsonResponse<string, GetNetworkTokenResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "GetNetworkTokenResponse");
    }

    /**
    * @summary Update a network token
    * @param networkTokenId {@link string } The unique identifier of the network token.
    * @param updateNetworkTokenRequest {@link UpdateNetworkTokenRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link void }
    */
    public async updateNetworkToken(networkTokenId: string, updateNetworkTokenRequest: UpdateNetworkTokenRequest, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/networkTokens/{networkTokenId}`
            .replace("{" + "networkTokenId" + "}", encodeURIComponent(String(networkTokenId)));
        const resource = new Resource(this, endpoint);
        
        const request: UpdateNetworkTokenRequest = ObjectSerializer.serialize(updateNetworkTokenRequest, "UpdateNetworkTokenRequest");
        await getJsonResponse<UpdateNetworkTokenRequest, void>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
    }

}

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
import { 
    AuthenticationSessionRequest,
    AuthenticationSessionResponse,
    DefaultErrorResponseEntity,
    ObjectSerializer
} from "../../typings/sessionAuthentication/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class SessionAuthenticationApi extends Service {

    private readonly API_BASEPATH: string = "https://test.adyen.com/authe/api/v1";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create a session token
    * @param authenticationSessionRequest {@link AuthenticationSessionRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AuthenticationSessionResponse }
    */
    public async createAuthenticationSession(authenticationSessionRequest: AuthenticationSessionRequest, requestOptions?: IRequest.Options): Promise<AuthenticationSessionResponse> {
        const endpoint = `${this.baseUrl}/sessions`;
        const resource = new Resource(this, endpoint);
        const request: AuthenticationSessionRequest = ObjectSerializer.serialize(authenticationSessionRequest, "AuthenticationSessionRequest");
        const response = await getJsonResponse<AuthenticationSessionRequest, AuthenticationSessionResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "AuthenticationSessionResponse");
    }
}

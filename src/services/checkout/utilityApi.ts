/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { ApplePaySessionRequest } from "../../typings/checkout/models";
import { ApplePaySessionResponse } from "../../typings/checkout/models";
import { UtilityRequest } from "../../typings/checkout/models";
import { UtilityResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/checkout/models";

export class UtilityApi extends Service {

    private readonly API_BASEPATH: string = "https://checkout-test.adyen.com/v71";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get an Apple Pay session
    * @param idempotencyKey {@link string } A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
    * @param applePaySessionRequest {@link ApplePaySessionRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ApplePaySessionResponse }
    */
    public async getApplePaySession(applePaySessionRequest: ApplePaySessionRequest, requestOptions?: IRequest.Options): Promise<ApplePaySessionResponse> {
        const endpoint = `${this.baseUrl}/applePay/sessions`;
        const resource = new Resource(this, endpoint);
        const request: ApplePaySessionRequest = ObjectSerializer.serialize(applePaySessionRequest, "ApplePaySessionRequest");
        const response = await getJsonResponse<ApplePaySessionRequest, ApplePaySessionResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ApplePaySessionResponse");
    }

    /**
    * @summary Create originKey values for domains
    * @param idempotencyKey {@link string } A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
    * @param utilityRequest {@link UtilityRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link UtilityResponse }
    */
    public async originKeys(utilityRequest: UtilityRequest, requestOptions?: IRequest.Options): Promise<UtilityResponse> {
        const endpoint = `${this.baseUrl}/originKeys`;
        const resource = new Resource(this, endpoint);
        const request: UtilityRequest = ObjectSerializer.serialize(utilityRequest, "UtilityRequest");
        const response = await getJsonResponse<UtilityRequest, UtilityResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "UtilityResponse");
    }
}

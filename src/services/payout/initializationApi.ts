/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { StoreDetailAndSubmitRequest } from "../../typings/payout/models";
import { StoreDetailAndSubmitResponse } from "../../typings/payout/models";
import { StoreDetailRequest } from "../../typings/payout/models";
import { StoreDetailResponse } from "../../typings/payout/models";
import { SubmitRequest } from "../../typings/payout/models";
import { SubmitResponse } from "../../typings/payout/models";
import { IRequest } from "../../typings/requestOptions";
import PayoutResource from "../resource/payoutResource";
import { ObjectSerializer } from "../../typings/payout/models";

export class InitializationApi extends Service {

    /**
    * @summary Store payout details
    * @param storeDetailRequest {@link StoreDetailRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link StoreDetailResponse }
    */
    public async storeDetail(storeDetailRequest: StoreDetailRequest, requestOptions?: IRequest.Options): Promise<StoreDetailResponse> {
        const localVarPath = "/storeDetail";
        const resource = new PayoutResource(this, localVarPath);
        const request: StoreDetailRequest = ObjectSerializer.serialize(storeDetailRequest, "StoreDetailRequest");
        const response = await getJsonResponse<StoreDetailRequest, StoreDetailResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StoreDetailResponse");
    }

    /**
    * @summary Store details and submit a payout
    * @param storeDetailAndSubmitRequest {@link StoreDetailAndSubmitRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link StoreDetailAndSubmitResponse }
    */
    public async storeDetailAndSubmitThirdParty(storeDetailAndSubmitRequest: StoreDetailAndSubmitRequest, requestOptions?: IRequest.Options): Promise<StoreDetailAndSubmitResponse> {
        const localVarPath = "/storeDetailAndSubmitThirdParty";
        const resource = new PayoutResource(this, localVarPath);
        const request: StoreDetailAndSubmitRequest = ObjectSerializer.serialize(storeDetailAndSubmitRequest, "StoreDetailAndSubmitRequest");
        const response = await getJsonResponse<StoreDetailAndSubmitRequest, StoreDetailAndSubmitResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StoreDetailAndSubmitResponse");
    }

    /**
    * @summary Submit a payout
    * @param submitRequest {@link SubmitRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link SubmitResponse }
    */
    public async submitThirdParty(submitRequest: SubmitRequest, requestOptions?: IRequest.Options): Promise<SubmitResponse> {
        const localVarPath = "/submitThirdParty";
        const resource = new PayoutResource(this, localVarPath);
        const request: SubmitRequest = ObjectSerializer.serialize(submitRequest, "SubmitRequest");
        const response = await getJsonResponse<SubmitRequest, SubmitResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "SubmitResponse");
    }
}
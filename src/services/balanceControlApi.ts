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
import { BalanceTransferRequest } from "../typings/balanceControl/models";
import { BalanceTransferResponse } from "../typings/balanceControl/models";
import { IRequest } from "../typings/requestOptions";
import Resource from "./resource";
import { ObjectSerializer } from "../typings/balanceControl/models";

export class BalanceControlAPI extends Service {
    
    private readonly API_BASEPATH: string = "https://pal-test.adyen.com/pal/servlet/BalanceControl/v1";
    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Start a balance transfer
    * @param balanceTransferRequest {@link BalanceTransferRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link BalanceTransferResponse }
    *
	* @deprecated since Adyen Balance Control API v1
    */
    public async balanceTransfer(balanceTransferRequest: BalanceTransferRequest, requestOptions?: IRequest.Options): Promise<BalanceTransferResponse> {
        const endpoint = `${this.baseUrl}/balanceTransfer`;
        const resource = new Resource(this, endpoint);
        const request: BalanceTransferRequest = ObjectSerializer.serialize(balanceTransferRequest, "BalanceTransferRequest");
        const response = await getJsonResponse<BalanceTransferRequest, BalanceTransferResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "BalanceTransferResponse");
    }
}

export default BalanceControlAPI;

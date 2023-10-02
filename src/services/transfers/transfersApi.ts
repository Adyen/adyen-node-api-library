/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { Transfer } from "../../typings/transfers/models";
import { TransferInfo } from "../../typings/transfers/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/transfers/models";

export class TransfersApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/btl/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Transfer funds
    * @param wWWAuthenticate {@link string } Header for authenticating through SCA
    * @param transferInfo {@link TransferInfo } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Transfer }
    */
    public async transferFunds(transferInfo: TransferInfo, requestOptions?: IRequest.Options): Promise<Transfer> {
        const endpoint = `${this.baseUrl}/transfers`;
        const resource = new Resource(this, endpoint);
        const request: TransferInfo = ObjectSerializer.serialize(transferInfo, "TransferInfo");
        const response = await getJsonResponse<TransferInfo, Transfer>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Transfer");
    }
}

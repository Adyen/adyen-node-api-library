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
import { ListTerminalsResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class TerminalsTerminalLevelApi extends Service {

    readonly API_BASEPATH: string = "https://management-test.adyen.com/v1";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a list of terminals
    * @param searchQuery {@link string } Returns terminals with an ID that contains the specified string. If present, other query parameters are ignored.
    * @param otpQuery {@link string } Returns one or more terminals associated with the one-time passwords specified in the request. If this query parameter is used, other query parameters are ignored.
    * @param countries {@link string } Returns terminals located in the countries specified by their [two-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
    * @param merchantIds {@link string } Returns terminals that belong to the merchant accounts specified by their unique merchant account ID.
    * @param storeIds {@link string } Returns terminals that are assigned to the [stores](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores) specified by their unique store ID.
    * @param brandModels {@link string } Returns terminals of the [models](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/companies/{companyId}/terminalModels) specified in the format *brand.model*.
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 20 items on a page.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ListTerminalsResponse }
    */
    public async listTerminals(requestOptions?: IRequest.Options): Promise<ListTerminalsResponse> {
        const endpoint = `${this.baseUrl}/terminals`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ListTerminalsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListTerminalsResponse");
    }
}

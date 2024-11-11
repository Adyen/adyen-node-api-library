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
import { 
    ExternalTerminalAction,
    ListExternalTerminalActionsResponse,
    ObjectSerializer
} from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class TerminalActionsCompanyLevelApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get terminal action
    * @param companyId {@link string } The unique identifier of the company account.
    * @param actionId {@link string } The unique identifier of the terminal action.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ExternalTerminalAction }
    */
    public async getTerminalAction(companyId: string, actionId: string, requestOptions?: IRequest.Options): Promise<ExternalTerminalAction> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalActions/{actionId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)))
            .replace("{" + "actionId" + "}", encodeURIComponent(String(actionId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ExternalTerminalAction>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ExternalTerminalAction");
    }

    /**
    * @summary Get a list of terminal actions
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 20 items on a page.
    * @param status {@link string } Returns terminal actions with the specified status.  Allowed values: **pending**, **successful**, **failed**, **cancelled**, **tryLater**.
    * @param type {@link string } Returns terminal actions of the specified type.  Allowed values: **InstallAndroidApp**, **UninstallAndroidApp**, **InstallAndroidCertificate**, **UninstallAndroidCertificate**.
    * @return {@link ListExternalTerminalActionsResponse }
    */
    public async listTerminalActions(companyId: string, pageNumber?: number, pageSize?: number, status?: string, type?: string, requestOptions?: IRequest.Options): Promise<ListExternalTerminalActionsResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalActions`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = pageNumber ?? pageSize ?? status ?? type;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(pageNumber) requestOptions.params["pageNumber"] = pageNumber;
            if(pageSize) requestOptions.params["pageSize"] = pageSize;
            if(status) requestOptions.params["status"] = status;
            if(type) requestOptions.params["type"] = type;
        }
        const response = await getJsonResponse<string, ListExternalTerminalActionsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListExternalTerminalActionsResponse");
    }
}

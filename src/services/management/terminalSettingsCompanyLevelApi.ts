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
    Logo,
    TerminalSettings,
    ObjectSerializer
} from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class TerminalSettingsCompanyLevelApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v3";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get the terminal logo
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param model {@link string } The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
    * @return {@link Logo }
    */
    public async getTerminalLogo(companyId: string, model?: string, requestOptions?: IRequest.Options): Promise<Logo> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalLogos`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = model;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(model) requestOptions.params["model"] = model;
        }
        const response = await getJsonResponse<string, Logo>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }

    /**
    * @summary Get terminal settings
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalSettings }
    */
    public async getTerminalSettings(companyId: string, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalSettings`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TerminalSettings>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }

    /**
    * @summary Update the terminal logo
    * @param companyId {@link string } The unique identifier of the company account.
    * @param logo {@link Logo } 
    * @param requestOptions {@link IRequest.Options }
    * @param model {@link string } The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
    * @return {@link Logo }
    */
    public async updateTerminalLogo(companyId: string, logo: Logo, model?: string, requestOptions?: IRequest.Options): Promise<Logo> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalLogos`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const request: Logo = ObjectSerializer.serialize(logo, "Logo");
        const hasDefinedQueryParams = model;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(model) requestOptions.params["model"] = model;
        }
        const response = await getJsonResponse<Logo, Logo>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }

    /**
    * @summary Update terminal settings
    * @param companyId {@link string } The unique identifier of the company account.
    * @param terminalSettings {@link TerminalSettings } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalSettings }
    */
    public async updateTerminalSettings(companyId: string, terminalSettings: TerminalSettings, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/terminalSettings`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const request: TerminalSettings = ObjectSerializer.serialize(terminalSettings, "TerminalSettings");
        const response = await getJsonResponse<TerminalSettings, TerminalSettings>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }
}

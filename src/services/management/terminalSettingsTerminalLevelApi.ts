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
import { Logo } from "../../typings/management/models";
import { TerminalSettings } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class TerminalSettingsTerminalLevelApi extends Service {

    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl("https://management-test.adyen.com/v1");
    }

    /**
    * @summary Get the terminal logo
    * @param terminalId {@link string } The unique identifier of the payment terminal.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Logo }
    */
    public async getTerminalLogo(terminalId: string, requestOptions?: IRequest.Options): Promise<Logo> {
        const endpoint = `${this.baseUrl}/terminals/{terminalId}/terminalLogos`
            .replace("{" + "terminalId" + "}", encodeURIComponent(String(terminalId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, Logo>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }

    /**
    * @summary Get terminal settings
    * @param terminalId {@link string } The unique identifier of the payment terminal.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalSettings }
    */
    public async getTerminalSettings(terminalId: string, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const endpoint = `${this.baseUrl}/terminals/{terminalId}/terminalSettings`
            .replace("{" + "terminalId" + "}", encodeURIComponent(String(terminalId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TerminalSettings>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }

    /**
    * @summary Update the logo
    * @param terminalId {@link string } The unique identifier of the payment terminal.
    * @param logo {@link Logo } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Logo }
    */
    public async updateLogo(terminalId: string, logo: Logo, requestOptions?: IRequest.Options): Promise<Logo> {
        const endpoint = `${this.baseUrl}/terminals/{terminalId}/terminalLogos`
            .replace("{" + "terminalId" + "}", encodeURIComponent(String(terminalId)));
        const resource = new Resource(this, endpoint);
        const request: Logo = ObjectSerializer.serialize(logo, "Logo");
        const response = await getJsonResponse<Logo, Logo>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }

    /**
    * @summary Update terminal settings
    * @param terminalId {@link string } The unique identifier of the payment terminal.
    * @param terminalSettings {@link TerminalSettings } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TerminalSettings }
    */
    public async updateTerminalSettings(terminalId: string, terminalSettings: TerminalSettings, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const endpoint = `${this.baseUrl}/terminals/{terminalId}/terminalSettings`
            .replace("{" + "terminalId" + "}", encodeURIComponent(String(terminalId)));
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

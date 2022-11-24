/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
/* tslint:disable:no-unused-locals */
import { Logo } from '../../typings/management/models';
import { TerminalSettings } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class TerminalSettingsTerminalLevelApi extends Service {
    /**
     * @summary Get the terminal logo
     * @param terminalId The unique identifier of the payment terminal.
     */
    public async getTerminalsTerminalIdTerminalLogos(terminalId: string, requestOptions?: IRequest.Options): Promise<Logo> {
        const localVarPath = "/terminals/{terminalId}/terminalLogos"
            .replace('{' + 'terminalId' + '}', encodeURIComponent(String(terminalId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, Logo>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }
    /**
     * @summary Get terminal settings
     * @param terminalId The unique identifier of the payment terminal.
     */
    public async getTerminalsTerminalIdTerminalSettings(terminalId: string, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const localVarPath = "/terminals/{terminalId}/terminalSettings"
            .replace('{' + 'terminalId' + '}', encodeURIComponent(String(terminalId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, TerminalSettings>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }
    /**
     * @summary Update the logo
     * @param terminalId The unique identifier of the payment terminal.
     * @param logo 
     */
    public async patchTerminalsTerminalIdTerminalLogos(terminalId: string, logo: Logo, requestOptions?: IRequest.Options): Promise<Logo> {
        const localVarPath = "/terminals/{terminalId}/terminalLogos"
            .replace('{' + 'terminalId' + '}', encodeURIComponent(String(terminalId)));
        const resource = new ManagementResource(this, localVarPath);
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
     * @param terminalId The unique identifier of the payment terminal.
     * @param terminalSettings 
     */
    public async patchTerminalsTerminalIdTerminalSettings(terminalId: string, terminalSettings: TerminalSettings, requestOptions?: IRequest.Options): Promise<TerminalSettings> {
        const localVarPath = "/terminals/{terminalId}/terminalSettings"
            .replace('{' + 'terminalId' + '}', encodeURIComponent(String(terminalId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: TerminalSettings = ObjectSerializer.serialize(terminalSettings, "TerminalSettings");
        const response = await getJsonResponse<TerminalSettings, TerminalSettings>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }
}

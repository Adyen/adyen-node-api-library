import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { Logo, ObjectSerializer, TerminalSettings } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";

class MerchantTerminalSettings extends Service {
    public async retrieveLogo(merchantId: string, requestOptions?: IRequest.Options): Promise<Logo> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalLogos`);
        const response = await getJsonResponse<string, Logo>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }

    public async updateLogo(merchantId: string, request: Logo, requestOptions?: IRequest.Options): Promise<Logo> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalLogos`);
        const response = await getJsonResponse<Logo, Logo>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Logo");
    }

    public async retrieve(merchantId: string): Promise<TerminalSettings> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalSettings`);
        const response = await getJsonResponse<string, TerminalSettings>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }

    public async update(merchantId: string, request: TerminalSettings): Promise<TerminalSettings> {
        const resource = new ManagementResource(this, `/merchants/${merchantId}/terminalSettings`);
        const response = await getJsonResponse<TerminalSettings, TerminalSettings>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TerminalSettings");
    }
}

export default MerchantTerminalSettings;

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { BalancePlatform, ObjectSerializer, PaginatedAccountHoldersResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import BalancePlatformResource from "../resource/balancePlaftformResource";

class General extends Service {
    public async retrieve(id: string): Promise<BalancePlatform> {
        const resource = new BalancePlatformResource(this, `/balancePlatforms/${id}`);
        const response = await getJsonResponse<string, BalancePlatform>(
            resource,
            '',
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BalancePlatform");
    }

    public async listAccountHolders(id: string, requestOptions?: IRequest.Options): Promise<PaginatedAccountHoldersResponse> {
        const resource = new BalancePlatformResource(this, `/balancePlatforms/${id}/accountHolders`);
        const response = await getJsonResponse<string, PaginatedAccountHoldersResponse>(
            resource,
            '',
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaginatedAccountHoldersResponse");
    }
}

export default General;

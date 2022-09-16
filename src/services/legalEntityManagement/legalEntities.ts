import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import LegalEntityManagementResource from "../resource/legalEntityManagementResource";
import {LegalEntity} from "../../typings/legalEntityManagement/legalEntity";
import {LegalEntityInfo} from "../../typings/legalEntityManagement/legalEntityInfo";
import {BusinessLines, ObjectSerializer} from "../../typings/legalEntityManagement/models";

class LegalEntities extends Service {
    public async create(request: LegalEntityInfo): Promise<LegalEntity> {
        const resource = new LegalEntityManagementResource(this, "/legalEntities");
        const response = await getJsonResponse<LegalEntityInfo, LegalEntity>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "LegalEntity");
    }

    public async retrieve(id: string): Promise<LegalEntity> {
        const resource = new LegalEntityManagementResource(this, `/legalEntities/${id}`);
        const response = await getJsonResponse<string, LegalEntity>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "LegalEntity");
    }

    public async update(id: string, request: LegalEntityInfo): Promise<LegalEntity> {
        const resource = new LegalEntityManagementResource(this, `/legalEntities/${id}`);
        const response = await getJsonResponse<LegalEntityInfo, LegalEntity>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "LegalEntity");
    }

    public async listBusinessLines(id: string): Promise<BusinessLines> {
        const resource = new LegalEntityManagementResource(this, `/legalEntities/${id}/businessLines`);
        const response = await getJsonResponse<string, BusinessLines>(
            resource,
            "",
            {method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BusinessLines");
    }
}

export default LegalEntities;
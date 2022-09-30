import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import LegalEntityManagementResource from "../resource/legalEntityManagementResource";
import {
    BusinessLine,
    BusinessLineInfo, BusinessLineInfoUpdate,
    ObjectSerializer
} from "../../typings/legalEntityManagement/models";

class BusinessLineService extends Service {
    public async create(request: BusinessLineInfo): Promise<BusinessLine> {
        const resource = new LegalEntityManagementResource(this, "/businessLines");
        const response = await getJsonResponse<BusinessLineInfo, BusinessLine>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "BusinessLine");
    }

    public async retrieve(id: string): Promise<BusinessLine> {
        const resource = new LegalEntityManagementResource(this, `/businessLines/${id}`);
        const response = await getJsonResponse<string, BusinessLine>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "BusinessLine");
    }

    public async update(id: string, request: BusinessLineInfoUpdate): Promise<BusinessLine> {
        const resource = new LegalEntityManagementResource(this, `/businessLines/${id}`);
        const response = await getJsonResponse<BusinessLineInfoUpdate, BusinessLine>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "BusinessLine");
    }
}

export default BusinessLineService;
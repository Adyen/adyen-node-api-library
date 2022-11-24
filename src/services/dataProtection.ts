import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { SubjectErasureByPspReferenceRequest, SubjectErasureResponse, ObjectSerializer } from "../typings/dataProtection/models";
import DataProtectionResource from "./resource/dataProtectionresource";
import { IRequest } from "../typings/requestOptions";

class DataProtection extends Service {
    private readonly _dataProtectionResource: DataProtectionResource;

    public constructor(client: Client) {
        super(client);
        this._dataProtectionResource = new DataProtectionResource(this, "/requestSubjectErasure");
    }
    public async requestSubjectErasure(subjectErasureByPspReferenceRequest: SubjectErasureByPspReferenceRequest, requestOptions?: IRequest.Options): Promise<SubjectErasureResponse> {
        const response = await getJsonResponse<SubjectErasureByPspReferenceRequest, SubjectErasureResponse>(
            this._dataProtectionResource,
            subjectErasureByPspReferenceRequest,
            requestOptions,
        );
        return ObjectSerializer.deserialize(response, "SubjectErasureResponse");
    }
}

export default DataProtection;

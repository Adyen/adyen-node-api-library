import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import LegalEntityManagementResource from "../resource/legalEntityManagementResource";
import {Document, ObjectSerializer} from "../../typings/legalEntityManagement/models";

class Documents extends Service {
    public async create(request: Document): Promise<Document> {
        const resource = new LegalEntityManagementResource(this, "/documents");
        const response = await getJsonResponse<Document, Document>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Document");
    }

    public async retrieve(id: string): Promise<Document> {
        const resource = new LegalEntityManagementResource(this, `/documents/${id}`);
        const response = await getJsonResponse<string, Document>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Document");
    }

    public async update(id: string, request: Document): Promise<Document> {
        const resource = new LegalEntityManagementResource(this, `/documents/${id}`);
        const response = await getJsonResponse<Document, Document>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "Document");
    }

    public async delete(id: string): Promise<void> {
        const resource = new LegalEntityManagementResource(this, `/documents/${id}`);
        await getJsonResponse<string, string>(
            resource,
            "",
            {method: "DELETE" }
        );
    }
}

export default Documents;
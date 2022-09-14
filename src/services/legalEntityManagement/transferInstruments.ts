import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import LegalEntityManagementResource from "../resource/legalEntityManagementResource";
import {TransferInstrumentInfo} from "../../typings/legalEntityManagement/transferInstrumentInfo";
import {TransferInstrument} from "../../typings/legalEntityManagement/transferInstrument";
import {ObjectSerializer} from "../../typings/legalEntityManagement/models";

class TransferInstruments extends Service {
    public async create(request: TransferInstrumentInfo): Promise<TransferInstrument> {
        const resource = new LegalEntityManagementResource(this, "/transferInstruments");
        const response = await getJsonResponse<TransferInstrumentInfo, TransferInstrument>(
            resource,
            request,
            { method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "TransferInstrument");
    }

    public async retrieve(id: string): Promise<TransferInstrument> {
        const resource = new LegalEntityManagementResource(this, `/transferInstruments/${id}`);
        const response = await getJsonResponse<string, TransferInstrument>(
            resource,
            "",
            { method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TransferInstrument");
    }

    public async update(id: string, request: TransferInstrumentInfo): Promise<TransferInstrument> {
        const resource = new LegalEntityManagementResource(this, `/transferInstruments/${id}`);
        const response = await getJsonResponse<TransferInstrumentInfo, TransferInstrument>(
            resource,
            request,
            { method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "TransferInstrument");
    }

    public async delete(id: string): Promise<void> {
        const resource = new LegalEntityManagementResource(this, `/transferInstruments/${id}`);
        await getJsonResponse<string, string>(
            resource,
            "",
            {method: "DELETE" }
        );
    }
}

export default TransferInstruments;
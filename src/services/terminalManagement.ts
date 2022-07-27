import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import {
    AssignTerminalsRequest,
    AssignTerminalsResponse,
    FindTerminalRequest,
    FindTerminalResponse,
    GetStoresUnderAccountRequest,
    GetStoresUnderAccountResponse,
    GetTerminalDetailsRequest,
    GetTerminalDetailsResponse,
    GetTerminalsUnderAccountRequest,
    GetTerminalsUnderAccountResponse,
    ObjectSerializer
} from "../typings/terminalManagement/models";
import AssignTerminals from "./resource/terminalManagement/assignTerminals";
import FindTerminal from "./resource/terminalManagement/findTerminal";
import GetStoresUnderAccount from "./resource/terminalManagement/getStoresUnderAccount";
import GetTerminalDetails from "./resource/terminalManagement/getTerminalDetails";
import GetTerminalsUnderAccount from "./resource/terminalManagement/getTerminalsUnderAccount";

class TerminalManagement extends Service {
    private readonly _assignTerminals: AssignTerminals;
    private readonly _findTerminal: FindTerminal;
    private readonly _getStoresUnderAccount: GetStoresUnderAccount;
    private readonly _getTerminalDetails: GetTerminalDetails;
    private readonly _getTerminalsUnderAccount: GetTerminalsUnderAccount;

    public constructor(client: Client) {
        super(client);
        this._assignTerminals = new AssignTerminals(this);
        this._findTerminal = new FindTerminal(this);
        this._getStoresUnderAccount = new GetStoresUnderAccount(this);
        this._getTerminalDetails = new GetTerminalDetails(this);
        this._getTerminalsUnderAccount = new GetTerminalsUnderAccount(this);
    }

    public async assignTerminals(request: AssignTerminalsRequest): Promise<AssignTerminalsResponse> {
        const response = await getJsonResponse<AssignTerminalsRequest, AssignTerminalsResponse>(
            this._assignTerminals,
            request,
        );
        return ObjectSerializer.deserialize(response, "AssignTerminalsResponse");
    }
    
    public async findTerminal(request: FindTerminalRequest): Promise<FindTerminalResponse> {
        const response = await getJsonResponse<FindTerminalRequest, FindTerminalResponse>(
            this._findTerminal,
            request,
        );
        return ObjectSerializer.deserialize(response, "FindTerminalResponse");
    }
    
    public async getStoresUnderAccount(request: GetStoresUnderAccountRequest): Promise<GetStoresUnderAccountResponse> {
        const response = await getJsonResponse<GetStoresUnderAccountRequest, GetStoresUnderAccountResponse>(
            this._getStoresUnderAccount,
            request,
        );
        return ObjectSerializer.deserialize(response, "GetStoresUnderAccountResponse");
    }
    
    public async getTerminalDetails(request: GetTerminalDetailsRequest): Promise<GetTerminalDetailsResponse> {
        const response = await getJsonResponse<GetTerminalDetailsRequest, GetTerminalDetailsResponse>(
            this._getTerminalDetails,
            request,
        );
        return ObjectSerializer.deserialize(response, "GetTerminalDetailsResponse");
    }
    
    public async getTerminalsUnderAccount(request: GetTerminalsUnderAccountRequest): Promise<GetTerminalsUnderAccountResponse> {
        const response = await getJsonResponse<GetTerminalsUnderAccountRequest, GetTerminalsUnderAccountResponse>(
            this._getTerminalsUnderAccount,
            request,
        );
        return ObjectSerializer.deserialize(response, "GetTerminalsUnderAccountResponse");
    }
}

export default TerminalManagement;
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { AssignTerminalsRequest } from "../typings/terminalManagement/assignTerminalsRequest";
import { AssignTerminalsResponse } from "../typings/terminalManagement/assignTerminalsResponse";
import { FindTerminalRequest } from "../typings/terminalManagement/findTerminalRequest";
import { FindTerminalResponse } from "../typings/terminalManagement/findTerminalResponse";
import { GetStoresUnderAccountRequest } from "../typings/terminalManagement/getStoresUnderAccountRequest";
import { GetStoresUnderAccountResponse } from "../typings/terminalManagement/getStoresUnderAccountResponse";
import { GetTerminalDetailsRequest } from "../typings/terminalManagement/getTerminalDetailsRequest";
import { GetTerminalDetailsResponse } from "../typings/terminalManagement/getTerminalDetailsResponse";
import { GetTerminalsUnderAccountRequest } from "../typings/terminalManagement/getTerminalsUnderAccountRequest";
import { GetTerminalsUnderAccountResponse } from "../typings/terminalManagement/getTerminalsUnderAccountResponse";
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

    public assignTerminals(request: AssignTerminalsRequest): Promise<AssignTerminalsResponse> {
        return getJsonResponse<AssignTerminalsRequest, AssignTerminalsResponse>(
            this._assignTerminals,
            request,
        );
    }
    
    public findTerminal(request: FindTerminalRequest): Promise<FindTerminalResponse> {
        return getJsonResponse<FindTerminalRequest, FindTerminalResponse>(
            this._findTerminal,
            request,
        );
    }
    
    public getStoresUnderAccount(request: GetStoresUnderAccountRequest): Promise<GetStoresUnderAccountResponse> {
        return getJsonResponse<GetStoresUnderAccountRequest, GetStoresUnderAccountResponse>(
            this._getStoresUnderAccount,
            request,
        );
    }
    
    public getTerminalDetails(request: GetTerminalDetailsRequest): Promise<GetTerminalDetailsResponse> {
        return getJsonResponse<GetTerminalDetailsRequest, GetTerminalDetailsResponse>(
            this._getTerminalDetails,
            request,
        );
    }
    
    public getTerminalsUnderAccount(request: GetTerminalsUnderAccountRequest): Promise<GetTerminalsUnderAccountResponse> {
        return getJsonResponse<GetTerminalsUnderAccountRequest, GetTerminalsUnderAccountResponse>(
            this._getTerminalsUnderAccount,
            request,
        );
    }
}

export default TerminalManagement;
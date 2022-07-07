import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import {
  StoredValueBalanceCheckRequest,
  StoredValueBalanceCheckResponse,
  StoredValueBalanceMergeRequest,
  StoredValueBalanceMergeResponse,
  StoredValueIssueRequest,
  StoredValueIssueResponse,
  StoredValueLoadRequest,
  StoredValueLoadResponse,
  StoredValueStatusChangeRequest,
  StoredValueStatusChangeResponse,
  StoredValueVoidRequest,
  StoredValueVoidResponse,
} from "../typings/storedValue/models";
import ChangeStatus from "./resource/storedValue/changeStatus";
import Issue from "./resource/storedValue/issue";
import Load from "./resource/storedValue/load";
import CheckBalance from "./resource/storedValue/checkBalance";
import MergeBalance from "./resource/storedValue/mergeBalance";
import VoidTransaction from "./resource/storedValue/voidTransaction";

class StoredValue extends Service {

    private readonly _issue: Issue;
    private readonly _changeStatus: ChangeStatus;
    private readonly _load: Load;
    private readonly _checkBalance: CheckBalance;
    private readonly _mergebalance: MergeBalance;
    private readonly _voidTransaction: VoidTransaction;


    public constructor(client: Client) {
        super(client);
        this._issue = new Issue(this);
        this._changeStatus = new ChangeStatus(this);
        this._load = new Load(this);
        this._checkBalance = new CheckBalance(this);
        this._mergebalance = new MergeBalance(this);
        this._voidTransaction = new VoidTransaction(this);
    }

    public issue(request: StoredValueIssueRequest): Promise<StoredValueIssueResponse> {
        return getJsonResponse<StoredValueIssueRequest, StoredValueIssueResponse>(
            this._issue,
            request,
        );
    }

    public changeStatus(request: StoredValueStatusChangeRequest): Promise<StoredValueStatusChangeResponse> {
        return getJsonResponse<StoredValueStatusChangeRequest, StoredValueStatusChangeResponse>(
            this._changeStatus,
            request,
        );
    }

    public load(request: StoredValueLoadRequest): Promise<StoredValueLoadResponse> {
        return getJsonResponse<StoredValueLoadRequest, StoredValueLoadResponse>(
            this._load,
            request,
        );
    }

    public checkBalance(request: StoredValueBalanceCheckRequest): Promise<StoredValueBalanceCheckResponse> {
        return getJsonResponse<StoredValueBalanceCheckRequest, StoredValueBalanceCheckResponse>(
            this._checkBalance,
            request,
        );
    }

    public mergebalance(request: StoredValueBalanceMergeRequest): Promise<StoredValueBalanceMergeResponse> {
        return getJsonResponse<StoredValueBalanceMergeRequest, StoredValueBalanceMergeResponse>(
            this._mergebalance,
            request,
        );
    }

    public voidTransaction(request: StoredValueVoidRequest): Promise<StoredValueVoidResponse> {
        return getJsonResponse<StoredValueVoidRequest, StoredValueVoidResponse>(
            this._voidTransaction,
            request,
        );
    }
}

export default StoredValue;

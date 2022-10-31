import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { TransferInfo, Transfer, Transaction, TransactionSearchResponse, ObjectSerializer } from "../typings/transfer/models";
import TransfersResource from "./resource/TransfersResource";

class Transfers extends Service {

    private readonly _transfersResource;
    private readonly _listTransactionsResource;

    public constructor(client: Client) {
        super(client);
        this._transfersResource = new TransfersResource(this, "/transfers");
        this._listTransactionsResource = new TransfersResource(this, "/transactions");
    }

    public async transfers(request: TransferInfo) : Promise<Transfer> {
        const response = await getJsonResponse<TransferInfo, Transfer>(
            this._transfersResource,
            request,
            {method: "POST"}
        );
        return ObjectSerializer.deserialize(response, "Transfer");
    }

    public async getTransaction(id: string): Promise<Transaction> {
        const resource = new TransfersResource(this, `/transactions/${id}`);
        const response = await getJsonResponse<string, Transaction>(
            resource,
            "",
            { method: "GET"}
        );
        return ObjectSerializer.deserialize(response, "Transaction");
    }

    public async listTransactions(): Promise<TransactionSearchResponse> {
        const response = await getJsonResponse<string, TransactionSearchResponse>(
            this._listTransactionsResource,
            "",
            { method: "GET"}
        );
        return ObjectSerializer.deserialize(response, "TransactionSearchResponse");
    }
}

export default Transfers;

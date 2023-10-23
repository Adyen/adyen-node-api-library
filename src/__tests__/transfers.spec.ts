import nock from "nock";
import { createClient } from "../__mocks__/base";
import { transfersSuccess, getTransactionSuccess, listTransactionsSuccess } from "../__mocks__/transfers/responses";
import TransfersAPI from "../services/transfers";
import Client from "../client";
import {transfers} from "../typings";

let client: Client;
let transfersAPI: TransfersAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    transfersAPI = new TransfersAPI(client);
    scope = nock("https://balanceplatform-api-test.adyen.com/btl/v4");
});

afterEach(() => {
    nock.cleanAll();
});

describe("Transfers", (): void => {
    test("should transfer fund", async (): Promise<void> => {
        scope.post("/transfers")
        .reply(200, transfersSuccess);
        const request = new transfers.TransferInfo();
        request.amount = { currency: "EUR", value: 1000};
        request.category = transfers.TransferInfo.CategoryEnum.Bank;
        request.counterparty = {
            balanceAccountId: "123",
            transferInstrumentId: "transfer_id",
            bankAccount: {
                accountHolder: {
                    fullName: "Wally Bizzle"
                },
                accountIdentification: {
                    iban: "NLRABO12321",
                    type: transfers.IbanAccountIdentification.TypeEnum.Iban
                }
            },
            
        };
        const response: transfers.Transfer =  await transfersAPI.TransfersApi.transferFunds(request);
        expect(response.id).toEqual("1W1UG35U8A9J5ZLG");
    });

    test("should get transaction", async (): Promise<void> => {
        scope.get("/transactions/123")
        .reply(200, getTransactionSuccess);
        const response: transfers.Transaction = await transfersAPI.TransactionsApi.getTransaction("123");
        expect(response.id).toEqual("IZK7C25U7DYVX03Y");
    });

    test("should list transactions", async (): Promise<void> => {
        scope.get("/transactions")
        .reply(200, listTransactionsSuccess);
        const response: transfers.TransactionSearchResponse = await transfersAPI.TransactionsApi.getAllTransactions();
        expect(response.data?.length).toEqual(3);
        if(response.data && response.data?.length > 0) {
            expect(response?.data[0]?.id).toEqual("1VVF0D5U66PIUIVP");
        } else {
            fail();
        }
    });
});
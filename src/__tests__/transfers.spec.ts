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

    test("should get transfer", async (): Promise<void> => {
        scope.get("/transfers/123")
        .reply(200, transfersSuccess);
        const response: transfers.TransferData = await transfersAPI.TransfersApi.getTransfer("123",);
        expect(response.id).toEqual("1W1UG35U8A9J5ZLG");
    });

    test("should list transfers", async (): Promise<void> => {
        const createdSince = new Date(Date.UTC(2023, 11, 12, 0, 0, 0)); // 12-12-2023 December is month 11
        const createdUntil = new Date(Date.UTC(2023, 11, 13, 0, 0, 0)); // 13-12-2023 December is month 11
    
        scope
          .get("/transfers")
          .query({
            balancePlatform: "platform",
            createdSince: createdSince.toISOString(),
            createdUntil: createdUntil.toISOString(),
          })
          .reply(200, listTransactionsSuccess);
    
        const response: transfers.FindTransfersResponse = await transfersAPI.TransfersApi.getAllTransfers(
            createdSince,
            createdUntil,
            "platform",
            undefined,
            undefined,
            undefined,
            undefined
        );
    
        expect(response.data?.length).toEqual(3);
        if (response.data && response.data.length > 0) {
            expect(response.data[0].id).toEqual("1VVF0D5U66PIUIVP");
        } else {
            fail();
        }
    });


    test("should get transaction", async (): Promise<void> => {
        scope.get("/transactions/123")
        .reply(200, getTransactionSuccess);
        const response: transfers.Transaction = await transfersAPI.TransactionsApi.getTransaction("123",);
        expect(response.id).toEqual("IZK7C25U7DYVX03Y");
    });

    test("should list transactions", async (): Promise<void> => {
        const createdSince = new Date(Date.UTC(2023, 11, 12, 0, 0, 0)); // 12-12-2023 December is month 11
        const createdUntil = new Date(Date.UTC(2023, 11, 13, 0, 0, 0)); // 13-12-2023 December is month 11
    
        scope
          .get("/transactions")
          .query({
            balancePlatform: "platform",
            createdSince: createdSince.toISOString(),
            createdUntil: createdUntil.toISOString(),
          })
          .reply(200, listTransactionsSuccess);
    
        const response: transfers.TransactionSearchResponse = await transfersAPI.TransactionsApi.getAllTransactions(
            createdSince,
            createdUntil,
            "platform",
            undefined,
            undefined,
            undefined,
            undefined
        );
    
        expect(response.data?.length).toEqual(3);
        if (response.data && response.data.length > 0) {
            expect(response.data[0].id).toEqual("1VVF0D5U66PIUIVP");
        } else {
            fail();
        }
    });

});
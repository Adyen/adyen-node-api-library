import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import { CapitalAPI } from "../services";

let client: Client;
let capitalApi: CapitalAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://balanceplatform-api-test.adyen.com/capital/v1");
    capitalApi = new CapitalAPI(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("GrantAccountsApi", (): void => {
    it("should get grant account", async (): Promise<void> => {
        scope.get("/grantAccounts/CG00000000000000000000001")
            .reply(200, {
                "id": "CG00000000000000000000001",
                "fundingBalanceAccountId": "BA00000000000000000000001",
                "limits": [
                  {
                    "amount": {
                      "currency": "EUR",
                      "value": 100000
                    }
                  }
                ],
                "balances": [
                  {
                    "currency": "EUR",
                    "principal": 10000,
                    "fee": 1000,
                    "total": 11000
                  }
                ]
            });

        const response = await capitalApi.GrantAccountsApi.getGrantAccountInformation("CG00000000000000000000001");

        expect(response.id).toBe("CG00000000000000000000001");
        expect(response.fundingBalanceAccountId).toBe("BA00000000000000000000001");
        expect(response.limits?.length).toBe(1);
        expect(response.balances?.length).toBe(1);
    });
});

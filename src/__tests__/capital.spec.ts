
import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import { CapitalAPI } from "../services";
import { Types } from "..";

// Mock responses from src/__mocks__/capital/
const getGrantSuccess = {
    "id": "GR00000000000000000000001",
    "grantAccountId": "CG00000000000000000000001",
    "grantOfferId": "GO00000000000000000000001",
    "counterparty": {
      "accountHolderId": "AH00000000000000000000001",
      "balanceAccountId": "BA00000000000000000000001"
    },
    "amount": {
      "currency": "EUR",
      "value": 10000
    },
    "balances": {
      "currency": "EUR",
      "principal": 10000,
      "fee": 1000,
      "total": 11000
    },
    "status": {
      "code": "Active"
    }
  };

const grantsSuccess = {
    "grants": [
      {
        "id": "GR00000000000000000000001",
        "grantAccountId": "CG00000000000000000000001",
        "grantOfferId": "GO00000000000000000000001",
        "counterparty": {
          "accountHolderId": "AH00000000000000000000001",
          "balanceAccountId": "BA00000000000000000000001"
        },
        "amount": {
          "currency": "EUR",
          "value": 10000
        },
        "balances": {
          "currency": "EUR",
          "principal": 10000,
          "fee": 1000,
          "total": 11000
        },
        "status": {
          "code": "Active"
        }
      }
    ]
  };

const requestGrantSuccess = {
    "id": "GR00000000000000000000001",
    "grantAccountId": "CG00000000000000000000001",
    "grantOfferId": "0000000000000001",
    "counterparty": {
      "accountHolderId": "AH00000000000000000000001",
      "balanceAccountId": "BA00000000000000000000001"
    },
    "amount": {
      "currency": "EUR",
      "value": 1000000
    },
    "fee": {
      "amount": {
        "value": 120000,
        "currency": "EUR"
      }
    },
    "balances":
      {
        "currency": "EUR",
        "fee": 120000,
        "principal": 1000000,
        "total": 1120000
      }
    ,
    "repayment": {
      "basisPoints": 1400
    },
    "status": {
      "code": "Pending"
    }
  };

const getGrantDisbursementSuccess = {
    "id": "DI00000000000000000000001",
    "grantId": "GR00000000000000000000001",
    "accountHolderId": "AH00000000000000000000001",
    "balanceAccountId": "BA00000000000000000000001",
    "amount": {
      "currency": "EUR",
      "value": 10000
    },
    "fee": {
      "amount": {
        "currency": "EUR",
        "value": 1000
      }
    },
    "balances": {
      "currency": "EUR",
      "principal": 10000,
      "fee": 1000,
      "total": 11000
    },
    "repayment": {
      "basisPoints": 1000,
      "updateDescription": "string"
    }
  };

const getGrantDisbursementsSuccess = {
    "disbursements": [
      {
        "id": "DI00000000000000000000001",
        "grantId": "GR00000000000000000000001",
        "accountHolderId": "AH00000000000000000000001",
        "balanceAccountId": "BA00000000000000000000001",
        "amount": {
          "currency": "EUR",
          "value": 10000
        },
        "fee": {
          "amount": {
            "currency": "EUR",
            "value": 1000
          }
        },
        "balances": {
          "currency": "EUR",
          "principal": 10000,
          "fee": 1000,
          "total": 11000
        },
        "repayment": {
          "basisPoints": 1000,
          "updateDescription": "string"
        }
      }
    ]
  };

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

describe("Capital", () => {
    describe("GrantsApi", () => {
        it("should get a grant", async () => {
            const grantId = "GR00000000000000000000001";
            scope.get(`/grants/${grantId}`)
                .reply(200, getGrantSuccess);

            const response = await capitalApi.GrantsApi.getGrant(grantId);

            expect(response).toBeDefined();
            expect(response.id).toBe(grantId);
            expect(response.grantAccountId).toBe("CG00000000000000000000001");
            expect(response.grantOfferId).toBe("GO00000000000000000000001");
            expect(response.status?.code).toBe(Types.capital.Status.CodeEnum.Active);
            expect(response.balances).toEqual({
                currency: "EUR",
                principal: 10000,
                fee: 1000,
                total: 11000,
            });
            expect(response.counterparty).toEqual({
                accountHolderId: "AH00000000000000000000001",
                balanceAccountId: "BA00000000000000000000001",
            });
        });

        it("should get all grants", async () => {
            const counterpartyAccountHolderId = "GR00000000000000000000001";
            scope.get("/grants").query({ counterpartyAccountHolderId })
                .reply(200, grantsSuccess);

            const response = await capitalApi.GrantsApi.getAllGrants(counterpartyAccountHolderId);

            expect(response).toBeDefined();
            expect(response.grants?.length).toBe(1);
        });

        it("should throw an error if counterpartyAccountHolderId is not provided to getAllGrants", async () => {
            await expect(capitalApi.GrantsApi.getAllGrants(undefined as any)).rejects.toThrow();
        });

        it("should request a grant", async () => {
            scope.post("/grants")
                .reply(200, requestGrantSuccess);
            
            const grantInfo: Types.capital.GrantInfo = { grantAccountId: "GR00000000000000000000001", grantOfferId: "0000000000000001" };
            const response = await capitalApi.GrantsApi.requestGrant(grantInfo);

            expect(response).toBeDefined();
            expect(response.id).toBe("GR00000000000000000000001");
            expect(response.grantAccountId).toBe("CG00000000000000000000001");
            expect(response.grantOfferId).toBe("0000000000000001");
            expect(response.status?.code).toBe(Types.capital.Status.CodeEnum.Pending);
            expect(response.balances).toEqual({
                currency: "EUR",
                principal: 1000000,
                fee: 120000,
                total: 1120000,
            });
            expect(response.counterparty).toEqual({
                accountHolderId: "AH00000000000000000000001",
                balanceAccountId: "BA00000000000000000000001",
            });
        });

        it("should get a grant disbursement", async () => {
            const grantId = "GR00000000000000000000001";
            const disbursementId = "DI00000000000000000000001";
            scope.get(`/grants/${grantId}/disbursements/${disbursementId}`)
                .reply(200, getGrantDisbursementSuccess);

            const response = await capitalApi.GrantsApi.getGrantDisbursement(grantId, disbursementId);

            expect(response).toBeDefined();
            expect(response.id).toBe("DI00000000000000000000001");
            expect(response.grantId).toBe("GR00000000000000000000001");
            expect(response.accountHolderId).toBe("AH00000000000000000000001");
            expect(response.balanceAccountId).toBe("BA00000000000000000000001");
            expect(response.amount).toEqual({
                currency: "EUR",
                value: 10000,
            });
            expect(response.balances).toEqual({
                currency: "EUR",
                principal: 10000,
                fee: 1000,
                total: 11000,
            });
        });

        it("should get all grant disbursements", async () => {
            const grantId = "GR00000000000000000000001";
            scope.get(`/grants/${grantId}/disbursements`)
                .reply(200, getGrantDisbursementsSuccess);

            const response = await capitalApi.GrantsApi.getAllGrantDisbursements(grantId);

            expect(response).toBeDefined();
            expect(response.disbursements?.length).toBe(1);
            expect(response.disbursements?.[0].id).toBe("DI00000000000000000000001");
        });
    });

    describe("GrantAccountsApi", () => {
        it("should get grant account information", async () => {
            const grantAccountId = "CG00000000000000000000001";
            const getGrantAccountSuccess = {
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
              };

            scope.get(`/grantAccounts/${grantAccountId}`)
                .reply(200, getGrantAccountSuccess);
            
            const response = await capitalApi.GrantAccountsApi.getGrantAccountInformation(grantAccountId);

            expect(response).toBeDefined();
            expect(response.id).toBe("CG00000000000000000000001");
            expect(response.fundingBalanceAccountId).toBe("BA00000000000000000000001");
            expect(response.limits?.length).toBe(1);
            expect(response.balances?.length).toBe(1);
        });

        it("should throw an error if id is not provided to getGrantAccountInformation", async () => {
            await expect(capitalApi.GrantAccountsApi.getGrantAccountInformation(undefined as any)).rejects.toThrow();
        });
    });

    describe("GrantOffersApi", () => {
        const grantOffersSuccess = {
            "grantOffers": [
                {
                    "id": "GO00000000000000000000001",
                    "amount": {
                        "currency": "EUR",
                        "value": 10000
                    },
                    "fee": {
                        "currency": "EUR",
                        "value": 100
                    },
                    "repayment": {
                        "currency": "EUR",
                        "value": 10100
                    }
                }
            ]
        };

        const getGrantOfferSuccess = {
            "id": "GO00000000000000000000001",
            "accountHolderId": "AH00000000000000000000001",
            "contractType": "cashAdvance",
            "amount": {
                "currency": "EUR",
                "value": 10000
            },
            "fee": {
                "amount": {
                    "currency": "EUR",
                    "value": 1000
                },
                "aprBasisPoints": 1200
            },
            "repayment": {
                "basisPoints": 1000,
                "term": {
                    "estimatedDays": 180,
                    "maximumDays": 365
                },
                "threshold": {
                    "amount": {
                        "currency": "EUR",
                        "value": 1000
                    }
                }
            },
            "startsAt": "2024-01-01T00:00:00Z",
            "expiresAt": "2024-01-31T23:59:59Z"
        };


        it("should get all grant offers with query param", async () => {
            const accountHolderId = "AH00000000000000000000001";
            scope.get("/grantOffers")
                .query({ accountHolderId })
                .reply(200, grantOffersSuccess);
            
            const response = await capitalApi.GrantOffersApi.getAllGrantOffers(accountHolderId);

            expect(response.grantOffers?.length).toBe(1);
            expect(response.grantOffers?.[0].id).toBe("GO00000000000000000000001");
        });

        it("should get a grant offer", async () => {
            const grantOfferId = "GO00000000000000000000001";
            scope.get(`/grantOffers/${grantOfferId}`)
                .reply(200, getGrantOfferSuccess);

            const response = await capitalApi.GrantOffersApi.getGrantOffer(grantOfferId);

            expect(response).toBeDefined();
            expect(response.id).toBe("GO00000000000000000000001");
            expect(response.accountHolderId).toBe("AH00000000000000000000001");
            expect(response.amount?.value).toBe(10000);
        });

        it("should throw an error if grantOfferId is not provided to getGrantOffer", async () => {
            await expect(capitalApi.GrantOffersApi.getGrantOffer(undefined as any)).rejects.toThrow();
        });
    });
});


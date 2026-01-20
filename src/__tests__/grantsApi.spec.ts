import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import { CapitalAPI } from "../services";
import { Types } from "..";

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

describe("GrantsApi", (): void => {
    it("should get grant", async (): Promise<void> => {
        scope.get("/grants/GR00000000000000000000001")
            .reply(200, {
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
            });

        const response = await capitalApi.GrantsApi.getGrant("GR00000000000000000000001");

        expect(response.id).toBe("GR00000000000000000000001");
        expect(response.grantAccountId).toBe("CG00000000000000000000001");
        expect(response.status?.code).toBe(Types.capital.Status.CodeEnum.Active);
    });

    it("should get all grants", async (): Promise<void> => {
        scope.get("/grants")
            .query({ counterpartyAccountHolderId: "AH00000000000000000000001" })
            .reply(200, {
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
            });

        const response = await capitalApi.GrantsApi.getAllGrants("AH00000000000000000000001");

        expect(response.grants?.length).toBe(1);
        expect(response.grants?.[0].id).toBe("GR00000000000000000000001");
    });

    it("should request grant", async (): Promise<void> => {
        scope.post("/grants")
            .reply(200, {
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
                "balances": {
                    "currency": "EUR",
                    "fee": 120000,
                    "principal": 1000000,
                    "total": 1120000
                },
                "repayment": {
                    "basisPoints": 1400
                },
                "status": {
                    "code": "Pending"
                }
            });

        const minimalGrantInfo: Types.capital.GrantInfo = {
            grantAccountId: "GR00000000000000000000001"
        } as Types.capital.GrantInfo;

        const response = await capitalApi.GrantsApi.requestGrant(minimalGrantInfo);

        expect(response.id).toBe("GR00000000000000000000001");
        expect(response.status?.code).toBe(Types.capital.Status.CodeEnum.Pending);
    });

    it("should get grant disbursement", async (): Promise<void> => {
        scope.get("/grants/GR00000000000000000000001/disbursements/DI00000000000000000000001")
            .reply(200, {
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
            });

        const response = await capitalApi.GrantsApi.getGrantDisbursement("GR00000000000000000000001", "DI00000000000000000000001");

        expect(response.id).toBe("DI00000000000000000000001");
        expect(response.grantId).toBe("GR00000000000000000000001");
    });

    it("should get all grant disbursements", async (): Promise<void> => {
        scope.get("/grants/GR00000000000000000000001/disbursements")
            .reply(200, {
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
            });

        const response = await capitalApi.GrantsApi.getAllGrantDisbursements("GR00000000000000000000001");

        expect(response.disbursements?.length).toBe(1);
        expect(response.disbursements?.[0].id).toBe("DI00000000000000000000001");
    });

    it("should update grant disbursement", async (): Promise<void> => {
        scope.patch("/grants/GR00000000000000000000001/disbursements/DI00000000000000000000001")
            .reply(200, {
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
                    "basisPoints": 1500,
                    "updateDescription": "string"
                }
            });

        const updateRequest: Types.capital.DisbursementInfoUpdate = {};

        const response = await capitalApi.GrantsApi.updateGrantDisbursement("GR00000000000000000000001", "DI00000000000000000000001", updateRequest);

        expect(response.id).toBe("DI00000000000000000000001");
        expect(response.repayment?.basisPoints).toBe(1500);
    });
});

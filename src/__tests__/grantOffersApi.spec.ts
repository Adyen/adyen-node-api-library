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

describe("GrantOffersApi", (): void => {
    it("should get all grant offers with query param", async (): Promise<void> => {
        scope.get("/grantOffers")
            .query({ accountHolderId: "AH00000000000000000000001" })
            .reply(200, {
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
            });

        const response = await capitalApi.GrantOffersApi.getAllGrantOffers("AH00000000000000000000001");

        expect(response.grantOffers?.length).toBe(1);
        expect(response.grantOffers?.[0].id).toBe("GO00000000000000000000001");
    });

    it("should get all grant offers without query param", async (): Promise<void> => {
        scope.get("/grantOffers")
            .reply(200, {
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
            });

        const response = await capitalApi.GrantOffersApi.getAllGrantOffers();

        expect(response.grantOffers?.length).toBe(1);
        expect(response.grantOffers?.[0].id).toBe("GO00000000000000000000001");
    });

    it("should get grant offer", async (): Promise<void> => {
        scope.get("/grantOffers/GO00000000000000000000001")
            .reply(200, {
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
            });

        const response = await capitalApi.GrantOffersApi.getGrantOffer("GO00000000000000000000001");

        expect(response.id).toBe("GO00000000000000000000001");
        expect(response.accountHolderId).toBe("AH00000000000000000000001");
        expect(response.amount?.value).toBe(10000);
    });
});

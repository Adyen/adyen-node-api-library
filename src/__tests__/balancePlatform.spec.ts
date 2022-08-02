import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import BalancePlatform from "../services/balancePlatform";
import { AccountHolder, AccountHolderInfo, PaginatedBalanceAccountsResponse, Phone } from "../typings/balancePlatform/models";

let client: Client;
let balancePlatform: BalancePlatform;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(`${client.config.balancePlatformEndpoint}/${Client.BALANCE_PLATFORM_API_VERSION}`);
    balancePlatform = new BalancePlatform(client);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Balance Platform", (): void => {
    describe("AccountHolders", (): void => {
        it("should support POST /accountHolders", async (): Promise<void> => {
            scope.post("/accountHolders")
                .reply(200, {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "contactDetails": {
                        "email": "s.hopper@example.com",
                        "phone": {
                            "number": "+315551231234",
                            "type": "Mobile"
                        },
                        "address": {
                            "city": "Amsterdam",
                            "country": "NL",
                            "street": "Brannan Street",
                            "houseNumberOrName": "274",
                            "postalCode": "1020CD"
                        }
                    },
                    "description": "S.Hopper - Staff 123",
                    "legalEntityId": "LE322KT223222D5FJ7THR293F",
                    "id": "AH3227C223222B5CMD2SXFKGT",
                    "status": "active"
                });
            const request: AccountHolderInfo = {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "description": "S.Hopper - Staff 123",
                "legalEntityId": "LE322KT223222D5FJ7THR293F",
                "contactDetails": {
                    "email": "s.hopper@example.com",
                    "phone": {
                        "number": "+315551231234",
                        "type": Phone.TypeEnum.Mobile
                    },
                    "address": {
                        "city": "Amsterdam",
                        "country": "NL",
                        "street": "Brannan Street",
                        "houseNumberOrName": "274",
                        "postalCode": "1020CD"
                    }
                }
            };

            const response: AccountHolder = await balancePlatform.AccountHolders.create(request);

            expect(response.id).toBe("AH3227C223222B5CMD2SXFKGT");
            expect(response.legalEntityId).toBe("LE322KT223222D5FJ7THR293F");
        });

        it("should support GET /accountHolders/{id}", async (): Promise<void> => {
            scope.get("/accountHolders/AH32272223222B5CM4MWJ892H")
                .reply(200, {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "contactDetails": {
                        "address": {
                            "city": "Amsterdam",
                            "country": "NL",
                            "houseNumberOrName": "274",
                            "postalCode": "1020CD",
                            "street": "Brannan Street"
                        },
                        "email": "s.hopper@example.com",
                        "phone": {
                            "number": "+315551231234",
                            "type": "Mobile"
                        }
                    },
                    "description": "S.Hopper - Staff 123",
                    "id": "AH32272223222B5CM4MWJ892H",
                    "status": "Active"
                });

            const response: AccountHolder = await balancePlatform.AccountHolders.retrieve("AH32272223222B5CM4MWJ892H");

            expect(response.id).toBe("AH32272223222B5CM4MWJ892H");
            expect(response.balancePlatform).toBe("YOUR_BALANCE_PLATFORM");
        });

        it("should support PATCH /accountHolders/{id}", async (): Promise<void> => {
            scope.patch("/accountHolders/AH32272223222B5CM4MWJ892H")
                .reply(200, {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "contactDetails": {
                        "address": {
                            "city": "Amsterdam",
                            "country": "NL",
                            "houseNumberOrName": "274",
                            "postalCode": "1020CD",
                            "street": "Brannan Street"
                        },
                        "email": "s.hopper@example.com",
                        "phone": {
                            "number": "+315551231234",
                            "type": "Mobile"
                        }
                    },
                    "description": "S.Hopper - Staff 123",
                    "id": "AH32272223222B5CM4MWJ892H",
                    "status": "Suspended"
                });
            const request: AccountHolder = {
                status: AccountHolder.StatusEnum.Suspended,
                // @TODO model requires ID and API endpoint too, keep it in a single place
                id: "ABC123",
                legalEntityId: "LE322KT223222D5FJ7THR293F"
            };

            const response: AccountHolder = await balancePlatform.AccountHolders.update('AH32272223222B5CM4MWJ892H', request);

            expect(response.status).toBe("Suspended");
        });

        it.only("should support GET /accountHolders/{id}/balanceAccounts", async (): Promise<void> => {
            scope.get("/accountHolders/AH32272223222B5CM4MWJ892H/balanceAccounts?limit=5&offset=10")
                .reply(200, {
                    "balanceAccounts": [
                        {
                            "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                            "defaultCurrencyCode": "EUR",
                            "id": "BA32272223222B59K6ZXHBFN6",
                            "status": "Active"
                        },
                        {
                            "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                            "defaultCurrencyCode": "EUR",
                            "id": "BA32272223222B59K72CKBFNJ",
                            "status": "Active"
                        },
                        {
                            "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                            "defaultCurrencyCode": "EUR",
                            "id": "BA32272223222B5BRR27B2M7G",
                            "status": "Active"
                        }
                    ],
                    "hasNext": true,
                    "hasPrevious": false
                });

            const response: PaginatedBalanceAccountsResponse = await balancePlatform.AccountHolders.list("AH32272223222B5CM4MWJ892H", {
                params: {
                    "limit": "5",
                    "offset": "10"
                }
            });

            expect(response.balanceAccounts[0].id).toBe("BA32272223222B59K6ZXHBFN6");
        });

    });
});
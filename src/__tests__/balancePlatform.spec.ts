import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import BalancePlatform from "../services/balancePlatform";
import * as models from "../typings/balancePlatform/models";
import { AccountHolderUpdate } from "../services/balancePlaftform/accountHolders";
import { SweepConfigurationV2Create, SweepConfigurationV2Update } from "../services/balancePlaftform/balanceAccounts";
import { TransactionRuleInfoUpdate } from "../services/balancePlaftform/transactionRules";


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
    const balanceAccountId = "BA32272223222B59CZ3T52DKZ";
    const sweepId = "SWPC4227C224555B5FTD2NT2JV4WN5";
    const paymentInstrumentId = "PI32272223222B5CMD3MQ3HXX";
    const paymentInstrumentGroupId = "PG3227C223222B5CMD3FJFKGZ";
    const transactionRuleId = "TR3227C223222B5FCB756DV9H";

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
            const request: models.AccountHolderInfo = {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "description": "S.Hopper - Staff 123",
                "legalEntityId": "LE322KT223222D5FJ7THR293F",
                "contactDetails": {
                    "email": "s.hopper@example.com",
                    "phone": {
                        "number": "+315551231234",
                        "type": models.Phone.TypeEnum.Mobile
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

            const response: models.AccountHolder = await balancePlatform.AccountHolders.create(request);

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

            const response: models.AccountHolder = await balancePlatform.AccountHolders.retrieve("AH32272223222B5CM4MWJ892H");

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
            const request: AccountHolderUpdate = {
                status: models.AccountHolder.StatusEnum.Suspended,
                legalEntityId: "LE322KT223222D5FJ7THR293F",
            };

            const response: models.AccountHolder = await balancePlatform.AccountHolders.update("AH32272223222B5CM4MWJ892H", request);

            expect(response.status).toBe("Suspended");
        });

        it("should support GET /accountHolders/{id}/balanceAccounts", async (): Promise<void> => {
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

            const response: models.PaginatedBalanceAccountsResponse = await balancePlatform.AccountHolders.listBalanceAccounts("AH32272223222B5CM4MWJ892H", {
                params: {
                    "limit": "5",
                    "offset": "10"
                }
            });

            expect(response.balanceAccounts[0].id).toBe("BA32272223222B59K6ZXHBFN6");
        });
    });

    describe("BalanceAccounts", (): void => {
        it("should support POST /balanceAccounts", async (): Promise<void> => {
            scope.post("/balanceAccounts")
                .reply(200, {
                    "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                    "defaultCurrencyCode": "EUR",
                    "reference": "S.Hopper - Main balance account",
                    "balances": [
                        {
                            "available": 0,
                            "balance": 0,
                            "currency": "EUR",
                            "reserved": 0
                        }
                    ],
                    "id": balanceAccountId,
                    "status": "active"
                });
            const request: models.BalanceAccountInfo = {
                "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                "description": "S.Hopper - Main balance account"
            };

            const response: models.BalanceAccount = await balancePlatform.BalanceAccounts.create(request);

            expect(response.id).toBe(balanceAccountId);
        });

        it("should support GET /balanceAccounts/{balanceAccountId}/sweeps", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/sweeps?limit=5&offset=10`)
                .reply(200, {
                    "hasNext": false,
                    "hasPrevious": false,
                    "sweeps": [
                        {
                            "id": sweepId,
                            "schedule": {
                                "type": "daily"
                            },
                            "status": "active",
                            "targetAmount": {
                                "currency": "EUR",
                                "value": 0
                            },
                            "triggerAmount": {
                                "currency": "EUR",
                                "value": 0
                            },
                            "type": "push",
                            "counterparty": {
                                "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                            },
                            "currency": "EUR"
                        }
                    ]
                });

            const response: models.BalanceSweepConfigurationsResponse = await balancePlatform.BalanceAccounts.listSweeps(balanceAccountId, {
                params: {
                    "limit": "5",
                    "offset": "10"
                }
            });

            expect(response.hasNext).toBeFalsy();
            expect(response.sweeps.length).toBe(1);
        });

        it("should support POST /balanceAccounts/{balanceAccountId}/sweeps", async (): Promise<void> => {
            scope.post(`/balanceAccounts/${balanceAccountId}/sweeps`)
                .reply(200, {
                    "id": sweepId,
                    "counterparty": {
                        "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                    },
                    "triggerAmount": {
                        "currency": "EUR",
                        "value": 50000
                    },
                    "currency": "EUR",
                    "schedule": {
                        "type": "balance"
                    },
                    "type": "pull",
                    "status": "active"
                });
            const request: SweepConfigurationV2Create = {
                "counterparty": {
                    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                },
                "triggerAmount": {
                    "currency": "EUR",
                    "value": 50000
                },
                "currency": "EUR",
                "schedule": {
                    "type": models.SweepSchedule.TypeEnum.Balance
                },
                "type": models.SweepConfigurationV2.TypeEnum.Pull,
                "status": models.SweepConfigurationV2.StatusEnum.Active
            };

            const response: models.SweepConfigurationV2 = await balancePlatform.BalanceAccounts.createSweep(balanceAccountId, request);

            expect(response.id).toBe(sweepId);
            expect(response.triggerAmount!.value).toBe(50000);
        });

        it("should support DELETE /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}", async (): Promise<void> => {
            scope.delete(`/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`).reply(204);

            await balancePlatform.BalanceAccounts.deleteSweep(balanceAccountId, sweepId);
        });

        it("should support GET /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`)
                .reply(200, {
                    "id": sweepId,
                    "schedule": {
                        "type": "daily"
                    },
                    "status": "active",
                    "targetAmount": {
                        "currency": "EUR",
                        "value": 0
                    },
                    "triggerAmount": {
                        "currency": "EUR",
                        "value": 0
                    },
                    "type": "push",
                    "counterparty": {
                        "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                    },
                    "currency": "EUR"
                });

            const response: models.SweepConfigurationV2 = await balancePlatform.BalanceAccounts.retrieveSweep(balanceAccountId, sweepId);

            expect(response.id).toBe(sweepId);
            expect(response.status).toBe("active");
        });

        it("should support PATCH /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}", async (): Promise<void> => {
            scope.patch(`/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`)
                .reply(200, {
                    "id": sweepId,
                    "counterparty": {
                        "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                    },
                    "triggerAmount": {
                        "currency": "EUR",
                        "value": 50000
                    },
                    "currency": "EUR",
                    "schedule": {
                        "type": "balance"
                    },
                    "type": "pull",
                    "status": "inactive"
                });
            const request: SweepConfigurationV2Update = {
                "status": models.SweepConfigurationV2.StatusEnum.Inactive
            };

            const response: models.SweepConfigurationV2 = await balancePlatform.BalanceAccounts.updateSweep(balanceAccountId, sweepId, request);

            expect(response.status).toBe("inactive");
        });

        it("should support GET /balanceAccounts/{id}", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}`)
                .reply(200, {
                    "accountHolderId": "AH32272223222B59K6RTQBFNZ",
                    "defaultCurrencyCode": "EUR",
                    "balances": [
                        {
                            "available": 0,
                            "balance": 0,
                            "currency": "EUR",
                            "reserved": 0
                        }
                    ],
                    "id": balanceAccountId,
                    "status": "Active"
                });

            const response: models.BalanceAccount = await balancePlatform.BalanceAccounts.retrieve(balanceAccountId);

            expect(response.id).toBe(balanceAccountId);
            expect(response.status).toBe("Active");
        });

        it("should support PATCH /balanceAccounts/{id}", async (): Promise<void> => {
            scope.patch(`/balanceAccounts/${balanceAccountId}`)
                .reply(200, {
                    "accountHolderId": "string",
                    "balances": [
                        {
                            "available": 0,
                            "balance": 0,
                            "currency": "string",
                            "reserved": 0
                        }
                    ],
                    "defaultCurrencyCode": "string",
                    "description": "Testing",
                    "id": "string",
                    "reference": "string",
                    "status": "active",
                    "timeZone": "Europe/Amsterdam"
                });
            const request: models.BalanceAccountUpdateRequest = {
                "description": "Testing",
                "status": models.BalanceAccountUpdateRequest.StatusEnum.Active,
                "timeZone": "Europe/Amsterdam"
            };

            const response: models.BalanceAccount = await balancePlatform.BalanceAccounts.update(balanceAccountId, request);

            expect(response.status).toBe("active");
            expect(response.timeZone).toBe("Europe/Amsterdam");
        });

        it("should support GET /balanceAccounts/{id}/paymentInstruments", async (): Promise<void> => {
            scope.get(`/balanceAccounts/${balanceAccountId}/paymentInstruments?limit=3&offset=6`)
                .reply(200, {
                    "hasNext": "true",
                    "hasPrevious": "false",
                    "paymentInstruments": [
                        {
                            "balanceAccountId": balanceAccountId,
                            "issuingCountryCode": "GB",
                            "status": "Active",
                            "type": "card",
                            "card": {
                                "brandVariant": "mc",
                                "cardholderName": "name",
                                "formFactor": "virtual",
                                "bin": "555544",
                                "expiration": {
                                    "month": "12",
                                    "year": "2022"
                                },
                                "lastFour": "2357",
                                "number": "************2357"
                            },
                            "id": "PI32272223222B59M5TM658DT"
                        },
                        {
                            "balanceAccountId": balanceAccountId,
                            "issuingCountryCode": "GB",
                            "status": "Active",
                            "type": "card",
                            "card": {
                                "brandVariant": "mc",
                                "cardholderName": "name",
                                "formFactor": "virtual",
                                "bin": "555544",
                                "expiration": {
                                    "month": "01",
                                    "year": "2023"
                                },
                                "lastFour": "8331",
                                "number": "************8331"
                            },
                            "id": "PI32272223222B59PXDGQDLSF"
                        }
                    ]
                });

            const response: models.PaginatedPaymentInstrumentsResponse = await balancePlatform.BalanceAccounts.listPaymentInstruments(balanceAccountId, {
                params: {
                    limit: "3",
                    offset: "6",
                }
            });

            expect(response.paymentInstruments.length).toBe(2);
            expect(response.paymentInstruments[0].id).toBe("PI32272223222B59M5TM658DT");
        });
    });

    describe("General", (): void => {
        it("should support GET /balancePlatforms/{id}", async (): Promise<void> => {
            scope.get(`/balancePlatforms/${balanceAccountId}`)
                .reply(200, {
                    "id": balanceAccountId,
                    "status": "Active"
                });

            const response: models.BalancePlatform = await balancePlatform.General.retrieve(balanceAccountId);

            expect(response.id).toBe(balanceAccountId);
            expect(response.status).toBe("Active");
        });

        it("should support GET /balancePlatforms/{id}/accountHolders", async (): Promise<void> => {
            scope.get(`/balancePlatforms/${balanceAccountId}/accountHolders`)
                .reply(200, {
                    "accountHolders": [
                        {
                            "contactDetails": {
                                "address": {
                                    "city": "Amsterdam",
                                    "country": "NL",
                                    "houseNumberOrName": "6",
                                    "postalCode": "12336750",
                                    "street": "Simon Carmiggeltstraat"
                                }
                            },
                            "description": "J. Doe",
                            "id": "AH32272223222B59DDWSCCMP7",
                            "status": "Active"
                        },
                        {
                            "contactDetails": {
                                "address": {
                                    "city": "Amsterdam",
                                    "country": "NL",
                                    "houseNumberOrName": "11",
                                    "postalCode": "12336750",
                                    "street": "Simon Carmiggeltstraat"
                                }
                            },
                            "description": "S. Hopper",
                            "id": "AH32272223222B59DJ7QBCMPN",
                            "status": "Active"
                        }
                    ],
                    "hasNext": "true",
                    "hasPrevious": "false"
                });

            const response: models.PaginatedAccountHoldersResponse = await balancePlatform.General.listAccountHolders(balanceAccountId);

            expect(response.accountHolders.length).toBe(2);
            expect(response.accountHolders[0].id).toBe("AH32272223222B59DDWSCCMP7");
        });
    });

    describe("PaymentInstruments", (): void => {
        it("should support POST /paymentInstruments", async (): Promise<void> => {
            scope.post("/paymentInstruments")
                .reply(200, {
                    "balanceAccountId": balanceAccountId,
                    "description": "S. Hopper - Main card",
                    "issuingCountryCode": "GB",
                    "status": "Active",
                    "type": "card",
                    "card": {
                        "brand": "mc",
                        "brandVariant": "mcdebit",
                        "cardholderName": "Simon Hopper",
                        "formFactor": "virtual",
                        "bin": "555544",
                        "cvc": "873",
                        "expiration": {
                            "month": "01",
                            "year": "2024"
                        },
                        "lastFour": "3548"
                    },
                    "id": paymentInstrumentId
                });
            const request: models.PaymentInstrumentInfo = {
                "type": models.PaymentInstrumentInfo.TypeEnum.Card,
                "issuingCountryCode": "NL",
                "balanceAccountId": balanceAccountId,
                "status": models.PaymentInstrumentInfo.StatusEnum.Inactive,
                "card": {
                    "formFactor": models.CardInfo.FormFactorEnum.Physical,
                    "brand": "mc",
                    "brandVariant": "mcdebit",
                    "cardholderName": "Sam Hopper",
                    "deliveryContact": {
                        "address": {
                            "city": "Amsterdam",
                            "country": "NL",
                            "stateOrProvince": "NH",
                            "line1": "Simon Carmiggeltstraat",
                            "line2": "6-50",
                            "postalCode": "1011DJ"
                        },
                        "name": {
                            "firstName": "Sam",
                            "lastName": "Hopper"
                        }
                    },
                    "configuration": {
                        "configurationProfileId": "YOUR_CONFIGURATION_PROFILE_ID"
                    },
                },
                "description": "S.Hopper - Main card"
            };

            const response: models.PaymentInstrument = await balancePlatform.PaymentInstruments.create(request);

            expect(response.id).toBe(paymentInstrumentId);
            expect(response.balanceAccountId).toBe(balanceAccountId);
        });

        it("should support GET /paymentInstruments/{id}", async (): Promise<void> => {
            scope.get(`/paymentInstruments/${paymentInstrumentId}`)
                .reply(200, {
                    "balanceAccountId": balanceAccountId,
                    "description": "S. Hopper - Main card",
                    "issuingCountryCode": "GB",
                    "status": "active",
                    "type": "card",
                    "card": {
                        "brand": "mc",
                        "brandVariant": "mcdebit",
                        "cardholderName": "Simon Hopper",
                        "formFactor": "virtual",
                        "bin": "555544",
                        "expiration": {
                            "month": "01",
                            "year": "2024"
                        },
                        "lastFour": "3548",
                        "number": "************3548"
                    },
                    "id": paymentInstrumentId
                });

            const response: models.PaymentInstrument = await balancePlatform.PaymentInstruments.retrieve(paymentInstrumentId);

            expect(response.id).toBe(paymentInstrumentId);
            expect(response.status).toBe("active");
        });

        it("should support PATCH /paymentInstruments/{id}", async (): Promise<void> => {
            scope.patch(`/paymentInstruments/${paymentInstrumentId}`)
                .reply(200, {
                    "balanceAccountId": "BA32272223222B5CM82WL892M",
                    "description": "S. Hopper - Main card",
                    "issuingCountryCode": "GB",
                    "status": "inactive",
                    "type": "card",
                    "card": {
                        "brand": "mc",
                        "brandVariant": "mcdebit",
                        "cardholderName": "Simon Hopper",
                        "formFactor": "virtual",
                        "bin": "555544",
                        "expiration": {
                            "month": "01",
                            "year": "2024"
                        },
                        "lastFour": "5785",
                        "number": "************5785"
                    },
                    "id": paymentInstrumentId
                });
            const request: models.PaymentInstrumentUpdateRequest = {
                "balanceAccountId": "BA32272223222B5CM82WL892M"
            };

            const response: models.PaymentInstrument = await balancePlatform.PaymentInstruments.update(paymentInstrumentId, request);

            expect(response.id).toBe(paymentInstrumentId);
            expect(response.balanceAccountId).toBe("BA32272223222B5CM82WL892M");
        });

        it("should support GET /paymentInstruments/{id}/transactionRules", async (): Promise<void> => {
            scope.get(`/paymentInstruments/${paymentInstrumentId}/transactionRules`)
                .reply(200, {
                    "transactionRules": [
                        {
                            "description": "Allow 5 transactions per month",
                            "interval": {
                                "type": "monthly"
                            },
                            "maxTransactions": 5,
                            "paymentInstrumentGroupId": paymentInstrumentGroupId,
                            "reference": "myRule12345",
                            "startDate": "2021-01-25T12:46:35.476629Z",
                            "status": "active",
                            "type": "velocity",
                            "id": "TR32272223222B5CMDGMC9F4F"
                        },
                        {
                            "amount": {
                                "currency": "EUR",
                                "value": 10000
                            },
                            "description": "Allow up to 100 EUR per month",
                            "interval": {
                                "type": "monthly"
                            },
                            "paymentInstrumentGroupId": paymentInstrumentGroupId,
                            "reference": "myRule16378",
                            "startDate": "2021-01-25T12:46:35.476629Z",
                            "status": "active",
                            "type": "velocity",
                            "id": "TR32272223222B5CMDGT89F4F"
                        }
                    ]
                });

            const response: models.TransactionRulesResponse = await balancePlatform.PaymentInstruments.listTransactionRules(paymentInstrumentId);

            expect(response.transactionRules!.length).toBe(2);
            expect(response.transactionRules![0].id).toBe("TR32272223222B5CMDGMC9F4F");
        });
    });

    describe("PaymentInstrumentGroups", (): void => {
        it("should support POST /paymentInstrumentGroups", async (): Promise<void> => {
            scope.post("/paymentInstrumentGroups")
                .reply(200, {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "txVariant": "mc",
                    "id": paymentInstrumentGroupId
                });
            const request: models.PaymentInstrumentGroupInfo = {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "txVariant": "mc"
            };

            const response: models.PaymentInstrumentGroup = await balancePlatform.PaymentInstrumentGroups.create(request);

            expect(response.id).toBe(paymentInstrumentGroupId);
            expect(response.txVariant).toBe("mc");
        });

        it("should support GET /paymentInstrumentGroups/{id}", async (): Promise<void> => {
            scope.get(`/paymentInstrumentGroups/${paymentInstrumentGroupId}`)
                .reply(200, {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "txVariant": "mc",
                    "id": paymentInstrumentGroupId
                });

            const response: models.PaymentInstrumentGroup = await balancePlatform.PaymentInstrumentGroups.retrieve(paymentInstrumentGroupId);

            expect(response.id).toBe(paymentInstrumentGroupId);
            expect(response.txVariant).toBe("mc");
        });

        it("should support GET /paymentInstrumentGroups/{id}/transactionRules", async (): Promise<void> => {
            scope.get(`/paymentInstrumentGroups/${paymentInstrumentGroupId}/transactionRules`)
                .reply(200, {
                    "transactionRules": [
                        {
                            "description": "Allow 5 transactions per month",
                            "interval": {
                                "type": "monthly"
                            },
                            "maxTransactions": 5,
                            "paymentInstrumentGroupId": paymentInstrumentGroupId,
                            "reference": "myRule12345",
                            "startDate": "2021-01-25T12:46:35.476629Z",
                            "status": "active",
                            "type": "velocity",
                            "id": "TR32272223222B5CMDGMC9F4F"
                        },
                        {
                            "amount": {
                                "currency": "EUR",
                                "value": 10000
                            },
                            "description": "Allow up to 100 EUR per month",
                            "interval": {
                                "type": "monthly"
                            },
                            "paymentInstrumentGroupId": paymentInstrumentGroupId,
                            "reference": "myRule16378",
                            "startDate": "2021-01-25T12:46:35.476629Z",
                            "status": "active",
                            "type": "velocity",
                            "id": "TR32272223222B5CMDGT89F4F"
                        }
                    ]
                });

            const response: models.TransactionRulesResponse = await balancePlatform.PaymentInstrumentGroups.listTransactionRules(paymentInstrumentGroupId);

            expect(response.transactionRules!.length).toBe(2);
            expect(response.transactionRules![0].id).toBe("TR32272223222B5CMDGMC9F4F");
        });
    });

    describe("TransactionRules", (): void => {
        it("should support POST /transactionRules", async (): Promise<void> => {
            scope.post("/transactionRules")
                .reply(200, {
                    "description": "Allow only point-of-sale transactions",
                    "entityKey": {
                        "entityReference": "PI3227C223222B5BPCMFXD2XG",
                        "entityType": "paymentInstrument"
                    },
                    "interval": {
                        "timeZone": "UTC",
                        "type": "perTransaction"
                    },
                    "outcomeType": "hardBlock",
                    "reference": "YOUR_REFERENCE_4F7346",
                    "requestType": "authorization",
                    "ruleRestrictions": {
                        "processingTypes": {
                            "operation": "noneMatch",
                            "value": [
                                "pos"
                            ]
                        }
                    },
                    "startDate": "2022-03-23T15:05:11.979433+01:00",
                    "status": "active",
                    "type": "blockList",
                    "id": transactionRuleId
                });
            const request: models.TransactionRuleInfo = {
                "description": "Allow only point-of-sale transactions",
                "reference": "YOUR_REFERENCE_4F7346",
                "entityKey": {
                    "entityType": "paymentInstrument",
                    "entityReference": "PI3227C223222B5BPCMFXD2XG"
                },
                "status": models.TransactionRuleInfo.StatusEnum.Active,
                "interval": {
                    "type": models.TransactionRuleInterval.TypeEnum.PerTransaction
                },
                "ruleRestrictions": {
                    "processingTypes": {
                        "operation": "noneMatch",
                        "value": [
                            models.ProcessingTypesRestriction.ValueEnum.Pos
                        ]
                    }
                },
                "type": models.TransactionRuleInfo.TypeEnum.BlockList
            };

            const response: models.TransactionRule = await balancePlatform.TransactionRules.create(request);

            expect(response.id).toBe(transactionRuleId);
            expect(response.status).toBe("active");
        });

        it("should support GET /transactionRules/{transactionRuleId}", async (): Promise<void> => {
            scope.get(`/transactionRules/${transactionRuleId}`)
                .reply(200, {
                    "transactionRule": {
                        "description": "Allow 5 transactions per month",
                        "interval": {
                            "type": "monthly"
                        },
                        "maxTransactions": 5,
                        "paymentInstrumentId": "PI3227C223222B59KGTXP884R",
                        "reference": "myRule12345",
                        "startDate": "2021-01-25T12:46:35.476629Z",
                        "status": "active",
                        "type": "velocity",
                        "id": transactionRuleId
                    }
                });

            const response: models.TransactionRuleResponse = await balancePlatform.TransactionRules.retrieve(transactionRuleId);

            expect(response.transactionRule!.id).toBe(transactionRuleId);
            expect(response.transactionRule!.type).toBe("velocity");
        });

        it("should support PATCH /transactionRules/{transactionRuleId}", async (): Promise<void> => {
            scope.patch(`/transactionRules/${transactionRuleId}`)
                .reply(200, {
                    "description": "Allow 5 transactions per month",
                    "interval": {
                        "type": "monthly"
                    },
                    "reference": "myRule12345",
                    "startDate": "2021-01-21T12:46:35.476629Z",
                    "status": "inactive",
                    "type": "velocity",
                    "id": transactionRuleId
                });
            const request: TransactionRuleInfoUpdate = {
                "status": models.TransactionRuleInfo.StatusEnum.Inactive
            };

            const response: models.TransactionRule = await balancePlatform.TransactionRules.update(transactionRuleId, request);

            expect(response.status).toBe("inactive");
            expect(response.reference).toBe("myRule12345");
        });

        it("should support DELETE /transactionRules/{transactionRuleId}", async (): Promise<void> => {
            scope.delete(`/transactionRules/${transactionRuleId}`)
                .reply(200, {
                    "amount": {
                        "currency": "EUR",
                        "value": 10000
                    },
                    "description": "Allow up to 100 EUR per month",
                    "interval": {
                        "type": "monthly"
                    },
                    "paymentInstrumentGroupId": "PG3227C223222B5CMD3FJFKGZ",
                    "reference": "myRule16378",
                    "startDate": "2021-01-25T12:46:35.476629Z",
                    "type": "velocity",
                    "id": transactionRuleId
                });

            const response: models.TransactionRule = await balancePlatform.TransactionRules.delete(transactionRuleId);

            expect(response.id).toBe(transactionRuleId);
        });
    });
});
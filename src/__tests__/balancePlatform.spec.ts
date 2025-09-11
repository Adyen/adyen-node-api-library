import nock from "nock";
import Client from "../client";
import { createClient } from "../__mocks__/base";
import BalancePlatform from "../services/balancePlatform";
import { balancePlatform } from "../typings";
import { IRequest } from "../typings/requestOptions";
import { BalanceWebhookSettingInfo } from "../typings/balancePlatform/balanceWebhookSettingInfo";
import { Target } from "../typings/balancePlatform/target";
import { TransferRouteRequest } from "../typings/balancePlatform/transferRouteRequest";
import { IbanAccountIdentification } from "../typings/balancePlatform/ibanAccountIdentification";
import { Condition } from "../typings/balancePlatform/condition";
import { Scope } from "../typings/balancePlatform/scope";
import { LimitStatus } from "../typings/balancePlatform/models";
import { TransferType } from "../typings/balancePlatform/transferType";

let client: Client;
let balancePlatformService: BalancePlatform;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock("https://balanceplatform-api-test.adyen.com/bcl/v2");
    balancePlatformService = new BalancePlatform(client);
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
    const transferLimitId = "TL3227C223222B5CMD3FJFKGZ";

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
            const request: balancePlatform.AccountHolderInfo = {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "description": "S.Hopper - Staff 123",
                "legalEntityId": "LE322KT223222D5FJ7THR293F",
                "contactDetails": {
                    "email": "s.hopper@example.com",
                    "phone": {
                        "number": "+315551231234",
                        "type": balancePlatform.Phone.TypeEnum.Mobile
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

            const response: balancePlatform.AccountHolder = await balancePlatformService.AccountHoldersApi.createAccountHolder(request);

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

            const response: balancePlatform.AccountHolder = await balancePlatformService.AccountHoldersApi.getAccountHolder("AH32272223222B5CM4MWJ892H");

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
            const request: balancePlatform.AccountHolder = {
                id: "AH32272223222B5CM4MWJ892H",
                status: balancePlatform.AccountHolder.StatusEnum.Suspended,
                legalEntityId: "LE322KT223222D5FJ7THR293F",
            };

            const response: balancePlatform.AccountHolder = await balancePlatformService.AccountHoldersApi.updateAccountHolder("AH32272223222B5CM4MWJ892H", request);

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
            const requestOptions: IRequest.Options = {
                params: {
                    limit: "5",
                    offset: "10"
                }
            };
            const response: balancePlatform.PaginatedBalanceAccountsResponse = await balancePlatformService.AccountHoldersApi.getAllBalanceAccountsOfAccountHolder("AH32272223222B5CM4MWJ892H", undefined, undefined, requestOptions);

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
            const request: balancePlatform.BalanceAccountInfo = {
                "accountHolderId": "AH32272223222B59K6ZKBBFNQ",
                "description": "S.Hopper - Main balance account"
            };

            const response: balancePlatform.BalanceAccount = await balancePlatformService.BalanceAccountsApi.createBalanceAccount(request);

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

            const response: balancePlatform.BalanceSweepConfigurationsResponse = await balancePlatformService.BalanceAccountsApi.getAllSweepsForBalanceAccount(balanceAccountId, undefined, undefined, {
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
            const request: balancePlatform.SweepConfigurationV2 = {
                "id": "SWEEP_ID",
                "counterparty": {
                    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                },
                "triggerAmount": {
                    "currency": "EUR",
                    "value": 50000
                },
                "currency": "EUR",
                "schedule": {
                    "type": balancePlatform.SweepSchedule.TypeEnum.Balance
                },
                "type": balancePlatform.SweepConfigurationV2.TypeEnum.Pull,
                "status": balancePlatform.SweepConfigurationV2.StatusEnum.Active
            };

            const response: balancePlatform.SweepConfigurationV2 = await balancePlatformService.BalanceAccountsApi.createSweep(balanceAccountId, request);

            expect(response.id).toBe(sweepId);
            expect(response.triggerAmount!.value).toBe(50000);
        });

        it("should support DELETE /balanceAccounts/{balanceAccountId}/sweeps/{sweepId}", async (): Promise<void> => {
            scope.delete(`/balanceAccounts/${balanceAccountId}/sweeps/${sweepId}`).reply(204);

            await balancePlatformService.BalanceAccountsApi.deleteSweep(balanceAccountId, sweepId);
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

            const response: balancePlatform.SweepConfigurationV2 = await balancePlatformService.BalanceAccountsApi.getSweep(balanceAccountId, sweepId);

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
            const request: balancePlatform.SweepConfigurationV2 = {
                "id": sweepId,
                "counterparty": {
                    "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                },
                "status": balancePlatform.SweepConfigurationV2.StatusEnum.Inactive,
                "currency": "EUR",
                "schedule": {
                    "type": balancePlatform.SweepSchedule.TypeEnum.Cron
                }
            };

            const response: balancePlatform.SweepConfigurationV2 = await balancePlatformService.BalanceAccountsApi.updateSweep(balanceAccountId, sweepId, request);

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

            const response: balancePlatform.BalanceAccount = await balancePlatformService.BalanceAccountsApi.getBalanceAccount(balanceAccountId);

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
            const request: balancePlatform.BalanceAccountUpdateRequest = {
                "description": "Testing",
                "status": balancePlatform.BalanceAccountUpdateRequest.StatusEnum.Active,
                "timeZone": "Europe/Amsterdam"
            };

            const response: balancePlatform.BalanceAccount = await balancePlatformService.BalanceAccountsApi.updateBalanceAccount(balanceAccountId, request);

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

            const response: balancePlatform.PaginatedPaymentInstrumentsResponse = await balancePlatformService.BalanceAccountsApi.getPaymentInstrumentsLinkedToBalanceAccount(balanceAccountId, undefined, undefined, undefined, {
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

            const response: balancePlatform.BalancePlatform = await balancePlatformService.PlatformApi.getBalancePlatform(balanceAccountId);

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

            const response: balancePlatform.PaginatedAccountHoldersResponse = await balancePlatformService.PlatformApi.getAllAccountHoldersUnderBalancePlatform(balanceAccountId);

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
            const request: balancePlatform.PaymentInstrumentInfo = {
                "type": balancePlatform.PaymentInstrumentInfo.TypeEnum.Card,
                "issuingCountryCode": "NL",
                "balanceAccountId": balanceAccountId,
                "status": balancePlatform.PaymentInstrumentInfo.StatusEnum.Inactive,
                "card": {
                    "formFactor": balancePlatform.CardInfo.FormFactorEnum.Physical,
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

            const response: balancePlatform.PaymentInstrument = await balancePlatformService.PaymentInstrumentsApi.createPaymentInstrument(request);

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

            const response: balancePlatform.PaymentInstrument = await balancePlatformService.PaymentInstrumentsApi.getPaymentInstrument(paymentInstrumentId);

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
            const request: balancePlatform.PaymentInstrumentUpdateRequest = {
                "balanceAccountId": "BA32272223222B5CM82WL892M"
            };

            const response: balancePlatform.PaymentInstrument = await balancePlatformService.PaymentInstrumentsApi.updatePaymentInstrument(paymentInstrumentId, request);

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

            const response: balancePlatform.TransactionRulesResponse = await balancePlatformService.PaymentInstrumentsApi.getAllTransactionRulesForPaymentInstrument(paymentInstrumentId);

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
            const request: balancePlatform.PaymentInstrumentGroupInfo = {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "txVariant": "mc"
            };

            const response: balancePlatform.PaymentInstrumentGroup = await balancePlatformService.PaymentInstrumentGroupsApi.createPaymentInstrumentGroup(request);

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

            const response: balancePlatform.PaymentInstrumentGroup = await balancePlatformService.PaymentInstrumentGroupsApi.getPaymentInstrumentGroup(paymentInstrumentGroupId);

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

            const response: balancePlatform.TransactionRulesResponse = await balancePlatformService.PaymentInstrumentGroupsApi.getAllTransactionRulesForPaymentInstrumentGroup(paymentInstrumentGroupId);

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
            const request: balancePlatform.TransactionRuleInfo = {
                "description": "Allow only point-of-sale transactions",
                "reference": "YOUR_REFERENCE_4F7346",
                "entityKey": {
                    "entityType": "paymentInstrument",
                    "entityReference": "PI3227C223222B5BPCMFXD2XG"
                },
                "status": balancePlatform.TransactionRuleInfo.StatusEnum.Active,
                "interval": {
                    "type": balancePlatform.TransactionRuleInterval.TypeEnum.PerTransaction
                },
                "ruleRestrictions": {
                    "processingTypes": {
                        "operation": "noneMatch",
                        "value": [
                            balancePlatform.ProcessingTypesRestriction.ValueEnum.Pos
                        ]
                    }
                },
                "type": balancePlatform.TransactionRuleInfo.TypeEnum.BlockList
            };

            const response: balancePlatform.TransactionRule = await balancePlatformService.TransactionRulesApi.createTransactionRule(request);

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

            const response: balancePlatform.TransactionRuleResponse = await balancePlatformService.TransactionRulesApi.getTransactionRule(transactionRuleId);

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
            const request: balancePlatform.TransactionRuleInfo = {
                "description": "Allow 5 transactions per month",
                "interval": {
                    "type": balancePlatform.TransactionRuleInterval.TypeEnum.Monthly
                },
                "entityKey": {

                },
                "ruleRestrictions": {

                },
                "reference": "myRule12345",
                "startDate": "2021-01-21T12:46:35.476629Z",
                "status": balancePlatform.TransactionRuleInfo.StatusEnum.Inactive,
                "type": balancePlatform.TransactionRuleInfo.TypeEnum.Velocity,
            };

            const response: balancePlatform.TransactionRule = await balancePlatformService.TransactionRulesApi.updateTransactionRule(transactionRuleId, request);

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

            const response: balancePlatform.TransactionRule = await balancePlatformService.TransactionRulesApi.deleteTransactionRule(transactionRuleId);

            expect(response.id).toBe(transactionRuleId);
        });
    });

    it("should support POST /validateBankAccountIdentification", async (): Promise<void> => {

        scope.post("/validateBankAccountIdentification")
            .reply(200);

        const request = {
            "accountIdentification":
            {
                "type": IbanAccountIdentification.TypeEnum.Iban,
                "iban": "NL91ABNA0417164300"
            }
        };

        await balancePlatformService.BankAccountValidationApi.validateBankAccountIdentification(request);
    });

    it("should support POST /transferRoutes/calculate with IBAN account identification", async (): Promise<void> => {
        const mockResponse = {
            "transferRoutes": [
                {
                    "country": "NL",
                    "currency": "USD",
                    "priority": "crossBorder",
                    "requirements": [
                        {
                            "description": "Amount of transfer must be at least 100, and no greater than 99999999999",
                            "max": 99999999999,
                            "min": 100,
                            "type": "amountMinMaxRequirement"
                        },
                        {
                            "description": "Country, street and city is required.",
                            "requiredAddressFields": [
                                "line1",
                                "city",
                                "country"
                            ],
                            "type": "addressRequirement"
                        },
                        {
                            "description": "Bank account identification type must be iban or numberAndBic",
                            "bankAccountIdentificationTypes": [
                                "iban",
                                "numberAndBic"
                            ],
                            "type": "bankAccountIdentificationTypeRequirement"
                        },
                        {
                            "issuingCountryCode": "NL",
                            "paymentInstrumentType": "BankAccount",
                            "type": "paymentInstrumentRequirement"
                        }
                    ]
                },
                {
                    "country": "NL",
                    "currency": "USD",
                    "priority": "wire",
                    "requirements": [
                        {
                            "description": "Amount of transfer must be at least 100, and no greater than 99999999999",
                            "max": 99999999999,
                            "min": 100,
                            "type": "amountMinMaxRequirement"
                        },
                        {
                            "description": "Country, street and city is required.",
                            "requiredAddressFields": [
                                "line1",
                                "city",
                                "country"
                            ],
                            "type": "addressRequirement"
                        },
                        {
                            "description": "Bank account identification type must be iban or numberAndBic",
                            "bankAccountIdentificationTypes": [
                                "iban",
                                "numberAndBic"
                            ],
                            "type": "bankAccountIdentificationTypeRequirement"
                        },
                        {
                            "issuingCountryCode": "NL",
                            "paymentInstrumentType": "BankAccount",
                            "type": "paymentInstrumentRequirement"
                        }
                    ]
                }
            ]
        };

        scope.post("/transferRoutes/calculate")
            .reply(200, mockResponse);

        const transferRouteRequest = {
            balancePlatform: "123456789",
            currency: "USD",
            category: TransferRouteRequest.CategoryEnum.Bank,
            counterparty: {
                bankAccount: {
                    accountIdentification: {
                        type: IbanAccountIdentification.TypeEnum.Iban,
                        iban: "NL91ABNA0417164300"
                    }
                }
            }
        };

        const response = await balancePlatformService.TransferRoutesApi.calculateTransferRoutes(transferRouteRequest);

        expect(response).toBeTruthy();
        expect(response.transferRoutes).toBeTruthy();
        expect(response.transferRoutes?.length).toBe(2);
    });

    it("should support GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings", async (): Promise<void> => {
        const balancePlatformId = "123456789";
        const webhookId = "WH00000001";

        const mockResponse = {
            "webhookSettings": [
                {
                    "id": "BWHS00000000000000000000000001",
                    "type": "balance",
                    "target": {
                        "type": "balancePlatform",
                        "id": "YOUR_BALANCE_PLATFORM"
                    },
                    "currency": "USD",
                    "status": "active"
                },
                {
                    "id": "BWHS00000000000000000000000002",
                    "type": "balance",
                    "target": {
                        "type": "balanceAccount",
                        "id": "BA00000000000000000LIABLE"
                    },
                    "currency": "USD",
                    "status": "active"
                }
            ]
        };

        scope.get(`/balancePlatforms/${balancePlatformId}/webhooks/${webhookId}/settings`)
            .reply(200, mockResponse);

        const response = await balancePlatformService.BalancesApi.getAllWebhookSettings(balancePlatformId, webhookId);

        expect(response).toBeTruthy();
        expect(response.webhookSettings).toBeTruthy();
        expect(response.webhookSettings?.length).toBe(2);
        // first element
        expect(response.webhookSettings![0].id).toBe("BWHS00000000000000000000000001");
        expect(response.webhookSettings![0].type).toBe("balance");
        // second element
        expect(response.webhookSettings![1].id).toBe("BWHS00000000000000000000000002");
        expect(response.webhookSettings![0].type).toBe("balance");
    });

    it("should support GET /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}", async (): Promise<void> => {
        const balancePlatformId = "123456789";
        const webhookId = "WH00000001";
        const settingId = "BWHS00000000000000000000000001";

        const mockResponse = {
            id: "BWHS00000000000000000000000001",
            type: BalanceWebhookSettingInfo.TypeEnum.Balance,
            target: {
                type: Target.TypeEnum.BalanceAccount,
                id: "YOUR_BALANCE_PLATFORM"
            },
            currency: "USD",
            status: BalanceWebhookSettingInfo.StatusEnum.Active
        };

        scope.get(`/balancePlatforms/${balancePlatformId}/webhooks/${webhookId}/settings/${settingId}`)
            .reply(200, mockResponse);

        const response = await balancePlatformService.BalancesApi.getWebhookSetting(balancePlatformId, webhookId, settingId);

        expect(response).toBeTruthy();
        expect(response.id).toBe("BWHS00000000000000000000000001");
        expect(response.currency).toBe("USD");
    });

    it("should support POST /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings", async (): Promise<void> => {
        const balancePlatformId = "123456789";
        const webhookId = "WH00000001";

        const mockResponse = {
            id: "BWHS00000000000000000000000001",
            type: BalanceWebhookSettingInfo.TypeEnum.Balance,
            target: {
                type: Target.TypeEnum.BalanceAccount,
                id: "BA00000000000000000LIABLE"
            },
            currency: "USD",
            status: BalanceWebhookSettingInfo.StatusEnum.Active,
            conditions: [
                {
                    balanceType: "available",
                    conditionType: "lessThan",
                    value: 50000
                }
            ]
        };

        scope.post(`/balancePlatforms/${balancePlatformId}/webhooks/${webhookId}/settings`)
            .reply(200, mockResponse);

        const request = {
            type: BalanceWebhookSettingInfo.TypeEnum.Balance,
            target: {
                type: Target.TypeEnum.BalanceAccount,
                id: "BA00000000000000000LIABLE"
            },
            currency: "USD",
            status: BalanceWebhookSettingInfo.StatusEnum.Active,
            conditions: [
                {
                    balanceType: Condition.BalanceTypeEnum.Available,
                    conditionType: Condition.ConditionTypeEnum.LessThan,
                    value: 50000
                }
            ]
        };

        const response = await balancePlatformService.BalancesApi.createWebhookSetting(balancePlatformId, webhookId, request);

        expect(response).toBeTruthy();
        expect(response.id).toBe("BWHS00000000000000000000000001");
        expect(response.currency).toBe("USD");
    });

    it("should support PATCH /balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}", async (): Promise<void> => {
        const balancePlatformId = "123456789";
        const webhookId = "WH00000001";
        const settingId = "BWHS00000000000000000000000001";

        const mockResponse = {
            id: "BWHS00000000000000000000000001",
            type: BalanceWebhookSettingInfo.TypeEnum.Balance,
            target: {
                type: Target.TypeEnum.BalanceAccount,
                id: "BA00000000000000000LIABLE"
            },
            currency: "USD",
            status: BalanceWebhookSettingInfo.StatusEnum.Active
        };

        scope.patch(`/balancePlatforms/${balancePlatformId}/webhooks/${webhookId}/settings/${settingId}`)
            .reply(200, mockResponse);

        const request = {
            type: BalanceWebhookSettingInfo.TypeEnum.Balance,
            target: {
                type: Target.TypeEnum.BalanceAccount,
                id: "BA00000000000000000LIABLE"
            },
            currency: "USD",
            status: BalanceWebhookSettingInfo.StatusEnum.Active
        };

        const response = await balancePlatformService.BalancesApi.updateWebhookSetting(balancePlatformId, webhookId, settingId, request);

        expect(response).toBeTruthy();
        expect(response.id).toBe("BWHS00000000000000000000000001");
        expect(response.currency).toBe("USD");
    });

    describe("TransferLimitsBalanceAccountLevelApi", (): void => {

        it("should support POST /balanceAccounts/{id}/transferLimits/approve", async (): Promise<void> => {
            scope.post(`/balanceAccounts/${balanceAccountId}/transferLimits/approve`)
                .reply(204);
            const request: balancePlatform.ApproveTransferLimitRequest = {
                transferLimitIds: [transferLimitId]
            };

            await balancePlatformService.TransferLimitsBalanceAccountLevelApi.approvePendingTransferLimits(balanceAccountId, request);
        });

        it("should support POST /balanceAccounts/{id}/transferLimits", async (): Promise<void> => {

            const mockResponse = {
                "amount": {
                    "value": 10000,
                    "currency": "EUR"
                },
                "id": "TRLI00000000000000000000000001",
                "scope": "perTransaction",
                "reference": "Your reference for the transfer limit",
                "scaInformation": {
                    "status": "pending"
                },
                "startsAt": "2025-08-15T06:36:20+01:00",
                "endsAt": "2026-08-13T23:00:00+01:00",
                "limitStatus": "pendingSCA",
                "transferType": "all"
            };

            scope.post(`/balanceAccounts/${balanceAccountId}/transferLimits`)
                .reply(200, mockResponse);

            const request: balancePlatform.CreateTransferLimitRequest = {
                "amount": {
                    "currency": "EUR",
                    "value": 10000
                },
                "reference": "Your reference for the transfer limit",
                "scaInformation": {
                    "scaOnApproval": true
                },
                "scope": Scope.PerTransaction,
                "startsAt": new Date("2025-08-15T06:36:20+01:00"),
                "endsAt": new Date("2026-08-14T00:00:00+01:00"),
                "transferType": TransferType.All
            };

            const response: balancePlatform.TransferLimit = await balancePlatformService.TransferLimitsBalanceAccountLevelApi.createTransferLimit(balanceAccountId, request);

            expect(response.id).toBe("TRLI00000000000000000000000001");
            expect(response.limitStatus).toBe("pendingSCA");
            expect(response.amount.value).toBe(10000);
        });

        it("should support DELETE /balanceAccounts/{id}/transferLimits/{transferLimitId}", async (): Promise<void> => {
            scope.delete(`/balanceAccounts/${balanceAccountId}/transferLimits/${transferLimitId}`).reply(204);

            await balancePlatformService.TransferLimitsBalanceAccountLevelApi.deletePendingTransferLimit(transferLimitId, balanceAccountId);
        });

        it("should support GET /balanceAccounts/{id}/transferLimits/current", async (): Promise<void> => {

            const mockResponse = {
                "transferLimits": [
                    {
                        "id": transferLimitId,
                        "limit": {
                            "currency": "EUR",
                            "value": 10000
                        },
                        "type": "maxUsage",
                        "counterparty": {
                            "balanceAccountId": "BA3227C223222B5CMD3FJFKGZ"
                        }
                    }
                ]
            }

            scope.get(`/balanceAccounts/${balanceAccountId}/transferLimits/current?scope=perTransaction&transferType=instant`)
                .reply(200, mockResponse);

            const response: balancePlatform.TransferLimitListResponse = await balancePlatformService.TransferLimitsBalanceAccountLevelApi.getCurrentTransferLimits(balanceAccountId, balancePlatform.Scope.PerTransaction, balancePlatform.TransferType.Instant);

            expect(response.transferLimits.length).toBe(1);
            expect(response.transferLimits[0].id).toBe(transferLimitId);
        });

        it("should support GET /balanceAccounts/{id}/transferLimits/{transferLimitId}", async (): Promise<void> => {

            const mockResponse = {
                "id": transferLimitId,
                "limit": {
                    "currency": "EUR",
                    "value": 10000
                },
                "type": "maxUsage",
                "counterparty": {
                    "balanceAccountId": "BA3227C223222B5CMD3FJFKGZ"
                }
            }

            scope.get(`/balanceAccounts/${balanceAccountId}/transferLimits/${transferLimitId}`)
                .reply(200, mockResponse);

            const response: balancePlatform.TransferLimit = await balancePlatformService.TransferLimitsBalanceAccountLevelApi.getSpecificTransferLimit(transferLimitId, balanceAccountId);

            expect(response.id).toBe(transferLimitId);
        });

        it("should support GET /balanceAccounts/{id}/transferLimits", async (): Promise<void> => {

            const mockResponse = {
                "transferLimits": [
                    {
                        "id": transferLimitId,
                    }
                ]
            }
            scope.get(`/balanceAccounts/${balanceAccountId}/transferLimits?scope=perTransaction&transferType=instant&status=active`)
                .reply(200, mockResponse);

            const response: balancePlatform.TransferLimitListResponse = await balancePlatformService.TransferLimitsBalanceAccountLevelApi.getTransferLimits(balanceAccountId, balancePlatform.Scope.PerTransaction, balancePlatform.TransferType.Instant, balancePlatform.LimitStatus.Active);

            expect(response.transferLimits.length).toBe(1);
            expect(response.transferLimits[0].id).toBe(transferLimitId);
        });
    });

    describe("TransferLimitsBalancePlatformLevelApi", (): void => {
        const balancePlatformId = "BP32272223222B59CZ3T52DKZ";

        it("should support POST /balancePlatforms/{id}/transferLimits", async (): Promise<void> => {
            const mockResponse = {
                "amount": {
                    "value": 10000,
                    "currency": "EUR"
                },
                "id": "TRLI00000000000000000000000001",
                "scope": "perTransaction",
                "reference": "Your reference for the transfer limit",
                "scaInformation": {
                    "status": "pending"
                },
                "startsAt": "2025-08-15T06:36:20+01:00",
                "endsAt": "2026-08-13T23:00:00+01:00",
                "limitStatus": "pendingSCA",
                "transferType": "all"
            };

            scope.post(`/balancePlatforms/${balancePlatformId}/transferLimits`)
                .reply(200, mockResponse);

            const request: balancePlatform.CreateTransferLimitRequest = {
                "amount": {
                    "currency": "EUR",
                    "value": 10000
                },
                "reference": "Your reference for the transfer limit",
                "scaInformation": {
                    "scaOnApproval": true
                },
                "scope": Scope.PerTransaction,
                "startsAt": new Date("2025-08-15T06:36:20+01:00"),
                "endsAt": new Date("2026-08-14T00:00:00+01:00"),
                "transferType": TransferType.All
            };

            const response: balancePlatform.TransferLimit = await balancePlatformService.TransferLimitsBalancePlatformLevelApi.createTransferLimit(balancePlatformId, request);

            expect(response.id).toBe("TRLI00000000000000000000000001");
            expect(response.limitStatus).toBe("pendingSCA");
            expect(response.amount.value).toBe(10000);
        });

        it("should support DELETE /balancePlatforms/{id}/transferLimits/{transferLimitId}", async (): Promise<void> => {
            scope.delete(`/balancePlatforms/${balancePlatformId}/transferLimits/${transferLimitId}`).reply(204);

            await balancePlatformService.TransferLimitsBalancePlatformLevelApi.deletePendingTransferLimit(transferLimitId, balancePlatformId);
        });

        it("should support GET /balancePlatforms/{id}/transferLimits/{transferLimitId}", async (): Promise<void> => {
            const mockResponse = {
                "amount": {
                    "value": 10000,
                    "currency": "EUR"
                },
                "id": "TRLI00000000000000000000000001",
                "endsAt": "2026-08-13T23:00:00+01:00",
                "scope": "perTransaction",
                "reference": "Your reference for the transfer limit",
                "scaInformation": {
                    "exemption": "initialLimit",
                    "status": "notPerformed"
                },
                "startsAt": "2025-08-13T23:00:00+01:00",
                "limitStatus": "active",
                "transferType": "all"
            };

            scope.get(`/balancePlatforms/${balancePlatformId}/transferLimits/${transferLimitId}`)
                .reply(200, mockResponse);

            const response: balancePlatform.TransferLimit = await balancePlatformService.TransferLimitsBalancePlatformLevelApi.getSpecificTransferLimit(transferLimitId, balancePlatformId);

            expect(response.id).toBe("TRLI00000000000000000000000001");
        });

        it("should support GET /balancePlatforms/{id}/transferLimits", async (): Promise<void> => {
            const mockResponse = {
                "transferLimits": [
                    {
                        "amount": {
                            "value": 10000,
                            "currency": "EUR"
                        },
                        "id": "TRLI00000000000000000000000001",
                        "endsAt": "2026-08-13T23:00:00+01:00",
                        "scope": "perTransaction",
                        "reference": "Your reference for the transfer limit",
                        "scaInformation": {
                            "exemption": "initialLimit",
                            "status": "notPerformed"
                        },
                        "startsAt": "2025-08-13T23:00:00+01:00",
                        "limitStatus": "active",
                        "transferType": "instant"
                    },
                    {
                        "amount": {
                            "value": 20000,
                            "currency": "EUR"
                        },
                        "id": "TRLI00000000000000000000000002",
                        "endsAt": "2026-08-13T23:00:00+01:00",
                        "scope": "perTransaction",
                        "reference": "Your reference for the transfer limit",
                        "scaInformation": {
                            "exemption": "initialLimit",
                            "status": "notPerformed"
                        },
                        "startsAt": "2025-08-13T23:00:00+01:00",
                        "limitStatus": "active",
                        "transferType": "all"
                    }
                ]
            };
            scope.get(`/balancePlatforms/${balancePlatformId}/transferLimits?scope=perTransaction&transferType=instant&status=active`)
                .reply(200, mockResponse);

            const response: balancePlatform.TransferLimitListResponse = await balancePlatformService.TransferLimitsBalancePlatformLevelApi.getTransferLimits(balancePlatformId, Scope.PerTransaction, TransferType.Instant, LimitStatus.Active);

            expect(response.transferLimits.length).toBe(2);
            expect(response.transferLimits[0].id).toBe("TRLI00000000000000000000000001");
        });
    });


});
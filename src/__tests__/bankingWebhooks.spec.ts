// requests
import { AccountHolderNotificationRequest } from "../typings/configurationWebhooks/accountHolderNotificationRequest";
import { BalanceAccountNotificationRequest } from "../typings/configurationWebhooks/balanceAccountNotificationRequest";
import { AuthenticationNotificationRequest } from "../typings/acsWebhooks/authenticationNotificationRequest";
import { TransferNotificationRequest } from "../typings/transferWebhooks/transferNotificationRequest";
import { PaymentMethodScheduledForRemovalNotificationRequest } from "../typings/managementWebhooks/paymentMethodScheduledForRemovalNotificationRequest";
import { TransactionNotificationRequestV4 } from "../typings/transactionWebhooks/transactionNotificationRequestV4";
import { NegativeBalanceCompensationWarningNotificationRequest } from "../typings/negativeBalanceWarningWebhooks/negativeBalanceCompensationWarningNotificationRequest";
import { BalanceAccountBalanceNotificationRequest } from "../typings/balanceWebhooks/balanceAccountBalanceNotificationRequest";

// handlers
import { AcsWebhooksHandler } from "../typings/acsWebhooks/acsWebhooksHandler";
import { ReportWebhooksHandler } from "../typings/reportWebhooks/reportWebhooksHandler";
import { ConfigurationWebhooksHandler } from "../typings/configurationWebhooks/configurationWebhooksHandler";
import { TransferWebhooksHandler } from "../typings/transferWebhooks/transferWebhooksHandler";
import { NegativeBalanceWarningWebhooksHandler } from "../typings/negativeBalanceWarningWebhooks/negativeBalanceWarningWebhooksHandler";
import { TransactionWebhooksHandler } from "../typings/transactionWebhooks/transactionWebhooksHandler";
import { BalanceWebhooksHandler } from "../typings/balanceWebhooks/balanceWebhooksHandler";
import { ReportNotificationRequest } from "../typings/reportWebhooks/reportNotificationRequest";

describe("BankingWebhooks Tests", function (): void {

    it("should deserialize AccountHolderNotification webhook", function (): void {
        const json = {
            "data": {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "accountHolder": {
                    "contactDetails": {
                        "address": {
                            "country": "NL",
                            "houseNumberOrName": "274",
                            "postalCode": "1020CD",
                            "street": "Brannan Street"
                        }, "email": "s.hopper@example.com", "phone": {"number": "+315551231234", "type": "Mobile"}
                    }, "description": "S.Hopper - Staff 123", "id": "AH00000000000000000000001", "status": "Active"
                }
            }, "environment": "test", "type": "balancePlatform.accountHolder.created"
        };
        const jsonString = JSON.stringify(json);
        const configurationWebhooksHandler = new ConfigurationWebhooksHandler(jsonString);
        // test getAccountHolderNotificationRequest
        const accountHolderNotificationRequest = configurationWebhooksHandler.getAccountHolderNotificationRequest();
        // test instanceof
        expect(accountHolderNotificationRequest instanceof AccountHolderNotificationRequest).toBe(true);
        // test it is not BalanceAccountNotificationRequest
        expect(accountHolderNotificationRequest instanceof BalanceAccountNotificationRequest).toBe(false);
        expect(accountHolderNotificationRequest.environment).toEqual("test");
        // test getGenericWebhook
        const genericWebhook = configurationWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof AccountHolderNotificationRequest).toBe(true);
    });

    it("should deserialize BalanceAccountNotification Webhook", function (): void {
        const json = {
            "data": {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "balanceAccount": {
                    "accountHolderId": "AH00000000000000000001",
                    "defaultCurrencyCode": "EUR",
                    "id": "BA00000000000000000001",
                    "status": "active"
                }
            },
            "environment": "test",
            "timestamp": "2024-12-15T15:42:03+01:00",
            "type": "balancePlatform.balanceAccount.created"
        };
        const jsonString = JSON.stringify(json);
        const configurationWebhooksHandler = new ConfigurationWebhooksHandler(jsonString);
        // test getBalanceAccountNotificationRequest
        const balanceAccountNotificationRequest = configurationWebhooksHandler.getBalanceAccountNotificationRequest();
        expect(balanceAccountNotificationRequest.environment).toEqual("test");
        expect(balanceAccountNotificationRequest.type).toEqual("balancePlatform.balanceAccount.created");
        expect(balanceAccountNotificationRequest.data.balancePlatform).toEqual("YOUR_BALANCE_PLATFORM");
        expect(balanceAccountNotificationRequest.data.balanceAccount?.id).toEqual("BA00000000000000000001");
        // test getGenericWebhook
        const genericWebhook = configurationWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof BalanceAccountNotificationRequest).toBe(true);
        expect(genericWebhook.type).toEqual("balancePlatform.balanceAccount.created");
        expect(genericWebhook.data.balancePlatform).toEqual("YOUR_BALANCE_PLATFORM");
    });

    it("should throw an error when BalanceAccountNotification", function (): void {
        const json = {
            "data": {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "balanceAccount": {
                    "accountHolderId": "AH00000000000000000001",
                    "defaultCurrencyCode": "EUR",
                    "id": "BA00000000000000000001",
                    "status": "active"
                }
            },
            "environment": "test",
            "timestamp": "2024-12-15T15:42:03+01:00",
            "type": "balancePlatform.balanceAccount.created"
        };
        const jsonString = JSON.stringify(json);
        const configurationWebhooksHandler = new ConfigurationWebhooksHandler(jsonString);
        // test getBalanceAccountNotificationRequest
        const balanceAccountNotificationRequest = configurationWebhooksHandler.getBalanceAccountNotificationRequest();
        expect(balanceAccountNotificationRequest instanceof BalanceAccountNotificationRequest).toBe(true);
        expect(balanceAccountNotificationRequest.environment).toEqual("test");
        expect(balanceAccountNotificationRequest.type).toEqual("balancePlatform.balanceAccount.created");
        expect(balanceAccountNotificationRequest.data.balancePlatform).toEqual("YOUR_BALANCE_PLATFORM");
        expect(balanceAccountNotificationRequest.data.balanceAccount?.id).toEqual("BA00000000000000000001");

        const accountHolderNotificationRequest = configurationWebhooksHandler.getAccountHolderNotificationRequest();
        expect(accountHolderNotificationRequest instanceof BalanceAccountNotificationRequest).toBe(false);

        expect(accountHolderNotificationRequest.environment).toEqual("test");

    });

    it("should verify the banking hmac", function (): void {
        const jsonString = "{\"data\":{\"balancePlatform\":\"Integration_tools_test\",\"accountId\":\"BA32272223222H5HVKTBK4MLB\",\"sweep\":{\"id\":\"SWPC42272223222H5HVKV6H8C64DP5\",\"schedule\":{\"type\":\"balance\"},\"status\":\"active\",\"targetAmount\":{\"currency\":\"EUR\",\"value\":0},\"triggerAmount\":{\"currency\":\"EUR\",\"value\":0},\"type\":\"pull\",\"counterparty\":{\"balanceAccountId\":\"BA3227C223222H5HVKT3H9WLC\"},\"currency\":\"EUR\"}},\"environment\":\"test\",\"type\":\"balancePlatform.balanceAccountSweep.updated\"}";
        const isValid = hmacValidator.validateHMACSignature("D7DD5BA6146493707BF0BE7496F6404EC7A63616B7158EC927B9F54BB436765F", "9Qz9S/0xpar1klkniKdshxpAhRKbiSAewPpWoxKefQA=", jsonString);
        expect(isValid).toBe(true);
    });

    it("should deserialize Transaction v4 Webhooks", function (): void {
        const json = 	{
            "data": {
                "id": "EVJN42272224222B5JB8BRC84N686ZEUR",
                "amount": {
                    "value": 7000,
                    "currency": "EUR"
                },
                "status": "booked",
                "transfer": {
                    "id": "JN4227222422265",
                    "reference": "Split_item_1",
                },
                "valueDate": "2023-03-01T00:00:00+02:00",
                "bookingDate": "2023-02-28T13:30:20+02:00",
                "creationDate": "2023-02-28T13:30:05+02:00",
                "accountHolder": {
                    "id": "AH00000000000000000000001",
                    "description": "Your description for the account holder",
                    "reference": "Your reference for the account holder"
                },
                "balanceAccount": {
                    "id": "BA00000000000000000000001",
                    "description": "Your description for the balance account",
                    "reference": "Your reference for the balance account"
                },
                "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "type": "balancePlatform.transaction.created",
            "environment": "test"
        };
        const jsonString = JSON.stringify(json);
        const transactionWebhooksHandler = new TransactionWebhooksHandler(jsonString);
        const transactionCreated: TransactionNotificationRequestV4 = transactionWebhooksHandler.getTransactionNotificationRequestV4();
        // Test TransactionNotificationRequestV4
        expect(transactionCreated.type).toEqual(TransactionNotificationRequestV4.TypeEnum.BalancePlatformTransactionCreated);
        // Test GenericWebhook
        const genericWebhook = transactionWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof TransactionNotificationRequestV4).toBe(true);
        expect(genericWebhook instanceof PaymentMethodScheduledForRemovalNotificationRequest).toBe(false);
    });

    it("should deserialize AcsWebhook AuthenticationNotificationRequest", function (): void {
        const json = {
            "data": {
              "authentication": {
                "acsTransId": "6a4c1709-a42e-4c7f-96c7-1043adacfc97",
                "challenge": {
                  "flow": "OOB",
                  "lastInteraction": "2022-12-22T15:49:03+01:00"
                },
                "challengeIndicator": "01",
                "createdAt": "2022-12-22T15:45:03+01:00",
                "deviceChannel": "app",
                "dsTransID": "a3b86754-444d-46ca-95a2-ada351d3f42c",
                "exemptionIndicator": "lowValue",
                "inPSD2Scope": true,
                "messageCategory": "payment",
                "messageVersion": "2.2.0",
                "riskScore": 0,
                "threeDSServerTransID": "6edcc246-23ee-4e94-ac5d-8ae620bea7d9",
                "transStatus": "Y",
                "type": "challenge"
              },
              "balancePlatform": "YOUR_BALANCE_PLATFORM",
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "paymentInstrumentId": "PI3227C223222B5BPCMFXD2XG",
              "purchase": {
                "date": "2022-12-22T15:49:03+01:00",
                "merchantName": "TeaShop_NL",
                "originalAmount": {
                  "currency": "EUR",
                  "value": 1000
                }
              },
              "status": "authenticated"
            },
            "environment": "test",
            "timestamp": "2022-12-22T15:42:03+01:00",
            "type": "balancePlatform.authentication.created"
          };
        const jsonString = JSON.stringify(json);
        const acsWebhooksHandler = new AcsWebhooksHandler(jsonString);
        const authenticationNotificationRequest = acsWebhooksHandler.getAuthenticationNotificationRequest();
        expect(authenticationNotificationRequest).toBeTruthy();
        expect(authenticationNotificationRequest.type).toBe(AuthenticationNotificationRequest
            .TypeEnum.BalancePlatformAuthenticationCreated
        );
        expect(authenticationNotificationRequest.environment).toBe("test");
        expect(authenticationNotificationRequest.timestamp?.toISOString()).toBe(new Date("2022-12-22T15:42:03+01:00").toISOString());
        expect(authenticationNotificationRequest.data).toBeDefined();
        expect(authenticationNotificationRequest.data.balancePlatform).toBe("YOUR_BALANCE_PLATFORM");
        expect(authenticationNotificationRequest.data.id).toBe("497f6eca-6276-4993-bfeb-53cbbbba6f08");
    });

    it("should deserialize AcsWebhook RelayedAuthenticationRequest", function (): void {
        const json = {
            "id": "1ea64f8e-d1e1-4b9d-a3a2-3953e385b2c8",
            "paymentInstrumentId": "PI123ABCDEFGHIJKLMN45678",
            "purchase": {
              "date": "2025-03-06T15:17:55Z",
              "merchantName": "widgetsInc",
              "originalAmount": {
                "currency": "EUR",
                "value": 14548
              }
            }
          };
        const jsonString = JSON.stringify(json);
        const acsWebhooksHandler = new AcsWebhooksHandler(jsonString);
        const relayedAuthenticationRequest = acsWebhooksHandler.getRelayedAuthenticationRequest();
        expect(relayedAuthenticationRequest).toBeTruthy();
        expect(relayedAuthenticationRequest.id).toBe("1ea64f8e-d1e1-4b9d-a3a2-3953e385b2c8");
        expect(relayedAuthenticationRequest.paymentInstrumentId).toBe("PI123ABCDEFGHIJKLMN45678");
        expect(relayedAuthenticationRequest.purchase).toBeDefined();
    });

    it("should deserialize AcsWebhooks using GenericWebhook", function (): void {
        const json = {
            "data": {
              "authentication": {
                "acsTransId": "6a4c1709-a42e-4c7f-96c7-1043adacfc97",
                "challenge": {
                  "flow": "OOB",
                  "lastInteraction": "2022-12-22T15:49:03+01:00"
                },
                "challengeIndicator": "01",
                "createdAt": "2022-12-22T15:45:03+01:00",
                "deviceChannel": "app",
                "dsTransID": "a3b86754-444d-46ca-95a2-ada351d3f42c",
                "exemptionIndicator": "lowValue",
                "inPSD2Scope": true,
                "messageCategory": "payment",
                "messageVersion": "2.2.0",
                "riskScore": 0,
                "threeDSServerTransID": "6edcc246-23ee-4e94-ac5d-8ae620bea7d9",
                "transStatus": "Y",
                "type": "challenge"
              },
              "balancePlatform": "YOUR_BALANCE_PLATFORM",
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "paymentInstrumentId": "PI3227C223222B5BPCMFXD2XG",
              "purchase": {
                "date": "2022-12-22T15:49:03+01:00",
                "merchantName": "TeaShop_NL",
                "originalAmount": {
                  "currency": "EUR",
                  "value": 1000
                }
              },
              "status": "authenticated"
            },
            "environment": "test",
            "timestamp": "2022-12-22T15:42:03+01:00",
            "type": "balancePlatform.authentication.created"
          };
        const jsonString = JSON.stringify(json);
        const acsWebhooksHandler = new AcsWebhooksHandler(jsonString);
        const genericWebhook = acsWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof AuthenticationNotificationRequest).toBe(true);
    });


    it("should deserialize BalanceWebhooks BalanceAccountBalanceNotificationRequest", function (): void {
        const json = {
            "data": {
              "balanceAccountId": "BWHS00000000000000000000000001",
              "balancePlatform": "YOUR_BALANCE_PLATFORM",
              "balances": {
                "available": 499900,
                "pending": 350000,
                "reserved": 120000,
                "balance": 470000
              },
              "creationDate": "2025-01-19T13:37:38+02:00",
              "currency": "USD",
              "settingIds": ["WK1", "WK2"]
            },
            "environment": "test",
            "type": "balancePlatform.balanceAccount.balance.updated"
          };
        const jsonString = JSON.stringify(json);
        const balanceWebhooksHandler = new BalanceWebhooksHandler(jsonString);
        const balanceAccountBalanceNotificationRequest = balanceWebhooksHandler.getBalanceAccountBalanceNotificationRequest();
        expect(balanceAccountBalanceNotificationRequest).toBeTruthy();
        expect(balanceAccountBalanceNotificationRequest.type).toBe(BalanceAccountBalanceNotificationRequest
            .TypeEnum.BalancePlatformBalanceAccountBalanceUpdated
        );
        expect(balanceAccountBalanceNotificationRequest.environment).toBe("test");
        expect(balanceAccountBalanceNotificationRequest.data).toBeDefined();
        expect(balanceAccountBalanceNotificationRequest.data.settingIds).toBeTruthy();
        expect(balanceAccountBalanceNotificationRequest.data.settingIds.length).toBe(2);
        expect(balanceAccountBalanceNotificationRequest.data.balancePlatform).toBe("YOUR_BALANCE_PLATFORM");
        expect(balanceAccountBalanceNotificationRequest.data .currency).toBe("USD");

        // test getGenericWebhook
        const genericWebhook = balanceWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof BalanceAccountBalanceNotificationRequest).toBe(true);
        expect(genericWebhook.type).toEqual("balancePlatform.balanceAccount.balance.updated");
    });

    it("should deserialize ReportWebhooks ReportNotificationRequest", function (): void {
        // Simulate loading the JSON as in the Java test
        const json = {
            "data": {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "creationDate": "2024-07-02T02:01:08+02:00",
                "id": "balanceplatform_accounting_report_2024_07_01.csv",
                "downloadUrl": "https://balanceplatform-test.adyen.com/balanceplatform/.../.../.../balanceplatform_accounting_report_2024_07_01.csv",
                "fileName": "balanceplatform_accounting_report_2024_07_01.csv",
                "reportType": "balanceplatform_accounting_report"
            },
            "environment": "test",
            "timestamp": "2024-07-02T02:01:05+02:00",
            "type": "balancePlatform.report.created"
        };
        const jsonString = JSON.stringify(json);
        const reportWebhooksHandler = new ReportWebhooksHandler(jsonString);
        const reportNotificationRequest = reportWebhooksHandler.getReportNotificationRequest();

        expect(reportNotificationRequest).toBeTruthy();
        expect(reportNotificationRequest.type).toBe(ReportNotificationRequest.TypeEnum.BalancePlatformReportCreated);
        expect(reportNotificationRequest.type).toBe("balancePlatform.report.created");
        expect(reportNotificationRequest.environment).toBe("test");
        expect(reportNotificationRequest.timestamp?.toISOString()).toBe(new Date("2024-07-02T02:01:05+02:00").toISOString());

        expect(reportNotificationRequest.data).toBeDefined();
        expect(reportNotificationRequest.data.balancePlatform).toBe("YOUR_BALANCE_PLATFORM");
        expect(reportNotificationRequest.data.id).toBe("balanceplatform_accounting_report_2024_07_01.csv");
        expect(reportNotificationRequest.data.creationDate?.toISOString()).toBe(new Date("2024-07-02T02:01:08+02:00").toISOString());
        expect(reportNotificationRequest.data.reportType).toBe("balanceplatform_accounting_report");

        // test getGenericWebhook
        const genericWebhook = reportWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof ReportNotificationRequest).toBe(true);
        expect(genericWebhook.type).toEqual("balancePlatform.report.created");
    });

    it("should deserialize Transfer Created Webhook", function (): void {
        const json = {
            "data": {
                "id": "2WT1N05XXY7P9XH9",
                "type": "internalTransfer",
                "accountHolder": {
                    "description": "Your description of the account holder of the target balance account",
                    "id": "AH00000000000000000000002",
                    "reference": "Your reference of the account holder"
                },
                "amount": {
                    "currency": "EUR",
                    "value": 1000
                },
                "balanceAccount": {
                    "description": "Your description of the target balance account",
                    "id": "BA00000000000000000000002"
                },
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "balances": [
                    {
                        "currency": "EUR",
                        "received": 1000
                    }
                ],
                "category": "internal",
                "creationDate": "2023-02-28T13:30:05+02:00",
                "description": "Your description of the transfer",
                "direction": "incoming",
                "events": [
                    {
                        "bookingDate": "2023-02-28T13:30:18+02:00",
                        "id": "JDRF00000000000000000000000001",
                        "mutations": [
                            {
                                "currency": "EUR",
                                "received": 1000
                            }
                        ],
                        "status": "received",
                        "type": "accounting"
                    }
                ],
                "reason": "approved",
                "reference": "Your reference of the transfer",
                "referenceForBeneficiary": "Your-reference-for-the-recipient-of-the-transfer-request",
                "sequenceNumber": 1,
                "status": "received"
            },
            "environment": "test",
            "timestamp": "2023-02-28T13:27:05+02:00",
            "type": "balancePlatform.transfer.created"
        };
        const jsonString = JSON.stringify(json);
        const transferWebhooksHandler = new TransferWebhooksHandler(jsonString);
        // test getTransferNotificationRequest        
        const transferNotificationRequest: TransferNotificationRequest = transferWebhooksHandler.getTransferNotificationRequest();
        expect(transferNotificationRequest.type).toEqual(TransferNotificationRequest.TypeEnum.BalancePlatformTransferCreated);
        // test getGenericWebhook
        const genericWebhook = transferWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof TransferNotificationRequest).toBe(true);
        expect(genericWebhook.type).toEqual("balancePlatform.transfer.created");
        expect(genericWebhook.data.accountHolder?.id).toEqual("AH00000000000000000000002");
    });

    it("should deserialize Transfer Updated Webhook", function (): void {
        const json = {
            "data": {
                "accountHolder": {
                    "description": "Your description of the account holder",
                    "id": "AH00000000000000000000001",
                    "reference": "Your reference for the account holder"
                },
                "amount": {
                    "currency": "EUR",
                    "value": 10000
                },
                "balanceAccount": {
                    "description": "Your description of the balance account from where the amount is debited",
                    "id": "BA00000000000000000000001",
                    "reference": "Your reference for the balance account"
                },
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "balances": [
                    {
                        "currency": "EUR",
                        "received": 0,
                        "reserved": -10000
                    }
                ],
                "category": "bank",
                "categoryData": {
                    "priority": "regular",
                    "type": "bank"
                },
                "creationDate": "2023-02-28T13:30:05+02:00",
                "description": "Your user description of the transfer",
                "direction": "outgoing",
                "events": [
                    {
                        "bookingDate": "2023-02-28T13:30:18+02:00",
                        "id": "EVJN00000000000000000000000001",
                        "mutations": [
                            {
                                "currency": "EUR",
                                "received": -10000
                            }
                        ],
                        "status": "received",
                        "type": "accounting"
                    },
                    {
                        "bookingDate": "2023-02-28T13:30:18+02:00",
                        "id": "EVJN00000000000000000000000002",
                        "mutations": [
                            {
                                "currency": "EUR",
                                "received": 10000,
                                "reserved": -10000
                            }
                        ],
                        "status": "authorised",
                        "type": "accounting"
                    }
                ],
                "id": "6JKRLZ8LOT47J7RY",
                "reason": "approved",
                "reference": "Your user reference for the transfer",
                "referenceForBeneficiary": "Your user reference for the beneficiary",
                "sequenceNumber": 2,
                "transactionRulesResult": {
                    "allHardBlockRulesPassed": true
                },
                "status": "authorised",
                "type": "bankTransfer"
            },
            "environment": "test",
            "timestamp": "2023-02-28T13:27:05+02:00",
            "type": "balancePlatform.transfer.updated"
        };
        const jsonString = JSON.stringify(json);
        const transferWebhooksHandler = new TransferWebhooksHandler(jsonString);
        // test getTransferNotificationRequest        
        const transferNotificationRequest: TransferNotificationRequest = transferWebhooksHandler.getTransferNotificationRequest();
        expect(transferNotificationRequest.type).toEqual(TransferNotificationRequest.TypeEnum.BalancePlatformTransferUpdated);
        // test getGenericWebhook
        const genericWebhook = transferWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof TransferNotificationRequest).toBe(true);
        expect(genericWebhook.type).toEqual("balancePlatform.transfer.updated");
        expect(genericWebhook.data.accountHolder?.id).toEqual("AH00000000000000000000001");
    });

    it("should deserialize Negative Balance Compensation Warning Webhook", function (): void {
        const json = {
            "data": {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "creationDate": "2024-10-22T00:00:00+02:00",
                "id": "BA00000000000000000001",
                "accountHolder": {
                    "description": "Description for the account holder.",
                    "reference": "YOUR_REFERENCE",
                    "id": "AH00000000000000000001"
                },
                "amount": {
                    "currency": "EUR",
                    "value": -145050
                },
                "liableBalanceAccountId": "BA11111111111111111111",
                "negativeBalanceSince": "2024-10-19T00:33:13+02:00",
                "scheduledCompensationAt": "2024-12-01T01:00:00+01:00"
            },
            "environment": "test",
            "timestamp": "2024-10-22T00:00:00+02:00",
            "type": "balancePlatform.negativeBalanceCompensationWarning.scheduled"
        };
        const jsonString = JSON.stringify(json);
        const negativeBalanceWarningWebhooksHandler = new NegativeBalanceWarningWebhooksHandler(jsonString);
        // test getNegativeBalanceCompensationWarningNotificationRequest        
        const negativeBalanceCompensationWarningNotificationRequest: NegativeBalanceCompensationWarningNotificationRequest = negativeBalanceWarningWebhooksHandler.getNegativeBalanceCompensationWarningNotificationRequest();
        expect(negativeBalanceCompensationWarningNotificationRequest.type).toEqual(NegativeBalanceCompensationWarningNotificationRequest.TypeEnum.BalancePlatformNegativeBalanceCompensationWarningScheduled);
        expect(negativeBalanceCompensationWarningNotificationRequest.environment).toBe("test");
        expect(negativeBalanceCompensationWarningNotificationRequest.timestamp?.toISOString()).toBe(new Date("2024-10-22T00:00:00+02:00").toISOString());
        expect(negativeBalanceCompensationWarningNotificationRequest.data).toBeDefined();
        expect(negativeBalanceCompensationWarningNotificationRequest.data.balancePlatform).toBe("YOUR_BALANCE_PLATFORM");
        expect(negativeBalanceCompensationWarningNotificationRequest.data.id).toBe("BA00000000000000000001");
        expect(negativeBalanceCompensationWarningNotificationRequest.data.creationDate?.toISOString()).toBe(new Date("2024-10-22T00:00:00+02:00").toISOString());
        // test getGenericWebhook
        const genericWebhook = negativeBalanceWarningWebhooksHandler.getGenericWebhook();
        expect(genericWebhook instanceof NegativeBalanceCompensationWarningNotificationRequest).toBe(true);
        expect(genericWebhook.type).toEqual("balancePlatform.negativeBalanceCompensationWarning.scheduled");
        expect(genericWebhook.data.accountHolder?.reference).toEqual("YOUR_REFERENCE");
        expect(genericWebhook.data.accountHolder?.id).toEqual("AH00000000000000000001");
        expect(genericWebhook.data.negativeBalanceSince?.toISOString()).toEqual(new Date("2024-10-19T00:33:13+02:00").toISOString());    

    });

});
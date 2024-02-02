import authorisationTrue from "../__mocks__/notification/authorisationTrue.json";
import captureTrue from "../__mocks__/notification/captureTrue.json";
import captureFalse from "../__mocks__/notification/captureFalse.json";
import refundTrue from "../__mocks__/notification/refundTrue.json";
import refundFalse from "../__mocks__/notification/refundFalse.json";
import NotificationRequest from "../notification/notificationRequest";
import { Notification, NotificationRequestItem } from "../typings/notification/models";
import NotificationEnum = NotificationRequestItem.EventCodeEnum;
import SuccessEnum = NotificationRequestItem.SuccessEnum;
import BankingWebhookHandler from "../notification/bankingWebhookHandler";
import {AccountHolderNotificationRequest} from "../typings/configurationWebhooks/accountHolderNotificationRequest";
import HmacValidator from "../utils/hmacValidator";
import ManagementWebhookHandler from "../notification/managementWebhookHandler";
import {
    PaymentMethodCreatedNotificationRequest
} from "../typings/managementWebhooks/paymentMethodCreatedNotificationRequest";
import {MerchantUpdatedNotificationRequest} from "../typings/managementWebhooks/merchantUpdatedNotificationRequest";
import {AuthenticationNotificationRequest} from "../typings/acsWebhooks/authenticationNotificationRequest";
import {TransferNotificationRequest} from "../typings/transferWebhooks/transferNotificationRequest";
import { PaymentMethodRequestRemovedNotificationRequest } from "../typings/managementWebhooks/paymentMethodRequestRemovedNotificationRequest";
import { PaymentMethodScheduledForRemovalNotificationRequest } from "../typings/managementWebhooks/paymentMethodScheduledForRemovalNotificationRequest";
import { TransactionNotificationRequestV4 } from "../typings/transactionWebhooks/transactionNotificationRequestV4";

describe("Notification Test", function (): void {

    let hmacValidator: HmacValidator;
    beforeEach(() => {
        hmacValidator = new HmacValidator();
    });

    it("should return authorisation success", function (): void {
        const notificationRequest = new NotificationRequest(authorisationTrue as unknown as Notification);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        if (notificationRequest.notificationItems) {
            const notificationRequestItem: NotificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Authorisation).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("123456789");
            expect(notificationRequestItem.additionalData!.paymentLinkId).toEqual("ABCDEFG");
            expect(notificationRequestItem.additionalData!.realtimeAccountUpdaterStatus).toEqual("status");

        } else {
            fail();
        }
    });

    it("should return capture success", function (): void {
        const notificationRequest = new NotificationRequest(captureTrue as unknown as Notification);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Capture).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        } else {
            fail();
        }
    });

    it("should return capture fail", function (): void {
        const notificationRequest = new NotificationRequest(captureFalse as unknown as Notification);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Capture).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeFalsy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        } else {
            fail();
        }
    });

    it("should return refund success", function (): void {
        const notificationRequest = new NotificationRequest(refundTrue as unknown as Notification);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Refund).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
            expect(notificationRequestItem.eventDate).toBeDefined();
        } else {
            fail();
        }
    });

    it("should return refund fail", function (): void {
        const notificationRequest = new NotificationRequest(refundFalse as unknown as Notification);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        if (notificationRequest.notificationItems) {
            const notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.Refund).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeFalsy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
            expect(notificationRequestItem.eventDate).toBeDefined();
        } else {
            fail();
        }
    });

    it("should deserialize Banking Webhooks", function (): void {
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
        const bankingWebhookHandler = new BankingWebhookHandler(jsonString);
        const accountHolderNotificationRequest: AccountHolderNotificationRequest = bankingWebhookHandler.getAccountHolderNotificationRequest();
        const genericWebhook = bankingWebhookHandler.getGenericWebhook();
        expect(genericWebhook instanceof AccountHolderNotificationRequest).toBe(true);
        expect(accountHolderNotificationRequest.environment).toEqual("test");
    });

    it("should verify the banking hmac", function (): void {
        const jsonString = "{\"data\":{\"balancePlatform\":\"Integration_tools_test\",\"accountId\":\"BA32272223222H5HVKTBK4MLB\",\"sweep\":{\"id\":\"SWPC42272223222H5HVKV6H8C64DP5\",\"schedule\":{\"type\":\"balance\"},\"status\":\"active\",\"targetAmount\":{\"currency\":\"EUR\",\"value\":0},\"triggerAmount\":{\"currency\":\"EUR\",\"value\":0},\"type\":\"pull\",\"counterparty\":{\"balanceAccountId\":\"BA3227C223222H5HVKT3H9WLC\"},\"currency\":\"EUR\"}},\"environment\":\"test\",\"type\":\"balancePlatform.balanceAccountSweep.updated\"}";
        const isValid = hmacValidator.validateBankingHMAC("9Qz9S/0xpar1klkniKdshxpAhRKbiSAewPpWoxKefQA=", "D7DD5BA6146493707BF0BE7496F6404EC7A63616B7158EC927B9F54BB436765F", jsonString);
        expect(isValid).toBe(true);
    });

    it("should deserialize Management Webhooks", function (): void {
        const json = {
            "createdAt": "2022-01-24T14:59:11+01:00",
            "data": {
                "id": "PM3224R223224K5FH4M2K9B86",
                "merchantId": "MERCHANT_ACCOUNT",
                "result": "SUCCESS",
                "storeId": "ST322LJ223223K5F4SQNR9XL5",
                "type": "visa"
            },
            "environment": "test",
            "type": "paymentMethod.created"
        };
        const jsonString = JSON.stringify(json);
        const managementWebhookHandler = new ManagementWebhookHandler(jsonString);
        const paymentMethodCreatedNotificationRequest: PaymentMethodCreatedNotificationRequest = managementWebhookHandler.getPaymentMethodCreatedNotificationRequest();
        const genericWebhook = managementWebhookHandler.getGenericWebhook();
        expect(genericWebhook instanceof PaymentMethodCreatedNotificationRequest).toBe(true);
        expect(genericWebhook instanceof MerchantUpdatedNotificationRequest).toBe(false);
        expect(paymentMethodCreatedNotificationRequest.type).toEqual(PaymentMethodCreatedNotificationRequest.TypeEnum.PaymentMethodCreated);
    });

    it("should deserialize Banking Authentication Webhook", function (): void {
        const json = {
            "data": {
                "balancePlatform": "YOUR_BALANCE_PLATFORM",
                "creationDate": "2023-01-19T17:07:59+01:00",
                "id": "a8fc7a40-6e48-498a-bdc2-494daf0f490a",
                "authentication": {
                    "acsTransId": "a8fc7a40-6e48-498a-bdc2-494daf0f490a",
                    "challenge": {
                        "flow": "OTP_SMS",
                        "lastInteraction": "2023-01-19T17:37:13+01:00",
                        "phoneNumber": "******6789",
                        "resends": 0,
                        "retries": 2
                    },
                    "challengeIndicator": "01",
                    "createdAt": "2023-01-19T17:07:17+01:00",
                    "deviceChannel": "app",
                    "dsTransID": "59de4e30-7f84-4a77-aaf8-1ca493092ef9",
                    "exemptionIndicator": "noExemptionApplied",
                    "inPSD2Scope": false,
                    "messageCategory": "payment",
                    "messageVersion": "2.2.0",
                    "threeDSServerTransID": "8bc0fdbd-5c8a-4bed-a171-9d10347e7798",
                    "transStatus": "N",
                    "transStatusReason": "19",
                    "type": "challenge"
                },
                "paymentInstrumentId": "PI3227C223222B5BPCMFXD2XG",
                "purchase": {
                    "date": "2022-12-22T15:49:03+01:00",
                    "merchantName": "TeaShop_NL",
                    "originalAmount": {
                        "currency": "EUR",
                        "value": 1000
                    }
                },
                "status": "rejected"
            },
            "environment": "test",
            "type": "balancePlatform.authentication.created"
        };
        const jsonString = JSON.stringify(json);
        const bankingWebhookHandler = new BankingWebhookHandler(jsonString);
        const accountHolderNotificationRequest: TransferNotificationRequest = bankingWebhookHandler.getTransferNotificationRequest();
        const genericWebhook = bankingWebhookHandler.getGenericWebhook();
        expect(accountHolderNotificationRequest.type).toEqual(AuthenticationNotificationRequest.TypeEnum.BalancePlatformAuthenticationCreated);
        expect(genericWebhook instanceof AccountHolderNotificationRequest).toBe(false);
        expect(genericWebhook instanceof AuthenticationNotificationRequest).toBe(true);
    });

    it("should deserialize Management v3 Webhooks", function (): void {
        const json = {
            "type": "paymentMethod.requestRemoved",
            "environment": "devl",
            "createdAt": "2023-06-12T18:59:17+02:00",
            "data": {
              "id": "PM322WP223224M5HJ6PX77BW8",
              "storeId": "TestStore",
              "type": "amex",
              "status": "dataRequired",
              "merchantId": "TestMerchant",
              "enabled": false
            }
          };
        const jsonString = JSON.stringify(json);
        const managementWebhookHandler = new ManagementWebhookHandler(jsonString);
        const paymentMethodRequestRemoved: PaymentMethodRequestRemovedNotificationRequest = managementWebhookHandler.getPaymentMethodRequestRemovedNotificationRequest();
        const genericWebhook = managementWebhookHandler.getGenericWebhook();
        expect(genericWebhook instanceof PaymentMethodRequestRemovedNotificationRequest).toBe(true);
        expect(genericWebhook instanceof PaymentMethodScheduledForRemovalNotificationRequest).toBe(false);
        expect(paymentMethodRequestRemoved.type).toEqual(PaymentMethodRequestRemovedNotificationRequest.TypeEnum.PaymentMethodRequestRemoved);
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
        const bankingWebhookHandler = new BankingWebhookHandler(jsonString);
        const transactionCreated: TransactionNotificationRequestV4 = bankingWebhookHandler.getTransactionNotificationRequest();
        const genericWebhook = bankingWebhookHandler.getGenericWebhook();
        expect(genericWebhook instanceof TransactionNotificationRequestV4).toBe(true);
        expect(genericWebhook instanceof PaymentMethodScheduledForRemovalNotificationRequest).toBe(false);
        expect(transactionCreated.type).toEqual(TransactionNotificationRequestV4.TypeEnum.BalancePlatformTransactionCreated);
    });
});
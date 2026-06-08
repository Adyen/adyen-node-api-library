import { TransactionNotificationRequestV4 } from "../../typings/transactionWebhooks/models";
import { PaymentMethodScheduledForRemovalNotificationRequest } from "../../typings/managementWebhooks/models";
import { BankCategoryData } from "../../typings/transactionWebhooks/bankCategoryData";
import { InternalCategoryData } from "../../typings/transactionWebhooks/internalCategoryData";
import { IssuedCard } from "../../typings/transactionWebhooks/issuedCard";
import { PlatformPayment } from "../../typings/transactionWebhooks/platformPayment";
import { TransactionWebhooksHandler } from "../../webhooks";

describe("TransactionWebhooks Tests", function (): void {

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

    it("should deserialize categoryData as BankCategoryData", function (): void {
        const json = {
            "data": {
                "id": "EVJN00000000000000000000000003EUR",
                "amount": { "value": -10000, "currency": "EUR" },
                "status": "booked",
                "transfer": {
                    "categoryData": { "priority": "regular", "type": "bank" },
                    "id": "3JNC3O5ZVFLLGV4B",
                    "reference": "Your internal reference for the transfer"
                },
                "valueDate": "2023-08-11T16:19:35+02:00",
                "bookingDate": "2023-08-11T16:31:02+02:00",
                "creationDate": "2023-08-11T16:19:35+02:00",
                "accountHolder": { "id": "AH00000000000000000000001" },
                "balanceAccount": { "id": "BA00000000000000000000001" },
                "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "environment": "test",
            "type": "balancePlatform.transaction.created"
        };
        const handler = new TransactionWebhooksHandler(JSON.stringify(json));
        const transaction = handler.getTransactionNotificationRequestV4();
        const categoryData = transaction.data.transfer?.categoryData;
        expect(categoryData).toBeDefined();
        expect(categoryData instanceof BankCategoryData).toBe(true);
        expect((categoryData as BankCategoryData).type).toBe(BankCategoryData.TypeEnum.Bank);
        expect((categoryData as BankCategoryData).priority).toBe(BankCategoryData.PriorityEnum.Regular);
    });

    it("should deserialize categoryData as InternalCategoryData", function (): void {
        const json = {
            "data": {
                "id": "EVJN00000000000000000000000003EUR",
                "amount": { "value": 10000, "currency": "EUR" },
                "status": "booked",
                "transfer": {
                    "categoryData": { "type": "internal", "modificationMerchantReference": "ref-123" },
                    "id": "48TYZO5ZVURJ2FCW",
                    "reference": "Your internal reference for the transfer"
                },
                "valueDate": "2023-08-11T16:19:35+02:00",
                "bookingDate": "2023-08-11T16:31:02+02:00",
                "creationDate": "2023-08-11T16:19:35+02:00",
                "accountHolder": { "id": "AH00000000000000000000001" },
                "balanceAccount": { "id": "BA00000000000000000000001" },
                "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "environment": "test",
            "type": "balancePlatform.transaction.created"
        };
        const handler = new TransactionWebhooksHandler(JSON.stringify(json));
        const transaction = handler.getTransactionNotificationRequestV4();
        const categoryData = transaction.data.transfer?.categoryData;
        expect(categoryData).toBeDefined();
        expect(categoryData instanceof InternalCategoryData).toBe(true);
        expect((categoryData as InternalCategoryData).type).toBe(InternalCategoryData.TypeEnum.Internal);
        expect((categoryData as InternalCategoryData).modificationMerchantReference).toBe("ref-123");
    });

    it("should deserialize categoryData as IssuedCard", function (): void {
        const json = {
            "data": {
                "id": "EVJN00000000000000000000000003EUR",
                "amount": { "value": -2700, "currency": "EUR" },
                "status": "booked",
                "transfer": {
                    "categoryData": {
                        "type": "issuedCard",
                        "panEntryMode": "contactless",
                        "processingType": "pos",
                        "authorisationType": "finalAuthorisation",
                        "schemeUniqueTransactionId": "ABCDEFU2B1305"
                    },
                    "id": "9ABCDE5ZVFLLGV4B",
                    "reference": "Your internal reference for the transfer"
                },
                "valueDate": "2023-08-11T16:19:35+02:00",
                "bookingDate": "2023-08-11T16:31:02+02:00",
                "creationDate": "2023-08-11T16:19:35+02:00",
                "accountHolder": { "id": "AH00000000000000000000001" },
                "balanceAccount": { "id": "BA00000000000000000000001" },
                "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "environment": "test",
            "type": "balancePlatform.transaction.created"
        };
        const handler = new TransactionWebhooksHandler(JSON.stringify(json));
        const transaction = handler.getTransactionNotificationRequestV4();
        const categoryData = transaction.data.transfer?.categoryData;
        expect(categoryData).toBeDefined();
        expect(categoryData instanceof IssuedCard).toBe(true);
        expect((categoryData as IssuedCard).type).toBe(IssuedCard.TypeEnum.IssuedCard);
        expect((categoryData as IssuedCard).panEntryMode).toBe(IssuedCard.PanEntryModeEnum.Contactless);
        expect((categoryData as IssuedCard).processingType).toBe(IssuedCard.ProcessingTypeEnum.Pos);
        expect((categoryData as IssuedCard).authorisationType).toBe("finalAuthorisation");
        expect((categoryData as IssuedCard).schemeUniqueTransactionId).toBe("ABCDEFU2B1305");
    });

    it("should deserialize categoryData as PlatformPayment", function (): void {
        const json = {
            "data": {
                "id": "EVJN00000000000000000000000003EUR",
                "amount": { "value": 5000, "currency": "EUR" },
                "status": "booked",
                "transfer": {
                    "categoryData": {
                        "type": "platformPayment",
                        "platformPaymentType": "BalanceAccount",
                        "pspPaymentReference": "PSP123456",
                        "paymentMerchantReference": "MERCH-REF-789"
                    },
                    "id": "7XYZAB5ZVFLLGV4B",
                    "reference": "Your internal reference for the transfer"
                },
                "valueDate": "2023-08-11T16:19:35+02:00",
                "bookingDate": "2023-08-11T16:31:02+02:00",
                "creationDate": "2023-08-11T16:19:35+02:00",
                "accountHolder": { "id": "AH00000000000000000000001" },
                "balanceAccount": { "id": "BA00000000000000000000001" },
                "balancePlatform": "YOUR_BALANCE_PLATFORM"
            },
            "environment": "test",
            "type": "balancePlatform.transaction.created"
        };
        const handler = new TransactionWebhooksHandler(JSON.stringify(json));
        const transaction = handler.getTransactionNotificationRequestV4();
        const categoryData = transaction.data.transfer?.categoryData;
        expect(categoryData).toBeDefined();
        expect(categoryData instanceof PlatformPayment).toBe(true);
        expect((categoryData as PlatformPayment).type).toBe(PlatformPayment.TypeEnum.PlatformPayment);
        expect((categoryData as PlatformPayment).platformPaymentType).toBe(PlatformPayment.PlatformPaymentTypeEnum.BalanceAccount);
        expect((categoryData as PlatformPayment).pspPaymentReference).toBe("PSP123456");
        expect((categoryData as PlatformPayment).paymentMerchantReference).toBe("MERCH-REF-789");
    });

});

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

describe("Notification Test", function (): void {

    let hmacValidator: HmacValidator;
    beforeEach(() => {
        hmacValidator = new HmacValidator();
    });

    it("should return authorisation success", function (): void  {
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
        const json = { "data": {"balancePlatform":"YOUR_BALANCE_PLATFORM","accountHolder":{"contactDetails":{"address":{"country":"NL","houseNumberOrName":"274","postalCode":"1020CD","street":"Brannan Street"},"email": "s.hopper@example.com","phone": {"number": "+315551231234","type": "Mobile"}},"description": "S.Hopper - Staff 123","id": "AH00000000000000000000001","status": "Active"}},"environment": "test","type": "balancePlatform.accountHolder.created"};
        const jsonString = JSON.stringify(json);
        let bankingWebhookHandler = new BankingWebhookHandler(jsonString);
        const accountHolderNotificationRequest: AccountHolderNotificationRequest = bankingWebhookHandler.getAccountHolderNotificationRequest();
        const genericWebhook = bankingWebhookHandler.getGenericWebhook();
        expect(genericWebhook instanceof AccountHolderNotificationRequest).toBe(true)
        expect(accountHolderNotificationRequest.environment).toEqual("test")
    });

    it("should verify the banking hmac", function (): void {
        const jsonString = "{\"data\":{\"balancePlatform\":\"Integration_tools_test\",\"accountId\":\"BA32272223222H5HVKTBK4MLB\",\"sweep\":{\"id\":\"SWPC42272223222H5HVKV6H8C64DP5\",\"schedule\":{\"type\":\"balance\"},\"status\":\"active\",\"targetAmount\":{\"currency\":\"EUR\",\"value\":0},\"triggerAmount\":{\"currency\":\"EUR\",\"value\":0},\"type\":\"pull\",\"counterparty\":{\"balanceAccountId\":\"BA3227C223222H5HVKT3H9WLC\"},\"currency\":\"EUR\"}},\"environment\":\"test\",\"type\":\"balancePlatform.balanceAccountSweep.updated\"}";
        const isValid = hmacValidator.validateBankingHMAC("9Qz9S/0xpar1klkniKdshxpAhRKbiSAewPpWoxKefQA=", "D7DD5BA6146493707BF0BE7496F6404EC7A63616B7158EC927B9F54BB436765F", jsonString)
        expect(isValid).toBe(true)
    });
});
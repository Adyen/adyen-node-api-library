import authorisationTrue from "../../__mocks__/notification/authorisationTrue.json";
import captureTrue from "../../__mocks__/notification/captureTrue.json";
import captureFalse from "../../__mocks__/notification/captureFalse.json";
import refundTrue from "../../__mocks__/notification/refundTrue.json";
import refundFalse from "../../__mocks__/notification/refundFalse.json";

// requests
import NotificationRequest from "../../notification/notificationRequest";
import { Notification, NotificationRequestItem } from "../../typings/notification/models";
import NotificationEnum = NotificationRequestItem.EventCodeEnum;
import SuccessEnum = NotificationRequestItem.SuccessEnum;

describe("Notification Tests", function (): void {

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

    it("should return notification items with additional data as key-value map", function (): void {
        const notificationRequestItem = new NotificationRequestItem();

        notificationRequestItem.amount = { currency: "EUR", value: 1000 };
        notificationRequestItem.pspReference = "123456789";
        notificationRequestItem.eventCode = NotificationEnum.Authorisation;
        notificationRequestItem.eventDate = "2023-10-01T12:00:00+00:00";
        notificationRequestItem.merchantAccountCode = "TestMerchant";
        notificationRequestItem.merchantReference = "TestReference";
        notificationRequestItem.success = SuccessEnum.True;
        notificationRequestItem.additionalData = {
            orderId: "12345",
            customerId: "67890"
        };

        expect(notificationRequestItem.amount).toBeDefined();
        expect(notificationRequestItem.additionalData).toBeDefined();
        expect(notificationRequestItem.additionalData!.orderId).toEqual("12345");
        expect(notificationRequestItem.additionalData!.customerId).toEqual("67890");

    });

    // test additionanDalata with medata as key-value pairs prefixed with "metadata." i.e. "metadata.myKey": "myValue"
    it("should return notification items with additional data as key-value object", function (): void {
        const notificationRequestItem = new NotificationRequestItem();

        notificationRequestItem.amount = { currency: "EUR", value: 1000 };
        notificationRequestItem.pspReference = "123456789";
        notificationRequestItem.eventCode = NotificationEnum.Authorisation;
        notificationRequestItem.eventDate = "2023-10-01T12:00:00+00:00";
        notificationRequestItem.merchantAccountCode = "TestMerchant";
        notificationRequestItem.merchantReference = "TestReference";
        notificationRequestItem.success = SuccessEnum.True;
        notificationRequestItem.additionalData = {
            orderId: "12345",
            customerId: "67890",
            "metadata.myKey": "myValue",
            "metadata.anotherKey": "anotherValue"
        };

        expect(notificationRequestItem.amount).toBeDefined();
        expect(notificationRequestItem.additionalData).toBeDefined();
        expect(notificationRequestItem.additionalData!.orderId).toEqual("12345");
        expect(notificationRequestItem.additionalData!.customerId).toEqual("67890");
        expect(notificationRequestItem.additionalData!["metadata.myKey"]).toEqual("myValue");
        expect(notificationRequestItem.additionalData!["metadata.anotherKey"]).toEqual("anotherValue");

    });
});
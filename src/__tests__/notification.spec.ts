import authorisationTrue from "../__mocks__/notification/authorisationTrue.json";
import captureTrue from "../__mocks__/notification/captureTrue.json";
import captureFalse from "../__mocks__/notification/captureFalse.json";
import refundTrue from "../__mocks__/notification/refundTrue.json";
import refundFalse from "../__mocks__/notification/refundFalse.json";
import NotificationRequest from "../notification/notificationRequest";
import {NotificationEnum, NotificationRequestItem} from "../typings/notification";

describe("Notification Test", function (): void {
    it("should return authorisation success", function (): void  {
        const notificationRequest = new NotificationRequest(authorisationTrue);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        const notificationRequestItem: NotificationRequestItem = notificationRequest.notificationItems[0];
        expect(NotificationEnum.EVENT_CODE_AUTHORISATION).toEqual(notificationRequestItem.eventCode);
        expect(notificationRequestItem.success === "true").toBeTruthy();
        expect(notificationRequestItem.pspReference).toEqual("123456789");
    });

    it("should return capture success", function (): void {
        const notificationRequest = new NotificationRequest(captureTrue);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        const notificationRequestItem = notificationRequest.notificationItems[0];
        expect(NotificationEnum.EVENT_CODE_CAPTURE).toEqual(notificationRequestItem.eventCode);
        expect(notificationRequestItem.success === "true").toBeTruthy();
        expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
        expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
    });

    it("should return capture fail", function (): void {
        const notificationRequest = new NotificationRequest(captureFalse);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        const notificationRequestItem = notificationRequest.notificationItems[0];
        expect(NotificationEnum.EVENT_CODE_CAPTURE).toEqual(notificationRequestItem.eventCode);
        expect(notificationRequestItem.success === "true").toBeFalsy();
        expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
        expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
    });

    it("should return refund success", function (): void {
        const notificationRequest = new NotificationRequest(refundTrue);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        const notificationRequestItem = notificationRequest.notificationItems[0];
        expect(NotificationEnum.EVENT_CODE_REFUND).toEqual(notificationRequestItem.eventCode);
        expect(notificationRequestItem.success === "true").toBeTruthy();
        expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
        expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        expect(notificationRequestItem.eventDate).toBeDefined();
    });

    it("should return refund fail", function (): void {
        const notificationRequest = new NotificationRequest(refundFalse);
        expect(notificationRequest.notificationItems).toHaveLength(1);

        const notificationRequestItem = notificationRequest.notificationItems[0];
        expect(NotificationEnum.EVENT_CODE_REFUND).toEqual(notificationRequestItem.eventCode);
        expect(notificationRequestItem.success === "true").toBeFalsy();
        expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
        expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        expect(notificationRequestItem.eventDate).toBeDefined();
    });
});
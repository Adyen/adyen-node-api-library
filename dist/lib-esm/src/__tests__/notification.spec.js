import authorisationTrue from "../__mocks__/notification/authorisationTrue.json";
import captureTrue from "../__mocks__/notification/captureTrue.json";
import captureFalse from "../__mocks__/notification/captureFalse.json";
import refundTrue from "../__mocks__/notification/refundTrue.json";
import refundFalse from "../__mocks__/notification/refundFalse.json";
import NotificationRequest from "../notification/notificationRequest";
import { NotificationRequestItem } from "../typings/notification/models";
var NotificationEnum = NotificationRequestItem.EventCodeEnum;
var SuccessEnum = NotificationRequestItem.SuccessEnum;
describe("Notification Test", function () {
    it("should return authorisation success", function () {
        var notificationRequest = new NotificationRequest(authorisationTrue);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.AUTHORISATION).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("123456789");
        }
        else {
            fail();
        }
    });
    it("should return capture success", function () {
        var notificationRequest = new NotificationRequest(captureTrue);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.CAPTURE).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        }
        else {
            fail();
        }
    });
    it("should return capture fail", function () {
        var notificationRequest = new NotificationRequest(captureFalse);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.CAPTURE).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeFalsy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        }
        else {
            fail();
        }
    });
    it("should return refund success", function () {
        var notificationRequest = new NotificationRequest(refundTrue);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.REFUND).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
            expect(notificationRequestItem.eventDate).toBeDefined();
        }
        else {
            fail();
        }
    });
    it("should return refund fail", function () {
        var notificationRequest = new NotificationRequest(refundFalse);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(NotificationEnum.REFUND).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === SuccessEnum.True).toBeFalsy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
            expect(notificationRequestItem.eventDate).toBeDefined();
        }
        else {
            fail();
        }
    });
});
//# sourceMappingURL=notification.spec.js.map
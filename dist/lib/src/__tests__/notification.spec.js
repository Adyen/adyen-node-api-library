"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var authorisationTrue_json_1 = __importDefault(require("../__mocks__/notification/authorisationTrue.json"));
var captureTrue_json_1 = __importDefault(require("../__mocks__/notification/captureTrue.json"));
var captureFalse_json_1 = __importDefault(require("../__mocks__/notification/captureFalse.json"));
var refundTrue_json_1 = __importDefault(require("../__mocks__/notification/refundTrue.json"));
var refundFalse_json_1 = __importDefault(require("../__mocks__/notification/refundFalse.json"));
var notificationRequest_1 = __importDefault(require("../notification/notificationRequest"));
var notification_1 = require("../typings/notification");
describe("Notification Test", function () {
    it("should return authorisation success", function () {
        var notificationRequest = new notificationRequest_1.default(authorisationTrue_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(notification_1.NotificationEnum.EVENT_CODE_AUTHORISATION).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === "true").toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("123456789");
        }
        else {
            fail();
        }
    });
    it("should return capture success", function () {
        var notificationRequest = new notificationRequest_1.default(captureTrue_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(notification_1.NotificationEnum.EVENT_CODE_CAPTURE).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === "true").toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        }
        else {
            fail();
        }
    });
    it("should return capture fail", function () {
        var notificationRequest = new notificationRequest_1.default(captureFalse_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(notification_1.NotificationEnum.EVENT_CODE_CAPTURE).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === "true").toBeFalsy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
        }
        else {
            fail();
        }
    });
    it("should return refund success", function () {
        var notificationRequest = new notificationRequest_1.default(refundTrue_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(notification_1.NotificationEnum.EVENT_CODE_REFUND).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === "true").toBeTruthy();
            expect(notificationRequestItem.pspReference).toEqual("PSP_REFERENCE");
            expect(notificationRequestItem.originalReference).toEqual("ORIGINAL_PSP");
            expect(notificationRequestItem.eventDate).toBeDefined();
        }
        else {
            fail();
        }
    });
    it("should return refund fail", function () {
        var notificationRequest = new notificationRequest_1.default(refundFalse_json_1.default);
        expect(notificationRequest.notificationItems).toHaveLength(1);
        if (notificationRequest.notificationItems) {
            var notificationRequestItem = notificationRequest.notificationItems[0];
            expect(notification_1.NotificationEnum.EVENT_CODE_REFUND).toEqual(notificationRequestItem.eventCode);
            expect(notificationRequestItem.success === "true").toBeFalsy();
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
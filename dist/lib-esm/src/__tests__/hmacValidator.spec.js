var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
import HmacValidator from "../utils/hmacValidator";
import { NotificationRequestItem } from "../typings/notification/models";
import { ApiConstants } from "../constants/apiConstants";
import NotificationRequest from "../notification/notificationRequest";
var key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
var expectedSign = "ZNBPtI+oDyyRrLyD1XirkKnQgIAlFc07Vj27TeHsDRE=";
var notificationRequestItem = {
    NotificationRequestItem: {
        pspReference: "pspReference",
        originalReference: "originalReference",
        merchantAccountCode: "merchantAccount",
        merchantReference: "reference",
        amount: { currency: "EUR", value: 1000 },
        eventCode: NotificationRequestItem.EventCodeEnum.REPORTAVAILABLE,
        eventDate: "2019-09-21T11:45:24.637Z",
        paymentMethod: "VISA",
        reason: "reason",
        success: NotificationRequestItem.SuccessEnum.True,
        additionalData: (_a = {}, _a[ApiConstants.HMAC_SIGNATURE] = expectedSign, _a),
    }
};
var notification = new NotificationRequest({
    live: "false",
    notificationItems: [notificationRequestItem]
});
describe("HMAC Validator", function () {
    var hmacValidator;
    beforeEach(function () {
        hmacValidator = new HmacValidator();
    });
    it("should get correct data", function () {
        var dataToSign = hmacValidator.getDataToSign({ merchantAccount: "ACC", currencyCode: "EUR" });
        expect(dataToSign).toEqual("currencyCode:merchantAccount:EUR:ACC");
    });
    it("should get correct data with escaped characters", function () {
        var dataToSign = hmacValidator.getDataToSign({ currencyCode: "EUR", merchantAccount: "ACC:\\", sessionValidity: "2019-09-21T11:45:24.637Z" });
        expect(dataToSign).toEqual("currencyCode:merchantAccount:sessionValidity:EUR:ACC\\:\\\\:2019-09-21T11\\:45\\:24.637Z");
    });
    it("should encrypt correctly", function () {
        var data = "countryCode:currencyCode:merchantAccount:merchantReference:paymentAmount:sessionValidity:skinCode:NL:EUR:MagentoMerchantTest2:TEST-PAYMENT-2017-02-01-14\\:02\\:05:199:2017-02-02T14\\:02\\:05+01\\:00:PKz2KML1";
        var encrypted = hmacValidator.calculateHmac(data, "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00");
        expect(encrypted).toEqual("34oR8T1whkQWTv9P+SzKyp8zhusf9n0dpqrm9nsqSJs=");
    });
    it("should get correct data to sign", function () {
        var data = hmacValidator.getDataToSign(notification.notificationItems[0]);
        expect(data).toEqual("pspReference:originalReference:merchantAccount:reference:1000:EUR:REPORT_AVAILABLE:true");
    });
    it("should have valid hmac", function () {
        var encrypted = hmacValidator.calculateHmac(notification.notificationItems[0], key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notification.notificationItems[0], key)).toBeTruthy();
    });
    it("should have invalid hmac", function () {
        var _a;
        var invalidNotification = __assign(__assign({}, notification.notificationItems[0]), { additionalData: (_a = {}, _a[ApiConstants.HMAC_SIGNATURE] = "notValidSign", _a) });
        var result = hmacValidator.validateHMAC(invalidNotification, key);
        expect(result).toBeFalsy();
    });
    it("should test hmac", function () {
        var data = "countryCode:currencyCode:merchantAccount:merchantReference:paymentAmount:sessionValidity:skinCode:NL:EUR:MagentoMerchantTest2:TEST-PAYMENT-2017-02-01-14\\:02\\:05:199:2017-02-02T14\\:02\\:05+01\\:00:PKz2KML1";
        var key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
        var hmacValidator = new HmacValidator();
        var encrypted = hmacValidator.calculateHmac(data, key);
        expect(encrypted).toEqual("34oR8T1whkQWTv9P+SzKyp8zhusf9n0dpqrm9nsqSJs=");
    });
    it("should validate HMAC", function () {
        expect(hmacValidator.validateHMAC(notification.notificationItems[0], key)).toBeTruthy();
    });
    it("should have valid notification request item HMAC", function () {
        var _a;
        var expectedSign = "ipnxGCaUZ4l8TUW75a71/ghd2Fe5ffvX0pV4TLTntIc=";
        var notificationRequestItem = { NotificationRequestItem: {
                pspReference: "pspReference",
                originalReference: "originalReference",
                merchantAccountCode: "merchantAccount",
                merchantReference: "reference",
                amount: { currency: "EUR", value: 1000 },
                eventCode: "EVENT",
                success: "true",
                additionalData: (_a = {}, _a[ApiConstants.HMAC_SIGNATURE] = expectedSign, _a)
            } };
        var notification = new NotificationRequest({
            live: "false",
            notificationItems: [notificationRequestItem]
        });
        var data = hmacValidator.getDataToSign(notification.notificationItems[0]);
        expect("pspReference:originalReference:merchantAccount:reference:1000:EUR:EVENT:true").toEqual(data);
        var encrypted = hmacValidator.calculateHmac(notification.notificationItems[0], key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notification.notificationItems[0], key)).toBeTruthy();
        notification.notificationItems[0].additionalData[ApiConstants.HMAC_SIGNATURE] = "notValidSign";
        expect(hmacValidator.validateHMAC(notification.notificationItems[0], key)).toBeFalsy();
    });
});
//# sourceMappingURL=hmacValidator.spec.js.map
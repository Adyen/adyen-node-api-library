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
import { ApiConstants } from "../constants/apiConstants";
var key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
var expectedSign = "ipnxGCaUZ4l8TUW75a71/ghd2Fe5ffvX0pV4TLTntIc=";
var notificationRequestItem = {
    pspReference: "pspReference",
    originalReference: "originalReference",
    merchantAccountCode: "merchantAccount",
    merchantReference: "reference",
    amount: { currency: "EUR", value: 1000 },
    eventCode: "EVENT",
    eventDate: new Date("01-01-1970"),
    paymentMethod: "VISA",
    reason: "reason",
    success: "true",
    additionalData: (_a = {}, _a[ApiConstants.HMAC_SIGNATURE] = expectedSign, _a),
};
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
        var data = hmacValidator.getDataToSign(notificationRequestItem);
        expect(data).toEqual("pspReference:originalReference:merchantAccount:reference:1000:EUR:EVENT:true");
    });
    it("should have valid hmac", function () {
        var encrypted = hmacValidator.calculateHmac(notificationRequestItem, key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notificationRequestItem, key)).toBeTruthy();
    });
    it("should have invalid hmac", function () {
        var _a;
        var invalidNotification = __assign(__assign({}, notificationRequestItem), { additionalData: (_a = {}, _a[ApiConstants.HMAC_SIGNATURE] = "notValidSign", _a) });
        var result = hmacValidator.validateHMAC(invalidNotification, key);
        expect(result).toBeFalsy();
    });
});
//# sourceMappingURL=hmacValidator.spec.js.map
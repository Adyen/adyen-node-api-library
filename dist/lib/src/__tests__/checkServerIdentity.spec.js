"use strict";
/* eslint-disable @typescript-eslint/camelcase */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkServerIdentity_1 = __importDefault(require("../helpers/checkServerIdentity"));
var createMockedCertificate = function (CN) { return ({
    subjectaltname: "Adyen B.V",
    infoAccess: { mock: ["any"] },
    subject: {
        C: "AB",
        ST: "AB",
        L: "City",
        O: "Company Name",
        OU: "Mocked Value",
        CN: CN,
    },
    issuer: {
        C: "AB",
        ST: "AB",
        L: "City",
        O: "Issuer Name",
        OU: "Issuer",
        CN: "Issuer CN",
    },
    modulus: "ABC123",
    exponent: "01010101",
    valid_from: "Nov 19 15:03:32 2018 GMT",
    valid_to: "Nov 11 15:03:32 2048 GMT",
    fingerprint: "MOCKED_FINGERPRINT",
    ext_key_usage: ["1.2.3.4.5.6.7.8"],
    serialNumber: "1000",
    raw: Buffer.from("test")
}); };
describe("Certificate Server Identiy", function () {
    test.each([
        ["legacy-terminal-certificate", "live"],
        ["legacy-terminal-certificate", "test"],
        ["P400-3123123", "live"],
        ["P400-3123123", "test"],
        ["MODEL-SN", "live"],
        ["MODEL-SN", "test"],
    ])("it should be valid: %s.%s", function (prefix, environment) {
        var cn = prefix + "." + environment + ".terminal.adyen.com";
        var mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity_1.default("any", mockedCertificate)).toBeUndefined();
    });
    test.each([
        "INVALID.adyen.com",
        "terminal.INVALID.com",
        "terminal.adyen.org",
        "google.com",
        "",
    ])("it should fail because invalid domain: %s", function (domain) {
        var cn = "P400-123123.live." + domain;
        var mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity_1.default("any", mockedCertificate) instanceof Error).toBeTruthy();
    });
    test.each([
        "liive", "teest", "lve", "tst", "ANY", "invalid",
    ])("it should fail because invalid environment: %s", function (environment) {
        var cn = "P400-123123." + environment + ".terminal.adyen.com";
        var mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity_1.default("any", mockedCertificate) instanceof Error).toBeTruthy();
    });
    test.each([
        "legacyy-terminal-certificate", "legacy-terminaal-certificate",
        "legacy-terminal-certificatee", "P400-", "-123123", "P400--123123", "P400123123",
        "ANY-ANY-ANY", "ANY", ""
    ])("it should fail because invalid prefix: %s", function (prefix) {
        var cn = prefix + ".test.terminal.adyen.com";
        var mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity_1.default("any", mockedCertificate) instanceof Error).toBeTruthy();
    });
    it("should fail if no first part on CN", function () {
        var cn = "live.terminal.adyen.com";
        var mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity_1.default("any", mockedCertificate) instanceof Error).toBeTruthy();
    });
});
//# sourceMappingURL=checkServerIdentity.spec.js.map
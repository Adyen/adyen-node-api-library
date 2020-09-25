/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/* eslint-disable @typescript-eslint/camelcase */

import checkServerIdentity from "../helpers/checkServerIdentity";
import { PeerCertificate } from "tls";

const createMockedCertificate = (CN: string): PeerCertificate => ({
    subjectaltname: "Adyen B.V",
    infoAccess: {mock: ["any"]},
    subject:
        {
            C: "AB",
            ST: "AB",
            L: "City",
            O: "Company Name",
            OU: "Mocked Value",
            CN,
        },
    issuer:
        {
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
    fingerprint256: "MOCKED_FINGERPRINT_256",
    ext_key_usage: ["1.2.3.4.5.6.7.8"],
    serialNumber: "1000",
    raw: Buffer.from("test")
});

describe("Certificate Server Identiy", function () {
    test.each([
        ["legacy-terminal-certificate", "live"],
        ["legacy-terminal-certificate", "test"],
        ["P400-3123123", "live"],
        ["P400-3123123", "test"],
        ["MODEL-SN", "live"],
        ["MODEL-SN", "test"],
    ])("it should be valid: %s.%s", (prefix, environment) => {
        const cn = `${prefix}.${environment}.terminal.adyen.com`;
        const mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity("any", mockedCertificate)).toBeUndefined();
    });

    test.each([
        "INVALID.adyen.com",
        "terminal.INVALID.com",
        "terminal.adyen.org",
        "google.com",
        "",
    ])("it should fail because invalid domain: %s", (domain) => {
        const cn = `P400-123123.live.${domain}`;
        const mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity("any", mockedCertificate) instanceof Error).toBeTruthy();
    });

    test.each([
        "liive", "teest", "lve", "tst", "ANY", "invalid",
    ])("it should fail because invalid environment: %s", (environment) => {
        const cn = `P400-123123.${environment}.terminal.adyen.com`;
        const mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity("any", mockedCertificate) instanceof Error).toBeTruthy();
    });

    test.each([
        "legacyy-terminal-certificate", "legacy-terminaal-certificate",
        "legacy-terminal-certificatee", "P400-", "-123123", "P400--123123", "P400123123",
        "ANY-ANY-ANY", "ANY", ""
    ])("it should fail because invalid prefix: %s", (prefix) => {
        const cn = `${prefix}.test.terminal.adyen.com`;
        const mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity("any", mockedCertificate) instanceof Error).toBeTruthy();
    });

    it("should fail if no first part on CN", function () {
        const cn = "live.terminal.adyen.com";
        const mockedCertificate = createMockedCertificate(cn);
        expect(checkServerIdentity("any", mockedCertificate) instanceof Error).toBeTruthy();
    });
});
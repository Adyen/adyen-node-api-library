import HmacValidator from "../utils/hmacValidator";
import {NotificationItem, NotificationRequestItem } from "../typings/notification/models";
import { ApiConstants } from "../constants/apiConstants";
import NotificationRequestService from "../notification/notificationRequest";
import { readFileSync } from "fs";
import { createHmac } from "crypto";

const key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
const expectedSign = "ZNBPtI+oDyyRrLyD1XirkKnQgIAlFc07Vj27TeHsDRE=";

const notificationRequestItem: { NotificationRequestItem: NotificationRequestItem } = {
    NotificationRequestItem : {
        pspReference: "pspReference",
        originalReference: "originalReference",
        merchantAccountCode: "merchantAccount",
        merchantReference: "reference",
        amount: {currency: "EUR", value: 1000},
        eventCode: NotificationRequestItem.EventCodeEnum.ReportAvailable,
        eventDate: "2019-09-21T11:45:24.637Z",
        paymentMethod: "VISA",
        reason: "reason",
        success: NotificationRequestItem.SuccessEnum.True,
        additionalData: { [ApiConstants.HMAC_SIGNATURE]: expectedSign },
    }
};
const notification = new NotificationRequestService({
    live: "false",
    notificationItems: [notificationRequestItem as unknown as NotificationItem]
});

describe("HMAC Validator", function (): void {
    let hmacValidator: HmacValidator;
    beforeEach(() => {
        hmacValidator = new HmacValidator();
    });

    it("should get correct data", function (): void {
        const dataToSign = hmacValidator.getDataToSign({merchantAccount: "ACC", currencyCode: "EUR"});
        expect(dataToSign).toEqual("currencyCode:merchantAccount:EUR:ACC");
    });
    it("should get correct data with escaped characters", function (): void {
        const dataToSign = hmacValidator.getDataToSign({currencyCode: "EUR", merchantAccount: "ACC:\\", sessionValidity: "2019-09-21T11:45:24.637Z"});
        expect(dataToSign).toEqual("currencyCode:merchantAccount:sessionValidity:EUR:ACC\\:\\\\:2019-09-21T11\\:45\\:24.637Z");
    });
    it("should encrypt correctly", function (): void {
        const data = "countryCode:currencyCode:merchantAccount:merchantReference:paymentAmount:sessionValidity:skinCode:NL:EUR:MagentoMerchantTest2:TEST-PAYMENT-2017-02-01-14\\:02\\:05:199:2017-02-02T14\\:02\\:05+01\\:00:PKz2KML1";
        const encrypted = hmacValidator.calculateHmac(data, "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00");
        expect(encrypted).toEqual("34oR8T1whkQWTv9P+SzKyp8zhusf9n0dpqrm9nsqSJs=");
    });
    it("should get correct data to sign", function (): void {
        const data = hmacValidator.getDataToSign(notification.notificationItems![0]);
        expect(data).toEqual("pspReference:originalReference:merchantAccount:reference:1000:EUR:REPORT_AVAILABLE:true");
    });

    it("should have valid hmac", function (): void {
        const encrypted = hmacValidator.calculateHmac(notification.notificationItems![0], key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notification.notificationItems![0], key)).toBeTruthy();
    });

    it("should have invalid hmac", function (): void {
        const invalidNotification = {
            ...notification.notificationItems![0],
            additionalData: { [ApiConstants.HMAC_SIGNATURE]: "notValidSign" }
        };
        const result = hmacValidator.validateHMAC(invalidNotification, key);
        expect(result).toBeFalsy();
    });

    it("should throw error with missing hmac signature", function(): void {
        expect.assertions(1);
        const notificationRequestItemNoAdditionalData: NotificationRequestItem = {
            pspReference: "pspReference",
            originalReference: "originalReference",
            merchantAccountCode: "merchantAccount",
            merchantReference: "reference",
            amount: {currency: "EUR", value: 1000},
            eventCode: NotificationRequestItem.EventCodeEnum.ReportAvailable,
            eventDate: "2019-09-21T11:45:24.637Z",
            paymentMethod: "VISA",
            reason: "reason",
            success: NotificationRequestItem.SuccessEnum.True,
            additionalData: { },
        };
        try {
        hmacValidator.validateHMAC(notificationRequestItemNoAdditionalData, key);
        } catch(error) {
            if(error instanceof Error) {
                expect(error.message).toEqual(`Missing ${ApiConstants.HMAC_SIGNATURE}`);
            } else {
                fail();
            }
        }
    });

    it("should test hmac", function () {
        const data = "countryCode:currencyCode:merchantAccount:merchantReference:paymentAmount:sessionValidity:skinCode:NL:EUR:MagentoMerchantTest2:TEST-PAYMENT-2017-02-01-14\\:02\\:05:199:2017-02-02T14\\:02\\:05+01\\:00:PKz2KML1";
        const key = "DFB1EB5485895CFA84146406857104ABB4CBCABDC8AAF103A624C8F6A3EAAB00";
        const hmacValidator = new HmacValidator();
        const encrypted = hmacValidator.calculateHmac(data, key);
        expect(encrypted).toEqual("34oR8T1whkQWTv9P+SzKyp8zhusf9n0dpqrm9nsqSJs=");
    });

    it("should validate HMAC", function () {
        expect(hmacValidator.validateHMAC(notification.notificationItems![0], key)).toBeTruthy();
    });

    it("should have valid notification request item HMAC", function () {
        const expectedSign = "ipnxGCaUZ4l8TUW75a71/ghd2Fe5ffvX0pV4TLTntIc=";
        const notificationRequestItem = { NotificationRequestItem: {
            pspReference: "pspReference",
            originalReference: "originalReference",
            merchantAccountCode: "merchantAccount",
            merchantReference: "reference",
            amount: { currency: "EUR", value: 1000 },
            eventCode: "EVENT",
            success: "true",
            additionalData: { [ApiConstants.HMAC_SIGNATURE]: expectedSign }
        }} as unknown as NotificationItem;
        const notification = new NotificationRequestService({
            live: "false",
            notificationItems: [notificationRequestItem]
        });
        const data = hmacValidator.getDataToSign(notification.notificationItems![0]);
        expect("pspReference:originalReference:merchantAccount:reference:1000:EUR:EVENT:true").toEqual(data);
        const encrypted = hmacValidator.calculateHmac(notification.notificationItems![0], key);
        expect(expectedSign).toEqual(encrypted);
        expect(hmacValidator.validateHMAC(notification.notificationItems![0], key)).toBeTruthy();
        notification.notificationItems![0].additionalData![ApiConstants.HMAC_SIGNATURE] = "notValidSign";
        expect(hmacValidator.validateHMAC(notification.notificationItems![0], key)).toBeFalsy();
    });

    it("should calculate Banking webhook correctly", function (): void {
        const data = readFileSync("./src/__mocks__/notification/accountHolderCreated.json", "utf8"); 
        const encrypted = hmacValidator.calculateHmac(data, "11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB");
        
        expect(encrypted).toEqual("UVBzHbDayhfT1XgaRGAkuKvxwoxrLoVCBdfi3WZU8lI=");
    });

    it("should validate Banking webhook correctly", function (): void {
        const hmacKey = "11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB";
        const hmacSignature = "UVBzHbDayhfT1XgaRGAkuKvxwoxrLoVCBdfi3WZU8lI=";
        const data = readFileSync("./src/__mocks__/notification/accountHolderCreated.json", "utf8");
        const isValid = hmacValidator.validateHMACSignature(hmacKey, hmacSignature, data);
        
        expect(isValid).toBeTruthy;
    });


    it("should return false (not throw) when the signature length matches but decodes to a different byte length", function (): void {
        const key = "DFB1EB5485295588A7DED4CF1BB4CA24C2B41BFC33C5EA6CA05B2A87F98F1F55";
        const data = "pspReference:originalReference:merchantAccount:reference:1000:EUR:AUTHORISATION:true";
        // 44 base64 chars, same length as a real SHA-256 HMAC signature, but decodes to 33 bytes.
        const malformedSignature = "A".repeat(44);
        expect((): boolean => hmacValidator.validateHMACSignature(key, malformedSignature, data)).not.toThrow();
        expect(hmacValidator.validateHMACSignature(key, malformedSignature, data)).toBe(false);
    });

    it("validateHMAC returns false (not throw) when the item signature length matches but decodes to a different byte length", function (): void {
        // 44 base64 chars, same length as a real SHA-256 HMAC signature, but decodes to 33 bytes.
        const malformedSignature = "A".repeat(44);
        const item = {
            ...notification.notificationItems![0],
            additionalData: { [ApiConstants.HMAC_SIGNATURE]: malformedSignature }
        };
        expect((): boolean => hmacValidator.validateHMAC(item, key)).not.toThrow();
        expect(hmacValidator.validateHMAC(item, key)).toBe(false);
    });

    it("validateBankingHMAC returns false (not throw) when the signature length matches but decodes to a different byte length", function (): void {
        const hmacKey = "11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB";
        const data = readFileSync("./src/__mocks__/notification/accountHolderCreated.json", "utf8");
        // 44 base64 chars, same length as a real SHA-256 HMAC signature, but decodes to 33 bytes.
        const malformedSignature = "A".repeat(44);
        expect((): boolean => hmacValidator.validateBankingHMAC(malformedSignature, hmacKey, data)).not.toThrow();
        expect(hmacValidator.validateBankingHMAC(malformedSignature, hmacKey, data)).toBe(false);
    });

    it("returns false when the received signature is empty or undefined (secureCompare guard)", function (): void {
        const hmacKey = "11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB";
        const data = readFileSync("./src/__mocks__/notification/accountHolderCreated.json", "utf8");
        expect(hmacValidator.validateHMACSignature(hmacKey, "", data)).toBe(false);
        expect(hmacValidator.validateHMACSignature(hmacKey, undefined as unknown as string, data)).toBe(false);
    });

    it("returns false (not throw) when the received signature is not a string", function (): void {
        const hmacKey = "11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB";
        const data = readFileSync("./src/__mocks__/notification/accountHolderCreated.json", "utf8");
        for (const signature of [123, {}, ["UVBzHbDayhfT1XgaRGAkuKvxwoxrLoVCBdfi3WZU8lI="]]) {
            expect(hmacValidator.validateHMACSignature(hmacKey, signature as unknown as string, data)).toBe(false);
            const item = {
                ...notification.notificationItems![0],
                additionalData: { [ApiConstants.HMAC_SIGNATURE]: signature as unknown as string }
            };
            expect(hmacValidator.validateHMAC(item, key)).toBe(false);
        }
    });


    describe("malformed HMAC keys", function (): void {
        const bankingKey = "11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB";
        const bankingSignature = "UVBzHbDayhfT1XgaRGAkuKvxwoxrLoVCBdfi3WZU8lI=";
        const data = readFileSync("./src/__mocks__/notification/accountHolderCreated.json", "utf8");
        // Each of these decodes to an empty or truncated key with Buffer.from(key, "hex").
        const malformedKeys = [
            ["an empty key", ""],
            ["a quoted key", `"${bankingKey}"`],
            ["a key with a leading space", ` ${bankingKey}`],
            ["a key with a trailing newline", `${bankingKey}\n`],
            ["an odd-length key", bankingKey.slice(0, -1)],
            ["a key with non-hex characters", `${bankingKey.slice(0, -2)}ZZ`],
        ];

        it.each(malformedKeys)("validateHMACSignature throws for %s", function (_, badKey): void {
            expect(() => hmacValidator.validateHMACSignature(badKey, bankingSignature, data)).toThrow("Invalid HMAC key");
        });

        it.each(malformedKeys)("validateBankingHMAC throws for %s", function (_, badKey): void {
            expect(() => hmacValidator.validateBankingHMAC(bankingSignature, badKey, data)).toThrow("Invalid HMAC key");
        });

        it.each(malformedKeys)("validateHMAC throws for %s", function (_, badKey): void {
            expect(() => hmacValidator.validateHMAC(notification.notificationItems![0], badKey)).toThrow("Invalid HMAC key");
        });

        it.each(malformedKeys)("calculateHmac throws for %s", function (_, badKey): void {
            expect(() => hmacValidator.calculateHmac(data, badKey)).toThrow("Invalid HMAC key");
        });

        it("does not include the key in the error message", function (): void {
            expect(() => hmacValidator.validateHMACSignature(`"${bankingKey}"`, bankingSignature, data)).toThrow(
                expect.objectContaining({ message: expect.not.stringContaining(bankingKey) })
            );
        });

        it("rejects a signature made with an empty key when the configured key is quoted", function (): void {
            const forged = createHmac("sha256", Buffer.alloc(0)).update(data, "utf8").digest("base64");
            expect(() => hmacValidator.validateHMACSignature(`"${bankingKey}"`, forged, data)).toThrow("Invalid HMAC key");
        });

        it("accepts lower-case hex keys", function (): void {
            expect(hmacValidator.validateHMACSignature(bankingKey.toLowerCase(), bankingSignature, data)).toBe(true);
        });
    });

    describe("signature comparison", function (): void {
        const bankingKey = "11223344D785FBAE710E7F943F307971BB61B21281C98C9129B3D4018A57B2EB";
        const bankingSignature = "UVBzHbDayhfT1XgaRGAkuKvxwoxrLoVCBdfi3WZU8lI=";
        const data = readFileSync("./src/__mocks__/notification/accountHolderCreated.json", "utf8");
        // Node's base64 decoding maps each of these to the same bytes as the real signature.
        const variants = [
            ["data appended after the padding", `${bankingSignature}AAAA`],
            ["invalid characters appended", `${bankingSignature}!!`],
            ["the padding removed", bankingSignature.replace(/=+$/, "")],
        ];

        it("accepts the exact signature", function (): void {
            expect(hmacValidator.validateHMACSignature(bankingKey, bankingSignature, data)).toBe(true);
            expect(hmacValidator.validateBankingHMAC(bankingSignature, bankingKey, data)).toBe(true);
        });

        it.each(variants)("rejects the signature with %s", function (_, variant): void {
            expect(hmacValidator.validateHMACSignature(bankingKey, variant, data)).toBe(false);
            expect(hmacValidator.validateBankingHMAC(variant, bankingKey, data)).toBe(false);
        });

        it("validateHMAC rejects altered item signatures", function (): void {
            for (const variant of [`${expectedSign}AAAA`, `${expectedSign}!!`, expectedSign.replace(/=+$/, "")]) {
                const item = {
                    ...notification.notificationItems![0],
                    additionalData: { [ApiConstants.HMAC_SIGNATURE]: variant }
                };
                expect(hmacValidator.validateHMAC(item, key)).toBe(false);
            }
        });
    });

});

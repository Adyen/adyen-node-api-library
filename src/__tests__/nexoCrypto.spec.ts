import NexoCrypto from "../security/nexoCrypto";
import NexoCryptoException from "../services/exception/nexoCryptoException";
import InvalidSecurityKeyException from "../security/exception/invalidSecurityKeyException";
import { MessageCategoryType } from "../typings/terminal/messageCategoryType";
import { MessageClassType } from "../typings/terminal/messageClassType";
import { MessageType } from "../typings/terminal/messageType";
import { MessageHeader, SecurityKey, SaleToPOISecuredMessage } from "../typings/terminal/models";

const securityKey: SecurityKey = {
    AdyenCryptoVersion: 1,
    KeyIdentifier: "testKeyIdentifier",
    KeyVersion: 1,
    Passphrase: "testPassphrase123",
};

const messageHeader: MessageHeader = {
    MessageCategory: MessageCategoryType.Payment,
    MessageClass: MessageClassType.Service,
    MessageType: MessageType.Request,
    POIID: "P400Plus-123456789",
    ProtocolVersion: "3.0",
    SaleID: "POSSystemID12345",
    ServiceID: "12345678",
};

describe("NexoCrypto", (): void => {
    test("encrypt returns a valid SaleToPOISecuredMessage", (): void => {
        const payload = JSON.stringify({ SaleToPOIRequest: { MessageHeader: messageHeader } });
        const result = NexoCrypto.encrypt(messageHeader, payload, securityKey);

        expect(result.MessageHeader).toEqual(messageHeader);
        expect(typeof result.NexoBlob).toBe("string");
        expect(result.NexoBlob.length).toBeGreaterThan(0);
        expect(result.SecurityTrailer).toBeDefined();
        expect(result.SecurityTrailer.KeyIdentifier).toBe("testKeyIdentifier");
        expect(result.SecurityTrailer.KeyVersion).toBe(1);
        expect(result.SecurityTrailer.AdyenCryptoVersion).toBe(1);
        expect(typeof result.SecurityTrailer.Nonce).toBe("string");
        expect(typeof result.SecurityTrailer.Hmac).toBe("string");
    });

    test("encrypt produces different Nonce on each call", (): void => {
        const payload = JSON.stringify({ test: "data" });
        const result1 = NexoCrypto.encrypt(messageHeader, payload, securityKey);
        const result2 = NexoCrypto.encrypt(messageHeader, payload, securityKey);

        expect(result1.SecurityTrailer.Nonce).not.toBe(result2.SecurityTrailer.Nonce);
    });

    test("encrypt then decrypt round-trip preserves the original payload", (): void => {
        const nexoCrypto = new NexoCrypto();
        const payload = JSON.stringify({ test: "hello world", amount: 100 });

        const encrypted = NexoCrypto.encrypt(messageHeader, payload, securityKey);
        const decrypted = nexoCrypto.decrypt(encrypted, securityKey);

        expect(decrypted).toBe(payload);
    });

    test("decrypt throws NexoCryptoException on tampered HMAC", (): void => {
        const nexoCrypto = new NexoCrypto();
        const payload = JSON.stringify({ test: "data" });

        const encrypted = NexoCrypto.encrypt(messageHeader, payload, securityKey);
        const tamperedHmac = Buffer.from(encrypted.SecurityTrailer.Hmac, "base64");
        tamperedHmac[0] ^= 0xFF;
        const tampered: SaleToPOISecuredMessage = {
            ...encrypted,
            SecurityTrailer: { ...encrypted.SecurityTrailer, Hmac: tamperedHmac.toString("base64") },
        };

        expect(() => nexoCrypto.decrypt(tampered, securityKey)).toThrow(NexoCryptoException);
        expect(() => nexoCrypto.decrypt(tampered, securityKey)).toThrow("Hmac validation failed");
    });

    test("decrypt throws NexoCryptoException on a different-length HMAC", (): void => {
        const nexoCrypto = new NexoCrypto();
        const payload = JSON.stringify({ test: "data" });

        const encrypted = NexoCrypto.encrypt(messageHeader, payload, securityKey);
        // Truncate the HMAC so its length differs from the computed one. Without a
        // length guard, crypto.timingSafeEqual throws a raw TypeError instead of the
        // expected NexoCryptoException. See #1703.
        const truncatedHmac = Buffer.from(encrypted.SecurityTrailer.Hmac, "base64").subarray(0, 16);
        const tampered: SaleToPOISecuredMessage = {
            ...encrypted,
            SecurityTrailer: { ...encrypted.SecurityTrailer, Hmac: truncatedHmac.toString("base64") },
        };

        expect(() => nexoCrypto.decrypt(tampered, securityKey)).toThrow(NexoCryptoException);
        expect(() => nexoCrypto.decrypt(tampered, securityKey)).toThrow("Hmac validation failed");
    });

    test("decrypt throws InvalidSecurityKeyException when Passphrase is missing", (): void => {
        const nexoCrypto = new NexoCrypto();
        const payload = JSON.stringify({ test: "data" });
        const encrypted = NexoCrypto.encrypt(messageHeader, payload, securityKey);

        const invalidKey = { ...securityKey, Passphrase: "" } as SecurityKey;
        expect(() => nexoCrypto.decrypt(encrypted, invalidKey)).toThrow(InvalidSecurityKeyException);
        expect(() => nexoCrypto.decrypt(encrypted, invalidKey)).toThrow("Invalid Security Key");
    });

    test("decrypt throws InvalidSecurityKeyException when KeyIdentifier is missing", (): void => {
        const nexoCrypto = new NexoCrypto();
        const payload = JSON.stringify({ test: "data" });
        const encrypted = NexoCrypto.encrypt(messageHeader, payload, securityKey);

        const invalidKey = { ...securityKey, KeyIdentifier: "" } as SecurityKey;
        expect(() => nexoCrypto.decrypt(encrypted, invalidKey)).toThrow(InvalidSecurityKeyException);
    });
});

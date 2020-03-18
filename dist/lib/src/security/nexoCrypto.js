"use strict";
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
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var nexoCryptoException_1 = __importDefault(require("../services/exception/nexoCryptoException"));
var invalidSecurityKeyException_1 = __importDefault(require("./exception/invalidSecurityKeyException"));
var nexoDerivedKeyGenerator_1 = __importDefault(require("./nexoDerivedKeyGenerator"));
var nexoConstants_1 = require("../constants/nexoConstants");
var Modes;
(function (Modes) {
    Modes[Modes["ENCRYPT"] = 0] = "ENCRYPT";
    Modes[Modes["DECRYPT"] = 1] = "DECRYPT";
})(Modes || (Modes = {}));
var NexoCrypto = /** @class */ (function () {
    function NexoCrypto() {
    }
    NexoCrypto.encrypt = function (messageHeader, saleToPoiMessageJson, securityKey) {
        var derivedKey = nexoDerivedKeyGenerator_1.default.deriveKeyMaterial(securityKey.passphrase);
        var saleToPoiMessageByteArray = Buffer.from(saleToPoiMessageJson, "ascii");
        var ivNonce = NexoCrypto.generateRandomIvNonce();
        var encryptedSaleToPoiMessage = NexoCrypto.crypt(saleToPoiMessageByteArray, derivedKey, ivNonce, Modes.ENCRYPT);
        var encryptedSaleToPoiMessageHmac = NexoCrypto.hmac(saleToPoiMessageByteArray, derivedKey);
        var securityTrailer = {
            adyenCryptoVersion: securityKey.adyenCryptoVersion,
            hmac: encryptedSaleToPoiMessageHmac.toString("base64"),
            keyIdentifier: securityKey.keyIdentifier,
            keyVersion: securityKey.keyVersion,
            nonce: ivNonce.toString("base64"),
        };
        return {
            messageHeader: messageHeader,
            nexoBlob: encryptedSaleToPoiMessage.toString("base64"),
            securityTrailer: securityTrailer,
        };
    };
    NexoCrypto.prototype.decrypt = function (saleToPoiSecureMessage, securityKey) {
        NexoCrypto.validateSecurityKey(securityKey);
        var encryptedSaleToPoiMessageByteArray = Buffer.from(saleToPoiSecureMessage.nexoBlob, "base64");
        var derivedKey = nexoDerivedKeyGenerator_1.default.deriveKeyMaterial(securityKey.passphrase);
        var ivNonce = Buffer.from(saleToPoiSecureMessage.securityTrailer.nonce, "base64");
        var decryptedSaleToPoiMessageByteArray = NexoCrypto.crypt(encryptedSaleToPoiMessageByteArray, derivedKey, ivNonce, Modes.DECRYPT);
        var receivedHmac = Buffer.from(saleToPoiSecureMessage.securityTrailer.hmac, "base64");
        this.validateHmac(receivedHmac, decryptedSaleToPoiMessageByteArray, derivedKey);
        return decryptedSaleToPoiMessageByteArray.toString("ascii");
    };
    NexoCrypto.validateSecurityKey = function (securityKey) {
        var isValid = securityKey
            && securityKey.passphrase
            && securityKey.keyIdentifier
            && securityKey.keyVersion
            && securityKey.adyenCryptoVersion;
        if (!isValid) {
            throw new invalidSecurityKeyException_1.default("Invalid Security Key");
        }
    };
    NexoCrypto.crypt = function (bytes, dk, ivNonce, mode) {
        var actualIV = Buffer.alloc(nexoConstants_1.NexoEnum.IV_LENGTH);
        for (var i = 0; i < nexoConstants_1.NexoEnum.IV_LENGTH; i++) {
            actualIV[i] = dk.iv[i] ^ ivNonce[i];
        }
        var cipher = mode === Modes.ENCRYPT
            ? crypto_1.createCipheriv("aes-256-cbc", dk.cipherKey, actualIV)
            : crypto_1.createDecipheriv("aes-256-cbc", dk.cipherKey, actualIV);
        var encrypted = cipher.update(bytes);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return encrypted;
    };
    NexoCrypto.hmac = function (bytes, derivedKey) {
        var mac = crypto_1.createHmac("sha256", derivedKey.hmacKey);
        return mac.update(bytes).digest();
    };
    NexoCrypto.generateRandomIvNonce = function () {
        return crypto_1.randomBytes(nexoConstants_1.NexoEnum.IV_LENGTH);
    };
    NexoCrypto.prototype.validateHmac = function (receivedHmac, decryptedMessage, derivedKey) {
        var hmac = NexoCrypto.hmac(decryptedMessage, derivedKey);
        var isValid = hmac.every(function (item, index) { return item === receivedHmac[index]; });
        if (!isValid) {
            throw new nexoCryptoException_1.default("Hmac validation failed");
        }
    };
    return NexoCrypto;
}());
exports.default = NexoCrypto;
//# sourceMappingURL=nexoCrypto.js.map
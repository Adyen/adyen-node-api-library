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
import { createCipheriv, createDecipheriv, createHmac, randomBytes } from "crypto";
import NexoCryptoException from "../services/exception/nexoCryptoException";
import InvalidSecurityKeyException from "./exception/invalidSecurityKeyException";
import NexoDerivedKeyGenerator from "./nexoDerivedKeyGenerator";
import { NexoEnum } from "../constants/nexoConstants";
var Modes;
(function (Modes) {
    Modes[Modes["ENCRYPT"] = 0] = "ENCRYPT";
    Modes[Modes["DECRYPT"] = 1] = "DECRYPT";
})(Modes || (Modes = {}));
var NexoCrypto = /** @class */ (function () {
    function NexoCrypto() {
    }
    NexoCrypto.encrypt = function (messageHeader, saleToPoiMessageJson, securityKey) {
        var derivedKey = NexoDerivedKeyGenerator.deriveKeyMaterial(securityKey.passphrase);
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
        var derivedKey = NexoDerivedKeyGenerator.deriveKeyMaterial(securityKey.passphrase);
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
            throw new InvalidSecurityKeyException("Invalid Security Key");
        }
    };
    NexoCrypto.crypt = function (bytes, dk, ivNonce, mode) {
        var actualIV = Buffer.alloc(NexoEnum.IV_LENGTH);
        for (var i = 0; i < NexoEnum.IV_LENGTH; i++) {
            actualIV[i] = dk.iv[i] ^ ivNonce[i];
        }
        var cipher = mode === Modes.ENCRYPT
            ? createCipheriv("aes-256-cbc", dk.cipherKey, actualIV)
            : createDecipheriv("aes-256-cbc", dk.cipherKey, actualIV);
        var encrypted = cipher.update(bytes);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return encrypted;
    };
    NexoCrypto.hmac = function (bytes, derivedKey) {
        var mac = createHmac("sha256", derivedKey.hmacKey);
        return mac.update(bytes).digest();
    };
    NexoCrypto.generateRandomIvNonce = function () {
        return randomBytes(NexoEnum.IV_LENGTH);
    };
    NexoCrypto.prototype.validateHmac = function (receivedHmac, decryptedMessage, derivedKey) {
        var hmac = NexoCrypto.hmac(decryptedMessage, derivedKey);
        var isValid = hmac.every(function (item, index) { return item === receivedHmac[index]; });
        if (!isValid) {
            throw new NexoCryptoException("Hmac validation failed");
        }
    };
    return NexoCrypto;
}());
export default NexoCrypto;
//# sourceMappingURL=nexoCrypto.js.map
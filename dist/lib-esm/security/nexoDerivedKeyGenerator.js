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
import { pbkdf2Sync } from "crypto";
import { NEXO_CIPHER_KEY_LENGTH, NEXO_HMAC_KEY_LENGTH, NEXO_IV_LENGTH } from "../typings/constants/nexoConstants";
var NexoDerivedKeyGenerator = /** @class */ (function () {
    function NexoDerivedKeyGenerator() {
    }
    NexoDerivedKeyGenerator.deriveKeyMaterial = function (passphrase) {
        var pass = Buffer.from(passphrase, "binary");
        var salt = Buffer.from("AdyenNexoV1Salt", "binary");
        var iterations = 4000;
        var keylen = NEXO_CIPHER_KEY_LENGTH + NEXO_HMAC_KEY_LENGTH + NEXO_IV_LENGTH;
        var key = pbkdf2Sync(pass, salt, iterations, keylen * 8, "sha1");
        return NexoDerivedKeyGenerator.readKeyData(key);
    };
    NexoDerivedKeyGenerator.readKeyData = function (key) {
        return {
            cipherKey: key.slice(NEXO_HMAC_KEY_LENGTH, NEXO_HMAC_KEY_LENGTH + NEXO_CIPHER_KEY_LENGTH),
            hmacKey: key.slice(0, NEXO_HMAC_KEY_LENGTH),
            iv: key.slice(NEXO_HMAC_KEY_LENGTH + NEXO_CIPHER_KEY_LENGTH, NEXO_CIPHER_KEY_LENGTH + NEXO_HMAC_KEY_LENGTH + NEXO_IV_LENGTH),
        };
    };
    return NexoDerivedKeyGenerator;
}());
export default NexoDerivedKeyGenerator;
//# sourceMappingURL=nexoDerivedKeyGenerator.js.map
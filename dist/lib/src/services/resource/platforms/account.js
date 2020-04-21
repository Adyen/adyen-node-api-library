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
Object.defineProperty(exports, "__esModule", { value: true });
var AccountHoldersEndpoints;
(function (AccountHoldersEndpoints) {
    AccountHoldersEndpoints["createAccountHolder"] = "/createAccountHolder";
    AccountHoldersEndpoints["getAccountHolder"] = "/getAccountHolder";
    AccountHoldersEndpoints["updateAccountholder"] = "/updateAccountholder";
    AccountHoldersEndpoints["suspendAccountHolder"] = "/suspendAccountHolder";
    AccountHoldersEndpoints["unSuspendAccountHolder"] = "/unSuspendAccountHolder";
    AccountHoldersEndpoints["closeAccountHolder"] = "/closeAccountHolder";
})(AccountHoldersEndpoints || (AccountHoldersEndpoints = {}));
var VerificationEndpoints;
(function (VerificationEndpoints) {
    VerificationEndpoints["uploadDocument"] = "/uploadDocument";
    VerificationEndpoints["getUploadedDocuments"] = "/getUploadedDocuments";
    VerificationEndpoints["deleteBankAccounts"] = "/deleteBankAccounts";
    VerificationEndpoints["deletePayoytMethods"] = "/deletePayoutMethods";
    VerificationEndpoints["deleteShareholdesrs"] = "/deleteShareholders";
    VerificationEndpoints["checkAccountHolder"] = "/checkAccountHolder";
})(VerificationEndpoints || (VerificationEndpoints = {}));
// declare type AccountTypesEnum = "AccountHolders" | "Accounts" | "Verification"
// declare type AccountHolders = "AccountHolders"
// declare type Accounts = "Accounts"
// declare type Verification = "Verification"
var AccountTypesEnum;
(function (AccountTypesEnum) {
    AccountTypesEnum["AccountHolders"] = "AccountHolders";
    AccountTypesEnum["Accounts"] = "Accounts";
    AccountTypesEnum["Verification"] = "Verification";
})(AccountTypesEnum = exports.AccountTypesEnum || (exports.AccountTypesEnum = {}));
var PlatformsAccount = /** @class */ (function () {
    function PlatformsAccount(endpoint) {
    }
    return PlatformsAccount;
}());
exports.default = PlatformsAccount;
//# sourceMappingURL=account.js.map
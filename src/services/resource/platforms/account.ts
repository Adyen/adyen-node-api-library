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

import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

type AccountHoldersEndpoints =
    "/createAccountHolder"|
    "/getAccountHolder"|
    "/updateAccountHolder"|
    "/suspendAccountHolder"|
    "/unSuspendAccountHolder"|
    "/closeAccountHolder"

type VerificationEndpoints =
    "/uploadDocument"|
    "/getUploadedDocuments"|
    "/deleteBankAccounts"|
    "/deletePayoutMethods"|
    "/deleteShareholders"|
    "/checkAccountHolder"

type AccountsEndpoints = "/createAccount" | "/updateAccount" | "/closeAccount"

export enum AccountTypesEnum {
    AccountHolders= "AccountHolders",
    Accounts= "Accounts",
    Verification= "Verification"
}

export interface AccountTypes {
    [AccountTypesEnum.AccountHolders]: AccountHoldersEndpoints;
    [AccountTypesEnum.Accounts]:  AccountsEndpoints;
    [AccountTypesEnum.Verification]: VerificationEndpoints;
}

class PlatformsAccount<T extends AccountTypesEnum> extends Resource {
    public constructor(service: Service, endpoint: AccountTypes[T]) {
        super(service, `${service.client.config.marketPayEndpoint}/Account/${Client.MARKETPAY_ACCOUNT_API_VERSION}/${endpoint}`);
    }
}

export default PlatformsAccount;

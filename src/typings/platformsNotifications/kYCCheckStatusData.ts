/**
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
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/platforms/notifications).
 *
 * The version of the OpenAPI document: 7
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KYCCheckSummary } from './kYCCheckSummary';

export class KYCCheckStatusData {
    /**
    * A list of the fields required for execution of the check.
    */
    'requiredFields'?: Array<string>;
    /**
    * The status of the check.  Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.
    */
    'status': KYCCheckStatusData.StatusEnum;
    'summary'?: KYCCheckSummary;
    /**
    * The type of check.  Possible values:   * **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.   * **COMPANY_VERIFICATION**    * **CARD_VERIFICATION**  * **IDENTITY_VERIFICATION**  * **LEGAL_ARRANGEMENT_VERIFICATION**  * **NONPROFIT_VERIFICATION**   * **PASSPORT_VERIFICATION**  * **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.  * **PCI_VERIFICATION**
    */
    'type': KYCCheckStatusData.TypeEnum;
}

export namespace KYCCheckStatusData {
    export enum StatusEnum {
        AwaitingData = <any> 'AWAITING_DATA',
        DataProvided = <any> 'DATA_PROVIDED',
        Failed = <any> 'FAILED',
        InvalidData = <any> 'INVALID_DATA',
        Passed = <any> 'PASSED',
        Pending = <any> 'PENDING',
        PendingReview = <any> 'PENDING_REVIEW',
        RetryLimitReached = <any> 'RETRY_LIMIT_REACHED',
        Unchecked = <any> 'UNCHECKED'
    }
    export enum TypeEnum {
        BankAccountVerification = <any> 'BANK_ACCOUNT_VERIFICATION',
        CardVerification = <any> 'CARD_VERIFICATION',
        CompanyVerification = <any> 'COMPANY_VERIFICATION',
        IdentityVerification = <any> 'IDENTITY_VERIFICATION',
        LegalArrangementVerification = <any> 'LEGAL_ARRANGEMENT_VERIFICATION',
        NonprofitVerification = <any> 'NONPROFIT_VERIFICATION',
        PassportVerification = <any> 'PASSPORT_VERIFICATION',
        PayoutMethodVerification = <any> 'PAYOUT_METHOD_VERIFICATION',
        PciVerification = <any> 'PCI_VERIFICATION'
    }
}

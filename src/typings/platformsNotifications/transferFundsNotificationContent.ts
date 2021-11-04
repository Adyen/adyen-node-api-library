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
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Amount } from './amount';
import { ErrorFieldType } from './errorFieldType';
import { OperationStatus } from './operationStatus';

export class TransferFundsNotificationContent {
    'amount': Amount;
    /**
    * The code of the Account to which funds were credited.
    */
    'destinationAccountCode': string;
    /**
    * Invalid fields list.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The reference provided by the merchant.
    */
    'merchantReference'?: string;
    /**
    * The code of the Account from which funds were debited.
    */
    'sourceAccountCode': string;
    'status'?: OperationStatus;
    /**
    * The transfer code.
    */
    'transferCode': string;
}

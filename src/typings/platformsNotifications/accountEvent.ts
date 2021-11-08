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


export class AccountEvent {
    /**
    * The event. >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`. For more information, refer to [Verification checks](https://docs.adyen.com/platforms/verification-checks).
    */
    'event': AccountEvent.EventEnum;
    /**
    * The date on which the event will take place.
    */
    'executionDate': Date;
    /**
    * The reason why this event has been created.
    */
    'reason': string;
}

export namespace AccountEvent {
    export enum EventEnum {
        InactivateAccount = <any> 'InactivateAccount',
        RefundNotPaidOutTransfers = <any> 'RefundNotPaidOutTransfers'
    }
}

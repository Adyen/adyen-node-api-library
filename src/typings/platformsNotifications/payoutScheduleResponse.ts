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


export class PayoutScheduleResponse {
    /**
    * The date of the next scheduled payout.
    */
    'nextScheduledPayout'?: Date;
    /**
    * The payout schedule of the account. >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
    */
    'schedule': PayoutScheduleResponse.ScheduleEnum;
}

export namespace PayoutScheduleResponse {
    export enum ScheduleEnum {
        BiweeklyOn1StAnd15ThAtMidnight = <any> 'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT',
        BiweeklyOn1StAnd15ThAtNoon = <any> 'BIWEEKLY_ON_1ST_AND_15TH_AT_NOON',
        BiDailyAu = <any> 'BI_DAILY_AU',
        BiDailyEu = <any> 'BI_DAILY_EU',
        BiDailyUs = <any> 'BI_DAILY_US',
        Daily = <any> 'DAILY',
        Daily6Pm = <any> 'DAILY_6PM',
        DailyAu = <any> 'DAILY_AU',
        DailyEu = <any> 'DAILY_EU',
        DailySg = <any> 'DAILY_SG',
        DailyUs = <any> 'DAILY_US',
        Default = <any> 'DEFAULT',
        Every6HoursFromMidnight = <any> 'EVERY_6_HOURS_FROM_MIDNIGHT',
        Hold = <any> 'HOLD',
        Monthly = <any> 'MONTHLY',
        MonthlyOn15ThAtMidnight = <any> 'MONTHLY_ON_15TH_AT_MIDNIGHT',
        Weekly = <any> 'WEEKLY',
        WeeklyMonToFriAu = <any> 'WEEKLY_MON_TO_FRI_AU',
        WeeklyMonToFriEu = <any> 'WEEKLY_MON_TO_FRI_EU',
        WeeklyMonToFriUs = <any> 'WEEKLY_MON_TO_FRI_US',
        WeeklyOnTueFriMidnight = <any> 'WEEKLY_ON_TUE_FRI_MIDNIGHT',
        Yearly = <any> 'YEARLY'
    }
}

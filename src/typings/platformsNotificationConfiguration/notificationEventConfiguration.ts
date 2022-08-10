/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class NotificationEventConfiguration {
    /**
    * The type of event.  Possible values: **ACCOUNT_CLOSED**, **ACCOUNT_CREATED**, **ACCOUNT_FUNDS_BELOW_THRESHOLD**, **ACCOUNT_HOLDER_CREATED**, **ACCOUNT_HOLDER_LIMIT_REACHED**, **ACCOUNT_HOLDER_PAYOUT**, **ACCOUNT_HOLDER_STATUS_CHANGE**, **ACCOUNT_HOLDER_STORE_STATUS_CHANGE**, **ACCOUNT_HOLDER_UPCOMING_DEADLINE**, **ACCOUNT_HOLDER_UPDATED**, **ACCOUNT_HOLDER_VERIFICATION**, **ACCOUNT_UPDATED**, **BENEFICIARY_SETUP**, **COMPENSATE_NEGATIVE_BALANCE**, **DIRECT_DEBIT_INITIATED**, **PAYMENT_FAILURE**, **REFUND_FUNDS_TRANSFER**, **REPORT_AVAILABLE**, **SCHEDULED_REFUNDS**, **TRANSFER_FUNDS**.
    */
    'eventType': NotificationEventConfiguration.EventTypeEnum;
    /**
    * Indicates whether the specified `eventType` is sent to your webhook endpoint. Possible values: * **INCLUDE**: Send the specified `eventType`. * **EXCLUDE**: Send all event types except the specified `eventType` and other event types with the `includeMode` set to **EXCLUDE**.
    */
    'includeMode': NotificationEventConfiguration.IncludeModeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "NotificationEventConfiguration.EventTypeEnum"
        },
        {
            "name": "includeMode",
            "baseName": "includeMode",
            "type": "NotificationEventConfiguration.IncludeModeEnum"
        }    ];

    static getAttributeTypeMap() {
        return NotificationEventConfiguration.attributeTypeMap;
    }
}

export namespace NotificationEventConfiguration {
    export enum EventTypeEnum {
        AccountClosed = <any> 'ACCOUNT_CLOSED',
        AccountCreated = <any> 'ACCOUNT_CREATED',
        AccountFundsBelowThreshold = <any> 'ACCOUNT_FUNDS_BELOW_THRESHOLD',
        AccountHolderCreated = <any> 'ACCOUNT_HOLDER_CREATED',
        AccountHolderLimitReached = <any> 'ACCOUNT_HOLDER_LIMIT_REACHED',
        AccountHolderPayout = <any> 'ACCOUNT_HOLDER_PAYOUT',
        AccountHolderStatusChange = <any> 'ACCOUNT_HOLDER_STATUS_CHANGE',
        AccountHolderStoreStatusChange = <any> 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
        AccountHolderUpcomingDeadline = <any> 'ACCOUNT_HOLDER_UPCOMING_DEADLINE',
        AccountHolderUpdated = <any> 'ACCOUNT_HOLDER_UPDATED',
        AccountHolderVerification = <any> 'ACCOUNT_HOLDER_VERIFICATION',
        AccountUpdated = <any> 'ACCOUNT_UPDATED',
        BeneficiarySetup = <any> 'BENEFICIARY_SETUP',
        CompensateNegativeBalance = <any> 'COMPENSATE_NEGATIVE_BALANCE',
        DirectDebitInitiated = <any> 'DIRECT_DEBIT_INITIATED',
        PaymentFailure = <any> 'PAYMENT_FAILURE',
        PendingCredit = <any> 'PENDING_CREDIT',
        RefundFundsTransfer = <any> 'REFUND_FUNDS_TRANSFER',
        ReportAvailable = <any> 'REPORT_AVAILABLE',
        ScheduledRefunds = <any> 'SCHEDULED_REFUNDS',
        ScoreSignalTriggered = <any> 'SCORE_SIGNAL_TRIGGERED',
        TransferFunds = <any> 'TRANSFER_FUNDS',
        TransferNotPaidoutTransfers = <any> 'TRANSFER_NOT_PAIDOUT_TRANSFERS'
    }
    export enum IncludeModeEnum {
        Exclude = <any> 'EXCLUDE',
        Include = <any> 'INCLUDE'
    }
}

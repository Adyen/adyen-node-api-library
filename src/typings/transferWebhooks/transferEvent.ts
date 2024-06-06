/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { AmountAdjustment } from './amountAdjustment';
import { BalanceMutation } from './balanceMutation';
import { ConfirmationTrackingData } from './confirmationTrackingData';
import { EstimationTrackingData } from './estimationTrackingData';
import { ExternalReason } from './externalReason';
import { InternalReviewTrackingData } from './internalReviewTrackingData';
import { Modification } from './modification';

export class TransferEvent {
    'amount'?: Amount;
    /**
    * The amount adjustments in this transfer.
    */
    'amountAdjustments'?: Array<AmountAdjustment>;
    /**
    * The date when the transfer request was sent.
    */
    'bookingDate'?: Date;
    /**
    * The estimated time when the beneficiary should have access to the funds.
    */
    'estimatedArrivalTime'?: Date;
    'externalReason'?: ExternalReason;
    /**
    * The unique identifier of the transfer event.
    */
    'id'?: string;
    'modification'?: Modification;
    /**
    * The list of balance mutations per event.
    */
    'mutations'?: Array<BalanceMutation>;
    'originalAmount'?: Amount;
    /**
    * The reason for the transfer status.
    */
    'reason'?: TransferEvent.ReasonEnum;
    /**
    * The status of the transfer event.
    */
    'status'?: TransferEvent.StatusEnum;
    /**
    * Additional information for the tracking event.
    */
    'trackingData'?: ConfirmationTrackingData | EstimationTrackingData | InternalReviewTrackingData | null;
    /**
    * The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes.
    */
    'transactionId'?: string;
    /**
    * The type of the transfer event. Possible values: **accounting**, **tracking**.
    */
    'type'?: TransferEvent.TypeEnum;
    /**
    * The date when the tracking status was updated.
    */
    'updateDate'?: Date;
    /**
    * A future date, when the funds are expected to be deducted from or credited to the balance account.
    */
    'valueDate'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "amountAdjustments",
            "baseName": "amountAdjustments",
            "type": "Array<AmountAdjustment>"
        },
        {
            "name": "bookingDate",
            "baseName": "bookingDate",
            "type": "Date"
        },
        {
            "name": "estimatedArrivalTime",
            "baseName": "estimatedArrivalTime",
            "type": "Date"
        },
        {
            "name": "externalReason",
            "baseName": "externalReason",
            "type": "ExternalReason"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "modification",
            "baseName": "modification",
            "type": "Modification"
        },
        {
            "name": "mutations",
            "baseName": "mutations",
            "type": "Array<BalanceMutation>"
        },
        {
            "name": "originalAmount",
            "baseName": "originalAmount",
            "type": "Amount"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "TransferEvent.ReasonEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransferEvent.StatusEnum"
        },
        {
            "name": "trackingData",
            "baseName": "trackingData",
            "type": "ConfirmationTrackingData | EstimationTrackingData | InternalReviewTrackingData | null"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferEvent.TypeEnum"
        },
        {
            "name": "updateDate",
            "baseName": "updateDate",
            "type": "Date"
        },
        {
            "name": "valueDate",
            "baseName": "valueDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return TransferEvent.attributeTypeMap;
    }
}

export namespace TransferEvent {
    export enum ReasonEnum {
        AmountLimitExceeded = 'amountLimitExceeded',
        Approved = 'approved',
        BalanceAccountTemporarilyBlockedByTransactionRule = 'balanceAccountTemporarilyBlockedByTransactionRule',
        CounterpartyAccountBlocked = 'counterpartyAccountBlocked',
        CounterpartyAccountClosed = 'counterpartyAccountClosed',
        CounterpartyAccountNotFound = 'counterpartyAccountNotFound',
        CounterpartyAddressRequired = 'counterpartyAddressRequired',
        CounterpartyBankTimedOut = 'counterpartyBankTimedOut',
        CounterpartyBankUnavailable = 'counterpartyBankUnavailable',
        DeclinedByTransactionRule = 'declinedByTransactionRule',
        Error = 'error',
        NotEnoughBalance = 'notEnoughBalance',
        PendingApproval = 'pendingApproval',
        RefusedByCounterpartyBank = 'refusedByCounterpartyBank',
        RouteNotFound = 'routeNotFound',
        ScaFailed = 'scaFailed',
        Unknown = 'unknown'
    }
    export enum StatusEnum {
        ApprovalPending = 'approvalPending',
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalReversalPending = 'atmWithdrawalReversalPending',
        AtmWithdrawalReversed = 'atmWithdrawalReversed',
        AuthAdjustmentAuthorised = 'authAdjustmentAuthorised',
        AuthAdjustmentError = 'authAdjustmentError',
        AuthAdjustmentRefused = 'authAdjustmentRefused',
        Authorised = 'authorised',
        BankTransfer = 'bankTransfer',
        BankTransferPending = 'bankTransferPending',
        Booked = 'booked',
        BookingPending = 'bookingPending',
        Cancelled = 'cancelled',
        CapturePending = 'capturePending',
        CaptureReversalPending = 'captureReversalPending',
        CaptureReversed = 'captureReversed',
        Captured = 'captured',
        CapturedExternally = 'capturedExternally',
        Chargeback = 'chargeback',
        ChargebackExternally = 'chargebackExternally',
        ChargebackPending = 'chargebackPending',
        ChargebackReversalPending = 'chargebackReversalPending',
        ChargebackReversed = 'chargebackReversed',
        Credited = 'credited',
        DepositCorrection = 'depositCorrection',
        DepositCorrectionPending = 'depositCorrectionPending',
        Dispute = 'dispute',
        DisputeClosed = 'disputeClosed',
        DisputeExpired = 'disputeExpired',
        DisputeNeedsReview = 'disputeNeedsReview',
        Error = 'error',
        Expired = 'expired',
        Failed = 'failed',
        Fee = 'fee',
        FeePending = 'feePending',
        InternalTransfer = 'internalTransfer',
        InternalTransferPending = 'internalTransferPending',
        InvoiceDeduction = 'invoiceDeduction',
        InvoiceDeductionPending = 'invoiceDeductionPending',
        ManualCorrectionPending = 'manualCorrectionPending',
        ManuallyCorrected = 'manuallyCorrected',
        MatchedStatement = 'matchedStatement',
        MatchedStatementPending = 'matchedStatementPending',
        MerchantPayin = 'merchantPayin',
        MerchantPayinPending = 'merchantPayinPending',
        MerchantPayinReversed = 'merchantPayinReversed',
        MerchantPayinReversedPending = 'merchantPayinReversedPending',
        MiscCost = 'miscCost',
        MiscCostPending = 'miscCostPending',
        PaymentCost = 'paymentCost',
        PaymentCostPending = 'paymentCostPending',
        Received = 'received',
        RefundPending = 'refundPending',
        RefundReversalPending = 'refundReversalPending',
        RefundReversed = 'refundReversed',
        Refunded = 'refunded',
        RefundedExternally = 'refundedExternally',
        Refused = 'refused',
        Rejected = 'rejected',
        ReserveAdjustment = 'reserveAdjustment',
        ReserveAdjustmentPending = 'reserveAdjustmentPending',
        Returned = 'returned',
        SecondChargeback = 'secondChargeback',
        SecondChargebackPending = 'secondChargebackPending',
        Undefined = 'undefined'
    }
    export enum TypeEnum {
        Accounting = 'accounting',
        Tracking = 'tracking'
    }
}

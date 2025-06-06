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
import { IssuingTransactionData } from './issuingTransactionData';
import { MerchantPurchaseData } from './merchantPurchaseData';
import { Modification } from './modification';

export class TransferEvent {
    'amount'?: Amount | null;
    /**
    * The amount adjustments in this transfer. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.
    */
    'amountAdjustments'?: Array<AmountAdjustment>;
    /**
    * Scheme unique arn identifier useful for tracing captures, chargebacks, refunds, etc.
    */
    'arn'?: string;
    /**
    * The date when the transfer request was sent.
    */
    'bookingDate'?: Date;
    /**
    * The estimated time when the beneficiary should have access to the funds.
    */
    'estimatedArrivalTime'?: Date;
    /**
    * A list of event data.
    */
    'eventsData'?: Array<IssuingTransactionData | MerchantPurchaseData>;
    'externalReason'?: ExternalReason | null;
    /**
    * The unique identifier of the transfer event.
    */
    'id'?: string;
    'modification'?: Modification | null;
    /**
    * The list of balance mutations per event.
    */
    'mutations'?: Array<BalanceMutation>;
    'originalAmount'?: Amount | null;
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
    * The date when the funds are expected to be deducted from or credited to the balance account. This date can be in either the past or future.
    */
    'valueDate'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount | null"
        },
        {
            "name": "amountAdjustments",
            "baseName": "amountAdjustments",
            "type": "Array<AmountAdjustment>"
        },
        {
            "name": "arn",
            "baseName": "arn",
            "type": "string"
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
            "name": "eventsData",
            "baseName": "eventsData",
            "type": "Array<IssuingTransactionData | MerchantPurchaseData>"
        },
        {
            "name": "externalReason",
            "baseName": "externalReason",
            "type": "ExternalReason | null"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "modification",
            "baseName": "modification",
            "type": "Modification | null"
        },
        {
            "name": "mutations",
            "baseName": "mutations",
            "type": "Array<BalanceMutation>"
        },
        {
            "name": "originalAmount",
            "baseName": "originalAmount",
            "type": "Amount | null"
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
        AccountHierarchyNotActive = 'accountHierarchyNotActive',
        AmountLimitExceeded = 'amountLimitExceeded',
        Approved = 'approved',
        BalanceAccountTemporarilyBlockedByTransactionRule = 'balanceAccountTemporarilyBlockedByTransactionRule',
        CounterpartyAccountBlocked = 'counterpartyAccountBlocked',
        CounterpartyAccountClosed = 'counterpartyAccountClosed',
        CounterpartyAccountNotFound = 'counterpartyAccountNotFound',
        CounterpartyAddressRequired = 'counterpartyAddressRequired',
        CounterpartyBankTimedOut = 'counterpartyBankTimedOut',
        CounterpartyBankUnavailable = 'counterpartyBankUnavailable',
        Declined = 'declined',
        DeclinedByTransactionRule = 'declinedByTransactionRule',
        DirectDebitNotSupported = 'directDebitNotSupported',
        Error = 'error',
        NotEnoughBalance = 'notEnoughBalance',
        Pending = 'pending',
        PendingApproval = 'pendingApproval',
        PendingExecution = 'pendingExecution',
        RefusedByCounterpartyBank = 'refusedByCounterpartyBank',
        RefusedByCustomer = 'refusedByCustomer',
        RouteNotFound = 'routeNotFound',
        ScaFailed = 'scaFailed',
        TransferInstrumentDoesNotExist = 'transferInstrumentDoesNotExist',
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
        PendingApproval = 'pendingApproval',
        PendingExecution = 'pendingExecution',
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

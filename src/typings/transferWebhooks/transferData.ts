/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { BalanceMutation } from './balanceMutation';
import { DirectDebitInformation } from './directDebitInformation';
import { PaymentInstrument } from './paymentInstrument';
import { ResourceReference } from './resourceReference';
import { TransactionRulesResult } from './transactionRulesResult';
import { TransferDataCategoryData } from './transferDataCategoryData';
import { TransferDataTracking } from './transferDataTracking';
import { TransferEvent } from './transferEvent';
import { TransferNotificationCounterParty } from './transferNotificationCounterParty';
import { TransferReview } from './transferReview';

export class TransferData {
    'accountHolder'?: ResourceReference;
    'amount': Amount;
    'balanceAccount'?: ResourceReference;
    /**
    * The unique identifier of the balance platform.
    */
    'balancePlatform'?: string;
    /**
    * The list of the latest balance statuses in the transfer.
    */
    'balances'?: Array<BalanceMutation>;
    /**
    * The category of the transfer.  Possible values:   - **bank**: a transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **card**: a transfer involving a third-party card.  - **internal**: a transfer between [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: a transfer initiated by a Adyen-issued card.  - **platformPayment**: funds movements related to payments that are acquired for your users.  - **topUp**: an incoming transfer initiated by your user to top up their balance account.
    */
    'category': TransferData.CategoryEnum;
    'categoryData'?: TransferDataCategoryData;
    'counterparty'?: TransferNotificationCounterParty;
    /**
    * The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.
    */
    'creationDate'?: Date;
    /**
    * Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.  Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , \' + Space**  Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ \' \" ! ?**
    */
    'description'?: string;
    'directDebitInformation'?: DirectDebitInformation;
    /**
    * The direction of the transfer.  Possible values: **incoming**, **outgoing**.
    */
    'direction'?: TransferData.DirectionEnum;
    /**
    * The event id listed under events, that triggered the notification.
    */
    'eventId'?: string;
    /**
    * The list of events leading up to the current status of the transfer.
    */
    'events'?: Array<TransferEvent>;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    'paymentInstrument'?: PaymentInstrument;
    /**
    * Additional information about the status of the transfer.
    */
    'reason'?: TransferData.ReasonEnum;
    /**
    * Your reference for the transfer, used internally within your platform. If you don\'t provide this in the request, Adyen generates a unique reference.
    */
    'reference'?: string;
    /**
    *  A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.   Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.   - **internal**: 80 characters  - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
    */
    'referenceForBeneficiary'?: string;
    'review'?: TransferReview;
    /**
    * The sequence number of the transfer webhook. The numbers start from 1 and increase with each new webhook for a specific transfer.  The sequence number can help you restore the correct sequence of events even if they arrive out of order.
    */
    'sequenceNumber'?: number;
    /**
    * The result of the transfer.   For example, **authorised**, **refused**, or **error**.
    */
    'status': TransferData.StatusEnum;
    'tracking'?: TransferDataTracking;
    'transactionRulesResult'?: TransactionRulesResult;
    /**
    * The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.
    */
    'type'?: TransferData.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolder",
            "baseName": "accountHolder",
            "type": "ResourceReference"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "balanceAccount",
            "baseName": "balanceAccount",
            "type": "ResourceReference"
        },
        {
            "name": "balancePlatform",
            "baseName": "balancePlatform",
            "type": "string"
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "Array<BalanceMutation>"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "TransferData.CategoryEnum"
        },
        {
            "name": "categoryData",
            "baseName": "categoryData",
            "type": "TransferDataCategoryData"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "TransferNotificationCounterParty"
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "directDebitInformation",
            "baseName": "directDebitInformation",
            "type": "DirectDebitInformation"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "TransferData.DirectionEnum"
        },
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<TransferEvent>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "paymentInstrument",
            "baseName": "paymentInstrument",
            "type": "PaymentInstrument"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "TransferData.ReasonEnum"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "referenceForBeneficiary",
            "baseName": "referenceForBeneficiary",
            "type": "string"
        },
        {
            "name": "review",
            "baseName": "review",
            "type": "TransferReview"
        },
        {
            "name": "sequenceNumber",
            "baseName": "sequenceNumber",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransferData.StatusEnum"
        },
        {
            "name": "tracking",
            "baseName": "tracking",
            "type": "TransferDataTracking"
        },
        {
            "name": "transactionRulesResult",
            "baseName": "transactionRulesResult",
            "type": "TransactionRulesResult"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferData.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return TransferData.attributeTypeMap;
    }
}

export namespace TransferData {
    export enum CategoryEnum {
        Bank = <any> 'bank',
        Card = <any> 'card',
        Internal = <any> 'internal',
        IssuedCard = <any> 'issuedCard',
        PlatformPayment = <any> 'platformPayment',
        TopUp = <any> 'topUp'
    }
    export enum DirectionEnum {
        Incoming = <any> 'incoming',
        Outgoing = <any> 'outgoing'
    }
    export enum ReasonEnum {
        AccountHierarchyNotActive = <any> 'accountHierarchyNotActive',
        AmountLimitExceeded = <any> 'amountLimitExceeded',
        Approved = <any> 'approved',
        BalanceAccountTemporarilyBlockedByTransactionRule = <any> 'balanceAccountTemporarilyBlockedByTransactionRule',
        CounterpartyAccountBlocked = <any> 'counterpartyAccountBlocked',
        CounterpartyAccountClosed = <any> 'counterpartyAccountClosed',
        CounterpartyAccountNotFound = <any> 'counterpartyAccountNotFound',
        CounterpartyAddressRequired = <any> 'counterpartyAddressRequired',
        CounterpartyBankTimedOut = <any> 'counterpartyBankTimedOut',
        CounterpartyBankUnavailable = <any> 'counterpartyBankUnavailable',
        Declined = <any> 'declined',
        DeclinedByTransactionRule = <any> 'declinedByTransactionRule',
        DirectDebitNotSupported = <any> 'directDebitNotSupported',
        Error = <any> 'error',
        NotEnoughBalance = <any> 'notEnoughBalance',
        PendingApproval = <any> 'pendingApproval',
        PendingExecution = <any> 'pendingExecution',
        RefusedByCounterpartyBank = <any> 'refusedByCounterpartyBank',
        RefusedByCustomer = <any> 'refusedByCustomer',
        RouteNotFound = <any> 'routeNotFound',
        ScaFailed = <any> 'scaFailed',
        TransferInstrumentDoesNotExist = <any> 'transferInstrumentDoesNotExist',
        Unknown = <any> 'unknown'
    }
    export enum StatusEnum {
        ApprovalPending = <any> 'approvalPending',
        AtmWithdrawal = <any> 'atmWithdrawal',
        AtmWithdrawalReversalPending = <any> 'atmWithdrawalReversalPending',
        AtmWithdrawalReversed = <any> 'atmWithdrawalReversed',
        AuthAdjustmentAuthorised = <any> 'authAdjustmentAuthorised',
        AuthAdjustmentError = <any> 'authAdjustmentError',
        AuthAdjustmentRefused = <any> 'authAdjustmentRefused',
        Authorised = <any> 'authorised',
        BankTransfer = <any> 'bankTransfer',
        BankTransferPending = <any> 'bankTransferPending',
        Booked = <any> 'booked',
        BookingPending = <any> 'bookingPending',
        Cancelled = <any> 'cancelled',
        CapturePending = <any> 'capturePending',
        CaptureReversalPending = <any> 'captureReversalPending',
        CaptureReversed = <any> 'captureReversed',
        Captured = <any> 'captured',
        CapturedExternally = <any> 'capturedExternally',
        Chargeback = <any> 'chargeback',
        ChargebackExternally = <any> 'chargebackExternally',
        ChargebackPending = <any> 'chargebackPending',
        ChargebackReversalPending = <any> 'chargebackReversalPending',
        ChargebackReversed = <any> 'chargebackReversed',
        Credited = <any> 'credited',
        DepositCorrection = <any> 'depositCorrection',
        DepositCorrectionPending = <any> 'depositCorrectionPending',
        Dispute = <any> 'dispute',
        DisputeClosed = <any> 'disputeClosed',
        DisputeExpired = <any> 'disputeExpired',
        DisputeNeedsReview = <any> 'disputeNeedsReview',
        Error = <any> 'error',
        Expired = <any> 'expired',
        Failed = <any> 'failed',
        Fee = <any> 'fee',
        FeePending = <any> 'feePending',
        InternalTransfer = <any> 'internalTransfer',
        InternalTransferPending = <any> 'internalTransferPending',
        InvoiceDeduction = <any> 'invoiceDeduction',
        InvoiceDeductionPending = <any> 'invoiceDeductionPending',
        ManualCorrectionPending = <any> 'manualCorrectionPending',
        ManuallyCorrected = <any> 'manuallyCorrected',
        MatchedStatement = <any> 'matchedStatement',
        MatchedStatementPending = <any> 'matchedStatementPending',
        MerchantPayin = <any> 'merchantPayin',
        MerchantPayinPending = <any> 'merchantPayinPending',
        MerchantPayinReversed = <any> 'merchantPayinReversed',
        MerchantPayinReversedPending = <any> 'merchantPayinReversedPending',
        MiscCost = <any> 'miscCost',
        MiscCostPending = <any> 'miscCostPending',
        PaymentCost = <any> 'paymentCost',
        PaymentCostPending = <any> 'paymentCostPending',
        PendingApproval = <any> 'pendingApproval',
        PendingExecution = <any> 'pendingExecution',
        Received = <any> 'received',
        RefundPending = <any> 'refundPending',
        RefundReversalPending = <any> 'refundReversalPending',
        RefundReversed = <any> 'refundReversed',
        Refunded = <any> 'refunded',
        RefundedExternally = <any> 'refundedExternally',
        Refused = <any> 'refused',
        Rejected = <any> 'rejected',
        ReserveAdjustment = <any> 'reserveAdjustment',
        ReserveAdjustmentPending = <any> 'reserveAdjustmentPending',
        Returned = <any> 'returned',
        SecondChargeback = <any> 'secondChargeback',
        SecondChargebackPending = <any> 'secondChargebackPending',
        Undefined = <any> 'undefined'
    }
    export enum TypeEnum {
        Payment = <any> 'payment',
        Capture = <any> 'capture',
        CaptureReversal = <any> 'captureReversal',
        Refund = <any> 'refund',
        RefundReversal = <any> 'refundReversal',
        Chargeback = <any> 'chargeback',
        ChargebackCorrection = <any> 'chargebackCorrection',
        ChargebackReversal = <any> 'chargebackReversal',
        ChargebackReversalCorrection = <any> 'chargebackReversalCorrection',
        SecondChargeback = <any> 'secondChargeback',
        SecondChargebackCorrection = <any> 'secondChargebackCorrection',
        AtmWithdrawal = <any> 'atmWithdrawal',
        AtmWithdrawalReversal = <any> 'atmWithdrawalReversal',
        InternalTransfer = <any> 'internalTransfer',
        InternalDirectDebit = <any> 'internalDirectDebit',
        ManualCorrection = <any> 'manualCorrection',
        InvoiceDeduction = <any> 'invoiceDeduction',
        DepositCorrection = <any> 'depositCorrection',
        ReserveAdjustment = <any> 'reserveAdjustment',
        BankTransfer = <any> 'bankTransfer',
        BankDirectDebit = <any> 'bankDirectDebit',
        CardTransfer = <any> 'cardTransfer',
        MiscCost = <any> 'miscCost',
        PaymentCost = <any> 'paymentCost',
        Fee = <any> 'fee',
        Leftover = <any> 'leftover',
        Grant = <any> 'grant',
        CapitalFundsCollection = <any> 'capitalFundsCollection',
        CashOutInstruction = <any> 'cashOutInstruction',
        CashoutFee = <any> 'cashoutFee',
        CashoutRepayment = <any> 'cashoutRepayment',
        CashoutFunding = <any> 'cashoutFunding',
        Repayment = <any> 'repayment',
        Installment = <any> 'installment',
        InstallmentReversal = <any> 'installmentReversal',
        BalanceAdjustment = <any> 'balanceAdjustment',
        BalanceRollover = <any> 'balanceRollover',
        BalanceMigration = <any> 'balanceMigration'
    }
}

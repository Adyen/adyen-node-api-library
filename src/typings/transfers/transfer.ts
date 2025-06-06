/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { BankCategoryData } from './bankCategoryData';
import { CounterpartyV3 } from './counterpartyV3';
import { DirectDebitInformation } from './directDebitInformation';
import { InternalCategoryData } from './internalCategoryData';
import { IssuedCard } from './issuedCard';
import { PaymentInstrument } from './paymentInstrument';
import { PlatformPayment } from './platformPayment';
import { ResourceReference } from './resourceReference';
import { TransferReview } from './transferReview';

export class Transfer {
    'accountHolder'?: ResourceReference | null;
    'amount': Amount;
    'balanceAccount'?: ResourceReference | null;
    /**
    * The category of the transfer.  Possible values:   - **bank**: a transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **card**: a transfer involving a third-party card.  - **internal**: a transfer between [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: a transfer initiated by a Adyen-issued card.  - **platformPayment**: funds movements related to payments that are acquired for your users.  - **topUp**: an incoming transfer initiated by your user to top up their balance account.
    */
    'category': Transfer.CategoryEnum;
    /**
    * The relevant data according to the transfer category.
    */
    'categoryData'?: BankCategoryData | InternalCategoryData | IssuedCard | PlatformPayment | null;
    'counterparty': CounterpartyV3;
    /**
    * The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.
    */
    'creationDate'?: Date;
    /**
    * Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.  Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , \' + Space**  Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ \' \" ! ?**
    */
    'description'?: string;
    'directDebitInformation'?: DirectDebitInformation | null;
    /**
    * The direction of the transfer.  Possible values: **incoming**, **outgoing**.
    */
    'direction'?: Transfer.DirectionEnum;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    'paymentInstrument'?: PaymentInstrument | null;
    /**
    * Additional information about the status of the transfer.
    */
    'reason'?: Transfer.ReasonEnum;
    /**
    * Your reference for the transfer, used internally within your platform. If you don\'t provide this in the request, Adyen generates a unique reference.
    */
    'reference'?: string;
    /**
    *  A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.   Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.   - **internal**: 80 characters  - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
    */
    'referenceForBeneficiary'?: string;
    'review'?: TransferReview | null;
    /**
    * The result of the transfer.   For example, **authorised**, **refused**, or **error**.
    */
    'status': Transfer.StatusEnum;
    /**
    * The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.
    */
    'type'?: Transfer.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolder",
            "baseName": "accountHolder",
            "type": "ResourceReference | null"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "balanceAccount",
            "baseName": "balanceAccount",
            "type": "ResourceReference | null"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Transfer.CategoryEnum"
        },
        {
            "name": "categoryData",
            "baseName": "categoryData",
            "type": "BankCategoryData | InternalCategoryData | IssuedCard | PlatformPayment | null"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "CounterpartyV3"
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
            "type": "DirectDebitInformation | null"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "Transfer.DirectionEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "paymentInstrument",
            "baseName": "paymentInstrument",
            "type": "PaymentInstrument | null"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "Transfer.ReasonEnum"
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
            "type": "TransferReview | null"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Transfer.StatusEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Transfer.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Transfer.attributeTypeMap;
    }
}

export namespace Transfer {
    export enum CategoryEnum {
        Bank = 'bank',
        Card = 'card',
        Internal = 'internal',
        IssuedCard = 'issuedCard',
        PlatformPayment = 'platformPayment',
        TopUp = 'topUp'
    }
    export enum DirectionEnum {
        Incoming = 'incoming',
        Outgoing = 'outgoing'
    }
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
        Payment = 'payment',
        Capture = 'capture',
        CaptureReversal = 'captureReversal',
        Refund = 'refund',
        RefundReversal = 'refundReversal',
        Chargeback = 'chargeback',
        ChargebackCorrection = 'chargebackCorrection',
        ChargebackReversal = 'chargebackReversal',
        ChargebackReversalCorrection = 'chargebackReversalCorrection',
        SecondChargeback = 'secondChargeback',
        SecondChargebackCorrection = 'secondChargebackCorrection',
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalReversal = 'atmWithdrawalReversal',
        InternalTransfer = 'internalTransfer',
        InternalDirectDebit = 'internalDirectDebit',
        ManualCorrection = 'manualCorrection',
        InvoiceDeduction = 'invoiceDeduction',
        DepositCorrection = 'depositCorrection',
        ReserveAdjustment = 'reserveAdjustment',
        BankTransfer = 'bankTransfer',
        BankDirectDebit = 'bankDirectDebit',
        CardTransfer = 'cardTransfer',
        MiscCost = 'miscCost',
        PaymentCost = 'paymentCost',
        Fee = 'fee',
        Leftover = 'leftover',
        Grant = 'grant',
        CapitalFundsCollection = 'capitalFundsCollection',
        CashOutInstruction = 'cashOutInstruction',
        CashoutFee = 'cashoutFee',
        CashoutRepayment = 'cashoutRepayment',
        CashoutFunding = 'cashoutFunding',
        Repayment = 'repayment',
        Installment = 'installment',
        InstallmentReversal = 'installmentReversal',
        BalanceAdjustment = 'balanceAdjustment',
        BalanceRollover = 'balanceRollover',
        BalanceMigration = 'balanceMigration'
    }
}

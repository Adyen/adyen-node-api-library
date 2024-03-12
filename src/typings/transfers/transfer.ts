/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CounterpartyV3 } from './counterpartyV3';
import { PaymentInstrument } from './paymentInstrument';
import { ResourceReference } from './resourceReference';
import { TransferCategoryData } from './transferCategoryData';

export class Transfer {
    'accountHolder'?: ResourceReference;
    'amount': Amount;
    'balanceAccount'?: ResourceReference;
    /**
    * The category of transfer.  Possible values:   - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: Transfer initiated by a Adyen-issued card.  - **platformPayment**: Fund movements related to payments that are acquired for your users.
    */
    'category': Transfer.CategoryEnum;
    'categoryData'?: TransferCategoryData;
    'counterparty': CounterpartyV3;
    /**
    * The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.
    */
    'creationDate'?: Date;
    /**
    * Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.  Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , \' + Space**  Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ \' \" ! ?**
    */
    'description'?: string;
    /**
    * The direction of the transfer.  Possible values: **incoming**, **outgoing**.
    */
    'direction'?: Transfer.DirectionEnum;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    'paymentInstrument'?: PaymentInstrument;
    /**
    * Additional information about the status of the transfer.
    */
    'reason'?: Transfer.ReasonEnum;
    /**
    * Your reference for the transfer, used internally within your platform. If you don\'t provide this in the request, Adyen generates a unique reference.
    */
    'reference'?: string;
    /**
    *  A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.   Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.  - **internal**: 80 characters  - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
    */
    'referenceForBeneficiary'?: string;
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
            "name": "category",
            "baseName": "category",
            "type": "Transfer.CategoryEnum"
        },
        {
            "name": "categoryData",
            "baseName": "categoryData",
            "type": "TransferCategoryData"
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
            "type": "PaymentInstrument"
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
        Internal = 'internal',
        IssuedCard = 'issuedCard',
        PlatformPayment = 'platformPayment'
    }
    export enum DirectionEnum {
        Incoming = 'incoming',
        Outgoing = 'outgoing'
    }
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
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalReversal = 'atmWithdrawalReversal',
        BalanceAdjustment = 'balanceAdjustment',
        BalanceMigration = 'balanceMigration',
        BalanceRollover = 'balanceRollover',
        BankDirectDebit = 'bankDirectDebit',
        BankTransfer = 'bankTransfer',
        Capture = 'capture',
        CaptureReversal = 'captureReversal',
        CardTransfer = 'cardTransfer',
        CashOutFee = 'cashOutFee',
        CashOutFunding = 'cashOutFunding',
        CashOutInstruction = 'cashOutInstruction',
        Chargeback = 'chargeback',
        ChargebackCorrection = 'chargebackCorrection',
        ChargebackReversal = 'chargebackReversal',
        ChargebackReversalCorrection = 'chargebackReversalCorrection',
        DepositCorrection = 'depositCorrection',
        Fee = 'fee',
        Grant = 'grant',
        Installment = 'installment',
        InstallmentReversal = 'installmentReversal',
        InternalDirectDebit = 'internalDirectDebit',
        InternalTransfer = 'internalTransfer',
        InvoiceDeduction = 'invoiceDeduction',
        Leftover = 'leftover',
        ManualCorrection = 'manualCorrection',
        MiscCost = 'miscCost',
        Payment = 'payment',
        PaymentCost = 'paymentCost',
        Refund = 'refund',
        RefundReversal = 'refundReversal',
        Repayment = 'repayment',
        ReserveAdjustment = 'reserveAdjustment',
        SecondChargeback = 'secondChargeback',
        SecondChargebackCorrection = 'secondChargebackCorrection'
    }
}

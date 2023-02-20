/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CounterpartyV3 } from './counterpartyV3';

export class Transfer {
    'amount': Amount;
    /**
    * The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
    */
    'balanceAccountId'?: string;
    /**
    * The type of transfer.  Possible values:   - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: Transfer initiated by a Adyen-issued card.  - **platformPayment**: Fund movements related to payments that are acquired for your users.
    */
    'category': Transfer.CategoryEnum;
    'counterparty': CounterpartyV3;
    /**
    * A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.
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
    /**
    * The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).
    */
    'paymentInstrumentId'?: string;
    /**
    * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.  Possible values:  * **regular**: For normal, low-value transactions.  * **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.  * **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html)  .* **crossBorder**: High value transfer to receipt in a different country. 
    */
    'priority'?: Transfer.PriorityEnum;
    /**
    * Additional information about the status of the transfer.
    */
    'reason'?: Transfer.ReasonEnum;
    /**
    * Your reference for the transfer, used internally within your platform. If you don\'t provide this in the request, Adyen generates a unique reference.
    */
    'reference'?: string;
    /**
    *  A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.   Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.  - **internal**: 80 characters  - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
    */
    'referenceForBeneficiary'?: string;
    /**
    * The result of the transfer.   For example, **authorised**, **refused**, or **error**.
    */
    'status': Transfer.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Transfer.CategoryEnum"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "CounterpartyV3"
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
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "Transfer.PriorityEnum"
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
    export enum PriorityEnum {
        CrossBorder = 'crossBorder',
        DirectDebit = 'directDebit',
        Fast = 'fast',
        Instant = 'instant',
        Regular = 'regular',
        Wire = 'wire'
    }
    export enum ReasonEnum {
        AmountLimitExceded = 'amountLimitExceded',
        Approved = 'approved',
        CounterpartyAccountBlocked = 'counterpartyAccountBlocked',
        CounterpartyAccountClosed = 'counterpartyAccountClosed',
        CounterpartyAccountNotFound = 'counterpartyAccountNotFound',
        CounterpartyAddressRequired = 'counterpartyAddressRequired',
        CounterpartyBankTimedOut = 'counterpartyBankTimedOut',
        CounterpartyBankUnavailable = 'counterpartyBankUnavailable',
        Error = 'error',
        NotEnoughBalance = 'notEnoughBalance',
        RefusedByCounterpartyBank = 'refusedByCounterpartyBank',
        RouteNotFound = 'routeNotFound',
        Unknown = 'unknown'
    }
    export enum StatusEnum {
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
        Chargeback = 'chargeback',
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
        Refused = 'refused',
        ReserveAdjustment = 'reserveAdjustment',
        ReserveAdjustmentPending = 'reserveAdjustmentPending',
        Returned = 'returned',
        SecondChargeback = 'secondChargeback',
        SecondChargebackPending = 'secondChargebackPending',
        Undefined = 'undefined'
    }
}

/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CounterpartyInfoV3 } from './counterpartyInfoV3';
import { TransferRequestReview } from './transferRequestReview';
import { UltimatePartyIdentification } from './ultimatePartyIdentification';

export class TransferInfo {
    'amount': Amount;
    /**
    * The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).  If you want to make a transfer using a **virtual** **bankAccount** assigned to the balance account, you must specify the [payment instrument ID](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id) of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account.
    */
    'balanceAccountId'?: string;
    /**
    * The category of the transfer.  Possible values:   - **bank**: a transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **card**: a transfer involving a third-party card.  - **internal**: a transfer between [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: a transfer initiated by a Adyen-issued card.  - **platformPayment**: funds movements related to payments that are acquired for your users.  - **topUp**: an incoming transfer initiated by your user to top up their balance account.
    */
    'category': TransferInfo.CategoryEnum;
    'counterparty': CounterpartyInfoV3;
    /**
    * Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.  Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , \' + Space**  Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ \' \" ! ?**
    */
    'description'?: string;
    /**
    * The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id).  If you want to make a transfer using a **virtual** **bankAccount**, you must specify the payment instrument ID of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account.
    */
    'paymentInstrumentId'?: string;
    /**
    *  The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority you list first. If that\'s not possible, it moves on to the next option in the order of your provided priorities.   Possible values:  * **regular**: for normal, low-value transactions.  * **fast**: a faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.  * **wire**: the fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: for instant funds transfers in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).  * **crossBorder**: for high-value transfers to a recipient in a different country.  * **internal**: for transfers to an Adyen-issued business bank account (by bank account number/IBAN).  Required for transfers with `category` **bank**. For more details, see [fallback priorities](https://docs.adyen.com/payouts/payout-service/payout-to-users/#fallback-priorities).
    */
    'priorities'?: Array<TransferInfo.PrioritiesEnum>;
    /**
    * The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.  Possible values:  * **regular**: for normal, low-value transactions.  * **fast**: a faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.  * **wire**: the fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: for instant funds transfers in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).  * **crossBorder**: for high-value transfers to a recipient in a different country.  * **internal**: for transfers to an Adyen-issued business bank account (by bank account number/IBAN).
    */
    'priority'?: TransferInfo.PriorityEnum;
    /**
    * Your reference for the transfer, used internally within your platform. If you don\'t provide this in the request, Adyen generates a unique reference.
    */
    'reference'?: string;
    /**
    *  A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.   Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.  - **internal**: 80 characters  - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
    */
    'referenceForBeneficiary'?: string;
    'review'?: TransferRequestReview | null;
    /**
    * The type of transfer.  Possible values:   - **bankTransfer**: for push transfers to a transfer instrument or a bank account. The `category` must be **bank**. - **internalTransfer**: for push transfers between balance accounts. The `category` must be **internal**. - **internalDirectDebit**: for pull transfers (direct debits) between balance accounts. The `category` must be **internal**.   
    */
    'type'?: TransferInfo.TypeEnum;
    'ultimateParty'?: UltimatePartyIdentification | null;

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
            "type": "TransferInfo.CategoryEnum"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "CounterpartyInfoV3"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string"
        },
        {
            "name": "priorities",
            "baseName": "priorities",
            "type": "Array<TransferInfo.PrioritiesEnum>"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "TransferInfo.PriorityEnum"
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
            "type": "TransferRequestReview | null"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferInfo.TypeEnum"
        },
        {
            "name": "ultimateParty",
            "baseName": "ultimateParty",
            "type": "UltimatePartyIdentification | null"
        }    ];

    static getAttributeTypeMap() {
        return TransferInfo.attributeTypeMap;
    }
}

export namespace TransferInfo {
    export enum CategoryEnum {
        Bank = 'bank',
        Card = 'card',
        Internal = 'internal',
        IssuedCard = 'issuedCard',
        PlatformPayment = 'platformPayment',
        TopUp = 'topUp'
    }
    export enum PrioritiesEnum {
        CrossBorder = 'crossBorder',
        Fast = 'fast',
        Instant = 'instant',
        Internal = 'internal',
        Regular = 'regular',
        Wire = 'wire'
    }
    export enum PriorityEnum {
        CrossBorder = 'crossBorder',
        Fast = 'fast',
        Instant = 'instant',
        Internal = 'internal',
        Regular = 'regular',
        Wire = 'wire'
    }
    export enum TypeEnum {
        BankTransfer = 'bankTransfer',
        InternalTransfer = 'internalTransfer',
        InternalDirectDebit = 'internalDirectDebit'
    }
}

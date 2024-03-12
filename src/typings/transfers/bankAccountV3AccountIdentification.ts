/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AULocalAccountIdentification } from './aULocalAccountIdentification';
import { AdditionalBankIdentification } from './additionalBankIdentification';
import { BRLocalAccountIdentification } from './bRLocalAccountIdentification';
import { CALocalAccountIdentification } from './cALocalAccountIdentification';
import { CZLocalAccountIdentification } from './cZLocalAccountIdentification';
import { DKLocalAccountIdentification } from './dKLocalAccountIdentification';
import { HKLocalAccountIdentification } from './hKLocalAccountIdentification';
import { HULocalAccountIdentification } from './hULocalAccountIdentification';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { NOLocalAccountIdentification } from './nOLocalAccountIdentification';
import { NZLocalAccountIdentification } from './nZLocalAccountIdentification';
import { NumberAndBicAccountIdentification } from './numberAndBicAccountIdentification';
import { PLLocalAccountIdentification } from './pLLocalAccountIdentification';
import { SELocalAccountIdentification } from './sELocalAccountIdentification';
import { SGLocalAccountIdentification } from './sGLocalAccountIdentification';
import { UKLocalAccountIdentification } from './uKLocalAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';

/**
* Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
*/
export class BankAccountV3AccountIdentification {
    /**
    * The bank account number, without separators or whitespace.
    */
    'accountNumber': string;
    /**
    * The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.
    */
    'bsbCode': string;
    /**
    * The form factor of the account.  Possible values: **physical**, **virtual**. Default value: **physical**.
    */
    'formFactor'?: string | null;
    /**
    * **auLocal**
    */
    'type': BankAccountV3AccountIdentification.TypeEnum;
    /**
    * The 4-digit bank code (Registreringsnummer) (without separators or whitespace).
    */
    'bankCode': string;
    /**
    * The bank account branch number, without separators or whitespace.
    */
    'branchNumber': string;
    /**
    * The bank account type.  Possible values: **checking** or **savings**. Defaults to **checking**.
    */
    'accountType'?: BankAccountV3AccountIdentification.AccountTypeEnum;
    /**
    * The 3-digit institution number, without separators or whitespace.
    */
    'institutionNumber': string;
    /**
    * The 5-digit transit number, without separators or whitespace.
    */
    'transitNumber': string;
    /**
    * The 3-digit clearing code, without separators or whitespace.
    */
    'clearingCode': string;
    /**
    * The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.
    */
    'iban': string;
    'additionalBankIdentification'?: AdditionalBankIdentification;
    /**
    * The bank\'s 8- or 11-character BIC or SWIFT code.
    */
    'bic': string;
    /**
    * The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.
    */
    'clearingNumber': string;
    /**
    * The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.
    */
    'sortCode': string;
    /**
    * The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.
    */
    'routingNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string"
        },
        {
            "name": "bsbCode",
            "baseName": "bsbCode",
            "type": "string"
        },
        {
            "name": "formFactor",
            "baseName": "formFactor",
            "type": "string | null"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BankAccountV3AccountIdentification.TypeEnum"
        },
        {
            "name": "bankCode",
            "baseName": "bankCode",
            "type": "string"
        },
        {
            "name": "branchNumber",
            "baseName": "branchNumber",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "BankAccountV3AccountIdentification.AccountTypeEnum"
        },
        {
            "name": "institutionNumber",
            "baseName": "institutionNumber",
            "type": "string"
        },
        {
            "name": "transitNumber",
            "baseName": "transitNumber",
            "type": "string"
        },
        {
            "name": "clearingCode",
            "baseName": "clearingCode",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "additionalBankIdentification",
            "baseName": "additionalBankIdentification",
            "type": "AdditionalBankIdentification"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "clearingNumber",
            "baseName": "clearingNumber",
            "type": "string"
        },
        {
            "name": "sortCode",
            "baseName": "sortCode",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routingNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BankAccountV3AccountIdentification.attributeTypeMap;
    }
}

export namespace BankAccountV3AccountIdentification {
    export enum TypeEnum {
        AuLocal = 'auLocal',
        BrLocal = 'brLocal',
        CaLocal = 'caLocal',
        CzLocal = 'czLocal',
        DkLocal = 'dkLocal',
        HkLocal = 'hkLocal',
        HuLocal = 'huLocal',
        Iban = 'iban',
        NoLocal = 'noLocal',
        NzLocal = 'nzLocal',
        NumberAndBic = 'numberAndBic',
        PlLocal = 'plLocal',
        SeLocal = 'seLocal',
        SgLocal = 'sgLocal',
        UkLocal = 'ukLocal',
        UsLocal = 'usLocal'
    }
    export enum AccountTypeEnum {
        Checking = 'checking',
        Savings = 'savings'
    }
}

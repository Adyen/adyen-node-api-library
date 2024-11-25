/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CheckoutBankAccount {
    /**
    * The type of the bank account.
    */
    'accountType'?: CheckoutBankAccount.AccountTypeEnum;
    /**
    * The bank account number (without separators).
    */
    'bankAccountNumber'?: string;
    /**
    * The bank city.
    */
    'bankCity'?: string;
    /**
    * The location id of the bank. The field value is `nil` in most cases.
    */
    'bankLocationId'?: string;
    /**
    * The name of the bank.
    */
    'bankName'?: string;
    /**
    * The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases.
    */
    'bic'?: string;
    /**
    * Country code where the bank is located.  A valid value is an ISO two-character country code (e.g. \'NL\').
    */
    'countryCode'?: string;
    /**
    * The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).
    */
    'iban'?: string;
    /**
    * The name of the bank account holder. If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example: * χ12 is converted to ch12. * üA is converted to euA. * Peter Møller is converted to Peter Mller, because banks don\'t accept \'ø\'. After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example: * John17 - allowed. * J17 - allowed. * 171 - not allowed. * John-7 - allowed. > If provided details don\'t match the required format, the response returns the error message: 203 \'Invalid bank account holder name\'.
    */
    'ownerName'?: string;
    /**
    * The bank account holder\'s tax ID.
    */
    'taxId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "CheckoutBankAccount.AccountTypeEnum"
        },
        {
            "name": "bankAccountNumber",
            "baseName": "bankAccountNumber",
            "type": "string"
        },
        {
            "name": "bankCity",
            "baseName": "bankCity",
            "type": "string"
        },
        {
            "name": "bankLocationId",
            "baseName": "bankLocationId",
            "type": "string"
        },
        {
            "name": "bankName",
            "baseName": "bankName",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "ownerName",
            "baseName": "ownerName",
            "type": "string"
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutBankAccount.attributeTypeMap;
    }
}

export namespace CheckoutBankAccount {
    export enum AccountTypeEnum {
        Balance = 'balance',
        Checking = 'checking',
        Deposit = 'deposit',
        General = 'general',
        Other = 'other',
        Payment = 'payment',
        Savings = 'savings'
    }
}

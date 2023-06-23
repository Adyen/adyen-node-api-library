/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ResponseAdditionalDataSepa {
    /**
    * The transaction signature date.  Format: yyyy-MM-dd
    */
    'sepadirectdebit_dateOfSignature'?: string;
    /**
    * Its value corresponds to the pspReference value of the transaction.
    */
    'sepadirectdebit_mandateId'?: string;
    /**
    * This field can take one of the following values: * OneOff: (OOFF) Direct debit instruction to initiate exactly one direct debit transaction.  * First: (FRST) Initial/first collection in a series of direct debit instructions. * Recurring: (RCUR) Direct debit instruction to carry out regular direct debit transactions initiated by the creditor. * Final: (FNAL) Last/final collection in a series of direct debit instructions.  Example: OOFF
    */
    'sepadirectdebit_sequenceType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sepadirectdebit_dateOfSignature",
            "baseName": "sepadirectdebit.dateOfSignature",
            "type": "string"
        },
        {
            "name": "sepadirectdebit_mandateId",
            "baseName": "sepadirectdebit.mandateId",
            "type": "string"
        },
        {
            "name": "sepadirectdebit_sequenceType",
            "baseName": "sepadirectdebit.sequenceType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResponseAdditionalDataSepa.attributeTypeMap;
    }
}


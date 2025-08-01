/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AdditionalBankIdentificationRequirement } from "./additionalBankIdentificationRequirement";
import { AddressRequirement } from "./addressRequirement";
import { AmountMinMaxRequirement } from "./amountMinMaxRequirement";
import { AmountNonZeroDecimalsRequirement } from "./amountNonZeroDecimalsRequirement";
import { BankAccountIdentificationTypeRequirement } from "./bankAccountIdentificationTypeRequirement";
import { IbanAccountIdentificationRequirement } from "./ibanAccountIdentificationRequirement";
import { PaymentInstrumentRequirement } from "./paymentInstrumentRequirement";
import { USInstantPayoutAddressRequirement } from "./uSInstantPayoutAddressRequirement";
import { USInternationalAchAddressRequirement } from "./uSInternationalAchAddressRequirement";


/**
 * @type TransferRouteRequirementsInner
 * Type
 * @export
 */
export type TransferRouteRequirementsInner = AdditionalBankIdentificationRequirement | AddressRequirement | AmountMinMaxRequirement | AmountNonZeroDecimalsRequirement | BankAccountIdentificationTypeRequirement | IbanAccountIdentificationRequirement | PaymentInstrumentRequirement | USInstantPayoutAddressRequirement | USInternationalAchAddressRequirement;

/**
* @type TransferRouteRequirementsInnerClass
* @export
*/
export class TransferRouteRequirementsInnerClass {
    
    static readonly discriminator: string = "type";

    static readonly mapping: {[index: string]: string} | undefined = undefined;
}

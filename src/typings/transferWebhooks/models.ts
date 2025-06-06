/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export * from './aULocalAccountIdentification';
export * from './additionalBankIdentification';
export * from './address';
export * from './airline';
export * from './amount';
export * from './amountAdjustment';
export * from './bRLocalAccountIdentification';
export * from './balanceMutation';
export * from './balancePlatformNotificationResponse';
export * from './bankAccountV3';
export * from './bankCategoryData';
export * from './cALocalAccountIdentification';
export * from './cZLocalAccountIdentification';
export * from './card';
export * from './cardIdentification';
export * from './confirmationTrackingData';
export * from './counterpartyV3';
export * from './dKLocalAccountIdentification';
export * from './directDebitInformation';
export * from './estimationTrackingData';
export * from './externalReason';
export * from './hKLocalAccountIdentification';
export * from './hULocalAccountIdentification';
export * from './ibanAccountIdentification';
export * from './internalCategoryData';
export * from './internalReviewTrackingData';
export * from './issuedCard';
export * from './issuingTransactionData';
export * from './leg';
export * from './lodging';
export * from './merchantData';
export * from './merchantPurchaseData';
export * from './modification';
export * from './nOLocalAccountIdentification';
export * from './nZLocalAccountIdentification';
export * from './nameLocation';
export * from './numberAndBicAccountIdentification';
export * from './pLLocalAccountIdentification';
export * from './partyIdentification';
export * from './paymentInstrument';
export * from './platformPayment';
export * from './relayedAuthorisationData';
export * from './resource';
export * from './resourceReference';
export * from './sELocalAccountIdentification';
export * from './sGLocalAccountIdentification';
export * from './transactionEventViolation';
export * from './transactionRuleReference';
export * from './transactionRuleSource';
export * from './transactionRulesResult';
export * from './transferData';
export * from './transferEvent';
export * from './transferNotificationCounterParty';
export * from './transferNotificationMerchantData';
export * from './transferNotificationRequest';
export * from './transferNotificationValidationFact';
export * from './transferReview';
export * from './uKLocalAccountIdentification';
export * from './uSLocalAccountIdentification';


import { AULocalAccountIdentification } from './aULocalAccountIdentification';
import { AdditionalBankIdentification } from './additionalBankIdentification';
import { Address } from './address';
import { Airline } from './airline';
import { Amount } from './amount';
import { AmountAdjustment } from './amountAdjustment';
import { BRLocalAccountIdentification } from './bRLocalAccountIdentification';
import { BalanceMutation } from './balanceMutation';
import { BalancePlatformNotificationResponse } from './balancePlatformNotificationResponse';
import { BankAccountV3 } from './bankAccountV3';
import { BankCategoryData } from './bankCategoryData';
import { CALocalAccountIdentification } from './cALocalAccountIdentification';
import { CZLocalAccountIdentification } from './cZLocalAccountIdentification';
import { Card } from './card';
import { CardIdentification } from './cardIdentification';
import { ConfirmationTrackingData } from './confirmationTrackingData';
import { CounterpartyV3 } from './counterpartyV3';
import { DKLocalAccountIdentification } from './dKLocalAccountIdentification';
import { DirectDebitInformation } from './directDebitInformation';
import { EstimationTrackingData } from './estimationTrackingData';
import { ExternalReason } from './externalReason';
import { HKLocalAccountIdentification } from './hKLocalAccountIdentification';
import { HULocalAccountIdentification } from './hULocalAccountIdentification';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { InternalCategoryData } from './internalCategoryData';
import { InternalReviewTrackingData } from './internalReviewTrackingData';
import { IssuedCard } from './issuedCard';
import { IssuingTransactionData } from './issuingTransactionData';
import { Leg } from './leg';
import { Lodging } from './lodging';
import { MerchantData } from './merchantData';
import { MerchantPurchaseData } from './merchantPurchaseData';
import { Modification } from './modification';
import { NOLocalAccountIdentification } from './nOLocalAccountIdentification';
import { NZLocalAccountIdentification } from './nZLocalAccountIdentification';
import { NameLocation } from './nameLocation';
import { NumberAndBicAccountIdentification } from './numberAndBicAccountIdentification';
import { PLLocalAccountIdentification } from './pLLocalAccountIdentification';
import { PartyIdentification } from './partyIdentification';
import { PaymentInstrument } from './paymentInstrument';
import { PlatformPayment } from './platformPayment';
import { RelayedAuthorisationData } from './relayedAuthorisationData';
import { Resource } from './resource';
import { ResourceReference } from './resourceReference';
import { SELocalAccountIdentification } from './sELocalAccountIdentification';
import { SGLocalAccountIdentification } from './sGLocalAccountIdentification';
import { TransactionEventViolation } from './transactionEventViolation';
import { TransactionRuleReference } from './transactionRuleReference';
import { TransactionRuleSource } from './transactionRuleSource';
import { TransactionRulesResult } from './transactionRulesResult';
import { TransferData } from './transferData';
import { TransferEvent } from './transferEvent';
import { TransferNotificationCounterParty } from './transferNotificationCounterParty';
import { TransferNotificationMerchantData } from './transferNotificationMerchantData';
import { TransferNotificationRequest } from './transferNotificationRequest';
import { TransferNotificationValidationFact } from './transferNotificationValidationFact';
import { TransferReview } from './transferReview';
import { UKLocalAccountIdentification } from './uKLocalAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AULocalAccountIdentification.TypeEnum": AULocalAccountIdentification.TypeEnum,
        "AdditionalBankIdentification.TypeEnum": AdditionalBankIdentification.TypeEnum,
        "AmountAdjustment.AmountAdjustmentTypeEnum": AmountAdjustment.AmountAdjustmentTypeEnum,
        "BRLocalAccountIdentification.TypeEnum": BRLocalAccountIdentification.TypeEnum,
        "BankCategoryData.PriorityEnum": BankCategoryData.PriorityEnum,
        "BankCategoryData.TypeEnum": BankCategoryData.TypeEnum,
        "CALocalAccountIdentification.AccountTypeEnum": CALocalAccountIdentification.AccountTypeEnum,
        "CALocalAccountIdentification.TypeEnum": CALocalAccountIdentification.TypeEnum,
        "CZLocalAccountIdentification.TypeEnum": CZLocalAccountIdentification.TypeEnum,
        "ConfirmationTrackingData.StatusEnum": ConfirmationTrackingData.StatusEnum,
        "ConfirmationTrackingData.TypeEnum": ConfirmationTrackingData.TypeEnum,
        "DKLocalAccountIdentification.TypeEnum": DKLocalAccountIdentification.TypeEnum,
        "EstimationTrackingData.TypeEnum": EstimationTrackingData.TypeEnum,
        "HKLocalAccountIdentification.TypeEnum": HKLocalAccountIdentification.TypeEnum,
        "HULocalAccountIdentification.TypeEnum": HULocalAccountIdentification.TypeEnum,
        "IbanAccountIdentification.TypeEnum": IbanAccountIdentification.TypeEnum,
        "InternalCategoryData.TypeEnum": InternalCategoryData.TypeEnum,
        "InternalReviewTrackingData.ReasonEnum": InternalReviewTrackingData.ReasonEnum,
        "InternalReviewTrackingData.StatusEnum": InternalReviewTrackingData.StatusEnum,
        "InternalReviewTrackingData.TypeEnum": InternalReviewTrackingData.TypeEnum,
        "IssuedCard.PanEntryModeEnum": IssuedCard.PanEntryModeEnum,
        "IssuedCard.ProcessingTypeEnum": IssuedCard.ProcessingTypeEnum,
        "IssuedCard.TypeEnum": IssuedCard.TypeEnum,
        "IssuingTransactionData.TypeEnum": IssuingTransactionData.TypeEnum,
        "MerchantPurchaseData.TypeEnum": MerchantPurchaseData.TypeEnum,
        "Modification.StatusEnum": Modification.StatusEnum,
        "NOLocalAccountIdentification.TypeEnum": NOLocalAccountIdentification.TypeEnum,
        "NZLocalAccountIdentification.TypeEnum": NZLocalAccountIdentification.TypeEnum,
        "NumberAndBicAccountIdentification.TypeEnum": NumberAndBicAccountIdentification.TypeEnum,
        "PLLocalAccountIdentification.TypeEnum": PLLocalAccountIdentification.TypeEnum,
        "PartyIdentification.TypeEnum": PartyIdentification.TypeEnum,
        "PlatformPayment.PlatformPaymentTypeEnum": PlatformPayment.PlatformPaymentTypeEnum,
        "PlatformPayment.TypeEnum": PlatformPayment.TypeEnum,
        "SELocalAccountIdentification.TypeEnum": SELocalAccountIdentification.TypeEnum,
        "SGLocalAccountIdentification.TypeEnum": SGLocalAccountIdentification.TypeEnum,
        "TransferData.CategoryEnum": TransferData.CategoryEnum,
        "TransferData.DirectionEnum": TransferData.DirectionEnum,
        "TransferData.ReasonEnum": TransferData.ReasonEnum,
        "TransferData.StatusEnum": TransferData.StatusEnum,
        "TransferData.TypeEnum": TransferData.TypeEnum,
        "TransferEvent.ReasonEnum": TransferEvent.ReasonEnum,
        "TransferEvent.StatusEnum": TransferEvent.StatusEnum,
        "TransferEvent.TypeEnum": TransferEvent.TypeEnum,
        "TransferNotificationRequest.TypeEnum": TransferNotificationRequest.TypeEnum,
        "TransferReview.ScaOnApprovalEnum": TransferReview.ScaOnApprovalEnum,
        "UKLocalAccountIdentification.TypeEnum": UKLocalAccountIdentification.TypeEnum,
        "USLocalAccountIdentification.AccountTypeEnum": USLocalAccountIdentification.AccountTypeEnum,
        "USLocalAccountIdentification.TypeEnum": USLocalAccountIdentification.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AULocalAccountIdentification": AULocalAccountIdentification,
    "AdditionalBankIdentification": AdditionalBankIdentification,
    "Address": Address,
    "Airline": Airline,
    "Amount": Amount,
    "AmountAdjustment": AmountAdjustment,
    "BRLocalAccountIdentification": BRLocalAccountIdentification,
    "BalanceMutation": BalanceMutation,
    "BalancePlatformNotificationResponse": BalancePlatformNotificationResponse,
    "BankAccountV3": BankAccountV3,
    "BankCategoryData": BankCategoryData,
    "CALocalAccountIdentification": CALocalAccountIdentification,
    "CZLocalAccountIdentification": CZLocalAccountIdentification,
    "Card": Card,
    "CardIdentification": CardIdentification,
    "ConfirmationTrackingData": ConfirmationTrackingData,
    "CounterpartyV3": CounterpartyV3,
    "DKLocalAccountIdentification": DKLocalAccountIdentification,
    "DirectDebitInformation": DirectDebitInformation,
    "EstimationTrackingData": EstimationTrackingData,
    "ExternalReason": ExternalReason,
    "HKLocalAccountIdentification": HKLocalAccountIdentification,
    "HULocalAccountIdentification": HULocalAccountIdentification,
    "IbanAccountIdentification": IbanAccountIdentification,
    "InternalCategoryData": InternalCategoryData,
    "InternalReviewTrackingData": InternalReviewTrackingData,
    "IssuedCard": IssuedCard,
    "IssuingTransactionData": IssuingTransactionData,
    "Leg": Leg,
    "Lodging": Lodging,
    "MerchantData": MerchantData,
    "MerchantPurchaseData": MerchantPurchaseData,
    "Modification": Modification,
    "NOLocalAccountIdentification": NOLocalAccountIdentification,
    "NZLocalAccountIdentification": NZLocalAccountIdentification,
    "NameLocation": NameLocation,
    "NumberAndBicAccountIdentification": NumberAndBicAccountIdentification,
    "PLLocalAccountIdentification": PLLocalAccountIdentification,
    "PartyIdentification": PartyIdentification,
    "PaymentInstrument": PaymentInstrument,
    "PlatformPayment": PlatformPayment,
    "RelayedAuthorisationData": RelayedAuthorisationData,
    "Resource": Resource,
    "ResourceReference": ResourceReference,
    "SELocalAccountIdentification": SELocalAccountIdentification,
    "SGLocalAccountIdentification": SGLocalAccountIdentification,
    "TransactionEventViolation": TransactionEventViolation,
    "TransactionRuleReference": TransactionRuleReference,
    "TransactionRuleSource": TransactionRuleSource,
    "TransactionRulesResult": TransactionRulesResult,
    "TransferData": TransferData,
    "TransferEvent": TransferEvent,
    "TransferNotificationCounterParty": TransferNotificationCounterParty,
    "TransferNotificationMerchantData": TransferNotificationMerchantData,
    "TransferNotificationRequest": TransferNotificationRequest,
    "TransferNotificationValidationFact": TransferNotificationValidationFact,
    "TransferReview": TransferReview,
    "UKLocalAccountIdentification": UKLocalAccountIdentification,
    "USLocalAccountIdentification": USLocalAccountIdentification,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            // Handle union types
            if (expectedType.includes(" | ")) {
                const unionTypes = expectedType.split(" | ").map((t) => t.trim());

                // For tracking field specifically, use the 'type' field to determine the actual type
                if (data && data.type && unionTypes.some((t) => t.includes("TrackingData"))) {
                    if (data.type === "estimation") return "EstimationTrackingData";
                    if (data.type === "confirmation") return "ConfirmationTrackingData";
                    if (data.type === "internalReview") return "InternalReviewTrackingData";
                }

                // For other union types, return the first non-null type that exists in typeMap
                for (const type of unionTypes) {
                    if (type !== "null" && typeMap[type]) {
                        return type;
                    }
                }
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else if (type === "SaleToAcquirerData") {
            const dataString = JSON.stringify(data);
            return Buffer.from(dataString).toString("base64");
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

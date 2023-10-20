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
export * from './amount';
export * from './bRLocalAccountIdentification';
export * from './bankAccountV3';
export * from './bankCategoryData';
export * from './cALocalAccountIdentification';
export * from './cZLocalAccountIdentification';
export * from './capitalBalance';
export * from './capitalGrant';
export * from './capitalGrantInfo';
export * from './capitalGrants';
export * from './counterparty';
export * from './counterpartyInfoV3';
export * from './counterpartyV3';
export * from './dKLocalAccountIdentification';
export * from './fee';
export * from './hKLocalAccountIdentification';
export * from './hULocalAccountIdentification';
export * from './ibanAccountIdentification';
export * from './internalCategoryData';
export * from './invalidField';
export * from './issuedCard';
export * from './jSONObject';
export * from './jSONPath';
export * from './link';
export * from './links';
export * from './merchantData';
export * from './nOLocalAccountIdentification';
export * from './nZLocalAccountIdentification';
export * from './nameLocation';
export * from './numberAndBicAccountIdentification';
export * from './pLLocalAccountIdentification';
export * from './partyIdentification';
export * from './paymentInstrument';
export * from './platformPayment';
export * from './relayedAuthorisationData';
export * from './repayment';
export * from './repaymentTerm';
export * from './resourceReference';
export * from './restServiceError';
export * from './returnTransferRequest';
export * from './returnTransferResponse';
export * from './sELocalAccountIdentification';
export * from './sGLocalAccountIdentification';
export * from './serviceError';
export * from './thresholdRepayment';
export * from './transaction';
export * from './transactionSearchResponse';
export * from './transfer';
export * from './transferData';
export * from './transferInfo';
export * from './transferNotificationValidationFact';
export * from './uKLocalAccountIdentification';
export * from './uSLocalAccountIdentification';
export * from './ultimatePartyIdentification';


import { AULocalAccountIdentification } from './aULocalAccountIdentification';
import { AdditionalBankIdentification } from './additionalBankIdentification';
import { Address } from './address';
import { Amount } from './amount';
import { BRLocalAccountIdentification } from './bRLocalAccountIdentification';
import { BankAccountV3 } from './bankAccountV3';
import { BankCategoryData } from './bankCategoryData';
import { CALocalAccountIdentification } from './cALocalAccountIdentification';
import { CZLocalAccountIdentification } from './cZLocalAccountIdentification';
import { CapitalBalance } from './capitalBalance';
import { CapitalGrant } from './capitalGrant';
import { CapitalGrantInfo } from './capitalGrantInfo';
import { CapitalGrants } from './capitalGrants';
import { Counterparty } from './counterparty';
import { CounterpartyInfoV3 } from './counterpartyInfoV3';
import { CounterpartyV3 } from './counterpartyV3';
import { DKLocalAccountIdentification } from './dKLocalAccountIdentification';
import { Fee } from './fee';
import { HKLocalAccountIdentification } from './hKLocalAccountIdentification';
import { HULocalAccountIdentification } from './hULocalAccountIdentification';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { InternalCategoryData } from './internalCategoryData';
import { InvalidField } from './invalidField';
import { IssuedCard } from './issuedCard';
import { JSONObject } from './jSONObject';
import { JSONPath } from './jSONPath';
import { Link } from './link';
import { Links } from './links';
import { MerchantData } from './merchantData';
import { NOLocalAccountIdentification } from './nOLocalAccountIdentification';
import { NZLocalAccountIdentification } from './nZLocalAccountIdentification';
import { NameLocation } from './nameLocation';
import { NumberAndBicAccountIdentification } from './numberAndBicAccountIdentification';
import { PLLocalAccountIdentification } from './pLLocalAccountIdentification';
import { PartyIdentification } from './partyIdentification';
import { PaymentInstrument } from './paymentInstrument';
import { PlatformPayment } from './platformPayment';
import { RelayedAuthorisationData } from './relayedAuthorisationData';
import { Repayment } from './repayment';
import { RepaymentTerm } from './repaymentTerm';
import { ResourceReference } from './resourceReference';
import { RestServiceError } from './restServiceError';
import { ReturnTransferRequest } from './returnTransferRequest';
import { ReturnTransferResponse } from './returnTransferResponse';
import { SELocalAccountIdentification } from './sELocalAccountIdentification';
import { SGLocalAccountIdentification } from './sGLocalAccountIdentification';
import { ServiceError } from './serviceError';
import { ThresholdRepayment } from './thresholdRepayment';
import { Transaction } from './transaction';
import { TransactionSearchResponse } from './transactionSearchResponse';
import { Transfer } from './transfer';
import { TransferData } from './transferData';
import { TransferInfo } from './transferInfo';
import { TransferNotificationValidationFact } from './transferNotificationValidationFact';
import { UKLocalAccountIdentification } from './uKLocalAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';
import { UltimatePartyIdentification } from './ultimatePartyIdentification';

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
        "BRLocalAccountIdentification.TypeEnum": BRLocalAccountIdentification.TypeEnum,
        "BankCategoryData.PriorityEnum": BankCategoryData.PriorityEnum,
        "BankCategoryData.TypeEnum": BankCategoryData.TypeEnum,
        "CALocalAccountIdentification.AccountTypeEnum": CALocalAccountIdentification.AccountTypeEnum,
        "CALocalAccountIdentification.TypeEnum": CALocalAccountIdentification.TypeEnum,
        "CZLocalAccountIdentification.TypeEnum": CZLocalAccountIdentification.TypeEnum,
        "CapitalGrant.StatusEnum": CapitalGrant.StatusEnum,
        "DKLocalAccountIdentification.TypeEnum": DKLocalAccountIdentification.TypeEnum,
        "HKLocalAccountIdentification.TypeEnum": HKLocalAccountIdentification.TypeEnum,
        "HULocalAccountIdentification.TypeEnum": HULocalAccountIdentification.TypeEnum,
        "IbanAccountIdentification.TypeEnum": IbanAccountIdentification.TypeEnum,
        "InternalCategoryData.TypeEnum": InternalCategoryData.TypeEnum,
        "IssuedCard.PanEntryModeEnum": IssuedCard.PanEntryModeEnum,
        "IssuedCard.ProcessingTypeEnum": IssuedCard.ProcessingTypeEnum,
        "IssuedCard.TypeEnum": IssuedCard.TypeEnum,
        "NOLocalAccountIdentification.TypeEnum": NOLocalAccountIdentification.TypeEnum,
        "NZLocalAccountIdentification.TypeEnum": NZLocalAccountIdentification.TypeEnum,
        "NumberAndBicAccountIdentification.TypeEnum": NumberAndBicAccountIdentification.TypeEnum,
        "PLLocalAccountIdentification.TypeEnum": PLLocalAccountIdentification.TypeEnum,
        "PartyIdentification.TypeEnum": PartyIdentification.TypeEnum,
        "PlatformPayment.PlatformPaymentTypeEnum": PlatformPayment.PlatformPaymentTypeEnum,
        "PlatformPayment.TypeEnum": PlatformPayment.TypeEnum,
        "ReturnTransferResponse.StatusEnum": ReturnTransferResponse.StatusEnum,
        "SELocalAccountIdentification.TypeEnum": SELocalAccountIdentification.TypeEnum,
        "SGLocalAccountIdentification.TypeEnum": SGLocalAccountIdentification.TypeEnum,
        "Transaction.StatusEnum": Transaction.StatusEnum,
        "Transfer.CategoryEnum": Transfer.CategoryEnum,
        "Transfer.DirectionEnum": Transfer.DirectionEnum,
        "Transfer.ReasonEnum": Transfer.ReasonEnum,
        "Transfer.StatusEnum": Transfer.StatusEnum,
        "TransferInfo.CategoryEnum": TransferInfo.CategoryEnum,
        "TransferInfo.PriorityEnum": TransferInfo.PriorityEnum,
        "UKLocalAccountIdentification.TypeEnum": UKLocalAccountIdentification.TypeEnum,
        "USLocalAccountIdentification.AccountTypeEnum": USLocalAccountIdentification.AccountTypeEnum,
        "USLocalAccountIdentification.TypeEnum": USLocalAccountIdentification.TypeEnum,
        "UltimatePartyIdentification.TypeEnum": UltimatePartyIdentification.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AULocalAccountIdentification": AULocalAccountIdentification,
    "AdditionalBankIdentification": AdditionalBankIdentification,
    "Address": Address,
    "Amount": Amount,
    "BRLocalAccountIdentification": BRLocalAccountIdentification,
    "BankAccountV3": BankAccountV3,
    "BankCategoryData": BankCategoryData,
    "CALocalAccountIdentification": CALocalAccountIdentification,
    "CZLocalAccountIdentification": CZLocalAccountIdentification,
    "CapitalBalance": CapitalBalance,
    "CapitalGrant": CapitalGrant,
    "CapitalGrantInfo": CapitalGrantInfo,
    "CapitalGrants": CapitalGrants,
    "Counterparty": Counterparty,
    "CounterpartyInfoV3": CounterpartyInfoV3,
    "CounterpartyV3": CounterpartyV3,
    "DKLocalAccountIdentification": DKLocalAccountIdentification,
    "Fee": Fee,
    "HKLocalAccountIdentification": HKLocalAccountIdentification,
    "HULocalAccountIdentification": HULocalAccountIdentification,
    "IbanAccountIdentification": IbanAccountIdentification,
    "InternalCategoryData": InternalCategoryData,
    "InvalidField": InvalidField,
    "IssuedCard": IssuedCard,
    "JSONObject": JSONObject,
    "JSONPath": JSONPath,
    "Link": Link,
    "Links": Links,
    "MerchantData": MerchantData,
    "NOLocalAccountIdentification": NOLocalAccountIdentification,
    "NZLocalAccountIdentification": NZLocalAccountIdentification,
    "NameLocation": NameLocation,
    "NumberAndBicAccountIdentification": NumberAndBicAccountIdentification,
    "PLLocalAccountIdentification": PLLocalAccountIdentification,
    "PartyIdentification": PartyIdentification,
    "PaymentInstrument": PaymentInstrument,
    "PlatformPayment": PlatformPayment,
    "RelayedAuthorisationData": RelayedAuthorisationData,
    "Repayment": Repayment,
    "RepaymentTerm": RepaymentTerm,
    "ResourceReference": ResourceReference,
    "RestServiceError": RestServiceError,
    "ReturnTransferRequest": ReturnTransferRequest,
    "ReturnTransferResponse": ReturnTransferResponse,
    "SELocalAccountIdentification": SELocalAccountIdentification,
    "SGLocalAccountIdentification": SGLocalAccountIdentification,
    "ServiceError": ServiceError,
    "ThresholdRepayment": ThresholdRepayment,
    "Transaction": Transaction,
    "TransactionSearchResponse": TransactionSearchResponse,
    "Transfer": Transfer,
    "TransferData": TransferData,
    "TransferInfo": TransferInfo,
    "TransferNotificationValidationFact": TransferNotificationValidationFact,
    "UKLocalAccountIdentification": UKLocalAccountIdentification,
    "USLocalAccountIdentification": USLocalAccountIdentification,
    "UltimatePartyIdentification": UltimatePartyIdentification,
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

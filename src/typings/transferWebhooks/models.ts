import localVarRequest from 'request';

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
export * from './bankAccountV3AccountIdentification';
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
export * from './transferDataCategoryData';
export * from './transferDataTracking';
export * from './transferEvent';
export * from './transferEventEventsDataInner';
export * from './transferEventTrackingData';
export * from './transferNotificationCounterParty';
export * from './transferNotificationMerchantData';
export * from './transferNotificationRequest';
export * from './transferNotificationValidationFact';
export * from './transferReview';
export * from './uKLocalAccountIdentification';
export * from './uSLocalAccountIdentification';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


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
import { BankAccountV3AccountIdentification } from './bankAccountV3AccountIdentification';
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
import { TransferDataCategoryData } from './transferDataCategoryData';
import { TransferDataTracking } from './transferDataTracking';
import { TransferEvent } from './transferEvent';
import { TransferEventEventsDataInner } from './transferEventEventsDataInner';
import { TransferEventTrackingData } from './transferEventTrackingData';
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
        "BankAccountV3AccountIdentification.TypeEnum": BankAccountV3AccountIdentification.TypeEnum,
        "BankAccountV3AccountIdentification.AccountTypeEnum": BankAccountV3AccountIdentification.AccountTypeEnum,
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
        "TransferDataCategoryData.PriorityEnum": TransferDataCategoryData.PriorityEnum,
        "TransferDataCategoryData.TypeEnum": TransferDataCategoryData.TypeEnum,
        "TransferDataCategoryData.PanEntryModeEnum": TransferDataCategoryData.PanEntryModeEnum,
        "TransferDataCategoryData.ProcessingTypeEnum": TransferDataCategoryData.ProcessingTypeEnum,
        "TransferDataCategoryData.PlatformPaymentTypeEnum": TransferDataCategoryData.PlatformPaymentTypeEnum,
        "TransferDataTracking.StatusEnum": TransferDataTracking.StatusEnum,
        "TransferDataTracking.TypeEnum": TransferDataTracking.TypeEnum,
        "TransferDataTracking.ReasonEnum": TransferDataTracking.ReasonEnum,
        "TransferEvent.ReasonEnum": TransferEvent.ReasonEnum,
        "TransferEvent.StatusEnum": TransferEvent.StatusEnum,
        "TransferEvent.TypeEnum": TransferEvent.TypeEnum,
        "TransferEventEventsDataInner.TypeEnum": TransferEventEventsDataInner.TypeEnum,
        "TransferEventTrackingData.StatusEnum": TransferEventTrackingData.StatusEnum,
        "TransferEventTrackingData.TypeEnum": TransferEventTrackingData.TypeEnum,
        "TransferEventTrackingData.ReasonEnum": TransferEventTrackingData.ReasonEnum,
        "TransferNotificationRequest.TypeEnum": TransferNotificationRequest.TypeEnum,
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
    "BankAccountV3AccountIdentification": BankAccountV3AccountIdentification,
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
    "TransferDataCategoryData": TransferDataCategoryData,
    "TransferDataTracking": TransferDataTracking,
    "TransferEvent": TransferEvent,
    "TransferEventEventsDataInner": TransferEventEventsDataInner,
    "TransferEventTrackingData": TransferEventTrackingData,
    "TransferNotificationCounterParty": TransferNotificationCounterParty,
    "TransferNotificationMerchantData": TransferNotificationMerchantData,
    "TransferNotificationRequest": TransferNotificationRequest,
    "TransferNotificationValidationFact": TransferNotificationValidationFact,
    "TransferReview": TransferReview,
    "UKLocalAccountIdentification": UKLocalAccountIdentification,
    "USLocalAccountIdentification": USLocalAccountIdentification,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

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

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
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

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
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

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

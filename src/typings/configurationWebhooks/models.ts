import localVarRequest from 'request';

export * from './accountHolder';
export * from './accountHolderCapability';
export * from './accountHolderNotificationData';
export * from './accountHolderNotificationRequest';
export * from './accountSupportingEntityCapability';
export * from './address';
export * from './amount';
export * from './authentication';
export * from './balance';
export * from './balanceAccount';
export * from './balanceAccountNotificationData';
export * from './balanceAccountNotificationRequest';
export * from './balancePlatformNotificationResponse';
export * from './bankAccountDetails';
export * from './bulkAddress';
export * from './capabilityProblem';
export * from './capabilityProblemEntity';
export * from './capabilityProblemEntityRecursive';
export * from './capabilitySettings';
export * from './card';
export * from './cardConfiguration';
export * from './cardOrderItem';
export * from './cardOrderItemDeliveryStatus';
export * from './cardOrderNotificationRequest';
export * from './contactDetails';
export * from './deliveryAddress';
export * from './deliveryContact';
export * from './expiry';
export * from './ibanAccountIdentification';
export * from './name';
export * from './paymentInstrument';
export * from './paymentInstrumentAdditionalBankAccountIdentificationsInner';
export * from './paymentInstrumentNotificationData';
export * from './paymentNotificationRequest';
export * from './phone';
export * from './phoneNumber';
export * from './platformPaymentConfiguration';
export * from './remediatingAction';
export * from './resource';
export * from './sweepConfigurationNotificationData';
export * from './sweepConfigurationNotificationRequest';
export * from './sweepConfigurationV2';
export * from './sweepCounterparty';
export * from './sweepSchedule';
export * from './verificationDeadline';
export * from './verificationError';
export * from './verificationErrorRecursive';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountHolder } from './accountHolder';
import { AccountHolderCapability } from './accountHolderCapability';
import { AccountHolderNotificationData } from './accountHolderNotificationData';
import { AccountHolderNotificationRequest } from './accountHolderNotificationRequest';
import { AccountSupportingEntityCapability } from './accountSupportingEntityCapability';
import { Address } from './address';
import { Amount } from './amount';
import { Authentication } from './authentication';
import { Balance } from './balance';
import { BalanceAccount } from './balanceAccount';
import { BalanceAccountNotificationData } from './balanceAccountNotificationData';
import { BalanceAccountNotificationRequest } from './balanceAccountNotificationRequest';
import { BalancePlatformNotificationResponse } from './balancePlatformNotificationResponse';
import { BankAccountDetails } from './bankAccountDetails';
import { BulkAddress } from './bulkAddress';
import { CapabilityProblem } from './capabilityProblem';
import { CapabilityProblemEntity } from './capabilityProblemEntity';
import { CapabilityProblemEntityRecursive } from './capabilityProblemEntityRecursive';
import { CapabilitySettings } from './capabilitySettings';
import { Card } from './card';
import { CardConfiguration } from './cardConfiguration';
import { CardOrderItem } from './cardOrderItem';
import { CardOrderItemDeliveryStatus } from './cardOrderItemDeliveryStatus';
import { CardOrderNotificationRequest } from './cardOrderNotificationRequest';
import { ContactDetails } from './contactDetails';
import { DeliveryAddress } from './deliveryAddress';
import { DeliveryContact } from './deliveryContact';
import { Expiry } from './expiry';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { Name } from './name';
import { PaymentInstrument } from './paymentInstrument';
import { PaymentInstrumentAdditionalBankAccountIdentificationsInner } from './paymentInstrumentAdditionalBankAccountIdentificationsInner';
import { PaymentInstrumentNotificationData } from './paymentInstrumentNotificationData';
import { PaymentNotificationRequest } from './paymentNotificationRequest';
import { Phone } from './phone';
import { PhoneNumber } from './phoneNumber';
import { PlatformPaymentConfiguration } from './platformPaymentConfiguration';
import { RemediatingAction } from './remediatingAction';
import { Resource } from './resource';
import { SweepConfigurationNotificationData } from './sweepConfigurationNotificationData';
import { SweepConfigurationNotificationRequest } from './sweepConfigurationNotificationRequest';
import { SweepConfigurationV2 } from './sweepConfigurationV2';
import { SweepCounterparty } from './sweepCounterparty';
import { SweepSchedule } from './sweepSchedule';
import { VerificationDeadline } from './verificationDeadline';
import { VerificationError } from './verificationError';
import { VerificationErrorRecursive } from './verificationErrorRecursive';

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
        "AccountHolder.StatusEnum": AccountHolder.StatusEnum,
        "AccountHolderCapability.AllowedLevelEnum": AccountHolderCapability.AllowedLevelEnum,
        "AccountHolderCapability.RequestedLevelEnum": AccountHolderCapability.RequestedLevelEnum,
        "AccountHolderCapability.VerificationStatusEnum": AccountHolderCapability.VerificationStatusEnum,
        "AccountHolderNotificationRequest.TypeEnum": AccountHolderNotificationRequest.TypeEnum,
        "AccountSupportingEntityCapability.AllowedLevelEnum": AccountSupportingEntityCapability.AllowedLevelEnum,
        "AccountSupportingEntityCapability.RequestedLevelEnum": AccountSupportingEntityCapability.RequestedLevelEnum,
        "AccountSupportingEntityCapability.VerificationStatusEnum": AccountSupportingEntityCapability.VerificationStatusEnum,
        "BalanceAccount.StatusEnum": BalanceAccount.StatusEnum,
        "BalanceAccountNotificationRequest.TypeEnum": BalanceAccountNotificationRequest.TypeEnum,
        "CapabilityProblemEntity.TypeEnum": CapabilityProblemEntity.TypeEnum,
        "CapabilityProblemEntityRecursive.TypeEnum": CapabilityProblemEntityRecursive.TypeEnum,
        "CapabilitySettings.FundingSourceEnum": CapabilitySettings.FundingSourceEnum,
        "CapabilitySettings.IntervalEnum": CapabilitySettings.IntervalEnum,
        "Card.FormFactorEnum": Card.FormFactorEnum,
        "CardOrderItemDeliveryStatus.StatusEnum": CardOrderItemDeliveryStatus.StatusEnum,
        "CardOrderNotificationRequest.TypeEnum": CardOrderNotificationRequest.TypeEnum,
        "IbanAccountIdentification.TypeEnum": IbanAccountIdentification.TypeEnum,
        "PaymentInstrument.StatusEnum": PaymentInstrument.StatusEnum,
        "PaymentInstrument.StatusReasonEnum": PaymentInstrument.StatusReasonEnum,
        "PaymentInstrument.TypeEnum": PaymentInstrument.TypeEnum,
        "PaymentInstrumentAdditionalBankAccountIdentificationsInner.TypeEnum": PaymentInstrumentAdditionalBankAccountIdentificationsInner.TypeEnum,
        "PaymentNotificationRequest.TypeEnum": PaymentNotificationRequest.TypeEnum,
        "Phone.TypeEnum": Phone.TypeEnum,
        "PhoneNumber.PhoneTypeEnum": PhoneNumber.PhoneTypeEnum,
        "SweepConfigurationNotificationRequest.TypeEnum": SweepConfigurationNotificationRequest.TypeEnum,
        "SweepConfigurationV2.CategoryEnum": SweepConfigurationV2.CategoryEnum,
        "SweepConfigurationV2.PrioritiesEnum": SweepConfigurationV2.PrioritiesEnum,
        "SweepConfigurationV2.ReasonEnum": SweepConfigurationV2.ReasonEnum,
        "SweepConfigurationV2.StatusEnum": SweepConfigurationV2.StatusEnum,
        "SweepConfigurationV2.TypeEnum": SweepConfigurationV2.TypeEnum,
        "SweepSchedule.TypeEnum": SweepSchedule.TypeEnum,
        "VerificationDeadline.CapabilitiesEnum": VerificationDeadline.CapabilitiesEnum,
        "VerificationError.CapabilitiesEnum": VerificationError.CapabilitiesEnum,
        "VerificationError.TypeEnum": VerificationError.TypeEnum,
        "VerificationErrorRecursive.CapabilitiesEnum": VerificationErrorRecursive.CapabilitiesEnum,
        "VerificationErrorRecursive.TypeEnum": VerificationErrorRecursive.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountHolder": AccountHolder,
    "AccountHolderCapability": AccountHolderCapability,
    "AccountHolderNotificationData": AccountHolderNotificationData,
    "AccountHolderNotificationRequest": AccountHolderNotificationRequest,
    "AccountSupportingEntityCapability": AccountSupportingEntityCapability,
    "Address": Address,
    "Amount": Amount,
    "Authentication": Authentication,
    "Balance": Balance,
    "BalanceAccount": BalanceAccount,
    "BalanceAccountNotificationData": BalanceAccountNotificationData,
    "BalanceAccountNotificationRequest": BalanceAccountNotificationRequest,
    "BalancePlatformNotificationResponse": BalancePlatformNotificationResponse,
    "BankAccountDetails": BankAccountDetails,
    "BulkAddress": BulkAddress,
    "CapabilityProblem": CapabilityProblem,
    "CapabilityProblemEntity": CapabilityProblemEntity,
    "CapabilityProblemEntityRecursive": CapabilityProblemEntityRecursive,
    "CapabilitySettings": CapabilitySettings,
    "Card": Card,
    "CardConfiguration": CardConfiguration,
    "CardOrderItem": CardOrderItem,
    "CardOrderItemDeliveryStatus": CardOrderItemDeliveryStatus,
    "CardOrderNotificationRequest": CardOrderNotificationRequest,
    "ContactDetails": ContactDetails,
    "DeliveryAddress": DeliveryAddress,
    "DeliveryContact": DeliveryContact,
    "Expiry": Expiry,
    "IbanAccountIdentification": IbanAccountIdentification,
    "Name": Name,
    "PaymentInstrument": PaymentInstrument,
    "PaymentInstrumentAdditionalBankAccountIdentificationsInner": PaymentInstrumentAdditionalBankAccountIdentificationsInner,
    "PaymentInstrumentNotificationData": PaymentInstrumentNotificationData,
    "PaymentNotificationRequest": PaymentNotificationRequest,
    "Phone": Phone,
    "PhoneNumber": PhoneNumber,
    "PlatformPaymentConfiguration": PlatformPaymentConfiguration,
    "RemediatingAction": RemediatingAction,
    "Resource": Resource,
    "SweepConfigurationNotificationData": SweepConfigurationNotificationData,
    "SweepConfigurationNotificationRequest": SweepConfigurationNotificationRequest,
    "SweepConfigurationV2": SweepConfigurationV2,
    "SweepCounterparty": SweepCounterparty,
    "SweepSchedule": SweepSchedule,
    "VerificationDeadline": VerificationDeadline,
    "VerificationError": VerificationError,
    "VerificationErrorRecursive": VerificationErrorRecursive,
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

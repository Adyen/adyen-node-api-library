import localVarRequest from 'request';

export * from './accountInfo';
export * from './acctInfo';
export * from './additionalData3DSecure';
export * from './additionalDataAirline';
export * from './additionalDataCarRental';
export * from './additionalDataCommon';
export * from './additionalDataLevel23';
export * from './additionalDataLodging';
export * from './additionalDataModifications';
export * from './additionalDataOpenInvoice';
export * from './additionalDataOpi';
export * from './additionalDataRatepay';
export * from './additionalDataRetry';
export * from './additionalDataRisk';
export * from './additionalDataRiskStandalone';
export * from './additionalDataSubMerchant';
export * from './additionalDataTemporaryServices';
export * from './additionalDataWallets';
export * from './address';
export * from './adjustAuthorisationRequest';
export * from './amount';
export * from './applicationInfo';
export * from './authenticationResultRequest';
export * from './authenticationResultResponse';
export * from './bankAccount';
export * from './browserInfo';
export * from './cancelOrRefundRequest';
export * from './cancelRequest';
export * from './captureRequest';
export * from './card';
export * from './commonField';
export * from './deviceRenderOptions';
export * from './donationRequest';
export * from './externalPlatform';
export * from './forexQuote';
export * from './fraudCheckResult';
export * from './fraudCheckResultWrapper';
export * from './fraudResult';
export * from './fundDestination';
export * from './fundSource';
export * from './installments';
export * from './mandate';
export * from './merchantDevice';
export * from './merchantRiskIndicator';
export * from './modificationResult';
export * from './name';
export * from './paymentRequest';
export * from './paymentRequest3d';
export * from './paymentRequest3ds2';
export * from './paymentResult';
export * from './phone';
export * from './platformChargebackLogic';
export * from './recurring';
export * from './refundRequest';
export * from './responseAdditionalData3DSecure';
export * from './responseAdditionalDataBillingAddress';
export * from './responseAdditionalDataCard';
export * from './responseAdditionalDataCommon';
export * from './responseAdditionalDataDomesticError';
export * from './responseAdditionalDataInstallments';
export * from './responseAdditionalDataNetworkTokens';
export * from './responseAdditionalDataOpi';
export * from './responseAdditionalDataSepa';
export * from './sDKEphemPubKey';
export * from './secureRemoteCommerceCheckoutData';
export * from './serviceError';
export * from './shopperInteractionDevice';
export * from './split';
export * from './splitAmount';
export * from './subMerchant';
export * from './technicalCancelRequest';
export * from './threeDS1Result';
export * from './threeDS2RequestData';
export * from './threeDS2Result';
export * from './threeDS2ResultRequest';
export * from './threeDS2ResultResponse';
export * from './threeDSRequestorAuthenticationInfo';
export * from './threeDSRequestorPriorAuthenticationInfo';
export * from './threeDSecureData';
export * from './voidPendingRefundRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AccountInfo } from './accountInfo';
import { AcctInfo } from './acctInfo';
import { AdditionalData3DSecure } from './additionalData3DSecure';
import { AdditionalDataAirline } from './additionalDataAirline';
import { AdditionalDataCarRental } from './additionalDataCarRental';
import { AdditionalDataCommon } from './additionalDataCommon';
import { AdditionalDataLevel23 } from './additionalDataLevel23';
import { AdditionalDataLodging } from './additionalDataLodging';
import { AdditionalDataModifications } from './additionalDataModifications';
import { AdditionalDataOpenInvoice } from './additionalDataOpenInvoice';
import { AdditionalDataOpi } from './additionalDataOpi';
import { AdditionalDataRatepay } from './additionalDataRatepay';
import { AdditionalDataRetry } from './additionalDataRetry';
import { AdditionalDataRisk } from './additionalDataRisk';
import { AdditionalDataRiskStandalone } from './additionalDataRiskStandalone';
import { AdditionalDataSubMerchant } from './additionalDataSubMerchant';
import { AdditionalDataTemporaryServices } from './additionalDataTemporaryServices';
import { AdditionalDataWallets } from './additionalDataWallets';
import { Address } from './address';
import { AdjustAuthorisationRequest } from './adjustAuthorisationRequest';
import { Amount } from './amount';
import { ApplicationInfo } from './applicationInfo';
import { AuthenticationResultRequest } from './authenticationResultRequest';
import { AuthenticationResultResponse } from './authenticationResultResponse';
import { BankAccount } from './bankAccount';
import { BrowserInfo } from './browserInfo';
import { CancelOrRefundRequest } from './cancelOrRefundRequest';
import { CancelRequest } from './cancelRequest';
import { CaptureRequest } from './captureRequest';
import { Card } from './card';
import { CommonField } from './commonField';
import { DeviceRenderOptions } from './deviceRenderOptions';
import { DonationRequest } from './donationRequest';
import { ExternalPlatform } from './externalPlatform';
import { ForexQuote } from './forexQuote';
import { FraudCheckResult } from './fraudCheckResult';
import { FraudCheckResultWrapper } from './fraudCheckResultWrapper';
import { FraudResult } from './fraudResult';
import { FundDestination } from './fundDestination';
import { FundSource } from './fundSource';
import { Installments } from './installments';
import { Mandate } from './mandate';
import { MerchantDevice } from './merchantDevice';
import { MerchantRiskIndicator } from './merchantRiskIndicator';
import { ModificationResult } from './modificationResult';
import { Name } from './name';
import { PaymentRequest } from './paymentRequest';
import { PaymentRequest3d } from './paymentRequest3d';
import { PaymentRequest3ds2 } from './paymentRequest3ds2';
import { PaymentResult } from './paymentResult';
import { Phone } from './phone';
import { PlatformChargebackLogic } from './platformChargebackLogic';
import { Recurring } from './recurring';
import { RefundRequest } from './refundRequest';
import { ResponseAdditionalData3DSecure } from './responseAdditionalData3DSecure';
import { ResponseAdditionalDataBillingAddress } from './responseAdditionalDataBillingAddress';
import { ResponseAdditionalDataCard } from './responseAdditionalDataCard';
import { ResponseAdditionalDataCommon } from './responseAdditionalDataCommon';
import { ResponseAdditionalDataDomesticError } from './responseAdditionalDataDomesticError';
import { ResponseAdditionalDataInstallments } from './responseAdditionalDataInstallments';
import { ResponseAdditionalDataNetworkTokens } from './responseAdditionalDataNetworkTokens';
import { ResponseAdditionalDataOpi } from './responseAdditionalDataOpi';
import { ResponseAdditionalDataSepa } from './responseAdditionalDataSepa';
import { SDKEphemPubKey } from './sDKEphemPubKey';
import { SecureRemoteCommerceCheckoutData } from './secureRemoteCommerceCheckoutData';
import { ServiceError } from './serviceError';
import { ShopperInteractionDevice } from './shopperInteractionDevice';
import { Split } from './split';
import { SplitAmount } from './splitAmount';
import { SubMerchant } from './subMerchant';
import { TechnicalCancelRequest } from './technicalCancelRequest';
import { ThreeDS1Result } from './threeDS1Result';
import { ThreeDS2RequestData } from './threeDS2RequestData';
import { ThreeDS2Result } from './threeDS2Result';
import { ThreeDS2ResultRequest } from './threeDS2ResultRequest';
import { ThreeDS2ResultResponse } from './threeDS2ResultResponse';
import { ThreeDSRequestorAuthenticationInfo } from './threeDSRequestorAuthenticationInfo';
import { ThreeDSRequestorPriorAuthenticationInfo } from './threeDSRequestorPriorAuthenticationInfo';
import { ThreeDSecureData } from './threeDSecureData';
import { VoidPendingRefundRequest } from './voidPendingRefundRequest';

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
        "AccountInfo.AccountAgeIndicatorEnum": AccountInfo.AccountAgeIndicatorEnum,
        "AccountInfo.AccountChangeIndicatorEnum": AccountInfo.AccountChangeIndicatorEnum,
        "AccountInfo.AccountTypeEnum": AccountInfo.AccountTypeEnum,
        "AccountInfo.DeliveryAddressUsageIndicatorEnum": AccountInfo.DeliveryAddressUsageIndicatorEnum,
        "AccountInfo.PasswordChangeIndicatorEnum": AccountInfo.PasswordChangeIndicatorEnum,
        "AccountInfo.PaymentAccountIndicatorEnum": AccountInfo.PaymentAccountIndicatorEnum,
        "AcctInfo.ChAccAgeIndEnum": AcctInfo.ChAccAgeIndEnum,
        "AcctInfo.ChAccChangeIndEnum": AcctInfo.ChAccChangeIndEnum,
        "AcctInfo.ChAccPwChangeIndEnum": AcctInfo.ChAccPwChangeIndEnum,
        "AcctInfo.PaymentAccIndEnum": AcctInfo.PaymentAccIndEnum,
        "AcctInfo.ShipAddressUsageIndEnum": AcctInfo.ShipAddressUsageIndEnum,
        "AcctInfo.ShipNameIndicatorEnum": AcctInfo.ShipNameIndicatorEnum,
        "AcctInfo.SuspiciousAccActivityEnum": AcctInfo.SuspiciousAccActivityEnum,
        "AdditionalData3DSecure.ChallengeWindowSizeEnum": AdditionalData3DSecure.ChallengeWindowSizeEnum,
        "AdditionalDataCommon.IndustryUsageEnum": AdditionalDataCommon.IndustryUsageEnum,
        "DeviceRenderOptions.SdkInterfaceEnum": DeviceRenderOptions.SdkInterfaceEnum,
        "DeviceRenderOptions.SdkUiTypeEnum": DeviceRenderOptions.SdkUiTypeEnum,
        "Installments.PlanEnum": Installments.PlanEnum,
        "Mandate.AmountRuleEnum": Mandate.AmountRuleEnum,
        "Mandate.BillingAttemptsRuleEnum": Mandate.BillingAttemptsRuleEnum,
        "Mandate.FrequencyEnum": Mandate.FrequencyEnum,
        "MerchantRiskIndicator.DeliveryAddressIndicatorEnum": MerchantRiskIndicator.DeliveryAddressIndicatorEnum,
        "MerchantRiskIndicator.DeliveryTimeframeEnum": MerchantRiskIndicator.DeliveryTimeframeEnum,
        "ModificationResult.ResponseEnum": ModificationResult.ResponseEnum,
        "PaymentRequest.EntityTypeEnum": PaymentRequest.EntityTypeEnum,
        "PaymentRequest.FundingSourceEnum": PaymentRequest.FundingSourceEnum,
        "PaymentRequest.RecurringProcessingModelEnum": PaymentRequest.RecurringProcessingModelEnum,
        "PaymentRequest.ShopperInteractionEnum": PaymentRequest.ShopperInteractionEnum,
        "PaymentRequest3d.RecurringProcessingModelEnum": PaymentRequest3d.RecurringProcessingModelEnum,
        "PaymentRequest3d.ShopperInteractionEnum": PaymentRequest3d.ShopperInteractionEnum,
        "PaymentRequest3ds2.RecurringProcessingModelEnum": PaymentRequest3ds2.RecurringProcessingModelEnum,
        "PaymentRequest3ds2.ShopperInteractionEnum": PaymentRequest3ds2.ShopperInteractionEnum,
        "PaymentResult.ResultCodeEnum": PaymentResult.ResultCodeEnum,
        "PlatformChargebackLogic.BehaviorEnum": PlatformChargebackLogic.BehaviorEnum,
        "Recurring.ContractEnum": Recurring.ContractEnum,
        "Recurring.TokenServiceEnum": Recurring.TokenServiceEnum,
        "ResponseAdditionalDataCard.CardProductIdEnum": ResponseAdditionalDataCard.CardProductIdEnum,
        "ResponseAdditionalDataCommon.FraudResultTypeEnum": ResponseAdditionalDataCommon.FraudResultTypeEnum,
        "ResponseAdditionalDataCommon.RecurringProcessingModelEnum": ResponseAdditionalDataCommon.RecurringProcessingModelEnum,
        "ResponseAdditionalDataCommon.TokenizationStoreOperationTypeEnum": ResponseAdditionalDataCommon.TokenizationStoreOperationTypeEnum,
        "SecureRemoteCommerceCheckoutData.SchemeEnum": SecureRemoteCommerceCheckoutData.SchemeEnum,
        "Split.TypeEnum": Split.TypeEnum,
        "ThreeDS2RequestData.AcctTypeEnum": ThreeDS2RequestData.AcctTypeEnum,
        "ThreeDS2RequestData.AddrMatchEnum": ThreeDS2RequestData.AddrMatchEnum,
        "ThreeDS2RequestData.ChallengeIndicatorEnum": ThreeDS2RequestData.ChallengeIndicatorEnum,
        "ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum": ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum,
        "ThreeDS2RequestData.TransTypeEnum": ThreeDS2RequestData.TransTypeEnum,
        "ThreeDS2RequestData.TransactionTypeEnum": ThreeDS2RequestData.TransactionTypeEnum,
        "ThreeDS2Result.ChallengeCancelEnum": ThreeDS2Result.ChallengeCancelEnum,
        "ThreeDS2Result.ExemptionIndicatorEnum": ThreeDS2Result.ExemptionIndicatorEnum,
        "ThreeDS2Result.ThreeDSRequestorChallengeIndEnum": ThreeDS2Result.ThreeDSRequestorChallengeIndEnum,
        "ThreeDSRequestorAuthenticationInfo.ThreeDSReqAuthMethodEnum": ThreeDSRequestorAuthenticationInfo.ThreeDSReqAuthMethodEnum,
        "ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum": ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum,
        "ThreeDSecureData.AuthenticationResponseEnum": ThreeDSecureData.AuthenticationResponseEnum,
        "ThreeDSecureData.ChallengeCancelEnum": ThreeDSecureData.ChallengeCancelEnum,
        "ThreeDSecureData.DirectoryResponseEnum": ThreeDSecureData.DirectoryResponseEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountInfo": AccountInfo,
    "AcctInfo": AcctInfo,
    "AdditionalData3DSecure": AdditionalData3DSecure,
    "AdditionalDataAirline": AdditionalDataAirline,
    "AdditionalDataCarRental": AdditionalDataCarRental,
    "AdditionalDataCommon": AdditionalDataCommon,
    "AdditionalDataLevel23": AdditionalDataLevel23,
    "AdditionalDataLodging": AdditionalDataLodging,
    "AdditionalDataModifications": AdditionalDataModifications,
    "AdditionalDataOpenInvoice": AdditionalDataOpenInvoice,
    "AdditionalDataOpi": AdditionalDataOpi,
    "AdditionalDataRatepay": AdditionalDataRatepay,
    "AdditionalDataRetry": AdditionalDataRetry,
    "AdditionalDataRisk": AdditionalDataRisk,
    "AdditionalDataRiskStandalone": AdditionalDataRiskStandalone,
    "AdditionalDataSubMerchant": AdditionalDataSubMerchant,
    "AdditionalDataTemporaryServices": AdditionalDataTemporaryServices,
    "AdditionalDataWallets": AdditionalDataWallets,
    "Address": Address,
    "AdjustAuthorisationRequest": AdjustAuthorisationRequest,
    "Amount": Amount,
    "ApplicationInfo": ApplicationInfo,
    "AuthenticationResultRequest": AuthenticationResultRequest,
    "AuthenticationResultResponse": AuthenticationResultResponse,
    "BankAccount": BankAccount,
    "BrowserInfo": BrowserInfo,
    "CancelOrRefundRequest": CancelOrRefundRequest,
    "CancelRequest": CancelRequest,
    "CaptureRequest": CaptureRequest,
    "Card": Card,
    "CommonField": CommonField,
    "DeviceRenderOptions": DeviceRenderOptions,
    "DonationRequest": DonationRequest,
    "ExternalPlatform": ExternalPlatform,
    "ForexQuote": ForexQuote,
    "FraudCheckResult": FraudCheckResult,
    "FraudCheckResultWrapper": FraudCheckResultWrapper,
    "FraudResult": FraudResult,
    "FundDestination": FundDestination,
    "FundSource": FundSource,
    "Installments": Installments,
    "Mandate": Mandate,
    "MerchantDevice": MerchantDevice,
    "MerchantRiskIndicator": MerchantRiskIndicator,
    "ModificationResult": ModificationResult,
    "Name": Name,
    "PaymentRequest": PaymentRequest,
    "PaymentRequest3d": PaymentRequest3d,
    "PaymentRequest3ds2": PaymentRequest3ds2,
    "PaymentResult": PaymentResult,
    "Phone": Phone,
    "PlatformChargebackLogic": PlatformChargebackLogic,
    "Recurring": Recurring,
    "RefundRequest": RefundRequest,
    "ResponseAdditionalData3DSecure": ResponseAdditionalData3DSecure,
    "ResponseAdditionalDataBillingAddress": ResponseAdditionalDataBillingAddress,
    "ResponseAdditionalDataCard": ResponseAdditionalDataCard,
    "ResponseAdditionalDataCommon": ResponseAdditionalDataCommon,
    "ResponseAdditionalDataDomesticError": ResponseAdditionalDataDomesticError,
    "ResponseAdditionalDataInstallments": ResponseAdditionalDataInstallments,
    "ResponseAdditionalDataNetworkTokens": ResponseAdditionalDataNetworkTokens,
    "ResponseAdditionalDataOpi": ResponseAdditionalDataOpi,
    "ResponseAdditionalDataSepa": ResponseAdditionalDataSepa,
    "SDKEphemPubKey": SDKEphemPubKey,
    "SecureRemoteCommerceCheckoutData": SecureRemoteCommerceCheckoutData,
    "ServiceError": ServiceError,
    "ShopperInteractionDevice": ShopperInteractionDevice,
    "Split": Split,
    "SplitAmount": SplitAmount,
    "SubMerchant": SubMerchant,
    "TechnicalCancelRequest": TechnicalCancelRequest,
    "ThreeDS1Result": ThreeDS1Result,
    "ThreeDS2RequestData": ThreeDS2RequestData,
    "ThreeDS2Result": ThreeDS2Result,
    "ThreeDS2ResultRequest": ThreeDS2ResultRequest,
    "ThreeDS2ResultResponse": ThreeDS2ResultResponse,
    "ThreeDSRequestorAuthenticationInfo": ThreeDSRequestorAuthenticationInfo,
    "ThreeDSRequestorPriorAuthenticationInfo": ThreeDSRequestorPriorAuthenticationInfo,
    "ThreeDSecureData": ThreeDSecureData,
    "VoidPendingRefundRequest": VoidPendingRefundRequest,
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

export * from "./models";

import { AccountInfo } from "./accountInfo";
import { AcctInfo } from "./acctInfo";
import { AdditionalData3DSecure } from "./additionalData3DSecure";
import { AdditionalDataAirline } from "./additionalDataAirline";
import { AdditionalDataCarRental } from "./additionalDataCarRental";
import { AdditionalDataCommon } from "./additionalDataCommon";
import { AdditionalDataLevel23 } from "./additionalDataLevel23";
import { AdditionalDataLodging } from "./additionalDataLodging";
import { AdditionalDataModifications } from "./additionalDataModifications";
import { AdditionalDataOpenInvoice } from "./additionalDataOpenInvoice";
import { AdditionalDataOpi } from "./additionalDataOpi";
import { AdditionalDataRatepay } from "./additionalDataRatepay";
import { AdditionalDataRetry } from "./additionalDataRetry";
import { AdditionalDataRisk } from "./additionalDataRisk";
import { AdditionalDataRiskStandalone } from "./additionalDataRiskStandalone";
import { AdditionalDataSubMerchant } from "./additionalDataSubMerchant";
import { AdditionalDataTemporaryServices } from "./additionalDataTemporaryServices";
import { AdditionalDataWallets } from "./additionalDataWallets";
import { Address } from "./address";
import { AdjustAuthorisationRequest } from "./adjustAuthorisationRequest";
import { Amount } from "./amount";
import { ApplicationInfo } from "./applicationInfo";
import { AuthenticationResultRequest } from "./authenticationResultRequest";
import { AuthenticationResultResponse } from "./authenticationResultResponse";
import { BankAccount } from "./bankAccount";
import { BrowserInfo } from "./browserInfo";
import { CancelOrRefundRequest } from "./cancelOrRefundRequest";
import { CancelRequest } from "./cancelRequest";
import { CaptureRequest } from "./captureRequest";
import { Card } from "./card";
import { CommonField } from "./commonField";
import { DeviceRenderOptions } from "./deviceRenderOptions";
import { DonationRequest } from "./donationRequest";
import { ExternalPlatform } from "./externalPlatform";
import { ForexQuote } from "./forexQuote";
import { FraudCheckResult } from "./fraudCheckResult";
import { FraudCheckResultWrapper } from "./fraudCheckResultWrapper";
import { FraudResult } from "./fraudResult";
import { FundDestination } from "./fundDestination";
import { FundSource } from "./fundSource";
import { Installments } from "./installments";
import { Mandate } from "./mandate";
import { MerchantDevice } from "./merchantDevice";
import { MerchantRiskIndicator } from "./merchantRiskIndicator";
import { ModificationResult } from "./modificationResult";
import { Name } from "./name";
import { PaymentRequest } from "./paymentRequest";
import { PaymentRequest3d } from "./paymentRequest3d";
import { PaymentRequest3ds2 } from "./paymentRequest3ds2";
import { PaymentResult } from "./paymentResult";
import { Phone } from "./phone";
import { PlatformChargebackLogic } from "./platformChargebackLogic";
import { Recurring } from "./recurring";
import { RefundRequest } from "./refundRequest";
import { ResponseAdditionalData3DSecure } from "./responseAdditionalData3DSecure";
import { ResponseAdditionalDataBillingAddress } from "./responseAdditionalDataBillingAddress";
import { ResponseAdditionalDataCard } from "./responseAdditionalDataCard";
import { ResponseAdditionalDataCommon } from "./responseAdditionalDataCommon";
import { ResponseAdditionalDataDomesticError } from "./responseAdditionalDataDomesticError";
import { ResponseAdditionalDataInstallments } from "./responseAdditionalDataInstallments";
import { ResponseAdditionalDataNetworkTokens } from "./responseAdditionalDataNetworkTokens";
import { ResponseAdditionalDataOpi } from "./responseAdditionalDataOpi";
import { ResponseAdditionalDataSepa } from "./responseAdditionalDataSepa";
import { SDKEphemPubKey } from "./sDKEphemPubKey";
import { SecureRemoteCommerceCheckoutData } from "./secureRemoteCommerceCheckoutData";
import { ServiceError } from "./serviceError";
import { ShopperInteractionDevice } from "./shopperInteractionDevice";
import { Split } from "./split";
import { SplitAmount } from "./splitAmount";
import { SubMerchant } from "./subMerchant";
import { TechnicalCancelRequest } from "./technicalCancelRequest";
import { ThreeDS1Result } from "./threeDS1Result";
import { ThreeDS2RequestData } from "./threeDS2RequestData";
import { ThreeDS2Result } from "./threeDS2Result";
import { ThreeDS2ResultRequest } from "./threeDS2ResultRequest";
import { ThreeDS2ResultResponse } from "./threeDS2ResultResponse";
import { ThreeDSRequestorAuthenticationInfo } from "./threeDSRequestorAuthenticationInfo";
import { ThreeDSRequestorPriorAuthenticationInfo } from "./threeDSRequestorPriorAuthenticationInfo";
import { ThreeDSecureData } from "./threeDSecureData";
import { VoidPendingRefundRequest } from "./voidPendingRefundRequest";

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

let enumsMap: Set<string> = new Set<string>([
    "AccountInfo.AccountAgeIndicatorEnum",
    "AccountInfo.AccountChangeIndicatorEnum",
    "AccountInfo.AccountTypeEnum",
    "AccountInfo.DeliveryAddressUsageIndicatorEnum",
    "AccountInfo.PasswordChangeIndicatorEnum",
    "AccountInfo.PaymentAccountIndicatorEnum",
    "AcctInfo.ChAccAgeIndEnum",
    "AcctInfo.ChAccChangeIndEnum",
    "AcctInfo.ChAccPwChangeIndEnum",
    "AcctInfo.PaymentAccIndEnum",
    "AcctInfo.ShipAddressUsageIndEnum",
    "AcctInfo.ShipNameIndicatorEnum",
    "AcctInfo.SuspiciousAccActivityEnum",
    "AdditionalData3DSecure.ChallengeWindowSizeEnum",
    "AdditionalDataCommon.IndustryUsageEnum",
    "DeviceRenderOptions.SdkInterfaceEnum",
    "DeviceRenderOptions.SdkUiTypeEnum",
    "Installments.PlanEnum",
    "Mandate.AmountRuleEnum",
    "Mandate.BillingAttemptsRuleEnum",
    "Mandate.FrequencyEnum",
    "MerchantRiskIndicator.DeliveryAddressIndicatorEnum",
    "MerchantRiskIndicator.DeliveryTimeframeEnum",
    "ModificationResult.ResponseEnum",
    "PaymentRequest.EntityTypeEnum",
    "PaymentRequest.FundingSourceEnum",
    "PaymentRequest.RecurringProcessingModelEnum",
    "PaymentRequest.ShopperInteractionEnum",
    "PaymentRequest3d.RecurringProcessingModelEnum",
    "PaymentRequest3d.ShopperInteractionEnum",
    "PaymentRequest3ds2.RecurringProcessingModelEnum",
    "PaymentRequest3ds2.ShopperInteractionEnum",
    "PaymentResult.ResultCodeEnum",
    "PlatformChargebackLogic.BehaviorEnum",
    "Recurring.ContractEnum",
    "Recurring.TokenServiceEnum",
    "ResponseAdditionalDataCard.CardProductIdEnum",
    "ResponseAdditionalDataCommon.FraudResultTypeEnum",
    "ResponseAdditionalDataCommon.FraudRiskLevelEnum",
    "ResponseAdditionalDataCommon.RecurringProcessingModelEnum",
    "ResponseAdditionalDataCommon.TokenizationStoreOperationTypeEnum",
    "SecureRemoteCommerceCheckoutData.SchemeEnum",
    "Split.TypeEnum",
    "ThreeDS2RequestData.AcctTypeEnum",
    "ThreeDS2RequestData.AddrMatchEnum",
    "ThreeDS2RequestData.ChallengeIndicatorEnum",
    "ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum",
    "ThreeDS2RequestData.TransTypeEnum",
    "ThreeDS2RequestData.TransactionTypeEnum",
    "ThreeDS2Result.ChallengeCancelEnum",
    "ThreeDS2Result.ExemptionIndicatorEnum",
    "ThreeDS2Result.ThreeDSRequestorChallengeIndEnum",
    "ThreeDSRequestorAuthenticationInfo.ThreeDSReqAuthMethodEnum",
    "ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum",
    "ThreeDSecureData.AuthenticationResponseEnum",
    "ThreeDSecureData.ChallengeCancelEnum",
    "ThreeDSecureData.DirectoryResponseEnum",
]);

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

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

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
            if (enumsMap.has(expectedType)) {
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
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    /**
     * Serializes a value into a plain JSON-compatible object based on its type.
     *
     * Supports primitives, arrays, maps, dates, enums, and classes defined in `typeMap`.
     * Falls back to raw data if type is unknown or lacks `getAttributeTypeMap()`.
     *
     * @param data - The value to serialize.
     * @param type - The expected type name as a string.
     * @param format - Format hint (e.g. "date" or "date-time").
     * @returns A JSON-compatible representation of `data`.
     */
    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            const clazz = typeMap[type];

            // Safe check for getAttributeTypeMap
            if (typeof clazz.getAttributeTypeMap !== "function") {
                return { ...data }; // fallback: shallow copy
            }

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    /**
     * Deserializes a plain JSON-compatible object into a typed instance.
     *
     * Handles primitives, arrays, maps, dates, enums, and known classes from `typeMap`.
     * Uses discriminators when available to resolve polymorphic types.
     * Falls back to raw data if the type is unknown or lacks `getAttributeTypeMap()`.
     *
     * @param data - The raw input to deserialize.
     * @param type - The expected type name as a string.
     * @param format - Format hint (e.g. "date" or "date-time").
     * @returns A deserialized instance or value of `data`.
     */
    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();

            // Safe check for getAttributeTypeMap
            if (typeof typeMap[type].getAttributeTypeMap !== "function") {
                Object.assign(instance, data); // fallback: shallow copy
                return instance;
            }

            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}

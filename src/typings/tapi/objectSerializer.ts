export * from "./models";

import { AbortRequest } from "./abortRequest";
import { AdminRequest } from "./adminRequest";
import { AdminResponse } from "./adminResponse";
import { AmountsReq } from "./amountsReq";
import { AmountsResp } from "./amountsResp";
import { AreaSize } from "./areaSize";
import { BalanceInquiryRequest } from "./balanceInquiryRequest";
import { BalanceInquiryResponse } from "./balanceInquiryResponse";
import { CapturedSignature } from "./capturedSignature";
import { CardAcquisitionRequest } from "./cardAcquisitionRequest";
import { CardAcquisitionResponse } from "./cardAcquisitionResponse";
import { CardAcquisitionTransaction } from "./cardAcquisitionTransaction";
import { CardData } from "./cardData";
import { CardHolderPIN } from "./cardHolderPIN";
import { CardReaderAPDURequest } from "./cardReaderAPDURequest";
import { CardReaderAPDUResponse } from "./cardReaderAPDUResponse";
import { CheckData } from "./checkData";
import { ConvertedAmount } from "./convertedAmount";
import { CurrencyConversion } from "./currencyConversion";
import { DiagnosisRequest } from "./diagnosisRequest";
import { DiagnosisResponse } from "./diagnosisResponse";
import { DisplayOutput } from "./displayOutput";
import { DisplayRequest } from "./displayRequest";
import { DisplayResponse } from "./displayResponse";
import { EnableServiceRequest } from "./enableServiceRequest";
import { EnableServiceResponse } from "./enableServiceResponse";
import { EventNotification } from "./eventNotification";
import { GeographicCoordinates } from "./geographicCoordinates";
import { Geolocation } from "./geolocation";
import { GetTotalsRequest } from "./getTotalsRequest";
import { GetTotalsResponse } from "./getTotalsResponse";
import { HostStatus } from "./hostStatus";
import { ICCResetData } from "./iCCResetData";
import { Input } from "./input";
import { InputData } from "./inputData";
import { InputRequest } from "./inputRequest";
import { InputResponse } from "./inputResponse";
import { InputResult } from "./inputResult";
import { InputUpdate } from "./inputUpdate";
import { Instalment } from "./instalment";
import { LoginRequest } from "./loginRequest";
import { LoginResponse } from "./loginResponse";
import { LogoutRequest } from "./logoutRequest";
import { LogoutResponse } from "./logoutResponse";
import { LoyaltyAccount } from "./loyaltyAccount";
import { LoyaltyAccountID } from "./loyaltyAccountID";
import { LoyaltyAccountReq } from "./loyaltyAccountReq";
import { LoyaltyAcquirerData } from "./loyaltyAcquirerData";
import { LoyaltyData } from "./loyaltyData";
import { LoyaltyResponse } from "./loyaltyResponse";
import { LoyaltyResult } from "./loyaltyResult";
import { MenuEntry } from "./menuEntry";
import { MessageHeader } from "./messageHeader";
import { MessageReference } from "./messageReference";
import { MobileData } from "./mobileData";
import { OriginalPOITransaction } from "./originalPOITransaction";
import { OutputBarcode } from "./outputBarcode";
import { OutputContent } from "./outputContent";
import { OutputResult } from "./outputResult";
import { OutputText } from "./outputText";
import { POIData } from "./pOIData";
import { POISoftware } from "./pOISoftware";
import { POIStatus } from "./pOIStatus";
import { POISystemData } from "./pOISystemData";
import { PaymentAccountReq } from "./paymentAccountReq";
import { PaymentAccountStatus } from "./paymentAccountStatus";
import { PaymentAcquirerData } from "./paymentAcquirerData";
import { PaymentData } from "./paymentData";
import { PaymentInstrumentData } from "./paymentInstrumentData";
import { PaymentReceipt } from "./paymentReceipt";
import { PaymentRequest } from "./paymentRequest";
import { PaymentResponse } from "./paymentResponse";
import { PaymentResult } from "./paymentResult";
import { PaymentToken } from "./paymentToken";
import { PaymentTotals } from "./paymentTotals";
import { PaymentTransaction } from "./paymentTransaction";
import { PerformedTransaction } from "./performedTransaction";
import { Point } from "./point";
import { PredefinedContent } from "./predefinedContent";
import { PrintOutput } from "./printOutput";
import { PrintRequest } from "./printRequest";
import { PrintResponse } from "./printResponse";
import { ReconciliationRequest } from "./reconciliationRequest";
import { ReconciliationResponse } from "./reconciliationResponse";
import { RepeatedMessageResponse } from "./repeatedMessageResponse";
import { RepeatedResponseMessageBody } from "./repeatedResponseMessageBody";
import { Response } from "./response";
import { ReversalRequest } from "./reversalRequest";
import { ReversalResponse } from "./reversalResponse";
import { SaleData } from "./saleData";
import { SaleSoftware } from "./saleSoftware";
import { SaleTerminalData } from "./saleTerminalData";
import { SaleToIssuerData } from "./saleToIssuerData";
import { SaleToPOIRequest } from "./saleToPOIRequest";
import { SaleToPOIResponse } from "./saleToPOIResponse";
import { SecurityTrailer } from "./securityTrailer";
import { SensitiveCardData } from "./sensitiveCardData";
import { SensitiveMobileData } from "./sensitiveMobileData";
import { SoundContent } from "./soundContent";
import { StoredValueAccountID } from "./storedValueAccountID";
import { StoredValueAccountStatus } from "./storedValueAccountStatus";
import { StoredValueData } from "./storedValueData";
import { StoredValueRequest } from "./storedValueRequest";
import { StoredValueResponse } from "./storedValueResponse";
import { StoredValueResult } from "./storedValueResult";
import { TerminalAPIRequest } from "./terminalAPIRequest";
import { TerminalAPIResponse } from "./terminalAPIResponse";
import { TotalFilter } from "./totalFilter";
import { TrackData } from "./trackData";
import { TransactionConditions } from "./transactionConditions";
import { TransactionIDType } from "./transactionIDType";
import { TransactionStatusRequest } from "./transactionStatusRequest";
import { TransactionStatusResponse } from "./transactionStatusResponse";
import { TransactionTotals } from "./transactionTotals";
import { UTMCoordinates } from "./uTMCoordinates";

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
    "AccountType",
    "Alignment",
    "CardAcquisitionTransaction.ForceEntryModeEnum",
    "CardData.EntryModeEnum",
    "CharacterHeight",
    "CharacterStyle",
    "CharacterWidth",
    "Device",
    "DocumentQualifier",
    "EnableServiceRequest.ServicesEnabledEnum",
    "ErrorCondition",
    "EventToNotify",
    "GetTotalsRequest.TotalDetailsEnum",
    "GlobalStatus",
    "IdentificationSupport",
    "IdentificationType",
    "InfoQualify",
    "InputCommand",
    "InstalmentType",
    "LoginRequest.CustomerOrderReqEnum",
    "LoyaltyAccountID.EntryModeEnum",
    "LoyaltyHandling",
    "MenuEntryTag",
    "MessageCategory",
    "MessageClass",
    "MessageType",
    "OutputFormat",
    "PINFormat",
    "PINRequestType",
    "PaymentInstrumentType",
    "PaymentResult.AuthenticationMethodEnum",
    "PaymentType",
    "PeriodUnit",
    "PrinterStatus",
    "ReconciliationType",
    "ResponseMode",
    "Result",
    "ReversalReason",
    "SaleData.CustomerOrderReqEnum",
    "SoundAction",
    "SoundFormat",
    "StoredValueAccountID.EntryModeEnum",
    "StoredValueAccountType",
    "StoredValueTransactionType",
    "TokenRequestedType",
    "TrackFormat",
    "TransactionAction",
    "TransactionConditions.ForceEntryModeEnum",
    "TransactionType",
    "TypeCode",
]);

let typeMap: {[index: string]: any} = {
    "AbortRequest": AbortRequest,
    "AdminRequest": AdminRequest,
    "AdminResponse": AdminResponse,
    "AmountsReq": AmountsReq,
    "AmountsResp": AmountsResp,
    "AreaSize": AreaSize,
    "BalanceInquiryRequest": BalanceInquiryRequest,
    "BalanceInquiryResponse": BalanceInquiryResponse,
    "CapturedSignature": CapturedSignature,
    "CardAcquisitionRequest": CardAcquisitionRequest,
    "CardAcquisitionResponse": CardAcquisitionResponse,
    "CardAcquisitionTransaction": CardAcquisitionTransaction,
    "CardData": CardData,
    "CardHolderPIN": CardHolderPIN,
    "CardReaderAPDURequest": CardReaderAPDURequest,
    "CardReaderAPDUResponse": CardReaderAPDUResponse,
    "CheckData": CheckData,
    "ConvertedAmount": ConvertedAmount,
    "CurrencyConversion": CurrencyConversion,
    "DiagnosisRequest": DiagnosisRequest,
    "DiagnosisResponse": DiagnosisResponse,
    "DisplayOutput": DisplayOutput,
    "DisplayRequest": DisplayRequest,
    "DisplayResponse": DisplayResponse,
    "EnableServiceRequest": EnableServiceRequest,
    "EnableServiceResponse": EnableServiceResponse,
    "EventNotification": EventNotification,
    "GeographicCoordinates": GeographicCoordinates,
    "Geolocation": Geolocation,
    "GetTotalsRequest": GetTotalsRequest,
    "GetTotalsResponse": GetTotalsResponse,
    "HostStatus": HostStatus,
    "ICCResetData": ICCResetData,
    "Input": Input,
    "InputData": InputData,
    "InputRequest": InputRequest,
    "InputResponse": InputResponse,
    "InputResult": InputResult,
    "InputUpdate": InputUpdate,
    "Instalment": Instalment,
    "LoginRequest": LoginRequest,
    "LoginResponse": LoginResponse,
    "LogoutRequest": LogoutRequest,
    "LogoutResponse": LogoutResponse,
    "LoyaltyAccount": LoyaltyAccount,
    "LoyaltyAccountID": LoyaltyAccountID,
    "LoyaltyAccountReq": LoyaltyAccountReq,
    "LoyaltyAcquirerData": LoyaltyAcquirerData,
    "LoyaltyData": LoyaltyData,
    "LoyaltyResponse": LoyaltyResponse,
    "LoyaltyResult": LoyaltyResult,
    "MenuEntry": MenuEntry,
    "MessageHeader": MessageHeader,
    "MessageReference": MessageReference,
    "MobileData": MobileData,
    "OriginalPOITransaction": OriginalPOITransaction,
    "OutputBarcode": OutputBarcode,
    "OutputContent": OutputContent,
    "OutputResult": OutputResult,
    "OutputText": OutputText,
    "POIData": POIData,
    "POISoftware": POISoftware,
    "POIStatus": POIStatus,
    "POISystemData": POISystemData,
    "PaymentAccountReq": PaymentAccountReq,
    "PaymentAccountStatus": PaymentAccountStatus,
    "PaymentAcquirerData": PaymentAcquirerData,
    "PaymentData": PaymentData,
    "PaymentInstrumentData": PaymentInstrumentData,
    "PaymentReceipt": PaymentReceipt,
    "PaymentRequest": PaymentRequest,
    "PaymentResponse": PaymentResponse,
    "PaymentResult": PaymentResult,
    "PaymentToken": PaymentToken,
    "PaymentTotals": PaymentTotals,
    "PaymentTransaction": PaymentTransaction,
    "PerformedTransaction": PerformedTransaction,
    "Point": Point,
    "PredefinedContent": PredefinedContent,
    "PrintOutput": PrintOutput,
    "PrintRequest": PrintRequest,
    "PrintResponse": PrintResponse,
    "ReconciliationRequest": ReconciliationRequest,
    "ReconciliationResponse": ReconciliationResponse,
    "RepeatedMessageResponse": RepeatedMessageResponse,
    "RepeatedResponseMessageBody": RepeatedResponseMessageBody,
    "Response": Response,
    "ReversalRequest": ReversalRequest,
    "ReversalResponse": ReversalResponse,
    "SaleData": SaleData,
    "SaleSoftware": SaleSoftware,
    "SaleTerminalData": SaleTerminalData,
    "SaleToIssuerData": SaleToIssuerData,
    "SaleToPOIRequest": SaleToPOIRequest,
    "SaleToPOIResponse": SaleToPOIResponse,
    "SecurityTrailer": SecurityTrailer,
    "SensitiveCardData": SensitiveCardData,
    "SensitiveMobileData": SensitiveMobileData,
    "SoundContent": SoundContent,
    "StoredValueAccountID": StoredValueAccountID,
    "StoredValueAccountStatus": StoredValueAccountStatus,
    "StoredValueData": StoredValueData,
    "StoredValueRequest": StoredValueRequest,
    "StoredValueResponse": StoredValueResponse,
    "StoredValueResult": StoredValueResult,
    "TerminalAPIRequest": TerminalAPIRequest,
    "TerminalAPIResponse": TerminalAPIResponse,
    "TotalFilter": TotalFilter,
    "TrackData": TrackData,
    "TransactionConditions": TransactionConditions,
    "TransactionIDType": TransactionIDType,
    "TransactionStatusRequest": TransactionStatusRequest,
    "TransactionStatusResponse": TransactionStatusResponse,
    "TransactionTotals": TransactionTotals,
    "UTMCoordinates": UTMCoordinates,
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
const setPrefix = "Set<";
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
     * @param format - Format hint (e.g. "date" or "date-time"). Default is an empty string.
     * @returns A JSON-compatible representation of `data`.
     */
    public static serialize(data: any, type: string, format: string = ""): any {
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
        } else if (type.startsWith(setPrefix)) {
            let subType: string = type.slice(setPrefix.length, -arraySuffix.length); // Set<Type> => Type
            let transformedData: any[] = [];
            for (let item of data) {
                transformedData.push(ObjectSerializer.serialize(item, subType, format));
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
     * @param format - Format hint (e.g. "date" or "date-time"). Default is an empty string.
     * @returns A deserialized instance or value of `data`.
     */
    public static deserialize(data: any, type: string, format: string = ""): any {
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
        } else if (type.startsWith(setPrefix)) {
            let subType: string = type.slice(setPrefix.length, -arraySuffix.length); // Set<Type> => Type
            let transformedData = new Set<any>();
            for (let item of data) {
                transformedData.add(ObjectSerializer.deserialize(item, subType, format));
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

export * from "./models";

import { AULocalAccountIdentification } from "./aULocalAccountIdentification";
import { AcceptTermsOfServiceRequest } from "./acceptTermsOfServiceRequest";
import { AcceptTermsOfServiceResponse } from "./acceptTermsOfServiceResponse";
import { AdditionalBankIdentification } from "./additionalBankIdentification";
import { Address } from "./address";
import { Amount } from "./amount";
import { Attachment } from "./attachment";
import { BankAccountInfo } from "./bankAccountInfo";
import { BankAccountInfoAccountIdentificationClass } from "./bankAccountInfoAccountIdentification";
import { BirthData } from "./birthData";
import { BusinessLine } from "./businessLine";
import { BusinessLineInfo } from "./businessLineInfo";
import { BusinessLineInfoUpdate } from "./businessLineInfoUpdate";
import { BusinessLines } from "./businessLines";
import { CALocalAccountIdentification } from "./cALocalAccountIdentification";
import { CZLocalAccountIdentification } from "./cZLocalAccountIdentification";
import { CalculatePciStatusRequest } from "./calculatePciStatusRequest";
import { CalculatePciStatusResponse } from "./calculatePciStatusResponse";
import { CalculateTermsOfServiceStatusResponse } from "./calculateTermsOfServiceStatusResponse";
import { CapabilityProblem } from "./capabilityProblem";
import { CapabilityProblemEntity } from "./capabilityProblemEntity";
import { CapabilityProblemEntityRecursive } from "./capabilityProblemEntityRecursive";
import { CapabilitySettings } from "./capabilitySettings";
import { CheckTaxElectronicDeliveryConsentResponse } from "./checkTaxElectronicDeliveryConsentResponse";
import { DKLocalAccountIdentification } from "./dKLocalAccountIdentification";
import { DataReviewConfirmationResponse } from "./dataReviewConfirmationResponse";
import { Document } from "./document";
import { DocumentPage } from "./documentPage";
import { DocumentReference } from "./documentReference";
import { EntityReference } from "./entityReference";
import { FinancialReport } from "./financialReport";
import { GeneratePciDescriptionRequest } from "./generatePciDescriptionRequest";
import { GeneratePciDescriptionResponse } from "./generatePciDescriptionResponse";
import { GetAcceptedTermsOfServiceDocumentResponse } from "./getAcceptedTermsOfServiceDocumentResponse";
import { GetPciQuestionnaireInfosResponse } from "./getPciQuestionnaireInfosResponse";
import { GetPciQuestionnaireResponse } from "./getPciQuestionnaireResponse";
import { GetTermsOfServiceAcceptanceInfosResponse } from "./getTermsOfServiceAcceptanceInfosResponse";
import { GetTermsOfServiceDocumentRequest } from "./getTermsOfServiceDocumentRequest";
import { GetTermsOfServiceDocumentResponse } from "./getTermsOfServiceDocumentResponse";
import { HKLocalAccountIdentification } from "./hKLocalAccountIdentification";
import { HULocalAccountIdentification } from "./hULocalAccountIdentification";
import { IbanAccountIdentification } from "./ibanAccountIdentification";
import { IdentificationData } from "./identificationData";
import { Individual } from "./individual";
import { LegalEntity } from "./legalEntity";
import { LegalEntityAssociation } from "./legalEntityAssociation";
import { LegalEntityCapability } from "./legalEntityCapability";
import { LegalEntityInfo } from "./legalEntityInfo";
import { LegalEntityInfoRequiredType } from "./legalEntityInfoRequiredType";
import { NOLocalAccountIdentification } from "./nOLocalAccountIdentification";
import { NZLocalAccountIdentification } from "./nZLocalAccountIdentification";
import { Name } from "./name";
import { NumberAndBicAccountIdentification } from "./numberAndBicAccountIdentification";
import { OnboardingLink } from "./onboardingLink";
import { OnboardingLinkInfo } from "./onboardingLinkInfo";
import { OnboardingLinkSettings } from "./onboardingLinkSettings";
import { OnboardingTheme } from "./onboardingTheme";
import { OnboardingThemes } from "./onboardingThemes";
import { Organization } from "./organization";
import { OwnerEntity } from "./ownerEntity";
import { PLLocalAccountIdentification } from "./pLLocalAccountIdentification";
import { PciDocumentInfo } from "./pciDocumentInfo";
import { PciSigningRequest } from "./pciSigningRequest";
import { PciSigningResponse } from "./pciSigningResponse";
import { PhoneNumber } from "./phoneNumber";
import { RemediatingAction } from "./remediatingAction";
import { SELocalAccountIdentification } from "./sELocalAccountIdentification";
import { SGLocalAccountIdentification } from "./sGLocalAccountIdentification";
import { ServiceError } from "./serviceError";
import { SetTaxElectronicDeliveryConsentRequest } from "./setTaxElectronicDeliveryConsentRequest";
import { SoleProprietorship } from "./soleProprietorship";
import { SourceOfFunds } from "./sourceOfFunds";
import { StockData } from "./stockData";
import { SupportingEntityCapability } from "./supportingEntityCapability";
import { TaxInformation } from "./taxInformation";
import { TaxReportingClassification } from "./taxReportingClassification";
import { TermsOfServiceAcceptanceInfo } from "./termsOfServiceAcceptanceInfo";
import { TransferInstrument } from "./transferInstrument";
import { TransferInstrumentInfo } from "./transferInstrumentInfo";
import { TransferInstrumentReference } from "./transferInstrumentReference";
import { Trust } from "./trust";
import { UKLocalAccountIdentification } from "./uKLocalAccountIdentification";
import { USLocalAccountIdentification } from "./uSLocalAccountIdentification";
import { UndefinedBeneficiary } from "./undefinedBeneficiary";
import { UnincorporatedPartnership } from "./unincorporatedPartnership";
import { VerificationDeadline } from "./verificationDeadline";
import { VerificationError } from "./verificationError";
import { VerificationErrorRecursive } from "./verificationErrorRecursive";
import { VerificationErrors } from "./verificationErrors";
import { WebData } from "./webData";
import { WebDataExemption } from "./webDataExemption";

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
    "AULocalAccountIdentification.TypeEnum",
    "AcceptTermsOfServiceResponse.TypeEnum",
    "AdditionalBankIdentification.TypeEnum",
    "BankAccountInfoAccountIdentification.TypeEnum",
    "BankAccountInfoAccountIdentification.AccountTypeEnum",
    "BusinessLine.CapabilityEnum",
    "BusinessLine.ServiceEnum",
    "BusinessLineInfo.CapabilityEnum",
    "BusinessLineInfo.ServiceEnum",
    "CALocalAccountIdentification.AccountTypeEnum",
    "CALocalAccountIdentification.TypeEnum",
    "CZLocalAccountIdentification.TypeEnum",
    "CalculatePciStatusRequest.AdditionalSalesChannelsEnum",
    "CalculateTermsOfServiceStatusResponse.TermsOfServiceTypesEnum",
    "CapabilityProblemEntity.TypeEnum",
    "CapabilityProblemEntityRecursive.TypeEnum",
    "CapabilitySettings.FundingSourceEnum",
    "CapabilitySettings.IntervalEnum",
    "DKLocalAccountIdentification.TypeEnum",
    "Document.TypeEnum",
    "DocumentPage.TypeEnum",
    "GeneratePciDescriptionRequest.AdditionalSalesChannelsEnum",
    "GetAcceptedTermsOfServiceDocumentResponse.TermsOfServiceDocumentFormatEnum",
    "GetTermsOfServiceDocumentRequest.TypeEnum",
    "GetTermsOfServiceDocumentResponse.TypeEnum",
    "HKLocalAccountIdentification.TypeEnum",
    "HULocalAccountIdentification.TypeEnum",
    "IbanAccountIdentification.TypeEnum",
    "IdentificationData.TypeEnum",
    "LegalEntity.TypeEnum",
    "LegalEntityAssociation.TypeEnum",
    "LegalEntityCapability.AllowedLevelEnum",
    "LegalEntityCapability.RequestedLevelEnum",
    "LegalEntityInfo.TypeEnum",
    "LegalEntityInfoRequiredType.TypeEnum",
    "NOLocalAccountIdentification.TypeEnum",
    "NZLocalAccountIdentification.TypeEnum",
    "NumberAndBicAccountIdentification.TypeEnum",
    "Organization.TypeEnum",
    "Organization.VatAbsenceReasonEnum",
    "PLLocalAccountIdentification.TypeEnum",
    "SELocalAccountIdentification.TypeEnum",
    "SGLocalAccountIdentification.TypeEnum",
    "SoleProprietorship.VatAbsenceReasonEnum",
    "SourceOfFunds.TypeEnum",
    "TaxReportingClassification.BusinessTypeEnum",
    "TaxReportingClassification.MainSourceOfIncomeEnum",
    "TaxReportingClassification.TypeEnum",
    "TermsOfServiceAcceptanceInfo.TypeEnum",
    "TransferInstrument.TypeEnum",
    "TransferInstrumentInfo.TypeEnum",
    "Trust.TypeEnum",
    "Trust.VatAbsenceReasonEnum",
    "UKLocalAccountIdentification.TypeEnum",
    "USLocalAccountIdentification.AccountTypeEnum",
    "USLocalAccountIdentification.TypeEnum",
    "UnincorporatedPartnership.TypeEnum",
    "UnincorporatedPartnership.VatAbsenceReasonEnum",
    "VerificationDeadline.CapabilitiesEnum",
    "VerificationError.CapabilitiesEnum",
    "VerificationError.TypeEnum",
    "VerificationErrorRecursive.CapabilitiesEnum",
    "VerificationErrorRecursive.TypeEnum",
    "WebDataExemption.ReasonEnum",
]);

let typeMap: {[index: string]: any} = {
    "AULocalAccountIdentification": AULocalAccountIdentification,
    "AcceptTermsOfServiceRequest": AcceptTermsOfServiceRequest,
    "AcceptTermsOfServiceResponse": AcceptTermsOfServiceResponse,
    "AdditionalBankIdentification": AdditionalBankIdentification,
    "Address": Address,
    "Amount": Amount,
    "Attachment": Attachment,
    "BankAccountInfo": BankAccountInfo,
    "BankAccountInfoAccountIdentification": BankAccountInfoAccountIdentificationClass,
    "BirthData": BirthData,
    "BusinessLine": BusinessLine,
    "BusinessLineInfo": BusinessLineInfo,
    "BusinessLineInfoUpdate": BusinessLineInfoUpdate,
    "BusinessLines": BusinessLines,
    "CALocalAccountIdentification": CALocalAccountIdentification,
    "CZLocalAccountIdentification": CZLocalAccountIdentification,
    "CalculatePciStatusRequest": CalculatePciStatusRequest,
    "CalculatePciStatusResponse": CalculatePciStatusResponse,
    "CalculateTermsOfServiceStatusResponse": CalculateTermsOfServiceStatusResponse,
    "CapabilityProblem": CapabilityProblem,
    "CapabilityProblemEntity": CapabilityProblemEntity,
    "CapabilityProblemEntityRecursive": CapabilityProblemEntityRecursive,
    "CapabilitySettings": CapabilitySettings,
    "CheckTaxElectronicDeliveryConsentResponse": CheckTaxElectronicDeliveryConsentResponse,
    "DKLocalAccountIdentification": DKLocalAccountIdentification,
    "DataReviewConfirmationResponse": DataReviewConfirmationResponse,
    "Document": Document,
    "DocumentPage": DocumentPage,
    "DocumentReference": DocumentReference,
    "EntityReference": EntityReference,
    "FinancialReport": FinancialReport,
    "GeneratePciDescriptionRequest": GeneratePciDescriptionRequest,
    "GeneratePciDescriptionResponse": GeneratePciDescriptionResponse,
    "GetAcceptedTermsOfServiceDocumentResponse": GetAcceptedTermsOfServiceDocumentResponse,
    "GetPciQuestionnaireInfosResponse": GetPciQuestionnaireInfosResponse,
    "GetPciQuestionnaireResponse": GetPciQuestionnaireResponse,
    "GetTermsOfServiceAcceptanceInfosResponse": GetTermsOfServiceAcceptanceInfosResponse,
    "GetTermsOfServiceDocumentRequest": GetTermsOfServiceDocumentRequest,
    "GetTermsOfServiceDocumentResponse": GetTermsOfServiceDocumentResponse,
    "HKLocalAccountIdentification": HKLocalAccountIdentification,
    "HULocalAccountIdentification": HULocalAccountIdentification,
    "IbanAccountIdentification": IbanAccountIdentification,
    "IdentificationData": IdentificationData,
    "Individual": Individual,
    "LegalEntity": LegalEntity,
    "LegalEntityAssociation": LegalEntityAssociation,
    "LegalEntityCapability": LegalEntityCapability,
    "LegalEntityInfo": LegalEntityInfo,
    "LegalEntityInfoRequiredType": LegalEntityInfoRequiredType,
    "NOLocalAccountIdentification": NOLocalAccountIdentification,
    "NZLocalAccountIdentification": NZLocalAccountIdentification,
    "Name": Name,
    "NumberAndBicAccountIdentification": NumberAndBicAccountIdentification,
    "OnboardingLink": OnboardingLink,
    "OnboardingLinkInfo": OnboardingLinkInfo,
    "OnboardingLinkSettings": OnboardingLinkSettings,
    "OnboardingTheme": OnboardingTheme,
    "OnboardingThemes": OnboardingThemes,
    "Organization": Organization,
    "OwnerEntity": OwnerEntity,
    "PLLocalAccountIdentification": PLLocalAccountIdentification,
    "PciDocumentInfo": PciDocumentInfo,
    "PciSigningRequest": PciSigningRequest,
    "PciSigningResponse": PciSigningResponse,
    "PhoneNumber": PhoneNumber,
    "RemediatingAction": RemediatingAction,
    "SELocalAccountIdentification": SELocalAccountIdentification,
    "SGLocalAccountIdentification": SGLocalAccountIdentification,
    "ServiceError": ServiceError,
    "SetTaxElectronicDeliveryConsentRequest": SetTaxElectronicDeliveryConsentRequest,
    "SoleProprietorship": SoleProprietorship,
    "SourceOfFunds": SourceOfFunds,
    "StockData": StockData,
    "SupportingEntityCapability": SupportingEntityCapability,
    "TaxInformation": TaxInformation,
    "TaxReportingClassification": TaxReportingClassification,
    "TermsOfServiceAcceptanceInfo": TermsOfServiceAcceptanceInfo,
    "TransferInstrument": TransferInstrument,
    "TransferInstrumentInfo": TransferInstrumentInfo,
    "TransferInstrumentReference": TransferInstrumentReference,
    "Trust": Trust,
    "UKLocalAccountIdentification": UKLocalAccountIdentification,
    "USLocalAccountIdentification": USLocalAccountIdentification,
    "UndefinedBeneficiary": UndefinedBeneficiary,
    "UnincorporatedPartnership": UnincorporatedPartnership,
    "VerificationDeadline": VerificationDeadline,
    "VerificationError": VerificationError,
    "VerificationErrorRecursive": VerificationErrorRecursive,
    "VerificationErrors": VerificationErrors,
    "WebData": WebData,
    "WebDataExemption": WebDataExemption,
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

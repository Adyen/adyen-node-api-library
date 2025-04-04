import localVarRequest from 'request';

export * from './aULocalAccountIdentification';
export * from './acceptTermsOfServiceRequest';
export * from './acceptTermsOfServiceResponse';
export * from './additionalBankIdentification';
export * from './address';
export * from './amount';
export * from './attachment';
export * from './bankAccountInfo';
export * from './bankAccountInfoAccountIdentification';
export * from './birthData';
export * from './businessLine';
export * from './businessLineInfo';
export * from './businessLineInfoUpdate';
export * from './businessLines';
export * from './cALocalAccountIdentification';
export * from './cZLocalAccountIdentification';
export * from './calculatePciStatusRequest';
export * from './calculatePciStatusResponse';
export * from './calculateTermsOfServiceStatusResponse';
export * from './capabilityProblem';
export * from './capabilityProblemEntity';
export * from './capabilityProblemEntityRecursive';
export * from './capabilitySettings';
export * from './checkTaxElectronicDeliveryConsentResponse';
export * from './dKLocalAccountIdentification';
export * from './dataReviewConfirmationResponse';
export * from './document';
export * from './documentPage';
export * from './documentReference';
export * from './entityReference';
export * from './financialReport';
export * from './generatePciDescriptionRequest';
export * from './generatePciDescriptionResponse';
export * from './getAcceptedTermsOfServiceDocumentResponse';
export * from './getPciQuestionnaireInfosResponse';
export * from './getPciQuestionnaireResponse';
export * from './getTermsOfServiceAcceptanceInfosResponse';
export * from './getTermsOfServiceDocumentRequest';
export * from './getTermsOfServiceDocumentResponse';
export * from './hKLocalAccountIdentification';
export * from './hULocalAccountIdentification';
export * from './ibanAccountIdentification';
export * from './identificationData';
export * from './individual';
export * from './legalEntity';
export * from './legalEntityAssociation';
export * from './legalEntityCapability';
export * from './legalEntityInfo';
export * from './legalEntityInfoRequiredType';
export * from './nOLocalAccountIdentification';
export * from './nZLocalAccountIdentification';
export * from './name';
export * from './numberAndBicAccountIdentification';
export * from './onboardingLink';
export * from './onboardingLinkInfo';
export * from './onboardingLinkSettings';
export * from './onboardingTheme';
export * from './onboardingThemes';
export * from './organization';
export * from './ownerEntity';
export * from './pLLocalAccountIdentification';
export * from './pciDocumentInfo';
export * from './pciSigningRequest';
export * from './pciSigningResponse';
export * from './phoneNumber';
export * from './remediatingAction';
export * from './sELocalAccountIdentification';
export * from './sGLocalAccountIdentification';
export * from './serviceError';
export * from './setTaxElectronicDeliveryConsentRequest';
export * from './soleProprietorship';
export * from './sourceOfFunds';
export * from './stockData';
export * from './supportingEntityCapability';
export * from './taxInformation';
export * from './taxReportingClassification';
export * from './termsOfServiceAcceptanceInfo';
export * from './transferInstrument';
export * from './transferInstrumentInfo';
export * from './transferInstrumentReference';
export * from './trust';
export * from './uKLocalAccountIdentification';
export * from './uSLocalAccountIdentification';
export * from './undefinedBeneficiary';
export * from './unincorporatedPartnership';
export * from './verificationDeadline';
export * from './verificationError';
export * from './verificationErrorRecursive';
export * from './verificationErrors';
export * from './webData';
export * from './webDataExemption';

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
import { AcceptTermsOfServiceRequest } from './acceptTermsOfServiceRequest';
import { AcceptTermsOfServiceResponse } from './acceptTermsOfServiceResponse';
import { AdditionalBankIdentification } from './additionalBankIdentification';
import { Address } from './address';
import { Amount } from './amount';
import { Attachment } from './attachment';
import { BankAccountInfo } from './bankAccountInfo';
import { BankAccountInfoAccountIdentification } from './bankAccountInfoAccountIdentification';
import { BirthData } from './birthData';
import { BusinessLine } from './businessLine';
import { BusinessLineInfo } from './businessLineInfo';
import { BusinessLineInfoUpdate } from './businessLineInfoUpdate';
import { BusinessLines } from './businessLines';
import { CALocalAccountIdentification } from './cALocalAccountIdentification';
import { CZLocalAccountIdentification } from './cZLocalAccountIdentification';
import { CalculatePciStatusRequest } from './calculatePciStatusRequest';
import { CalculatePciStatusResponse } from './calculatePciStatusResponse';
import { CalculateTermsOfServiceStatusResponse } from './calculateTermsOfServiceStatusResponse';
import { CapabilityProblem } from './capabilityProblem';
import { CapabilityProblemEntity } from './capabilityProblemEntity';
import { CapabilityProblemEntityRecursive } from './capabilityProblemEntityRecursive';
import { CapabilitySettings } from './capabilitySettings';
import { CheckTaxElectronicDeliveryConsentResponse } from './checkTaxElectronicDeliveryConsentResponse';
import { DKLocalAccountIdentification } from './dKLocalAccountIdentification';
import { DataReviewConfirmationResponse } from './dataReviewConfirmationResponse';
import { Document } from './document';
import { DocumentPage } from './documentPage';
import { DocumentReference } from './documentReference';
import { EntityReference } from './entityReference';
import { FinancialReport } from './financialReport';
import { GeneratePciDescriptionRequest } from './generatePciDescriptionRequest';
import { GeneratePciDescriptionResponse } from './generatePciDescriptionResponse';
import { GetAcceptedTermsOfServiceDocumentResponse } from './getAcceptedTermsOfServiceDocumentResponse';
import { GetPciQuestionnaireInfosResponse } from './getPciQuestionnaireInfosResponse';
import { GetPciQuestionnaireResponse } from './getPciQuestionnaireResponse';
import { GetTermsOfServiceAcceptanceInfosResponse } from './getTermsOfServiceAcceptanceInfosResponse';
import { GetTermsOfServiceDocumentRequest } from './getTermsOfServiceDocumentRequest';
import { GetTermsOfServiceDocumentResponse } from './getTermsOfServiceDocumentResponse';
import { HKLocalAccountIdentification } from './hKLocalAccountIdentification';
import { HULocalAccountIdentification } from './hULocalAccountIdentification';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { IdentificationData } from './identificationData';
import { Individual } from './individual';
import { LegalEntity } from './legalEntity';
import { LegalEntityAssociation } from './legalEntityAssociation';
import { LegalEntityCapability } from './legalEntityCapability';
import { LegalEntityInfo } from './legalEntityInfo';
import { LegalEntityInfoRequiredType } from './legalEntityInfoRequiredType';
import { NOLocalAccountIdentification } from './nOLocalAccountIdentification';
import { NZLocalAccountIdentification } from './nZLocalAccountIdentification';
import { Name } from './name';
import { NumberAndBicAccountIdentification } from './numberAndBicAccountIdentification';
import { OnboardingLink } from './onboardingLink';
import { OnboardingLinkInfo } from './onboardingLinkInfo';
import { OnboardingLinkSettings } from './onboardingLinkSettings';
import { OnboardingTheme } from './onboardingTheme';
import { OnboardingThemes } from './onboardingThemes';
import { Organization } from './organization';
import { OwnerEntity } from './ownerEntity';
import { PLLocalAccountIdentification } from './pLLocalAccountIdentification';
import { PciDocumentInfo } from './pciDocumentInfo';
import { PciSigningRequest } from './pciSigningRequest';
import { PciSigningResponse } from './pciSigningResponse';
import { PhoneNumber } from './phoneNumber';
import { RemediatingAction } from './remediatingAction';
import { SELocalAccountIdentification } from './sELocalAccountIdentification';
import { SGLocalAccountIdentification } from './sGLocalAccountIdentification';
import { ServiceError } from './serviceError';
import { SetTaxElectronicDeliveryConsentRequest } from './setTaxElectronicDeliveryConsentRequest';
import { SoleProprietorship } from './soleProprietorship';
import { SourceOfFunds } from './sourceOfFunds';
import { StockData } from './stockData';
import { SupportingEntityCapability } from './supportingEntityCapability';
import { TaxInformation } from './taxInformation';
import { TaxReportingClassification } from './taxReportingClassification';
import { TermsOfServiceAcceptanceInfo } from './termsOfServiceAcceptanceInfo';
import { TransferInstrument } from './transferInstrument';
import { TransferInstrumentInfo } from './transferInstrumentInfo';
import { TransferInstrumentReference } from './transferInstrumentReference';
import { Trust } from './trust';
import { UKLocalAccountIdentification } from './uKLocalAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';
import { UndefinedBeneficiary } from './undefinedBeneficiary';
import { UnincorporatedPartnership } from './unincorporatedPartnership';
import { VerificationDeadline } from './verificationDeadline';
import { VerificationError } from './verificationError';
import { VerificationErrorRecursive } from './verificationErrorRecursive';
import { VerificationErrors } from './verificationErrors';
import { WebData } from './webData';
import { WebDataExemption } from './webDataExemption';

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
        "AcceptTermsOfServiceResponse.TypeEnum": AcceptTermsOfServiceResponse.TypeEnum,
        "AdditionalBankIdentification.TypeEnum": AdditionalBankIdentification.TypeEnum,
        "BankAccountInfoAccountIdentification.TypeEnum": BankAccountInfoAccountIdentification.TypeEnum,
        "BankAccountInfoAccountIdentification.AccountTypeEnum": BankAccountInfoAccountIdentification.AccountTypeEnum,
        "BusinessLine.CapabilityEnum": BusinessLine.CapabilityEnum,
        "BusinessLine.ServiceEnum": BusinessLine.ServiceEnum,
        "BusinessLineInfo.CapabilityEnum": BusinessLineInfo.CapabilityEnum,
        "BusinessLineInfo.ServiceEnum": BusinessLineInfo.ServiceEnum,
        "CALocalAccountIdentification.AccountTypeEnum": CALocalAccountIdentification.AccountTypeEnum,
        "CALocalAccountIdentification.TypeEnum": CALocalAccountIdentification.TypeEnum,
        "CZLocalAccountIdentification.TypeEnum": CZLocalAccountIdentification.TypeEnum,
        "CalculatePciStatusRequest.AdditionalSalesChannelsEnum": CalculatePciStatusRequest.AdditionalSalesChannelsEnum,
        "CalculateTermsOfServiceStatusResponse.TermsOfServiceTypesEnum": CalculateTermsOfServiceStatusResponse.TermsOfServiceTypesEnum,
        "CapabilityProblemEntity.TypeEnum": CapabilityProblemEntity.TypeEnum,
        "CapabilityProblemEntityRecursive.TypeEnum": CapabilityProblemEntityRecursive.TypeEnum,
        "CapabilitySettings.FundingSourceEnum": CapabilitySettings.FundingSourceEnum,
        "CapabilitySettings.IntervalEnum": CapabilitySettings.IntervalEnum,
        "DKLocalAccountIdentification.TypeEnum": DKLocalAccountIdentification.TypeEnum,
        "Document.TypeEnum": Document.TypeEnum,
        "DocumentPage.TypeEnum": DocumentPage.TypeEnum,
        "GeneratePciDescriptionRequest.AdditionalSalesChannelsEnum": GeneratePciDescriptionRequest.AdditionalSalesChannelsEnum,
        "GetAcceptedTermsOfServiceDocumentResponse.TermsOfServiceDocumentFormatEnum": GetAcceptedTermsOfServiceDocumentResponse.TermsOfServiceDocumentFormatEnum,
        "GetTermsOfServiceDocumentRequest.TypeEnum": GetTermsOfServiceDocumentRequest.TypeEnum,
        "GetTermsOfServiceDocumentResponse.TypeEnum": GetTermsOfServiceDocumentResponse.TypeEnum,
        "HKLocalAccountIdentification.TypeEnum": HKLocalAccountIdentification.TypeEnum,
        "HULocalAccountIdentification.TypeEnum": HULocalAccountIdentification.TypeEnum,
        "IbanAccountIdentification.TypeEnum": IbanAccountIdentification.TypeEnum,
        "IdentificationData.TypeEnum": IdentificationData.TypeEnum,
        "LegalEntity.TypeEnum": LegalEntity.TypeEnum,
        "LegalEntityAssociation.TypeEnum": LegalEntityAssociation.TypeEnum,
        "LegalEntityCapability.AllowedLevelEnum": LegalEntityCapability.AllowedLevelEnum,
        "LegalEntityCapability.RequestedLevelEnum": LegalEntityCapability.RequestedLevelEnum,
        "LegalEntityInfo.TypeEnum": LegalEntityInfo.TypeEnum,
        "LegalEntityInfoRequiredType.TypeEnum": LegalEntityInfoRequiredType.TypeEnum,
        "NOLocalAccountIdentification.TypeEnum": NOLocalAccountIdentification.TypeEnum,
        "NZLocalAccountIdentification.TypeEnum": NZLocalAccountIdentification.TypeEnum,
        "NumberAndBicAccountIdentification.TypeEnum": NumberAndBicAccountIdentification.TypeEnum,
        "Organization.TypeEnum": Organization.TypeEnum,
        "Organization.VatAbsenceReasonEnum": Organization.VatAbsenceReasonEnum,
        "PLLocalAccountIdentification.TypeEnum": PLLocalAccountIdentification.TypeEnum,
        "SELocalAccountIdentification.TypeEnum": SELocalAccountIdentification.TypeEnum,
        "SGLocalAccountIdentification.TypeEnum": SGLocalAccountIdentification.TypeEnum,
        "SoleProprietorship.VatAbsenceReasonEnum": SoleProprietorship.VatAbsenceReasonEnum,
        "SourceOfFunds.TypeEnum": SourceOfFunds.TypeEnum,
        "TaxReportingClassification.BusinessTypeEnum": TaxReportingClassification.BusinessTypeEnum,
        "TaxReportingClassification.MainSourceOfIncomeEnum": TaxReportingClassification.MainSourceOfIncomeEnum,
        "TaxReportingClassification.TypeEnum": TaxReportingClassification.TypeEnum,
        "TermsOfServiceAcceptanceInfo.TypeEnum": TermsOfServiceAcceptanceInfo.TypeEnum,
        "TransferInstrument.TypeEnum": TransferInstrument.TypeEnum,
        "TransferInstrumentInfo.TypeEnum": TransferInstrumentInfo.TypeEnum,
        "Trust.TypeEnum": Trust.TypeEnum,
        "Trust.VatAbsenceReasonEnum": Trust.VatAbsenceReasonEnum,
        "UKLocalAccountIdentification.TypeEnum": UKLocalAccountIdentification.TypeEnum,
        "USLocalAccountIdentification.AccountTypeEnum": USLocalAccountIdentification.AccountTypeEnum,
        "USLocalAccountIdentification.TypeEnum": USLocalAccountIdentification.TypeEnum,
        "UnincorporatedPartnership.TypeEnum": UnincorporatedPartnership.TypeEnum,
        "UnincorporatedPartnership.VatAbsenceReasonEnum": UnincorporatedPartnership.VatAbsenceReasonEnum,
        "VerificationDeadline.CapabilitiesEnum": VerificationDeadline.CapabilitiesEnum,
        "VerificationError.CapabilitiesEnum": VerificationError.CapabilitiesEnum,
        "VerificationError.TypeEnum": VerificationError.TypeEnum,
        "VerificationErrorRecursive.CapabilitiesEnum": VerificationErrorRecursive.CapabilitiesEnum,
        "VerificationErrorRecursive.TypeEnum": VerificationErrorRecursive.TypeEnum,
        "WebDataExemption.ReasonEnum": WebDataExemption.ReasonEnum,
}

let typeMap: {[index: string]: any} = {
    "AULocalAccountIdentification": AULocalAccountIdentification,
    "AcceptTermsOfServiceRequest": AcceptTermsOfServiceRequest,
    "AcceptTermsOfServiceResponse": AcceptTermsOfServiceResponse,
    "AdditionalBankIdentification": AdditionalBankIdentification,
    "Address": Address,
    "Amount": Amount,
    "Attachment": Attachment,
    "BankAccountInfo": BankAccountInfo,
    "BankAccountInfoAccountIdentification": BankAccountInfoAccountIdentification,
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

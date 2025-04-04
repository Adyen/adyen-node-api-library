import localVarRequest from 'request';

export * from './address';
export * from './amount';
export * from './bankAccount';
export * from './card';
export * from './fraudCheckResult';
export * from './fraudCheckResultWrapper';
export * from './fraudResult';
export * from './fundSource';
export * from './modifyRequest';
export * from './modifyResponse';
export * from './name';
export * from './payoutRequest';
export * from './payoutResponse';
export * from './recurring';
export * from './responseAdditionalData3DSecure';
export * from './responseAdditionalDataBillingAddress';
export * from './responseAdditionalDataCard';
export * from './responseAdditionalDataCommon';
export * from './responseAdditionalDataDomesticError';
export * from './responseAdditionalDataInstallments';
export * from './responseAdditionalDataNetworkTokens';
export * from './responseAdditionalDataOpi';
export * from './responseAdditionalDataSepa';
export * from './serviceError';
export * from './storeDetailAndSubmitRequest';
export * from './storeDetailAndSubmitResponse';
export * from './storeDetailRequest';
export * from './storeDetailResponse';
export * from './submitRequest';
export * from './submitResponse';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Address } from './address';
import { Amount } from './amount';
import { BankAccount } from './bankAccount';
import { Card } from './card';
import { FraudCheckResult } from './fraudCheckResult';
import { FraudCheckResultWrapper } from './fraudCheckResultWrapper';
import { FraudResult } from './fraudResult';
import { FundSource } from './fundSource';
import { ModifyRequest } from './modifyRequest';
import { ModifyResponse } from './modifyResponse';
import { Name } from './name';
import { PayoutRequest } from './payoutRequest';
import { PayoutResponse } from './payoutResponse';
import { Recurring } from './recurring';
import { ResponseAdditionalData3DSecure } from './responseAdditionalData3DSecure';
import { ResponseAdditionalDataBillingAddress } from './responseAdditionalDataBillingAddress';
import { ResponseAdditionalDataCard } from './responseAdditionalDataCard';
import { ResponseAdditionalDataCommon } from './responseAdditionalDataCommon';
import { ResponseAdditionalDataDomesticError } from './responseAdditionalDataDomesticError';
import { ResponseAdditionalDataInstallments } from './responseAdditionalDataInstallments';
import { ResponseAdditionalDataNetworkTokens } from './responseAdditionalDataNetworkTokens';
import { ResponseAdditionalDataOpi } from './responseAdditionalDataOpi';
import { ResponseAdditionalDataSepa } from './responseAdditionalDataSepa';
import { ServiceError } from './serviceError';
import { StoreDetailAndSubmitRequest } from './storeDetailAndSubmitRequest';
import { StoreDetailAndSubmitResponse } from './storeDetailAndSubmitResponse';
import { StoreDetailRequest } from './storeDetailRequest';
import { StoreDetailResponse } from './storeDetailResponse';
import { SubmitRequest } from './submitRequest';
import { SubmitResponse } from './submitResponse';

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
        "PayoutRequest.ShopperInteractionEnum": PayoutRequest.ShopperInteractionEnum,
        "PayoutResponse.ResultCodeEnum": PayoutResponse.ResultCodeEnum,
        "Recurring.ContractEnum": Recurring.ContractEnum,
        "Recurring.TokenServiceEnum": Recurring.TokenServiceEnum,
        "ResponseAdditionalDataCard.CardProductIdEnum": ResponseAdditionalDataCard.CardProductIdEnum,
        "ResponseAdditionalDataCommon.FraudResultTypeEnum": ResponseAdditionalDataCommon.FraudResultTypeEnum,
        "ResponseAdditionalDataCommon.RecurringProcessingModelEnum": ResponseAdditionalDataCommon.RecurringProcessingModelEnum,
        "ResponseAdditionalDataCommon.TokenizationStoreOperationTypeEnum": ResponseAdditionalDataCommon.TokenizationStoreOperationTypeEnum,
        "StoreDetailAndSubmitRequest.EntityTypeEnum": StoreDetailAndSubmitRequest.EntityTypeEnum,
        "StoreDetailRequest.EntityTypeEnum": StoreDetailRequest.EntityTypeEnum,
        "SubmitRequest.EntityTypeEnum": SubmitRequest.EntityTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "Amount": Amount,
    "BankAccount": BankAccount,
    "Card": Card,
    "FraudCheckResult": FraudCheckResult,
    "FraudCheckResultWrapper": FraudCheckResultWrapper,
    "FraudResult": FraudResult,
    "FundSource": FundSource,
    "ModifyRequest": ModifyRequest,
    "ModifyResponse": ModifyResponse,
    "Name": Name,
    "PayoutRequest": PayoutRequest,
    "PayoutResponse": PayoutResponse,
    "Recurring": Recurring,
    "ResponseAdditionalData3DSecure": ResponseAdditionalData3DSecure,
    "ResponseAdditionalDataBillingAddress": ResponseAdditionalDataBillingAddress,
    "ResponseAdditionalDataCard": ResponseAdditionalDataCard,
    "ResponseAdditionalDataCommon": ResponseAdditionalDataCommon,
    "ResponseAdditionalDataDomesticError": ResponseAdditionalDataDomesticError,
    "ResponseAdditionalDataInstallments": ResponseAdditionalDataInstallments,
    "ResponseAdditionalDataNetworkTokens": ResponseAdditionalDataNetworkTokens,
    "ResponseAdditionalDataOpi": ResponseAdditionalDataOpi,
    "ResponseAdditionalDataSepa": ResponseAdditionalDataSepa,
    "ServiceError": ServiceError,
    "StoreDetailAndSubmitRequest": StoreDetailAndSubmitRequest,
    "StoreDetailAndSubmitResponse": StoreDetailAndSubmitResponse,
    "StoreDetailRequest": StoreDetailRequest,
    "StoreDetailResponse": StoreDetailResponse,
    "SubmitRequest": SubmitRequest,
    "SubmitResponse": SubmitResponse,
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

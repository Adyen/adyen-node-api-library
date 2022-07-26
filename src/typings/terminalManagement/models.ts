/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export * from './address';
export * from './assignTerminalsRequest';
export * from './assignTerminalsResponse';
export * from './findTerminalRequest';
export * from './findTerminalResponse';
export * from './getStoresUnderAccountRequest';
export * from './getStoresUnderAccountResponse';
export * from './getTerminalDetailsRequest';
export * from './getTerminalDetailsResponse';
export * from './getTerminalsUnderAccountRequest';
export * from './getTerminalsUnderAccountResponse';
export * from './merchantAccount';
export * from './serviceError';
export * from './store';


import { Address } from './address';
import { AssignTerminalsRequest } from './assignTerminalsRequest';
import { AssignTerminalsResponse } from './assignTerminalsResponse';
import { FindTerminalRequest } from './findTerminalRequest';
import { FindTerminalResponse } from './findTerminalResponse';
import { GetStoresUnderAccountRequest } from './getStoresUnderAccountRequest';
import { GetStoresUnderAccountResponse } from './getStoresUnderAccountResponse';
import { GetTerminalDetailsRequest } from './getTerminalDetailsRequest';
import { GetTerminalDetailsResponse } from './getTerminalDetailsResponse';
import { GetTerminalsUnderAccountRequest } from './getTerminalsUnderAccountRequest';
import { GetTerminalsUnderAccountResponse } from './getTerminalsUnderAccountResponse';
import { MerchantAccount } from './merchantAccount';
import { ServiceError } from './serviceError';
import { Store } from './store';

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
        "GetTerminalDetailsResponse.TerminalStatusEnum": GetTerminalDetailsResponse.TerminalStatusEnum,
}

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "AssignTerminalsRequest": AssignTerminalsRequest,
    "AssignTerminalsResponse": AssignTerminalsResponse,
    "FindTerminalRequest": FindTerminalRequest,
    "FindTerminalResponse": FindTerminalResponse,
    "GetStoresUnderAccountRequest": GetStoresUnderAccountRequest,
    "GetStoresUnderAccountResponse": GetStoresUnderAccountResponse,
    "GetTerminalDetailsRequest": GetTerminalDetailsRequest,
    "GetTerminalDetailsResponse": GetTerminalDetailsResponse,
    "GetTerminalsUnderAccountRequest": GetTerminalsUnderAccountRequest,
    "GetTerminalsUnderAccountResponse": GetTerminalsUnderAccountResponse,
    "MerchantAccount": MerchantAccount,
    "ServiceError": ServiceError,
    "Store": Store,
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

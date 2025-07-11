/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AuthenticationDecision } from "./authenticationDecision";


export class RelayedAuthenticationResponse {
    "authenticationDecision": AuthenticationDecision;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authenticationDecision",
            "baseName": "authenticationDecision",
            "type": "AuthenticationDecision",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelayedAuthenticationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


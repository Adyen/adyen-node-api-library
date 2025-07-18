/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AndroidCertificate } from "./androidCertificate";


export class AndroidCertificatesResponse {
    /**
    * Uploaded Android certificates for Android payment terminals.
    */
    "data"?: Array<AndroidCertificate>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AndroidCertificate>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AndroidCertificatesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


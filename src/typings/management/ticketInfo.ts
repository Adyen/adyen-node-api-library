/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TicketInfo {
    /**
    * Ticket requestorId
    */
    'requestorId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestorId",
            "baseName": "requestorId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TicketInfo.attributeTypeMap;
    }
}

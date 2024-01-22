/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


/**
* Indicate the reachability of the host by the POI Terminal. State of a Host.
*/
export class HostStatus {
    /**
    * Identification of the Acquirer.
    */
    'AcquirerID': number;
    /**
    * Indicate if a Host is reachable.
    */
    'IsReachableFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "number"
        },
        {
            "name": "IsReachableFlag",
            "baseName": "IsReachableFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return HostStatus.attributeTypeMap;
    }
}

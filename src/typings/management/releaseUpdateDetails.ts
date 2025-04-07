/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ReleaseUpdateDetails {
    /**
    * Type of terminal action: Update Release.
    */
    'type'?: ReleaseUpdateDetails.TypeEnum = ReleaseUpdateDetails.TypeEnum.ReleaseUpdate;
    /**
    * Boolean flag that tells if the terminal should update at the first next maintenance call. If false, terminal will update on its configured reboot time.
    */
    'updateAtFirstMaintenanceCall'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ReleaseUpdateDetails.TypeEnum"
        },
        {
            "name": "updateAtFirstMaintenanceCall",
            "baseName": "updateAtFirstMaintenanceCall",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ReleaseUpdateDetails.attributeTypeMap;
    }
}

export namespace ReleaseUpdateDetails {
    export enum TypeEnum {
        ReleaseUpdate = <any> 'ReleaseUpdate'
    }
}

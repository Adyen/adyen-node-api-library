/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class EstimationTrackingData {
    /**
    * The estimated time the beneficiary should have access to the funds.
    */
    "estimatedArrivalTime": Date;
    /**
    * The type of tracking event.   Possible values:   - **estimation**: the estimated date and time of when the funds will be credited has been determined.
    */
    "type": EstimationTrackingData.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "estimatedArrivalTime",
            "baseName": "estimatedArrivalTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EstimationTrackingData.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EstimationTrackingData.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace EstimationTrackingData {
    export enum TypeEnum {
        Estimation = 'estimation'
    }
}

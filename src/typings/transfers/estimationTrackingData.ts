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
    'estimatedArrivalTime': Date;
    /**
    * The type of tracking event.   Possible values:   - **estimation**: the estimated date and time of when the funds will be credited has been determined.
    */
    'type': EstimationTrackingData.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "estimatedArrivalTime",
            "baseName": "estimatedArrivalTime",
            "type": "Date"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EstimationTrackingData.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return EstimationTrackingData.attributeTypeMap;
    }
}

export namespace EstimationTrackingData {
    export enum TypeEnum {
        Estimation = 'estimation'
    }
}

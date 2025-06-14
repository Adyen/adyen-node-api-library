/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ConfirmationTrackingData } from "./confirmationTrackingData";
import { EstimationTrackingData } from "./estimationTrackingData";
import { InternalReviewTrackingData } from "./internalReviewTrackingData";

/**
* Additional information for the tracking event.
*/


/**
 * @type TransferEventTrackingData
 * Type
 * @export
 */
export type TransferEventTrackingData = ConfirmationTrackingData | EstimationTrackingData | InternalReviewTrackingData;

/**
* @type TransferEventTrackingDataClass
    * Additional information for the tracking event.
* @export
*/
export class TransferEventTrackingDataClass {
    
    static readonly discriminator: string = "type";

    static readonly mapping: {[index: string]: string} | undefined = undefined;
}

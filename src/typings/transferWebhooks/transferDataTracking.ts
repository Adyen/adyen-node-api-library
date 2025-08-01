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
* The latest tracking information of the transfer.
*/


/**
 * @type TransferDataTracking
 * Type
 * @export
 */
export type TransferDataTracking = ConfirmationTrackingData | EstimationTrackingData | InternalReviewTrackingData;

/**
* @type TransferDataTrackingClass
    * The latest tracking information of the transfer.
* @export
*/
export class TransferDataTrackingClass {
    
    static readonly discriminator: string | undefined = "type";

    static readonly mapping: {[index: string]: string} | undefined = {
        "confirmation": "ConfirmationTrackingData",
        "estimation": "EstimationTrackingData",
        "internalReview": "InternalReviewTrackingData"
    };
}

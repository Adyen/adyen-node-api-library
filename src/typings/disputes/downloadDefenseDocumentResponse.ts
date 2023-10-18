/*
 * The version of the OpenAPI document: v30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { DisputeServiceResult } from './disputeServiceResult';

export class DownloadDefenseDocumentResponse {
    /**
    * The content of the defense document in Base64 binary format. Must be encoded in the format that is specified in the `contentType` field.
    */
    'content'?: string;
    /**
    * The content type of the dispute defense document.  Possible values:   * **image/jpg**  * **image/jpeg**  * **image/tiff**  * **application/pdf**
    */
    'contentType'?: string;
    'disputeServiceResult': DisputeServiceResult;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "contentType",
            "baseName": "contentType",
            "type": "string"
        },
        {
            "name": "disputeServiceResult",
            "baseName": "disputeServiceResult",
            "type": "DisputeServiceResult"
        }    ];

    static getAttributeTypeMap() {
        return DownloadDefenseDocumentResponse.attributeTypeMap;
    }
}

/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TransferReview {
    /**
    * Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.
    */
    'numberOfApprovalsRequired'?: number;
    /**
    * Shows the status of the Strong Customer Authentication (SCA) process.  Possible values: **required**, **notApplicable**.
    */
    'scaOnApproval'?: TransferReview.ScaOnApprovalEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "numberOfApprovalsRequired",
            "baseName": "numberOfApprovalsRequired",
            "type": "number"
        },
        {
            "name": "scaOnApproval",
            "baseName": "scaOnApproval",
            "type": "TransferReview.ScaOnApprovalEnum"
        }    ];

    static getAttributeTypeMap() {
        return TransferReview.attributeTypeMap;
    }
}

export namespace TransferReview {
    export enum ScaOnApprovalEnum {
        Completed = 'completed',
        NotApplicable = 'notApplicable',
        Required = 'required'
    }
}

/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataTemporaryServices {
    /**
    * Customer code, if supplied by a customer. * Encoding: ASCII * maxLength: 25
    */
    'enhancedSchemeDataCustomerReference'?: string;
    /**
    * Name or ID associated with the individual working in a temporary capacity. * maxLength: 40
    */
    'enhancedSchemeDataEmployeeName'?: string;
    /**
    * Description of the job or task of the individual working in a temporary capacity. * maxLength: 40
    */
    'enhancedSchemeDataJobDescription'?: string;
    /**
    * Amount paid per regular hours worked, minor units. * maxLength: 7
    */
    'enhancedSchemeDataRegularHoursRate'?: string;
    /**
    * Amount of time worked during a normal operation for the task or job. * maxLength: 7
    */
    'enhancedSchemeDataRegularHoursWorked'?: string;
    /**
    * Name of the individual requesting temporary services. * maxLength: 40
    */
    'enhancedSchemeDataRequestName'?: string;
    /**
    * Date for the beginning of the pay period. * Format: ddMMyy * maxLength: 6
    */
    'enhancedSchemeDataTempStartDate'?: string;
    /**
    * Date of the end of the billing cycle. * Format: ddMMyy * maxLength: 6
    */
    'enhancedSchemeDataTempWeekEnding'?: string;
    /**
    * Total tax amount, in minor units. For example, 2000 means USD 20.00 * maxLength: 12
    */
    'enhancedSchemeDataTotalTaxAmount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enhancedSchemeDataCustomerReference",
            "baseName": "enhancedSchemeData.customerReference",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataEmployeeName",
            "baseName": "enhancedSchemeData.employeeName",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataJobDescription",
            "baseName": "enhancedSchemeData.jobDescription",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataRegularHoursRate",
            "baseName": "enhancedSchemeData.regularHoursRate",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataRegularHoursWorked",
            "baseName": "enhancedSchemeData.regularHoursWorked",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataRequestName",
            "baseName": "enhancedSchemeData.requestName",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataTempStartDate",
            "baseName": "enhancedSchemeData.tempStartDate",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataTempWeekEnding",
            "baseName": "enhancedSchemeData.tempWeekEnding",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataTotalTaxAmount",
            "baseName": "enhancedSchemeData.totalTaxAmount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataTemporaryServices.attributeTypeMap;
    }
}


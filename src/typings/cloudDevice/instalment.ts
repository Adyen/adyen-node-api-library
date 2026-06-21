/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2025 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Cloud Device API
 * Definition of Cloud Device API Schema
 *
 */



export class Instalment {
    'Charges'?: number;
    'CumulativeAmount'?: number;
    'FirstAmount'?: number;
    'FirstPaymentDate'?: string;
    'InstalmentType'?: Array<Instalment.InstalmentTypeEnum>;
    'Period'?: number;
    'PeriodUnit'?: Instalment.PeriodUnitEnum;
    'PlanID'?: string;
    'SequenceNumber'?: number;
    'TotalNbOfPayments'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Charges",
            "baseName": "Charges",
            "type": "number"
        },
        {
            "name": "CumulativeAmount",
            "baseName": "CumulativeAmount",
            "type": "number"
        },
        {
            "name": "FirstAmount",
            "baseName": "FirstAmount",
            "type": "number"
        },
        {
            "name": "FirstPaymentDate",
            "baseName": "FirstPaymentDate",
            "type": "string"
        },
        {
            "name": "InstalmentType",
            "baseName": "InstalmentType",
            "type": "Array<Instalment.InstalmentTypeEnum>"
        },
        {
            "name": "Period",
            "baseName": "Period",
            "type": "number"
        },
        {
            "name": "PeriodUnit",
            "baseName": "PeriodUnit",
            "type": "Instalment.PeriodUnitEnum"
        },
        {
            "name": "PlanID",
            "baseName": "PlanID",
            "type": "string"
        },
        {
            "name": "SequenceNumber",
            "baseName": "SequenceNumber",
            "type": "number"
        },
        {
            "name": "TotalNbOfPayments",
            "baseName": "TotalNbOfPayments",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Instalment.attributeTypeMap;
    }
}

export namespace Instalment {
    export enum InstalmentTypeEnum {
        DeferredInstalments = <any> 'DeferredInstalments',
        EqualInstalments = <any> 'EqualInstalments',
        InequalInstalments = <any> 'InequalInstalments'
    }
    export enum PeriodUnitEnum {
        Annual = <any> 'Annual',
        Daily = <any> 'Daily',
        Monthly = <any> 'Monthly',
        Weekly = <any> 'Weekly'
    }
}

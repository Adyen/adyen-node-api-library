export declare class Instalment {
    'charges'?: number;
    'cumulativeAmount'?: number;
    'firstAmount'?: number;
    'firstPaymentDate'?: string;
    'instalmentType'?: Array<Instalment.InstalmentTypeEnum>;
    'period'?: number;
    'periodUnit'?: Instalment.PeriodUnitEnum;
    'planID'?: string;
    'sequenceNumber'?: number;
    'totalNbOfPayments'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Instalment {
    enum InstalmentTypeEnum {
        DeferredInstalments,
        EqualInstalments,
        InequalInstalments
    }
    enum PeriodUnitEnum {
        Annual,
        Daily,
        Monthly,
        Weekly
    }
}

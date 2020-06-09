import { CashHandlingDevice } from './cashHandlingDevice';
import { GlobalStatusType } from './globalStatusType';
export declare class POIStatus {
    'cardReaderOkFlag'?: boolean;
    'cashHandlingDevice'?: Array<CashHandlingDevice>;
    'communicationOkFlag'?: boolean;
    'fraudPreventionFlag'?: boolean;
    'globalStatus': GlobalStatusType;
    'pEDOKFlag'?: boolean;
    'printerStatus'?: POIStatus.PrinterStatusEnum;
    'securityOkFlag'?: boolean;
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
export declare namespace POIStatus {
    enum PrinterStatusEnum {
        NoPaper,
        OK,
        OutOfOrder,
        PaperJam,
        PaperLow
    }
}

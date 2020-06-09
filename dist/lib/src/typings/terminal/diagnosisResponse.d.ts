import { HostStatus } from './hostStatus';
import { POIStatus } from './pOIStatus';
import { Response } from './response';
export declare class DiagnosisResponse {
    'hostStatus'?: Array<HostStatus>;
    'loggedSaleID'?: Array<string>;
    'pOIStatus'?: POIStatus;
    'response': Response;
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

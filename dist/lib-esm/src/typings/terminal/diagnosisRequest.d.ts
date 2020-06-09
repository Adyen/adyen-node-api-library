export declare class DiagnosisRequest {
    'acquirerID'?: Array<string>;
    'hostDiagnosisFlag'?: boolean;
    'pOIID'?: string;
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

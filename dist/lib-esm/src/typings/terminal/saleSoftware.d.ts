export declare class SaleSoftware {
    'applicationName': string;
    'certificationCode': string;
    'manufacturerID'?: string;
    'softwareVersion': string;
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

import { SaleProfile } from './saleProfile';
export declare class SaleTerminalData {
    'saleCapabilities'?: Array<SaleTerminalData.SaleCapabilitiesEnum>;
    'saleProfile'?: SaleProfile;
    'terminalEnvironment'?: SaleTerminalData.TerminalEnvironmentEnum;
    'totalsGroupID'?: string;
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
export declare namespace SaleTerminalData {
    enum SaleCapabilitiesEnum {
        CashierDisplay,
        CashierError,
        CashierInput,
        CashierStatus,
        CustomerAssistance,
        CustomerDisplay,
        CustomerError,
        CustomerInput,
        EMVContactless,
        ICC,
        MagStripe,
        POIReplication,
        PrinterDocument,
        PrinterReceipt,
        PrinterVoucher
    }
    enum TerminalEnvironmentEnum {
        Attended,
        SemiAttended,
        Unattended
    }
}

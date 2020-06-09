import { POIProfile } from './pOIProfile';
import { TerminalEnvironmentType } from './terminalEnvironmentType';
export declare class POITerminalData {
    'pOICapabilities': Array<POITerminalData.POICapabilitiesEnum>;
    'pOIProfile'?: POIProfile;
    'pOISerialNumber': string;
    'terminalEnvironment': TerminalEnvironmentType;
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
export declare namespace POITerminalData {
    enum POICapabilitiesEnum {
        CashHandling,
        CashierDisplay,
        CashierError,
        CashierInput,
        CustomerDisplay,
        CustomerError,
        CustomerInput,
        EMVContactless,
        ICC,
        MagStripe,
        PrinterDocument,
        PrinterReceipt,
        PrinterVoucher
    }
}

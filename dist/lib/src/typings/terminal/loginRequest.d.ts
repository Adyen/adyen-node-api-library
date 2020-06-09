import { AnyType } from './anyType';
import { SaleSoftware } from './saleSoftware';
import { SaleTerminalData } from './saleTerminalData';
export declare class LoginRequest {
    'customerOrderReq'?: Array<LoginRequest.CustomerOrderReqEnum>;
    'dateTime': {
        [key: string]: AnyType;
    };
    'operatorID'?: string;
    'operatorLanguage': string;
    'pOISerialNumber'?: string;
    'saleSoftware': SaleSoftware;
    'saleTerminalData'?: SaleTerminalData;
    'shiftNumber'?: string;
    'tokenRequestedType'?: LoginRequest.TokenRequestedTypeEnum;
    'trainingModeFlag'?: boolean;
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
export declare namespace LoginRequest {
    enum CustomerOrderReqEnum {
        Both,
        Closed,
        Open
    }
    enum TokenRequestedTypeEnum {
        Customer,
        Transaction
    }
}

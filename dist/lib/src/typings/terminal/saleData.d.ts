import { SaleTerminalData } from './saleTerminalData';
import { SaleToAcquirerData } from './saleToAcquirerData';
import { SaleToIssuerData } from './saleToIssuerData';
import { SponsoredMerchant } from './sponsoredMerchant';
import { TransactionIdentification } from './transactionIdentification';
export declare class SaleData {
    'customerOrderID'?: string;
    'customerOrderReq'?: Array<SaleData.CustomerOrderReqEnum>;
    'operatorID'?: string;
    'operatorLanguage'?: string;
    'saleReferenceID'?: string;
    'saleTerminalData'?: SaleTerminalData;
    'saleToAcquirerData'?: SaleToAcquirerData;
    'saleToIssuerData'?: SaleToIssuerData;
    'saleToPOIData'?: string;
    'saleTransactionID': TransactionIdentification;
    'shiftNumber'?: string;
    'sponsoredMerchant'?: Array<SponsoredMerchant>;
    'tokenRequestedType'?: SaleData.TokenRequestedTypeEnum;
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
export declare namespace SaleData {
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

import { DisplayOutput } from './displayOutput';
import { TransactionActionType } from './transactionActionType';
export declare class EnableServiceRequest {
    'displayOutput'?: DisplayOutput;
    'servicesEnabled'?: Array<EnableServiceRequest.ServicesEnabledEnum>;
    'transactionAction': TransactionActionType;
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
export declare namespace EnableServiceRequest {
    enum ServicesEnabledEnum {
        CardAcquisition,
        Loyalty,
        Payment
    }
}

import { AnyType } from './anyType';
export declare class CustomerOrder {
    'accessedBy'?: string;
    'additionalInformation'?: string;
    'currency'?: string;
    'currentAmount': number;
    'customerOrderID': string;
    'endDate'?: {
        [key: string]: AnyType;
    };
    'forecastedAmount': number;
    'openOrderState'?: boolean;
    'startDate': {
        [key: string]: AnyType;
    };
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

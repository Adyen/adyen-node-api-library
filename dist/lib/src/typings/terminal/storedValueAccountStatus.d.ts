import { StoredValueAccountId } from './storedValueAccountId';
export declare class StoredValueAccountStatus {
    'currentBalance'?: number;
    'storedValueAccountID': StoredValueAccountId;
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

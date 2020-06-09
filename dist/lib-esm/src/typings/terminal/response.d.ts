import { ResultType } from './resultType';
export declare class Response {
    'additionalResponse'?: string;
    'errorCondition'?: Response.ErrorConditionEnum;
    'result': ResultType;
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
export declare namespace Response {
    enum ErrorConditionEnum {
        Aborted,
        Busy,
        Cancel,
        DeviceOut,
        InProgress,
        InsertedCard,
        InvalidCard,
        LoggedOut,
        MessageFormat,
        NotAllowed,
        NotFound,
        PaymentRestriction,
        Refusal,
        UnavailableDevice,
        UnavailableService,
        UnreachableHost,
        WrongPIN
    }
}

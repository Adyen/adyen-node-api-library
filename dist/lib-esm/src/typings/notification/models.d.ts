export * from './additionalData';
export * from './amount';
export * from './notification';
export * from './notificationItem';
export * from './notificationRequestItem';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}

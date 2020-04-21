export declare enum AccountTypesEnum {
    AccountHolders = "AccountHolders",
    Accounts = "Accounts",
    Verification = "Verification"
}
export interface AccountTypes {
    [AccountTypesEnum.Accounts]: "/foo" | "/bar" | "/baz";
}
declare class PlatformsAccount<T extends AccountTypesEnum> {
    constructor(endpoint: AccountTypes[T]);
}
export default PlatformsAccount;

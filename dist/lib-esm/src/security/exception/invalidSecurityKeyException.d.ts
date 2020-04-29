declare class InvalidSecurityKeyException implements Error {
    readonly message: string;
    readonly name: string;
    constructor(message: string);
}
export default InvalidSecurityKeyException;

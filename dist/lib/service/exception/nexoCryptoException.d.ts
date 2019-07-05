declare class NexoCryptoException implements Error {
    private readonly _message;
    private readonly _name;
    constructor(message: string);
    readonly message: string;
    readonly name: string;
}
export default NexoCryptoException;

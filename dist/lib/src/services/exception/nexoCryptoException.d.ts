declare class NexoCryptoException implements Error {
    readonly message: string;
    readonly name: string;
    constructor(message: string);
}
export default NexoCryptoException;

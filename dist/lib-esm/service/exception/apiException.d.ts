import { ApiError } from "../../typings/apiError";
declare class ApiException implements Error {
    private _error;
    private _statusCode;
    private readonly _message;
    private readonly _name;
    constructor(message: string, statusCode: number);
    error: ApiError;
    statusCode: number;
    readonly message: string;
    readonly name: string;
}
export default ApiException;

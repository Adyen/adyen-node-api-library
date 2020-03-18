import { ApiError } from "../../typings/apiError";
declare class ApiException implements Error {
    error: ApiError;
    statusCode: number;
    readonly message: string;
    readonly name: string;
    constructor(message: string, statusCode?: number);
}
export default ApiException;

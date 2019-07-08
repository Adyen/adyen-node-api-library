import Resource from "../service/resource";
import { RequestOptions } from "../typings/requestOptions";
declare function getJsonResponse<T>(resource: Resource, jsonRequest: T | string, requestOptions?: RequestOptions): Promise<string>;
declare function getJsonResponse<T, R>(resource: Resource, jsonRequest: T | string, requestOptions?: RequestOptions): Promise<R>;
export default getJsonResponse;

import Resource from "../services/resource";
import { IRequest } from "../typings/requestOptions";
declare function getJsonResponse<T>(resource: Resource, jsonRequest: T | string, requestOptions?: IRequest.Options): Promise<string>;
declare function getJsonResponse<T, R>(resource: Resource, jsonRequest: T | string, requestOptions?: IRequest.Options): Promise<R>;
export default getJsonResponse;

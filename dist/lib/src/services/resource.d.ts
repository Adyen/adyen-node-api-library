import Service from "../service";
import HttpClientException from "../httpClient/httpClientException";
import ApiException from "./exception/apiException";
import { IRequest } from "../typings/requestOptions";
declare abstract class Resource {
    protected endpoint: string;
    private service;
    protected constructor(service: Service, endpoint: string);
    request(json: string, requestOptions?: IRequest.Options): Promise<string | HttpClientException | ApiException>;
}
export default Resource;

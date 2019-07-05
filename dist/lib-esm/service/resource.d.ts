import Service from "../service";
import { RequestOptions } from "../typings/requestOptions";
declare class Resource {
    protected endpoint: string;
    private service;
    constructor(service: Service, endpoint: string);
    request(json: string, requestOptions?: RequestOptions): Promise<string>;
}
export default Resource;

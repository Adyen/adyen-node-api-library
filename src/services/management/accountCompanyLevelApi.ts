/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { Company } from "../../typings/management/models";
import { ListCompanyResponse } from "../../typings/management/models";
import { ListMerchantResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class AccountCompanyLevelApi extends Service {

    readonly API_BASEPATH: string = "https://management-test.adyen.com/v1";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a list of company accounts
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ListCompanyResponse }
    */
    public async listCompanyAccounts(requestOptions?: IRequest.Options): Promise<ListCompanyResponse> {
        const endpoint = `${this.baseUrl}/companies`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ListCompanyResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListCompanyResponse");
    }

    /**
    * @summary Get a company account
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Company }
    */
    public async getCompanyAccount(companyId: string, requestOptions?: IRequest.Options): Promise<Company> {
        const endpoint = `${this.baseUrl}/companies/{companyId}`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, Company>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Company");
    }

    /**
    * @summary Get a list of merchant accounts
    * @param companyId {@link string } The unique identifier of the company account.
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ListMerchantResponse }
    */
    public async listMerchantAccounts(companyId: string, requestOptions?: IRequest.Options): Promise<ListMerchantResponse> {
        const endpoint = `${this.baseUrl}/companies/{companyId}/merchants`
            .replace("{" + "companyId" + "}", encodeURIComponent(String(companyId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ListMerchantResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantResponse");
    }
}

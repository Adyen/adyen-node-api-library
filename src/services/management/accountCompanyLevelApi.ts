/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
/* tslint:disable:no-unused-locals */
import { Company } from '../../typings/management/models';
import { ListCompanyResponse } from '../../typings/management/models';
import { ListMerchantResponse } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export class AccountCompanyLevelApi extends Service {
    /**
     * @summary Get a list of company accounts
     * @param pageNumber The number of the page to fetch.
     * @param pageSize The number of items to have on a page, maximum 100. The default is 10 items on a page.
     */
    public async getCompanies(requestOptions?: IRequest.Options): Promise<ListCompanyResponse> {
        const localVarPath = "/companies";
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ListCompanyResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListCompanyResponse");
    }
    /**
     * @summary Get a company account
     * @param companyId The unique identifier of the company account.
     */
    public async getCompaniesCompanyId(companyId: string, requestOptions?: IRequest.Options): Promise<Company> {
        const localVarPath = "/companies/{companyId}"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, Company>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Company");
    }
    /**
     * @summary Get a list of merchant accounts
     * @param companyId The unique identifier of the company account.
     * @param pageNumber The number of the page to fetch.
     * @param pageSize The number of items to have on a page, maximum 100. The default is 10 items on a page.
     */
    public async getCompaniesCompanyIdMerchants(companyId: string, requestOptions?: IRequest.Options): Promise<ListMerchantResponse> {
        const localVarPath = "/companies/{companyId}/merchants"
            .replace('{' + 'companyId' + '}', encodeURIComponent(String(companyId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ListMerchantResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantResponse");
    }
}

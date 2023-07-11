/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { Transaction } from "../../typings/transfer/models";
import { TransactionSearchResponse } from "../../typings/transfer/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/transfer/models";

export class TransactionsApi extends Service {

    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl("https://balanceplatform-api-test.adyen.com/btl/v3");
    }

    /**
    * @summary Get all transactions
    * @param createdSince {@link Date } Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param createdUntil {@link Date } Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param balancePlatform {@link string } Unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).
    * @param paymentInstrumentId {@link string } Unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).
    * @param accountHolderId {@link string } Unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).
    * @param balanceAccountId {@link string } Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).
    * @param cursor {@link string } The &#x60;cursor&#x60; returned in the links of the previous response.
    * @param limit {@link number } The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link TransactionSearchResponse }
    */
    public async getAllTransactions(requestOptions?: IRequest.Options): Promise<TransactionSearchResponse> {
        const endpoint = `${this.baseUrl}/transactions`;
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TransactionSearchResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TransactionSearchResponse");
    }

    /**
    * @summary Get a transaction
    * @param id {@link string } Unique identifier of the transaction.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link Transaction }
    */
    public async getTransaction(id: string, requestOptions?: IRequest.Options): Promise<Transaction> {
        const endpoint = `${this.baseUrl}/transactions/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, Transaction>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "Transaction");
    }
}

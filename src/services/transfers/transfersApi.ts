/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    FindTransfersResponse,
    RestServiceError,
    ReturnTransferRequest,
    ReturnTransferResponse,
    ServiceError,
    Transfer,
    TransferData,
    TransferInfo,
    ObjectSerializer
} from "../../typings/transfers/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class TransfersApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/btl/v4";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get all transfers
    * @param requestOptions {@link IRequest.Options }
    * @param balancePlatform {@link string } The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).  Required if you don\&#39;t provide a &#x60;balanceAccountId&#x60; or &#x60;accountHolderId&#x60;.
    * @param accountHolderId {@link string } The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).  Required if you don\&#39;t provide a &#x60;balanceAccountId&#x60; or &#x60;balancePlatform&#x60;.  If you provide a &#x60;balanceAccountId&#x60;, the &#x60;accountHolderId&#x60; must be related to the &#x60;balanceAccountId&#x60;.
    * @param balanceAccountId {@link string } The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).  Required if you don\&#39;t provide an &#x60;accountHolderId&#x60; or &#x60;balancePlatform&#x60;.  If you provide an &#x60;accountHolderId&#x60;, the &#x60;balanceAccountId&#x60; must be related to the &#x60;accountHolderId&#x60;.
    * @param paymentInstrumentId {@link string } The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).  To use this parameter, you must also provide a &#x60;balanceAccountId&#x60;, &#x60;accountHolderId&#x60;, or &#x60;balancePlatform&#x60;.  The &#x60;paymentInstrumentId&#x60; must be related to the &#x60;balanceAccountId&#x60; or &#x60;accountHolderId&#x60; that you provide.
    * @param reference {@link string } The reference you provided in the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) request
    * @param category {@link &#39;bank&#39; | &#39;card&#39; | &#39;grants&#39; | &#39;internal&#39; | &#39;issuedCard&#39; | &#39;migration&#39; | &#39;platformPayment&#39; | &#39;topUp&#39; | &#39;upgrade&#39; } The type of transfer.  Possible values:   - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.  - **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.  - **issuedCard**: Transfer initiated by a Adyen-issued card.  - **platformPayment**: Fund movements related to payments that are acquired for your users.
    * @param createdSince {@link Date } Only include transfers that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param createdUntil {@link Date } Only include transfers that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
    * @param cursor {@link string } The &#x60;cursor&#x60; returned in the links of the previous response.
    * @param limit {@link number } The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.
    * @return {@link FindTransfersResponse }
    */
    public async getAllTransfers(balancePlatform?: string, accountHolderId?: string, balanceAccountId?: string, paymentInstrumentId?: string, reference?: string, category?: 'bank' | 'card' | 'grants' | 'internal' | 'issuedCard' | 'migration' | 'platformPayment' | 'topUp' | 'upgrade', createdSince?: Date, createdUntil?: Date, cursor?: string, limit?: number, requestOptions?: IRequest.Options): Promise<FindTransfersResponse> {
        const endpoint = `${this.baseUrl}/transfers`;
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = balancePlatform ?? accountHolderId ?? balanceAccountId ?? paymentInstrumentId ?? reference ?? category ?? createdSince ?? createdUntil ?? cursor ?? limit;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(balancePlatform) requestOptions.params["balancePlatform"] = balancePlatform;
            if(accountHolderId) requestOptions.params["accountHolderId"] = accountHolderId;
            if(balanceAccountId) requestOptions.params["balanceAccountId"] = balanceAccountId;
            if(paymentInstrumentId) requestOptions.params["paymentInstrumentId"] = paymentInstrumentId;
            if(reference) requestOptions.params["reference"] = reference;
            if(category) requestOptions.params["category"] = category;
            if(createdSince) requestOptions.params["createdSince"] = createdSince.toISOString();
            if(createdUntil) requestOptions.params["createdUntil"] = createdUntil.toISOString();
            if(cursor) requestOptions.params["cursor"] = cursor;
            if(limit) requestOptions.params["limit"] = limit;
        }
        const response = await getJsonResponse<string, FindTransfersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "FindTransfersResponse");
    }

    /**
    * @summary Get a transfer
    * @param id {@link string } Unique identifier of the transfer.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransferData }
    */
    public async getTransfer(id: string, requestOptions?: IRequest.Options): Promise<TransferData> {
        const endpoint = `${this.baseUrl}/transfers/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TransferData>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TransferData");
    }

    /**
    * @summary Return a transfer
    * @param transferId {@link string } The unique identifier of the transfer to be returned.
    * @param returnTransferRequest {@link ReturnTransferRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ReturnTransferResponse }
    */
    public async returnTransfer(transferId: string, returnTransferRequest: ReturnTransferRequest, requestOptions?: IRequest.Options): Promise<ReturnTransferResponse> {
        const endpoint = `${this.baseUrl}/transfers/{transferId}/returns`
            .replace("{" + "transferId" + "}", encodeURIComponent(String(transferId)));
        const resource = new Resource(this, endpoint);
        const request: ReturnTransferRequest = ObjectSerializer.serialize(returnTransferRequest, "ReturnTransferRequest");
        const response = await getJsonResponse<ReturnTransferRequest, ReturnTransferResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ReturnTransferResponse");
    }

    /**
    * @summary Transfer funds
    * @param transferInfo {@link TransferInfo } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Transfer }
    */
    public async transferFunds(transferInfo: TransferInfo, requestOptions?: IRequest.Options): Promise<Transfer> {
        const endpoint = `${this.baseUrl}/transfers`;
        const resource = new Resource(this, endpoint);
        const request: TransferInfo = ObjectSerializer.serialize(transferInfo, "TransferInfo");
        const response = await getJsonResponse<TransferInfo, Transfer>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "Transfer");
    }
}

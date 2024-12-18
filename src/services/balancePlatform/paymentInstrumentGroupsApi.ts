/*
 * The version of the OpenAPI document: v2
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
    PaymentInstrumentGroup,
    PaymentInstrumentGroupInfo,
    TransactionRulesResponse,
    ObjectSerializer
} from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class PaymentInstrumentGroupsApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create a payment instrument group
    * @param paymentInstrumentGroupInfo {@link PaymentInstrumentGroupInfo } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentInstrumentGroup }
    */
    public async createPaymentInstrumentGroup(paymentInstrumentGroupInfo: PaymentInstrumentGroupInfo, requestOptions?: IRequest.Options): Promise<PaymentInstrumentGroup> {
        const endpoint = `${this.baseUrl}/paymentInstrumentGroups`;
        const resource = new Resource(this, endpoint);
        const request: PaymentInstrumentGroupInfo = ObjectSerializer.serialize(paymentInstrumentGroupInfo, "PaymentInstrumentGroupInfo");
        const response = await getJsonResponse<PaymentInstrumentGroupInfo, PaymentInstrumentGroup>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentInstrumentGroup");
    }

    /**
    * @summary Get all transaction rules for a payment instrument group
    * @param id {@link string } The unique identifier of the payment instrument group.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransactionRulesResponse }
    */
    public async getAllTransactionRulesForPaymentInstrumentGroup(id: string, requestOptions?: IRequest.Options): Promise<TransactionRulesResponse> {
        const endpoint = `${this.baseUrl}/paymentInstrumentGroups/{id}/transactionRules`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, TransactionRulesResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "TransactionRulesResponse");
    }

    /**
    * @summary Get a payment instrument group
    * @param id {@link string } The unique identifier of the payment instrument group.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentInstrumentGroup }
    */
    public async getPaymentInstrumentGroup(id: string, requestOptions?: IRequest.Options): Promise<PaymentInstrumentGroup> {
        const endpoint = `${this.baseUrl}/paymentInstrumentGroups/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, PaymentInstrumentGroup>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentInstrumentGroup");
    }
}

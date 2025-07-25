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
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

import { ObjectSerializer } from "../../typings/balancePlatform/objectSerializer";
import { AuthorisedCardUsers } from "../../typings/balancePlatform/models";

/**
 * API handler for AuthorizedCardUsersApi
 */
export class AuthorizedCardUsersApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Create authorized users for a card.
    * @param paymentInstrumentId {@link string } 
    * @param authorisedCardUsers {@link AuthorisedCardUsers } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link void }
    */
    public async createAuthorisedCardUsers(paymentInstrumentId: string, authorisedCardUsers: AuthorisedCardUsers, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`
            .replace("{" + "paymentInstrumentId" + "}", encodeURIComponent(String(paymentInstrumentId)));
        const resource = new Resource(this, endpoint);
        
        const request: AuthorisedCardUsers = ObjectSerializer.serialize(authorisedCardUsers, "AuthorisedCardUsers");
        await getJsonResponse<AuthorisedCardUsers, void>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
    }

    /**
    * @summary Delete the authorized users for a card.
    * @param paymentInstrumentId {@link string } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link void }
    */
    public async deleteAuthorisedCardUsers(paymentInstrumentId: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`
            .replace("{" + "paymentInstrumentId" + "}", encodeURIComponent(String(paymentInstrumentId)));
        const resource = new Resource(this, endpoint);
        
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary Get authorized users for a card.
    * @param paymentInstrumentId {@link string } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AuthorisedCardUsers }
    */
    public async getAllAuthorisedCardUsers(paymentInstrumentId: string, requestOptions?: IRequest.Options): Promise<AuthorisedCardUsers> {
        const endpoint = `${this.baseUrl}/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`
            .replace("{" + "paymentInstrumentId" + "}", encodeURIComponent(String(paymentInstrumentId)));
        const resource = new Resource(this, endpoint);
        
        const response = await getJsonResponse<string, AuthorisedCardUsers>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "AuthorisedCardUsers");
    }

    /**
    * @summary Update the authorized users for a card.
    * @param paymentInstrumentId {@link string } 
    * @param authorisedCardUsers {@link AuthorisedCardUsers } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link void }
    */
    public async updateAuthorisedCardUsers(paymentInstrumentId: string, authorisedCardUsers: AuthorisedCardUsers, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers`
            .replace("{" + "paymentInstrumentId" + "}", encodeURIComponent(String(paymentInstrumentId)));
        const resource = new Resource(this, endpoint);
        
        const request: AuthorisedCardUsers = ObjectSerializer.serialize(authorisedCardUsers, "AuthorisedCardUsers");
        await getJsonResponse<AuthorisedCardUsers, void>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
    }

}

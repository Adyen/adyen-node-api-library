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
    RegisterSCAFinalResponse,
    RegisterSCARequest,
    RegisterSCAResponse,
    SearchRegisteredDevicesResponse,
    ObjectSerializer
} from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class ManageSCADevicesApi extends Service {

    private readonly API_BASEPATH: string = "https://balanceplatform-api-test.adyen.com/bcl/v2";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Complete the registration of an SCA device
    * @param id {@link string } The unique identifier of the SCA device. You obtain this &#x60;id&#x60; in the response of a POST&amp;nbsp;[/registeredDevices](https://docs.adyen.com/api-explorer/balanceplatform/2/post/registeredDevices#responses-200-id) request.
    * @param registerSCARequest {@link RegisterSCARequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link RegisterSCAFinalResponse }
    */
    public async completeRegistrationOfScaDevice(id: string, registerSCARequest: RegisterSCARequest, requestOptions?: IRequest.Options): Promise<RegisterSCAFinalResponse> {
        const endpoint = `${this.baseUrl}/registeredDevices/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const request: RegisterSCARequest = ObjectSerializer.serialize(registerSCARequest, "RegisterSCARequest");
        const response = await getJsonResponse<RegisterSCARequest, RegisterSCAFinalResponse>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "RegisterSCAFinalResponse");
    }

    /**
    * @summary Delete a registration of an SCA device
    * @param id {@link string } The unique identifier of the SCA device.
    * @param requestOptions {@link IRequest.Options }
    * @param paymentInstrumentId {@link string } The unique identifier of the payment instrument linked to the SCA device.
    */
    public async deleteRegistrationOfScaDevice(id: string, paymentInstrumentId?: string, requestOptions?: IRequest.Options): Promise<void> {
        const endpoint = `${this.baseUrl}/registeredDevices/{id}`
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = paymentInstrumentId;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(paymentInstrumentId) requestOptions.params["paymentInstrumentId"] = paymentInstrumentId;
        }
        await getJsonResponse<string, void>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
    }

    /**
    * @summary Initiate the registration of an SCA device
    * @param registerSCARequest {@link RegisterSCARequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link RegisterSCAResponse }
    */
    public async initiateRegistrationOfScaDevice(registerSCARequest: RegisterSCARequest, requestOptions?: IRequest.Options): Promise<RegisterSCAResponse> {
        const endpoint = `${this.baseUrl}/registeredDevices`;
        const resource = new Resource(this, endpoint);
        const request: RegisterSCARequest = ObjectSerializer.serialize(registerSCARequest, "RegisterSCARequest");
        const response = await getJsonResponse<RegisterSCARequest, RegisterSCAResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "RegisterSCAResponse");
    }

    /**
    * @summary Get a list of registered SCA devices
    * @param requestOptions {@link IRequest.Options }
    * @param paymentInstrumentId {@link string } The unique identifier of a payment instrument. It limits the returned list to SCA devices associated to this payment instrument.
    * @param pageNumber {@link number } The index of the page to retrieve. The index of the first page is 0 (zero).  Default: 0.
    * @param pageSize {@link number } The number of items to have on a page.  Default: 20. Maximum: 100.
    * @return {@link SearchRegisteredDevicesResponse }
    */
    public async listRegisteredScaDevices(paymentInstrumentId?: string, pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<SearchRegisteredDevicesResponse> {
        const endpoint = `${this.baseUrl}/registeredDevices`;
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = paymentInstrumentId ?? pageNumber ?? pageSize;
        if(hasDefinedQueryParams) {
            if(!requestOptions) requestOptions = {};
            if(!requestOptions.params) requestOptions.params = {};
            if(paymentInstrumentId) requestOptions.params["paymentInstrumentId"] = paymentInstrumentId;
            if(pageNumber) requestOptions.params["pageNumber"] = pageNumber;
            if(pageSize) requestOptions.params["pageSize"] = pageSize;
        }
        const response = await getJsonResponse<string, SearchRegisteredDevicesResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "SearchRegisteredDevicesResponse");
    }
}

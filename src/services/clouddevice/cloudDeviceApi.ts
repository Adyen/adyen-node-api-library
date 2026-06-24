/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2026 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { CloudDeviceApiAsyncResponse } from "../../typings/clouddevice/models";
import { CloudDeviceApiRequest } from "../../typings/clouddevice/models";
import { CloudDeviceApiResponse } from "../../typings/clouddevice/models";
import { ConnectedDevicesResponse } from "../../typings/clouddevice/models";
import { DeviceStatusResponse } from "../../typings/clouddevice/models";

/**
 * API handler for CloudDeviceApi
 */
export class CloudDeviceApi extends Service {

    private readonly API_BASEPATH: string = "https://device-api-test.adyen.com/v1";
    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Send a Terminal API request and receive a synchronous response
    * @param merchantAccount {@link string } The unique identifier of the merchant account. (required)
    * @param deviceId {@link string } The unique identifier of the payment device. Must match POIID in the MessageHeader. (required)
    * @param cloudDeviceApiRequest {@link CloudDeviceApiRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CloudDeviceApiResponse }
    */
    public async sync(merchantAccount: string, deviceId: string, cloudDeviceApiRequest: CloudDeviceApiRequest, requestOptions?: IRequest.Options): Promise<CloudDeviceApiResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantAccount}/devices/{deviceId}/sync`
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<CloudDeviceApiRequest, CloudDeviceApiResponse>(
            resource,
            cloudDeviceApiRequest,
            { ...requestOptions, method: "POST" }
        );
        return response;
    }

    /**
    * @summary Send a Terminal API request and receive an asynchronous response
    * @param merchantAccount {@link string } The unique identifier of the merchant account. (required)
    * @param deviceId {@link string } The unique identifier of the payment device. Must match POIID in the MessageHeader. (required)
    * @param cloudDeviceApiRequest {@link CloudDeviceApiRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CloudDeviceApiAsyncResponse }
    */
    public async async(merchantAccount: string, deviceId: string, cloudDeviceApiRequest: CloudDeviceApiRequest, requestOptions?: IRequest.Options): Promise<CloudDeviceApiAsyncResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantAccount}/devices/{deviceId}/async`
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<CloudDeviceApiRequest, string>(
            resource,
            cloudDeviceApiRequest,
            { ...requestOptions, method: "POST" }
        );
        const result = new CloudDeviceApiAsyncResponse();
        if (typeof response === "string" && response.toLowerCase().trim() === "ok") {
            // successful response
            result.Result = response.trim();
        } else {
            // error returned by the terminal
            const parsed = response as unknown as CloudDeviceApiAsyncResponse;
            result.SaleToPOIRequest = parsed.SaleToPOIRequest;
        }
        return result;
    }

    /**
    * @summary Get a list of connected devices
    * @param merchantAccount {@link string } The unique identifier of the merchant account. (required)
    * @param store {@link string } The store ID of the store belonging to the merchant account specified in the path. (optional)
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ConnectedDevicesResponse }
    */
    public async getConnectedDevices(merchantAccount: string, store?: string, requestOptions?: IRequest.Options): Promise<ConnectedDevicesResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantAccount}/connectedDevices`
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)));
        const resource = new Resource(this, endpoint);
        const hasDefinedQueryParams = store;
        if (hasDefinedQueryParams) {
            if (!requestOptions) requestOptions = {};
            if (!requestOptions.params) requestOptions.params = {};
            if (store) (requestOptions.params as Record<string, string>)["store"] = store;
        }
        const response = await getJsonResponse<string, ConnectedDevicesResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return response;
    }

    /**
    * @summary Get the connection status of a device
    * @param merchantAccount {@link string } The unique identifier of the merchant account. (required)
    * @param deviceId {@link string } The unique identifier of the device. (required)
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DeviceStatusResponse }
    */
    public async getDeviceStatus(merchantAccount: string, deviceId: string, requestOptions?: IRequest.Options): Promise<DeviceStatusResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantAccount}/devices/{deviceId}/status`
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, DeviceStatusResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return response;
    }

}

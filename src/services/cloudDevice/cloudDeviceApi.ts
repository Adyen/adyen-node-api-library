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
 * Copyright (c) 2025 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import Service from "../../service";
import Client from "../../client";
import getJsonResponse from "../../helpers/getJsonResponse";
import mergeDeep from "../../utils/mergeDeep";
import { ApplicationInfo } from "../../typings/applicationInfo";
import { ObjectSerializer, CloudDeviceApiRequest, CloudDeviceApiResponse, ConnectedDevicesResponse, DeviceStatusResponse } from "../../typings/cloudDevice/models";
import Resource from "../resource";
import { IRequest } from "../../typings/requestOptions";

// Cloud Device API version
export const CLOUD_DEVICE_API_VERSION = "v1";

/**
 * Cloud Device API service
 */
class CloudDeviceAPI extends Service {

    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.client.config.cloudDeviceApiEndpoint + "/" + CLOUD_DEVICE_API_VERSION;
        this.apiKeyRequired = true;
    }

    private static setApplicationInfo(request: CloudDeviceApiRequest): CloudDeviceApiRequest {
        if (request.SaleToPOIRequest.PaymentRequest) {
            const applicationInfo = new ApplicationInfo();
            const saleToAcquirerData = { applicationInfo };
            const saleData = { saleToAcquirerData };
            const paymentRequest = { saleData };
            const saleToPOIRequest = { paymentRequest };
            const reqWithAppInfo = { saleToPOIRequest };

            mergeDeep(request, reqWithAppInfo);
        }

        return ObjectSerializer.serialize(request, "CloudDeviceApiRequest");
    }

    /**
     * Send an asynchronous payment request.
     *
     * @param cloudDeviceApiRequest - The request to send.
     * @param merchantAccount - The unique identifier of the merchant account.
     * @param deviceId - The unique identifier of the payment device that you send this request to (must match POIID in the MessageHeader).
     * @returns A promise that resolves to "ok" if the request was successful, or a CloudDeviceApiResponse if there is an error.
     */
    public async(merchantAccount: string, deviceId: string, cloudDeviceApiRequest: CloudDeviceApiRequest): Promise<string | CloudDeviceApiResponse> {
        const endpoint = this.baseUrl + "/merchants/{merchantAccount}/devices/{deviceId}/async"
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));

        const resource = new Resource(this, endpoint);

        const request = CloudDeviceAPI.setApplicationInfo(cloudDeviceApiRequest);
        // set deviceId
        request.SaleToPOIRequest.MessageHeader.POIID = deviceId;

        return getJsonResponse<CloudDeviceApiRequest>(
            resource, 
            request
        );
    }

    /**
     * Send a synchronous payment request.
     * @param cloudDeviceApiRequest - The request to send.
     * @param merchantAccount - The unique identifier of the merchant account.
     * @param deviceId - The unique identifier of the payment device that you send this request to (must match POIID in the MessageHeader).
     * @returns A promise that resolves to a CloudDeviceApiResponse.
     */
    public async sync(merchantAccount: string, deviceId: string, cloudDeviceApiRequest: CloudDeviceApiRequest): Promise<CloudDeviceApiResponse> {
        const endpoint = this.baseUrl + "/merchants/{merchantAccount}/devices/{deviceId}/sync"
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));

        const resource = new Resource(this, endpoint);

        const request = CloudDeviceAPI.setApplicationInfo(cloudDeviceApiRequest);
        // set deviceId
        request.SaleToPOIRequest.MessageHeader.POIID = deviceId;

        const response = await getJsonResponse<CloudDeviceApiRequest, CloudDeviceApiResponse>(
            resource, 
            request
        );

        return ObjectSerializer.deserialize(response, "CloudDeviceApiResponse");
    }

    /**
     * Get a list of connected devices for a merchant account.
     *
     * @param merchantAccount - The unique identifier of the merchant account.
     * @param store The store ID of the store belonging to the merchant account specified in the path.
     * @returns A promise that resolves to a ConnectedDevicesResponse.
     */
    public async getConnectedDevices(merchantAccount: string, store?: string): Promise<ConnectedDevicesResponse> {
        const endpoint = this.baseUrl + "/merchants/{merchantAccount}/connectedDevices"
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)));

        const resource = new Resource(this, endpoint);

        let requestOptions: IRequest.Options = {};
        if (store) {
            requestOptions.params = { store };
        }        

        const response = await getJsonResponse<string, ConnectedDevicesResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "ConnectedDevicesResponse");
    }

    /**
     * Get the status of a device.
     *
     * @param merchantAccount - The unique identifier of the merchant account.
     * @param deviceId - The unique identifier of the payment device.
     * @returns A promise that resolves to a DeviceStatusResponse.
     */
    public async getDeviceStatus(merchantAccount: string, deviceId: string): Promise<DeviceStatusResponse> {
        const endpoint = this.baseUrl + "/merchants/{merchantAccount}/devices/{deviceId}/status"
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));

        const resource = new Resource(this, endpoint);

        const response = await getJsonResponse<string, DeviceStatusResponse>(
            resource,
            "",
            { method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "DeviceStatusResponse");
    }

}

export default CloudDeviceAPI;

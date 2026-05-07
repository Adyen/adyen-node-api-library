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
import { ObjectSerializer, CloudDeviceApiRequest, CloudDeviceApiResponse, ConnectedDevicesResponse, DeviceStatusResponse, CloudDeviceApiSecuredRequest, CloudDeviceApiSecuredResponse, SaleToPOISecuredMessage } from "../../typings/cloudDevice/models";
import Resource from "../resource";
import { IRequest } from "../../typings/requestOptions";
import NexoSecurityManager from "../../security/nexoSecurityManager";
import { EncryptionCredentialDetails } from "../../security/encryptionCredentialDetails";

// Cloud Device API version
export const CLOUD_DEVICE_API_VERSION = "v1";

/**
 * Cloud Device API service
 * 
 * With the Cloud device API you can:
 * - send Terminal API requests to the Adyen cloud endpointd.
 * - check the cloud connection of a payment terminal or of a device used in a Mobile solution for in-person payments.
 */
class CloudDeviceAPI extends Service {

    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.client.config.cloudDeviceApiEndpoint + "/" + CLOUD_DEVICE_API_VERSION;
        this.apiKeyRequired = true;
    }

    // Add application information to a CloudDevice API request and sets the device POIID.
    private static setApplicationInfo(request: CloudDeviceApiRequest, deviceId: string): CloudDeviceApiRequest {
        if (request.SaleToPOIRequest.PaymentRequest) {
            const applicationInfo = new ApplicationInfo();
            const saleToAcquirerData = { applicationInfo };
            const saleData = { saleToAcquirerData };
            const paymentRequest = { saleData };
            const saleToPOIRequest = { paymentRequest };
            const reqWithAppInfo = { saleToPOIRequest };

            mergeDeep(request, reqWithAppInfo);
        }

        if (true) {
            request.SaleToPOIRequest = {
                ...request.SaleToPOIRequest,
                MessageHeader: {
                    ...request.SaleToPOIRequest?.MessageHeader,
                    POIID: deviceId
                }
            };
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
    public sendAsync(merchantAccount: string, deviceId: string, cloudDeviceApiRequest: CloudDeviceApiRequest): Promise<string | CloudDeviceApiResponse> {

        const resource = new Resource(this, this.getAsyncEndpoint(merchantAccount, deviceId));

        const request = CloudDeviceAPI.setApplicationInfo(cloudDeviceApiRequest, deviceId);

        return getJsonResponse<CloudDeviceApiRequest>(
            resource,
            request
        );
    }

    /**
    * Send an asynchronous encrypted payment request.
    *
    * @param merchantAccount - The unique identifier of the merchant account.
    * @param deviceId - The unique identifier of the payment device that you send this request to (must match POIID in the MessageHeader).
    * @param cloudDeviceApiRequest - The request to send.
    * @param encryptionCredentialDetails - The details of the encryption credential used for encrypting the request payload (nexoBlob)
    * @returns A promise that resolves to "ok" if the request was successful, or a CloudDeviceApiResponse if there is an error.
    * 
    * @throws {CloudDeviceApiError} If an error occurs
    * @example 
    * try {
    *   const response = await client.sendEncryptedAsync(
    *     "TestMerchant",
    *     "P400Plus-123456789",
    *     cloudDeviceApiRequest,
    *     encryptionCredentialDetails
    *   );
    *   console.log("Decrypted response:", response);
    * } catch (err) {
    *   if (err instanceof CloudDeviceApiError) {
    *     console.error("CloudDevice API failed:", err.message);
    *     console.error("Cause:", err.cause);
    *   }
    * }  
    */
    public async sendEncryptedAsync(merchantAccount: string, deviceId: string, cloudDeviceApiRequest: CloudDeviceApiRequest, encryptionCredentialDetails: EncryptionCredentialDetails): Promise<string | CloudDeviceApiResponse> {

        try {

            const resource = new Resource(this, this.getAsyncEndpoint(merchantAccount, deviceId));
            const request = CloudDeviceAPI.setApplicationInfo(cloudDeviceApiRequest, deviceId);

            const saleToPoiSecuredMessage: SaleToPOISecuredMessage = NexoSecurityManager.encrypt(
                request.SaleToPOIRequest?.MessageHeader,    // set MessageHeader
                JSON.stringify(request),                    // encrypt entire CloudDeviceApiRequest
                encryptionCredentialDetails                 // set encryption credentials
            );

            const securedPaymentRequest: CloudDeviceApiSecuredRequest = ObjectSerializer.serialize({
                SaleToPOIRequest: saleToPoiSecuredMessage,
            }, "CloudDeviceApiSecuredRequest");

            const jsonResponse = await getJsonResponse<CloudDeviceApiSecuredRequest, CloudDeviceApiSecuredResponse>(
                resource,
                securedPaymentRequest
            );

            if (typeof jsonResponse === "string") {
                // request was successful
                return jsonResponse;
            }

            const cloudDeviceApiSecuredResponse: CloudDeviceApiSecuredResponse =
                ObjectSerializer.deserialize(jsonResponse, "CloudDeviceApiSecuredResponse");

            // decrypt SaleToPOISecuredMessage
            const decryptedPayload = NexoSecurityManager.decrypt(
                cloudDeviceApiSecuredResponse.SaleToPOIResponse,
                encryptionCredentialDetails,
            );

            return ObjectSerializer.deserialize(JSON.parse(decryptedPayload), "CloudDeviceApiResponse");

        } catch (err: any) {
            // an error has occurred
            console.error(err);
            throw new CloudDeviceApiError(err?.message || "Unknown error", err);
        }
    }


    /**
     * Send a synchronous payment request.
     * 
     * @param cloudDeviceApiRequest - The request to send.
     * @param merchantAccount - The unique identifier of the merchant account.
     * @param deviceId - The unique identifier of the payment device that you send this request to (must match POIID in the MessageHeader).
     * @returns A promise that resolves to a CloudDeviceApiResponse.
     */
    public async sendSync(merchantAccount: string, deviceId: string, cloudDeviceApiRequest: CloudDeviceApiRequest): Promise<CloudDeviceApiResponse> {

        const resource = new Resource(this, this.getSyncEndpoint(merchantAccount, deviceId));
        const request = CloudDeviceAPI.setApplicationInfo(cloudDeviceApiRequest, deviceId);

        const response = await getJsonResponse<CloudDeviceApiRequest, CloudDeviceApiResponse>(
            resource,
            request
        );

        return ObjectSerializer.deserialize(response, "CloudDeviceApiResponse");
    }

    /**
    * Send a synchronous encrypted payment request.
    *
    * @param merchantAccount - The unique identifier of the merchant account.
    * @param deviceId - The unique identifier of the payment device that you send this request to (must match POIID in the MessageHeader).
    * @param cloudDeviceApiRequest - The request to send.
    * @param encryptionCredentialDetails - The details of the encryption credential used for encrypting the request payload (nexoBlob)
    * @returns A promise that resolves to CloudDeviceApiSecuredResponse
    * 
    * @throws {CloudDeviceApiError} If an error occurs
    * @example 
    * try {
    *   const response = await client.sendEncryptedSync(
    *     "TestMerchant",
    *     "P400Plus-123456789",
    *     cloudDeviceApiRequest,
    *     encryptionCredentialDetails
    *   );
    *   console.log("Decrypted response:", response);
    * } catch (err) {
    *   if (err instanceof CloudDeviceApiError) {
    *     console.error("CloudDevice API failed:", err.message);
    *     console.error("Cause:", err.cause);
    *   }
    * }  
    */
    public async sendEncryptedSync(merchantAccount: string, deviceId: string, cloudDeviceApiRequest: CloudDeviceApiRequest, encryptionCredentialDetails: EncryptionCredentialDetails): Promise<CloudDeviceApiResponse> {

        try {

            const resource = new Resource(this, this.getSyncEndpoint(merchantAccount, deviceId));
            const request = CloudDeviceAPI.setApplicationInfo(cloudDeviceApiRequest, deviceId);

            const saleToPoiSecuredMessage: SaleToPOISecuredMessage = NexoSecurityManager.encrypt(
                request.SaleToPOIRequest?.MessageHeader,    // set MessageHeader
                JSON.stringify(request),                    // encrypt entire CloudDeviceApiRequest
                encryptionCredentialDetails                 // set encryption credentials
            );

            const securedPaymentRequest: CloudDeviceApiSecuredRequest = ObjectSerializer.serialize({
                SaleToPOIRequest: saleToPoiSecuredMessage,
            }, "CloudDeviceApiSecuredRequest");

            const jsonResponse = await getJsonResponse<CloudDeviceApiSecuredRequest, CloudDeviceApiSecuredResponse>(
                resource,
                securedPaymentRequest
            );

            const cloudDeviceApiSecuredResponse: CloudDeviceApiSecuredResponse =
                ObjectSerializer.deserialize(jsonResponse, "CloudDeviceApiSecuredResponse");

            // decrypt SaleToPOISecuredMessage
            const decryptedPayload = NexoSecurityManager.decrypt(
                cloudDeviceApiSecuredResponse.SaleToPOIResponse,
                encryptionCredentialDetails,
            );

            return ObjectSerializer.deserialize(JSON.parse(decryptedPayload), "CloudDeviceApiResponse");

        } catch (err: any) {
            // an error has occurred
            console.error(err);
            throw new CloudDeviceApiError(err?.message || "Unknown error", err);
        }
    }

    /**
     * Get a list of connected devices for a merchant account.
     *
     * @param merchantAccount - The unique identifier of the merchant account.
     * @param store The store ID of the store belonging to the merchant account specified in the path.
     * @returns A promise that resolves to a ConnectedDevicesResponse.
     */
    public async getConnectedDevices(merchantAccount: string, store?: string): Promise<ConnectedDevicesResponse> {

        const resource = new Resource(this, this.getConnectedDevicesEndpoint(merchantAccount));

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

        const resource = new Resource(this, this.getDeviceStatusEndpoint(merchantAccount, deviceId));

        const response = await getJsonResponse<string, DeviceStatusResponse>(
            resource,
            "",
            { method: "GET" }
        );

        return ObjectSerializer.deserialize(response, "DeviceStatusResponse");
    }

    /**
     * Decrypt event notification
     * @param payload Event notification in JSON string format: it can be SaleToPOIResponse (async response) or SaleToPOIRequest (event notification)
     * @param encryptionCredentialDetails The details of the encryption credential used for decrypting the payload (nexoBlob)
     * @returns 
     */
    public decryptNotification(
        payload: string,
        encryptionCredentialDetails: EncryptionCredentialDetails
    ): string {
        const parsed = JSON.parse(payload);

        let decryptedMessage;

        if (parsed.SaleToPOIResponse) {
            // includes SaleToPOIResponse (response after /async)
            decryptedMessage = ObjectSerializer.deserialize(parsed, "CloudDeviceApiSecuredResponse");
            return NexoSecurityManager.decrypt(
                decryptedMessage.SaleToPOIResponse,
                encryptionCredentialDetails
            );
        } else if (parsed.SaleToPOIRequest) {
            // includes SaleToPOIRequest (event notification )
            decryptedMessage = ObjectSerializer.deserialize(parsed, "CloudDeviceApiSecuredRequest");
            return NexoSecurityManager.decrypt(
                decryptedMessage.SaleToPOIRequest,
                encryptionCredentialDetails
            );
        } else {
            console.log("Invalid payload: must be CloudDeviceApiSecuredRequest or CloudDeviceApiSecuredResponse");
            return "";
        }
    }


    /**
     * Get Device API /sync endpoint
     * @param merchantAccount The unique identifier of the merchant account.
     * @param deviceId The unique identifier of the payment device.
     * @returns 
     */
    getSyncEndpoint(merchantAccount: string, deviceId: string) {
        return this.baseUrl + "/merchants/{merchantAccount}/devices/{deviceId}/sync"
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));
    }

    /**
     * Get Device API /async endpoint
     * @param merchantAccount The unique identifier of the merchant account.
     * @param deviceId The unique identifier of the payment device.
     * @returns 
     */
    getAsyncEndpoint(merchantAccount: string, deviceId: string) {
        return this.baseUrl + "/merchants/{merchantAccount}/devices/{deviceId}/async"
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));
    }

    /**
     * Get Device API connectedDevices endpoint
     * @param merchantAccount The unique identifier of the merchant account.
     * @returns 
     */
    getConnectedDevicesEndpoint(merchantAccount: string) {
        return this.baseUrl + "/merchants/{merchantAccount}/connectedDevices"
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)));
    }

    /**
     * Get Device API device status endpoint
     * @param merchantAccount The unique identifier of the merchant account.
     * @param deviceId The unique identifier of the payment device.
     * @returns 
     */
    getDeviceStatusEndpoint(merchantAccount: string, deviceId: string) {
        return this.baseUrl + "/merchants/{merchantAccount}/devices/{deviceId}/status"
            .replace("{" + "merchantAccount" + "}", encodeURIComponent(String(merchantAccount)))
            .replace("{" + "deviceId" + "}", encodeURIComponent(String(deviceId)));
    }

}


/**
 * CloudDeviceApiError wraps any failure during the processing of Cloud Device API requests
 */
export class CloudDeviceApiError extends Error {
    /**
     * @param {string} message - A human-readable error message.
     * @param {unknown} [cause] - The original error that triggered this failure.
     */
    constructor(message: string, public cause?: unknown) {
        super(message);
        this.name = "CloudDeviceApiError";
    }
}

export default CloudDeviceAPI;

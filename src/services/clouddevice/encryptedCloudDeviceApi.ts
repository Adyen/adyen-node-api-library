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
import { CloudDeviceApiRequest } from "../../typings/clouddevice/cloudDeviceApiRequest";
import { CloudDeviceApiResponse } from "../../typings/clouddevice/cloudDeviceApiResponse";
import { CloudDeviceApiAsyncResponse } from "../../typings/clouddevice/cloudDeviceApiAsyncResponse";
import { CloudDeviceApiSecuredRequest } from "../../typings/clouddevice/cloudDeviceApiSecuredRequest";
import { CloudDeviceApiSecuredResponse } from "../../typings/clouddevice/cloudDeviceApiSecuredResponse";
import { EncryptionCredentialDetails } from "../../security/clouddevice/encryptionCredentialDetails";
import { NexoSecurityManager } from "../../security/clouddevice/nexoSecurityManager";
import { NexoSecurityException } from "../../security/clouddevice/nexoSecurityException";

/**
 * Cloud Device API service with encrypted payloads.
 */
export class EncryptedCloudDeviceApi extends Service {

    private readonly API_BASEPATH: string = "https://device-api-test.adyen.com/v1";
    private baseUrl: string;
    private readonly nexoSecurityManager: NexoSecurityManager;

    public constructor(client: Client, encryptionCredentialDetails: EncryptionCredentialDetails) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
        this.nexoSecurityManager = new NexoSecurityManager(encryptionCredentialDetails);
    }

    /**
     * @summary Send a Terminal API request with encryption and receive a synchronous decrypted response
     * @param merchantAccount {@link string } The unique identifier of the merchant account. (required)
     * @param deviceId {@link string } The unique identifier of the payment device. Must match POIID in the MessageHeader. (required)
     * @param cloudDeviceApiRequest {@link CloudDeviceApiRequest }
     * @param requestOptions {@link IRequest.Options }
     * @return {@link CloudDeviceApiResponse }
     */
    public async sync(
        merchantAccount: string,
        deviceId: string,
        cloudDeviceApiRequest: CloudDeviceApiRequest,
        requestOptions?: IRequest.Options,
    ): Promise<CloudDeviceApiResponse> {
        if (!merchantAccount) {
            throw new Error("Please provide the merchantAccount path parameter");
        }
        if (!deviceId) {
            throw new Error("Please provide the deviceId path parameter");
        }
        if (!cloudDeviceApiRequest.SaleToPOIRequest?.MessageHeader) {
            throw new Error("cloudDeviceApiRequest must contain a SaleToPOIRequest with a MessageHeader");
        }

        cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID = deviceId;

        const secured = this.nexoSecurityManager.encrypt(
            JSON.stringify(cloudDeviceApiRequest),
            cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader,
        );

        const securedRequest: CloudDeviceApiSecuredRequest = { SaleToPOIRequest: secured };

        const endpoint = `${this.baseUrl}/merchants/{merchantAccount}/devices/{deviceId}/sync`
            .replace("{merchantAccount}", encodeURIComponent(merchantAccount))
            .replace("{deviceId}", encodeURIComponent(deviceId));
        const resource = new Resource(this, endpoint);

        const response = await getJsonResponse<CloudDeviceApiSecuredRequest, CloudDeviceApiSecuredResponse>(
            resource,
            securedRequest,
            { ...requestOptions, method: "POST" },
        );

        const encryptedResponse = response.SaleToPOIResponse;
        if (!encryptedResponse?.NexoBlob) {
            // Terminal returned an unencrypted error response (e.g. terminal unreachable)
            return response as unknown as CloudDeviceApiResponse;
        }

        return JSON.parse(this.nexoSecurityManager.decrypt(encryptedResponse)) as CloudDeviceApiResponse;
    }

    /**
     * @summary Send a Terminal API request with encryption and receive an asynchronous response
     * @param merchantAccount {@link string } The unique identifier of the merchant account. (required)
     * @param deviceId {@link string } The unique identifier of the payment device. Must match POIID in the MessageHeader. (required)
     * @param cloudDeviceApiRequest {@link CloudDeviceApiRequest }
     * @param requestOptions {@link IRequest.Options }
     * @return {@link CloudDeviceApiAsyncResponse }
     */
    public async async(
        merchantAccount: string,
        deviceId: string,
        cloudDeviceApiRequest: CloudDeviceApiRequest,
        requestOptions?: IRequest.Options,
    ): Promise<CloudDeviceApiAsyncResponse> {
        if (!merchantAccount) {
            throw new Error("Please provide the merchantAccount path parameter");
        }
        if (!deviceId) {
            throw new Error("Please provide the deviceId path parameter");
        }
        if (!cloudDeviceApiRequest.SaleToPOIRequest?.MessageHeader) {
            throw new Error("cloudDeviceApiRequest must contain a SaleToPOIRequest with a MessageHeader");
        }

        cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID = deviceId;

        const secured = this.nexoSecurityManager.encrypt(
            JSON.stringify(cloudDeviceApiRequest),
            cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader,
        );

        const securedRequest: CloudDeviceApiSecuredRequest = { SaleToPOIRequest: secured };

        const endpoint = `${this.baseUrl}/merchants/{merchantAccount}/devices/{deviceId}/async`
            .replace("{merchantAccount}", encodeURIComponent(merchantAccount))
            .replace("{deviceId}", encodeURIComponent(deviceId));
        const resource = new Resource(this, endpoint);

        const response = await getJsonResponse<CloudDeviceApiSecuredRequest, string>(
            resource,
            securedRequest,
            { ...requestOptions, method: "POST" },
        );

        const result = new CloudDeviceApiAsyncResponse();

        if (typeof response === "string" && response.toLowerCase().trim() === "ok") {
            result.Result = response.trim();
            return result;
        }

        // Error response: an encrypted EventNotification wrapped in a SaleToPOIRequest envelope.
        const encryptedError = response as unknown as CloudDeviceApiSecuredRequest;
        const encryptedErrorRequest = encryptedError?.SaleToPOIRequest;
        if (!encryptedErrorRequest?.NexoBlob) {
            // Unencrypted error response (e.g. terminal unreachable)
            return response as unknown as CloudDeviceApiAsyncResponse;
        }

        const decryptedJson = this.nexoSecurityManager.decrypt(encryptedErrorRequest);
        const errorResponse = JSON.parse(decryptedJson) as CloudDeviceApiAsyncResponse;
        result.SaleToPOIRequest = errorResponse.SaleToPOIRequest;
        return result;
    }

    /**
     * Decrypt an event notification payload.
     *
     * @param payload JSON string containing either a SaleToPOIResponse or SaleToPOIRequest envelope.
     * @return the decrypted payload as a JSON string
     * @throws NexoSecurityException when decryption fails or the payload is invalid
     */
    public decryptNotification(payload: string): string {
        let parsed: Record<string, unknown>;
        try {
            parsed = JSON.parse(payload);
        } catch {
            throw new NexoSecurityException("Invalid payload");
        }

        if (!parsed || typeof parsed !== "object") {
            throw new NexoSecurityException("Unexpected payload: must be a JSON object");
        }

        if ("SaleToPOIResponse" in parsed) {
            const securedResponse = parsed as unknown as CloudDeviceApiSecuredResponse;
            if (!securedResponse.SaleToPOIResponse) {
                throw new NexoSecurityException("Unexpected payload without SaleToPOIResponse or SaleToPOIRequest");
            }
            return this.nexoSecurityManager.decrypt(securedResponse.SaleToPOIResponse);
        }

        if ("SaleToPOIRequest" in parsed) {
            const securedRequest = parsed as unknown as CloudDeviceApiSecuredRequest;
            return this.nexoSecurityManager.decrypt(securedRequest.SaleToPOIRequest);
        }

        throw new NexoSecurityException("Unexpected payload without SaleToPOIResponse or SaleToPOIRequest");
    }
}

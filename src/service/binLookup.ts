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
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import GetCostEstimate from "./resource/binLookup/getCostEstimate";
import Get3dsAvailability from "./resource/binLookup/get3dsAvailability";
import {
    CostEstimateRequest,
    CostEstimateResponse,
    ThreeDSAvailabilityRequest,
    ThreeDSAvailabilityResponse
} from "../typings/binLookup";
import getJsonResponse from "../helpers/getJsonResponse";

class BinLookup extends ApiKeyAuthenticatedService {
    private readonly _get3dsAvailability: Get3dsAvailability;
    private readonly _getCostEstimate: GetCostEstimate;

    public constructor(client: Client) {
        super(client);
        this._get3dsAvailability = new Get3dsAvailability(this);
        this._getCostEstimate = new GetCostEstimate(this);
    }

    public async get3dsAvailability(request: ThreeDSAvailabilityRequest): Promise<ThreeDSAvailabilityResponse> {
        return await getJsonResponse<ThreeDSAvailabilityRequest, ThreeDSAvailabilityResponse>(
            this._get3dsAvailability,
            request
        );
    }

    public async getCostEstimate(request: CostEstimateRequest): Promise<CostEstimateResponse> {
        return await getJsonResponse<CostEstimateRequest, CostEstimateResponse>(
            this._getCostEstimate,
            request
        );
    }
}

export default BinLookup;

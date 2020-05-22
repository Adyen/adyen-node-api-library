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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import GetCostEstimate from "./resource/binLookup/getCostEstimate";
import Get3dsAvailability from "./resource/binLookup/get3dsAvailability";
import getJsonResponse from "../helpers/getJsonResponse";

class BinLookup extends ApiKeyAuthenticatedService {
    private readonly _get3dsAvailability: Get3dsAvailability;
    private readonly _getCostEstimate: GetCostEstimate;

    public constructor(client: Client) {
        super(client);
        this._get3dsAvailability = new Get3dsAvailability(this);
        this._getCostEstimate = new GetCostEstimate(this);
    }

    public get3dsAvailability(request: IBinLookup.ThreeDSAvailabilityRequest): Promise<IBinLookup.ThreeDSAvailabilityResponse> {
        return getJsonResponse<IBinLookup.ThreeDSAvailabilityRequest, IBinLookup.ThreeDSAvailabilityResponse>(
            this._get3dsAvailability,
            request
        );
    }

    public getCostEstimate(request: IBinLookup.CostEstimateRequest): Promise<IBinLookup.CostEstimateResponse> {
        return getJsonResponse<IBinLookup.CostEstimateRequest, IBinLookup.CostEstimateResponse>(
            this._getCostEstimate,
            request
        );
    }
}

export default BinLookup;

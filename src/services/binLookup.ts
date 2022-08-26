import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import GetCostEstimate from "./resource/binLookup/getCostEstimate";
import Get3dsAvailability from "./resource/binLookup/get3dsAvailability";
import getJsonResponse from "../helpers/getJsonResponse";
import {
    ThreeDSAvailabilityRequest,
    ThreeDSAvailabilityResponse,
    CostEstimateRequest,
    CostEstimateResponse,
} from "../typings/binlookup/models";

class BinLookup extends ApiKeyAuthenticatedService {
    private readonly _get3dsAvailability: Get3dsAvailability;
    private readonly _getCostEstimate: GetCostEstimate;

    public constructor(client: Client) {
        super(client);
        this._get3dsAvailability = new Get3dsAvailability(this);
        this._getCostEstimate = new GetCostEstimate(this);
    }

    public get3dsAvailability(request: ThreeDSAvailabilityRequest): Promise<ThreeDSAvailabilityResponse> {
        return getJsonResponse<ThreeDSAvailabilityRequest, ThreeDSAvailabilityResponse>(
            this._get3dsAvailability,
            request
        );
    }

    public getCostEstimate(request: CostEstimateRequest): Promise<CostEstimateResponse> {
        return getJsonResponse<CostEstimateRequest, CostEstimateResponse>(
            this._getCostEstimate,
            request
        );
    }
}

export default BinLookup;

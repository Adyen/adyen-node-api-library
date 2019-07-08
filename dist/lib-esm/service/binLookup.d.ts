import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import { CostEstimateRequest, CostEstimateResponse, ThreeDSAvailabilityRequest, ThreeDSAvailabilityResponse } from "../typings/binLookup";
declare class BinLookup extends ApiKeyAuthenticatedService {
    private readonly _get3dsAvailability;
    private readonly _getCostEstimate;
    constructor(client: Client);
    get3dsAvailability(request: ThreeDSAvailabilityRequest): Promise<ThreeDSAvailabilityResponse>;
    getCostEstimate(request: CostEstimateRequest): Promise<CostEstimateResponse>;
}
export default BinLookup;

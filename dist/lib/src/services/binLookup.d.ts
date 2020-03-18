import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
declare class BinLookup extends ApiKeyAuthenticatedService {
    private readonly _get3dsAvailability;
    private readonly _getCostEstimate;
    constructor(client: Client);
    get3dsAvailability(request: IBinLookup.ThreeDSAvailabilityRequest): Promise<IBinLookup.ThreeDSAvailabilityResponse>;
    getCostEstimate(request: IBinLookup.CostEstimateRequest): Promise<IBinLookup.CostEstimateResponse>;
}
export default BinLookup;

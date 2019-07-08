import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import { CheckoutUtilityRequest, CheckoutUtilityResponse } from "../typings/checkoutUtility";
declare class CheckoutUtility extends ApiKeyAuthenticatedService {
    private readonly _originKeys;
    constructor(client: Client);
    originKeys(originKeysRequest: CheckoutUtilityRequest): Promise<CheckoutUtilityResponse>;
}
export default CheckoutUtility;

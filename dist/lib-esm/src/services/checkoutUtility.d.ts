import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
declare class CheckoutUtility extends ApiKeyAuthenticatedService {
    private readonly _originKeys;
    constructor(client: Client);
    originKeys(originKeysRequest: ICheckoutUtility.CheckoutUtilityRequest): Promise<ICheckoutUtility.CheckoutUtilityResponse>;
}
export default CheckoutUtility;

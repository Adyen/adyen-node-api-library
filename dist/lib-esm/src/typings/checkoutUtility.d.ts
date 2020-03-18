declare namespace ICheckoutUtility {
    interface CheckoutUtilityRequest {
        /**
         * The list of origin domains, for which origin keys are requested.
         */
        originDomains: string[];
    }
    interface CheckoutUtilityResponse {
        /**
         * The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key.
         */
        originKeys?: {};
    }
    namespace Post {
        type RequestBody = ICheckoutUtility.CheckoutUtilityRequest;
        namespace Responses {
            type $200 = ICheckoutUtility.CheckoutUtilityResponse;
        }
    }
}

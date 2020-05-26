declare namespace ICheckoutUtility {
    interface CheckoutUtilityRequest {
        originDomains: string[];
    }
    interface CheckoutUtilityResponse {
        originKeys?: {};
    }
    namespace Post {
        type RequestBody = ICheckoutUtility.CheckoutUtilityRequest;
        namespace Responses {
            type $200 = ICheckoutUtility.CheckoutUtilityResponse;
        }
    }
}

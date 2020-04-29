
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
 * Version of Checkout Utility: v1
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 

declare namespace ICheckoutUtility {
    export interface CheckoutUtilityRequest {
        /**
         * The list of origin domains, for which origin keys are requested.
         */
        originDomains: string[];
    }
    export interface CheckoutUtilityResponse {
        /**
         * The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key.
         */
        originKeys?: {
        };
    }
    namespace Post {
        export type RequestBody = ICheckoutUtility.CheckoutUtilityRequest;
        namespace Responses {
            export type $200 = ICheckoutUtility.CheckoutUtilityResponse;
        }
    }
}

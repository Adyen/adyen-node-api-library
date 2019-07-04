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
import getJsonResponse from "../helpers/getJsonResponse";
import { CheckoutUtilityRequest, CheckoutUtilityResponse } from "../typings/checkoutUtility";
import OriginKeys from "./resource/checkoutUtility/originKeys";

class CheckoutUtility extends ApiKeyAuthenticatedService {
    private readonly _originKeys: OriginKeys;

    public constructor(client: Client) {
        super(client);
        this._originKeys = new OriginKeys(this);
    }

    public async originKeys(originKeysRequest: CheckoutUtilityRequest): Promise<CheckoutUtilityResponse> {
        return getJsonResponse<CheckoutUtilityRequest, CheckoutUtilityResponse>(
            this._originKeys,
            originKeysRequest,
        );
    }
}

export default CheckoutUtility;

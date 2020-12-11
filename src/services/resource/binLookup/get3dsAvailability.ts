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

import Resource from "../../resource";
import Service from "../../../service";
import Client from "../../../client";
import getJsonResponse from "../../../helpers/getJsonResponse";

class Get3dsAvailability extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}${Client.BIN_LOOKUP_PAL_SUFFIX}${Client.BIN_LOOKUP_API_VERSION}/get3dsAvailability`
        );
    }

    public post(request: IBinLookup.ThreeDSAvailabilityRequest): Promise<IBinLookup.ThreeDSAvailabilityResponse> {
        return getJsonResponse.call<Get3dsAvailability,[IBinLookup.ThreeDSAvailabilityRequest], Promise<IBinLookup.ThreeDSAvailabilityResponse>>(
            this,
            request
        );
    }
}

export default Get3dsAvailability;

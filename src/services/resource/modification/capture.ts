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
import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";
import { GenericRequest } from "../../../typings/genericRequest";
import { IRequest } from "../../../typings/requestOptions";
import getJsonResponse from "../../../helpers/getJsonResponse";
import setApplicationInfo from "../../../helpers/setApplicationInfo";

class Capture extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Payment/${Client.API_VERSION}/capture`,
        );
    }

    public post(
        captureRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse.call<Capture, [IPayments.ModificationRequest, IRequest.Options | undefined], Promise<IPayments.ModificationResult>>(
            this,
            setApplicationInfo(captureRequest),
            requestOptions,
        );
    }
}

export default Capture;

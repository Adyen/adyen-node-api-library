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
import Client from "../../../client";
import Service from "../../../service";
import { GenericRequest } from "../../../typings/genericRequest";
import { IRequest } from "../../../typings/requestOptions";
import getJsonResponse from "../../../helpers/getJsonResponse";
import setApplicationInfo from "../../../helpers/setApplicationInfo";

class TechnicalCancel extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Payment/${Client.API_VERSION}/technicalCancel`,
        );
    }

    public post(
        technicalCancelRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse<IPayments.ModificationRequest, IPayments.ModificationResult>(
            this,
            setApplicationInfo(technicalCancelRequest),
            requestOptions,
        );
    }
}

export default TechnicalCancel;

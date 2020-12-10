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
import getJsonResponse from "../../../helpers/getJsonResponse";
import { IRequest } from "../../../typings/requestOptions";
import { GenericRequest } from "../../../typings/genericRequest";
import setApplicationInfo from "../../../helpers/setApplicationInfo";

class CancelOrRefund extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.endpoint}/pal/servlet/Payment/${Client.API_VERSION}/cancelOrRefund`,
        );
    }

    public post(
        cancelOrRefundRequest: GenericRequest<IPayments.ModificationRequest>,
        requestOptions?: IRequest.Options,
    ): Promise<IPayments.ModificationResult> {
        return getJsonResponse<IPayments.ModificationRequest, IPayments.ModificationResult>(
            this,
            setApplicationInfo(cancelOrRefundRequest),
            requestOptions,
        );
    }

}

export default CancelOrRefund;

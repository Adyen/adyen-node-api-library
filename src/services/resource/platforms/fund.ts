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

import Client from "../../../client";
import Service from "../../../service";
import Resource from "../../resource";

type Endpoints =
     "/accountHolderBalance" |
     "/accountHolderTransactionList" |
     "/payoutAccountHolder"|
     "/transferFunds"|
     "/refundFundsTransfer"|
     "/setupBeneficiary"|
     "/refundNotPaidOutTransfers"


class PlatformsFund extends Resource {
    public constructor(service: Service, endpoint: Endpoints) {
        super(
            service,
            `${service.client.config.marketPayEndpoint}/Fund/${Client.MARKETPAY_FUND_API_VERSION}/${endpoint}`,
        );
    }
}

export default PlatformsFund;

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
     "/createNotificationConfiguration"|
     "/getNotificationConfiguration"|
     "/getNotificationConfigurationList"|
     "/testNotificationConfiguration"|
     "/updateNotificationConfiguration"|
     "/deleteNotificationConfigurations"

class PlatformsNotificationConfiguration extends Resource {
    public constructor(service: Service, endpoint: Endpoints) {
        super(
            service,
            `${service.client.config.marketPayEndpoint}/Notification/${Client.MARKETPAY_NOTIFICATION_API_VERSION}/${endpoint}`,
        );
    }
}

export default PlatformsNotificationConfiguration;

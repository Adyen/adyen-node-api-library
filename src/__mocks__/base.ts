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
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import Client from "../client";
import Config, { EnvironmentEnum, TERMINAL_API_ENDPOINT_TEST, CLOUD_DEVICE_API_ENDPOINT_TEST } from "../config";

export const createClient = (apiKey = process.env.ADYEN_API_KEY): Client => {
    const config: Config = new Config();
    config.environment = EnvironmentEnum.TEST;
    config.terminalApiCloudEndpoint = TERMINAL_API_ENDPOINT_TEST;
    config.terminalApiLocalEndpoint = "https://mocked_local_endpoint.com";
    config.cloudDeviceApiEndpoint = CLOUD_DEVICE_API_ENDPOINT_TEST;
    config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
    config.apiKey = apiKey == null ? "apiKey" : apiKey;
    return new Client(config);
};

export const createBasicAuthClient = (): Client => {
    return new Client({
        username: process.env.ADYEN_USER!,
        password: process.env.ADYEN_PASSWORD!,
        environment: EnvironmentEnum.TEST,
        applicationName: "adyen-node-api-library"
    });
};

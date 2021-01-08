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
import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import BalancePlatforms from "./resource/issuing/balancePlatforms";

class Issuing extends ApiKeyAuthenticatedService {
    public readonly balancePlatforms: BalancePlatforms;

    public constructor(client: Client) {
        super(client);
        this.balancePlatforms = new BalancePlatforms(this);
    }
}

export default Issuing;

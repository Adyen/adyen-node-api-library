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
import GetCostEstimate from "./resource/binLookup/getCostEstimate";
import Get3dsAvailability from "./resource/binLookup/get3dsAvailability";

class BinLookup extends ApiKeyAuthenticatedService {
    public readonly get3dsAvailability: Get3dsAvailability;
    public readonly getCostEstimate: GetCostEstimate;

    public constructor(client: Client) {
        super(client);
        this.get3dsAvailability = new Get3dsAvailability(this);
        this.getCostEstimate = new GetCostEstimate(this);
    }
}

export default BinLookup;

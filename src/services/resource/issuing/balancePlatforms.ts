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
import { BalancePlatform } from "../../../typings/issuing/balancePlatform";
import { HTTPMethod } from "../../../typings/HTTPMethod";
import { IRequest } from "../../../typings/requestOptions";
import AccountHolders from "./accountHolders";

class BalancePlatforms extends Resource {
    public readonly accountHolders: AccountHolders;

    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.issuingApiEndpoint}/${Client.ISSUING_API_VERSION}/balancePlatforms/{id}`
        );
        this.accountHolders = new AccountHolders(service);
    }

    public get({ id }: { id: string }): Promise<BalancePlatform> {
        return getJsonResponse.call<BalancePlatforms, [{}, IRequest.Options], Promise<BalancePlatform>>(
            this,
            {},
            { params: { id }, method: HTTPMethod.GET }
        );
    }
}

export default BalancePlatforms;

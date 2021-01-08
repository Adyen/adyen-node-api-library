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
import { HTTPMethod } from "../../../typings/HTTPMethod";
import { IRequest } from "../../../typings/requestOptions";
import { PaginatedAccountHoldersResponse } from "../../../typings/issuing/paginatedAccountHoldersResponse";

class AccountHolders extends Resource {
    public constructor(service: Service) {
        super(
            service,
            `${service.client.config.issuingApiEndpoint}/${Client.ISSUING_API_VERSION}/balancePlatforms/{id}/accountHolders`
        );
    }

    public get({ id, offset, limit }: { id: string; offset?: string; limit?: string }): Promise<PaginatedAccountHoldersResponse> {
        const queries = {
            ...(offset && { offset }),
            ...(limit && { limit }),
        };
        return getJsonResponse.call<AccountHolders, [{}, IRequest.Options], Promise<PaginatedAccountHoldersResponse>>(
            this,
            {},
            { params: { id }, queries , method: HTTPMethod.GET }
        );
    }
}

export default AccountHolders;

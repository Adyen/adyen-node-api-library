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

import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import {Convert, TerminalApiRequest, TerminalApiResponse} from "../typings/terminal";
import Async from "./resource/terminal/cloud/async";
import Sync from "./resource/terminal/cloud/sync";

class TerminalCloudAPI extends ApiKeyAuthenticatedService {
    private readonly terminalApiAsync: Async;
    private readonly terminalApiSync: Sync;

    public constructor(client: Client) {
        super(client);
        this.terminalApiAsync = new Async(this);
        this.terminalApiSync = new Sync(this);
    }

    public async(terminalApiRequest: TerminalApiRequest): Promise<string> {
        return getJsonResponse<TerminalApiRequest>(
            this.terminalApiAsync,
            Convert.terminalApiRequestToJson(terminalApiRequest),
        );
    }

    public async sync(terminalApiRequest: TerminalApiRequest): Promise<TerminalApiResponse> {
        const response = await getJsonResponse<TerminalApiRequest, TerminalApiResponse>(
            this.terminalApiSync,
            Convert.terminalApiRequestToJson(terminalApiRequest),
        );

        return Convert.toTerminalApiResponse(JSON.stringify(response));
    }
}

export default TerminalCloudAPI;

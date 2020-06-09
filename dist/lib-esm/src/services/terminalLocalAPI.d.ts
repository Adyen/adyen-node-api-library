import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import { SecurityKey, TerminalApiRequest, TerminalApiResponse } from "../typings/terminal/models";
declare class TerminalLocalAPI extends ApiKeyAuthenticatedService {
    private readonly localRequest;
    private nexoCrypto;
    constructor(client: Client);
    request(terminalApiRequest: TerminalApiRequest, securityKey: SecurityKey): Promise<TerminalApiResponse>;
}
export default TerminalLocalAPI;

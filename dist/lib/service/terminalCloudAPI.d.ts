import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import { TerminalApiRequest, TerminalApiResponse } from "../typings/terminal";
declare class TerminalCloudAPI extends ApiKeyAuthenticatedService {
    private readonly terminalApiAsync;
    private readonly terminalApiSync;
    constructor(client: Client);
    async(terminalApiRequest: TerminalApiRequest): Promise<string>;
    sync(terminalApiRequest: TerminalApiRequest): Promise<TerminalApiResponse>;
}
export default TerminalCloudAPI;

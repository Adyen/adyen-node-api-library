import Service from "../service";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import LocalRequest from "./resource/terminal/local/localRequest";
import {
    ObjectSerializer,
    TerminalApiRequest,
    TerminalApiResponse,
} from "../typings/terminal/models";

class TerminalLocalAPIUnencrypted extends Service {
    private readonly localRequest: LocalRequest;

    /**
     * @summary This is the unencrypted local terminal API (only works in TEST).
     * Use this for testing your local integration parallel to the encryption setup.
     * Be sure to remove all encryption details in your CA terminal config page.
     * @param client {@link Client }
     */
    public constructor(client: Client) {
        super(client);
        this.apiKeyRequired = true;
        this.localRequest = new LocalRequest(this);
        client.config.certificatePath = "unencrypted";
    }

    public async request(
        terminalApiRequest: TerminalApiRequest
    ): Promise<TerminalApiResponse> {
        const request = ObjectSerializer.serialize(terminalApiRequest, "TerminalApiRequest");

        const jsonResponse = await getJsonResponse<TerminalApiRequest, TerminalApiResponse>(
            this.localRequest,
            request
        );

        // Catch an empty jsonResponse (i.e. Abort Request)
        if(!jsonResponse) {
            return new TerminalApiResponse();
        } else {
            return  ObjectSerializer.deserialize(jsonResponse, "TerminalApiResponse");
        }
    }
}

export default TerminalLocalAPIUnencrypted;
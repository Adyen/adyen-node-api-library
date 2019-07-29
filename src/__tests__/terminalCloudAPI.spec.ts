import nock from "nock";
import {createMockClientFromResponse, createTerminalAPIPaymentRequest} from "../__mocks__/base";
import {asyncRes} from "../__mocks__/terminalApi/async";
import {syncRes} from "../__mocks__/terminalApi/sync";
import Client from "../client";
import TerminalCloudAPI from "../service/terminalCloudAPI";
import {Convert, TerminalApiRequest, TerminalApiResponse} from "../typings/terminal";


let client: Client;
let terminalCloudAPI: TerminalCloudAPI;
let scope: any;

beforeEach(() => {
    client = createMockClientFromResponse();
    terminalCloudAPI = new TerminalCloudAPI(client);
    scope = nock(`${client.config.terminalApiCloudEndpoint}`);
});

describe("Terminal Cloud API", (): void => {
    it("should make an async payment request", async (): Promise<void> => {
        scope.post("/async").reply(200, asyncRes);

        const terminalAPIPaymentRequest: TerminalApiRequest = createTerminalAPIPaymentRequest() as TerminalApiRequest;

        const requestResponse: string = await terminalCloudAPI.async(terminalAPIPaymentRequest);

        expect(requestResponse).toEqual("ok");
    });

    it("should make a sync payment request", async (): Promise<void> => {
        const response = Convert.toTerminalApiResponse(syncRes);
        scope.post("/sync").reply(200, response);

        const terminalAPIPaymentRequest: TerminalApiRequest = createTerminalAPIPaymentRequest() as TerminalApiRequest;
        const terminalAPIResponse: TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        expect(terminalAPIResponse).toEqual(response);
    });
});

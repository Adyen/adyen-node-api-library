import Service from "../service";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Async from "./resource/terminal/cloud/async";
import Sync from "./resource/terminal/cloud/sync";
import mergeDeep from "../utils/mergeDeep";
import { ApplicationInfo } from "../typings/applicationInfo";
import { ObjectSerializer, TerminalApiRequest, TerminalApiResponse } from "../typings/terminal/models";

class TerminalCloudAPI extends Service {
    private readonly terminalApiAsync: Async;
    private readonly terminalApiSync: Sync;

    public constructor(client: Client) {
        super(client);
        this.apiKeyRequired = true;
        this.terminalApiAsync = new Async(this);
        this.terminalApiSync = new Sync(this);
    }

    private static setApplicationInfo(request: TerminalApiRequest): TerminalApiRequest {
        if (request.SaleToPOIRequest.PaymentRequest) {
            const applicationInfo = new ApplicationInfo();
            const saleToAcquirerData = {applicationInfo};
            const saleData = {saleToAcquirerData};
            const paymentRequest = {saleData};
            const saleToPOIRequest = {paymentRequest};
            const reqWithAppInfo = {saleToPOIRequest};

            mergeDeep(request, reqWithAppInfo);
        }

        return ObjectSerializer.serialize(request, "TerminalApiRequest");
    }

    public async(terminalApiRequest: TerminalApiRequest): Promise<string> {
        const request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        return getJsonResponse<TerminalApiRequest>(this.terminalApiAsync, request);
    }

    public async sync(terminalApiRequest: TerminalApiRequest): Promise<TerminalApiResponse> {
        const request = TerminalCloudAPI.setApplicationInfo(terminalApiRequest);
        const response = await getJsonResponse<TerminalApiRequest, TerminalApiResponse>(
            this.terminalApiSync,
            request,
        );

        return ObjectSerializer.deserialize(response, "TerminalApiResponse");
    }
}

export default TerminalCloudAPI;

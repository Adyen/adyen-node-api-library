import nock from "nock";
import { createClient, createTerminalAPIPaymentRequest, createTerminalAPIRefundRequest } from "../__mocks__/base";
import { asyncRes } from "../__mocks__/terminalApi/async";
import { syncRefund, syncRes, syncResEventNotification } from "../__mocks__/terminalApi/sync";
import Client from "../client";
import TerminalCloudAPI from "../services/terminalCloudAPI";
import { terminal} from "../typings";

let client: Client;
let terminalCloudAPI: TerminalCloudAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient(process.env.ADYEN_TERMINAL_APIKEY);

    terminalCloudAPI = new TerminalCloudAPI(client);
    scope = nock(`${client.config.terminalApiCloudEndpoint}`);
});

afterEach((): void => {
    nock.cleanAll();
});

describe("Terminal Cloud API", (): void => {
    test("should make an async payment request", async (): Promise<void> => {
        scope.post("/async").reply(200, asyncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const requestResponse: string = await terminalCloudAPI.async(terminalAPIPaymentRequest);

        expect(requestResponse).toEqual("ok");
    });

    test("should make a sync payment request", async (): Promise<void> => {
        scope.post("/sync").reply(200, syncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        const terminalAPIResponse: terminal.TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        expect(terminalAPIResponse.SaleToPOIResponse?.PaymentResponse).toBeDefined();
        expect(terminalAPIResponse.SaleToPOIResponse?.MessageHeader).toBeDefined();
    });

    test("should return event notification if response contains it", async (): Promise<void> => {

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        scope.post("/sync").reply(200, syncResEventNotification);

        const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        expect(terminalAPIResponse.SaleToPOIRequest?.EventNotification).toBeDefined();
    });

    test("should make an async refund request", async (): Promise<void> => {
        scope.post("/sync").reply(200, syncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        const terminalAPIResponse: terminal.TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        const pOITransactionId = terminalAPIResponse.SaleToPOIResponse!.PaymentResponse!.POIData!.POITransactionID;
        expect(pOITransactionId).toBeTruthy();

        scope.post("/sync").reply(200, syncRefund);

        const terminalAPIRefundRequest = createTerminalAPIRefundRequest(pOITransactionId);
        const id = Math.floor(Math.random() * Math.floor(10000000)).toString();
        terminalAPIRefundRequest.SaleToPOIRequest.MessageHeader.ServiceID = id;
        const saleToAcquirerData: terminal.SaleToAcquirerData = new terminal.SaleToAcquirerData();
        saleToAcquirerData.currency = "EUR";
        terminalAPIRefundRequest.SaleToPOIRequest.ReversalRequest!.SaleData!.SaleToAcquirerData = saleToAcquirerData;
        const terminalAPIRefundResponse = await terminalCloudAPI.sync(terminalAPIRefundRequest);

        expect(terminalAPIRefundResponse.SaleToPOIResponse?.ReversalResponse?.Response.Result).toBe("Success");
    }, 20000);
});
